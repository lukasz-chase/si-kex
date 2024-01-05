import Stripe from "stripe";
import { b as private_env } from "../../../chunks/shared-server.js";
import { e as error } from "../../../chunks/index.js";
const stripe = new Stripe(private_env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16"
});
const returnResponse = (url, status) => {
  return new Response(
    JSON.stringify({
      url
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const POST = async ({
  request,
  locals: { supabase, getSession }
}) => {
  const session = await getSession();
  if (!session) {
    throw error(401, { message: "Unauthorized" });
  }
  const data = await request.json();
  const cartItems = data.items;
  const cartPrice = data.price;
  const lineItems = cartItems.map((item) => {
    return {
      price_data: {
        currency: "PLN",
        product_data: {
          name: item.name,
          images: item.images.map((image) => encodeURIComponent(image))
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    };
  });
  const { error: ordersError, data: ordersData } = await supabase.from("orders").insert({
    items: JSON.stringify(cartItems),
    price: cartPrice,
    user_id: session.user.id,
    status: "Oczekiwanie na płatność"
  }).select();
  if (ordersError) {
    return returnResponse(`${private_env.BASE}/finalization/cancel/0`, 401);
  }
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["PL"]
      },
      mode: "payment",
      success_url: `${private_env.BASE}/finalization/success/${ordersData[0].id}`,
      cancel_url: `${private_env.BASE}/finalization/cancel/${ordersData[0].id}`,
      phone_number_collection: {
        enabled: true
      },
      currency: "PLN",
      customer_email: session.user.email
    });
    return returnResponse(stripeSession.url, 200);
  } catch (error2) {
    return returnResponse(`${private_env.BASE}/finalization/cancel/0`, 401);
  }
};
export {
  POST
};
