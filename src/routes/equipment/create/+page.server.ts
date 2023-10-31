import { error, fail } from "@sveltejs/kit";
import { PRIVATE_BUCKET_URL } from "$env/static/private";
import { supabase } from "$lib/supabaseClient";

export const load = async ({ locals: { getSession, supabase } }) => {
  const session = await getSession();
  if (!session || session.user.user_metadata.role === "user") {
    throw error(401, { message: "Brak dostępu" });
  }
  return {
    session,
  };
};

export const actions = {
  default: async ({ request, locals: { getSession } }) => {
    const session = await getSession();

    if (!session) {
      // the user is not signed in
      throw error(401, { message: "Brak dostępu" });
    }
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const files = formData.getAll("itemFiles") as File[];
    const price = formData.get("price") as string;
    const category = formData.get("category") as string;
    let fileNames: string[] = [];

    if (!files || !name || !description || !price || !category) {
      return fail(400, {
        name,
        description,
        price,
        category,
        formError: "Pola nie mogą być puste",
      });
    }
    const uploadPromises = files.map(async (file, i) => {
      const fileName = `${name}-${i}`;
      const { error: storageError, data } = await supabase.storage
        .from("equipment")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (storageError) {
        throw new Error(storageError.message);
      } else {
        const filePath = `${PRIVATE_BUCKET_URL}/${fileName}`;
        fileNames.push(filePath);
      }
    });
    try {
      await Promise.all(uploadPromises);

      const { error: addEquipmentError } = await supabase
        .from("equipment")
        .insert({
          name,
          description,
          price: Number(price),
          category,
          images: fileNames,
        });

      if (addEquipmentError) {
        return fail(500, {
          name,
          description,
          price,
          category,
          formError: addEquipmentError.message,
        });
      }
    } catch (error: any) {
      return fail(500, {
        name,
        description,
        price,
        category,
        formError: error.message,
      });
    }

    return { success: true };
  },
};
