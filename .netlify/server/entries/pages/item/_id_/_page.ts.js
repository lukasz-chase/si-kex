import { s as supabase } from "../../../../chunks/supabaseClient.js";
import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const { data: itemData } = await supabase.from("equipment").select().eq("id", params.id);
  if (itemData?.length === 0) {
    throw redirect(303, "/");
  }
  return {
    itemData: itemData ? itemData[0] : {}
  };
};
export {
  load
};
