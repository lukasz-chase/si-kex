import { s as supabase } from "../../../../../chunks/supabaseClient.js";
const load = async ({ params }) => {
  await supabase.from("orders").update({ status: "Płatność anulowana" }).eq("id", params.id);
};
export {
  load
};
