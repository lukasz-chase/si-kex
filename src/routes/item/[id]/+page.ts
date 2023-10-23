import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }) => {
  const { data: itemData } = await supabase
    .from("equipment")
    .select()
    .eq("id", params.id);

  return {
    itemData: itemData ? itemData[0] : {},
  };
};
