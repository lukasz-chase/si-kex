import { supabase } from "$lib/supabaseClient";
import type { Order } from "$lib/types";

export const load = async ({
  data,
}: {
  data: { session: { user: { id: string } } };
}): Promise<{ orders: Order[] }> => {
  const { data: orders } = await supabase
    .from("orders")
    .select()
    .eq("user_id", data.session!.user.id);

  const ordersArray: Order[] = orders || [];

  return {
    orders: ordersArray,
  };
};
