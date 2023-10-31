import { stripe } from "../../lib/stripe";
import { error, type RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { cartItem } from "$lib/types";

const returnResponse = (url: string, status: number) => {
  return new Response(
    JSON.stringify({
      url,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const POST: RequestHandler = async ({
  request,
  locals: { supabase, getSession },
}) => {
  const session = await getSession();

  if (!session) {
    // the user is not signed in
    throw error(401, { message: "Unauthorized" });
  }

  const data = await request.json();
  const cartItems: cartItem[] = data.items;
  const cartPrice: number = data.price;

  // Create session for redirecting users
  const lineItems = cartItems.map((item) => {
    return {
      price_data: {
        currency: "PLN",
        product_data: {
          name: item.name,
          images: item.images.map((image) => encodeURIComponent(image)),
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  const { error: ordersError, data: ordersData } = await supabase
    .from("orders")
    .insert({
      items: JSON.stringify(cartItems),
      price: cartPrice,
      user_id: session.user.id,
      status: "Oczekiwanie na płatność",
    })
    .select();
  if (ordersError) {
    return returnResponse(`${env.BASE}/finalization/cancel/0`, 401);
  }
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["PL"],
      },
      mode: "payment",
      success_url: `${env.BASE}/finalization/success/${ordersData[0].id}`,
      cancel_url: `${env.BASE}/finalization/cancel/${ordersData[0].id}`,
      phone_number_collection: {
        enabled: true,
      },
      currency: "PLN",
      customer_email: session.user.email,
    });

    return returnResponse(stripeSession.url!, 200);
  } catch (error) {
    return returnResponse(`${env.BASE}/finalization/cancel/0`, 401);
  }
};
