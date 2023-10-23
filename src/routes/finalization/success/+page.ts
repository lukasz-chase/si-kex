// import { stripe } from "../../../stripe";

// export const load = async ({ params }) => {
//   const session = await stripe.checkout.sessions.retrieve(params.id);
//   const lineItems = await stripe.checkout.sessions.listLineItems(params.id);

//   return {
//     customerDetails: session.customer_details,
//   };
// };
