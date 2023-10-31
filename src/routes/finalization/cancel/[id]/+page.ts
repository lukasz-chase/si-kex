import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }: { params: { id: number } }) => {
  await supabase
    .from("orders")
    .update({ status: "Płatność anulowana" })
    .eq("id", params.id);
};
