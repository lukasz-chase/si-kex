import { supabase } from "$lib/supabaseClient";
import type { item } from "$lib/types.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }): Promise<{ itemData: item }> => {
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
