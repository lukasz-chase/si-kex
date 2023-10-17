import { stripe } from "../stripe";
import type { RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { cartItem } from "$lib/types";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const cartItems: cartItem[] = data.items;

  // Create session for redirecting users
  const lineItems = cartItems.map((item) => {
    return {
      price_data: {
        currency: "PLN",
        product_data: {
          name: item.name,
          images: [item.img],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  // Create session
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ["PL"],
    },
    mode: "payment",
    success_url: `${env.BASE}/finalization/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.BASE}/cancel`,
    phone_number_collection: {
      enabled: true,
    },
  });

  return new Response(
    JSON.stringify({
      url: session.url,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
