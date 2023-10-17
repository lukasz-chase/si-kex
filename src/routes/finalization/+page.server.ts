import { stripe } from "../stripe";
import { env } from "$env/dynamic/private";
import { fail, type RequestHandler } from "@sveltejs/kit";
import type { cartItem } from "$lib/types";
import { goto } from "$app/navigation";

export const actions = {
  default: async ({ request }: RequestHandler) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const lastName = formData.get("lastName") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    console.log(name);
    if (!name || !lastName || !address || !city) {
      return fail(400, {
        name,
        lastName,
        city,
        address,
        fieldMissing: "wszystkie pola są obowiązkowe",
      });
    }
    // const lineItems = cartItems.map((item) => {
    //   return {
    //     price_data: {
    //       currency: "PLN",
    //       product_data: {
    //         name: item.name,
    //         images: [item.img],
    //       },
    //       unit_amount: item.price * 100,
    //     },
    //     quantity: item.quantity,
    //   };
    // });
    // const session = await stripe.checkout.sessions.create({
    //   // line_items: lineItems,
    //   shipping_address_collection: {
    //     allowed_countries: ["PL"],
    //   },
    //   mode: "payment",
    //   success_url: `${env.BASE}/success`,
    //   cancel_url: `${env.BASE}/error`,
    //   phone_number_collection: {
    //     enabled: true,
    //   },
    // });
    // const { error: createAppointmentError } = await supabase
    //   .from("appointments")
    //   .insert({ date, hour, info: additionalInfo, user_id });

    // if (createAppointmentError) {
    //   return fail(500, {
    //     info: additionalInfo,
    //     supabaseErrorMessage: createAppointmentError.message,
    //   });
    // }
    // goto(session.url!);
    // return { success: true };
  },
};
