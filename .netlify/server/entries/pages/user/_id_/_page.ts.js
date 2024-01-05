import { s as supabase } from "../../../../chunks/supabaseClient.js";
const load = async ({ data }) => {
  const { data: userProfile } = await supabase.from("profiles").select().eq("id", data.session.user.id);
  return {
    userProfile: userProfile ? userProfile[0] : {}
  };
};
export {
  load
};
