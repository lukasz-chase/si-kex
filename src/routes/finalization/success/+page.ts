// import { stripe } from "../../../stripe";

// export const load = async ({ params }) => {
//   console.log(params);
//   const session = await stripe.checkout.sessions.retrieve(params.id);
//   const lineItems = await stripe.checkout.sessions.listLineItems(params.id);
//   console.log(session);
//   console.log(lineItems);

//   return {
//     customerDetails: session.customer_details,
//   };
// };
