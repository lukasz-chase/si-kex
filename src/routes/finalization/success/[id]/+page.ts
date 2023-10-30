import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }: { params: { id: number } }) => {
  await supabase
    .from("orders")
    .update({ status: "Payment successful" })
    .eq("id", params.id);
};
