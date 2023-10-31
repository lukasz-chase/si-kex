import { error } from "@sveltejs/kit";

export const load = async ({ locals: { getSession }, params }) => {
  const session = await getSession();
  const { id } = params;
  if (!session || id !== session.user.id) {
    throw error(401, { message: "Unauthorized" });
  }

  return {
    session,
  };
};
