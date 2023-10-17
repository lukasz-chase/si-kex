import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }) => {
  const { data: equipmentData } = await supabase
    .from("equipment")
    .select()
    .eq("category", params.slug);

  return {
    equipmentData: equipmentData ? equipmentData : [],
    title: params.slug,
  };
};
