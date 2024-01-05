import { s as supabase } from "../../../../../chunks/supabaseClient.js";
const load = async ({
  data
}) => {
  const { data: orders } = await supabase.from("orders").select().eq("user_id", data.session.user.id);
  const ordersArray = orders || [];
  return {
    orders: ordersArray
  };
};
export {
  load
};
