import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const { data: itemData } = await supabase
    .from("equipment")
    .select()
    .eq("id", params.id);

  if (itemData?.length === 0) {
    throw redirect(303, "/");
  }
  return {
    itemData: itemData ? itemData[0] : {},
  };
};
