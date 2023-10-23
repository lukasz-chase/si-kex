import { error, fail, redirect } from "@sveltejs/kit";
import { PRIVATE_BUCKET_URL } from "$env/static/private";
import { supabase } from "$lib/supabaseClient";

// export const load = async ({ locals: { getSession }, params }) => {
//   const session = await getSession();
//   const { id } = params;
//   if (!session || id !== session.user.id) {
//     throw error(401, { message: "Unauthorized" });
//   }
//   return {
//     session,
//   };
// };
export const actions = {
  default: async ({ request }) => {
    // const session = await getSession();

    // if (!session) {
    //   // the user is not signed in
    //   throw error(401, { message: "Unauthorized" });
    // }
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const files = formData.getAll("itemFiles") as File[];
    const price = formData.get("price") as number;
    const category = formData.get("category") as string;
    let fileNames: string[] = [];

    if (!files || !name || !description || !price) {
      return fail(400, {
        name,
        description,
        price,
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
          price,
          category,
          images: fileNames,
        });

      if (addEquipmentError) {
        return fail(500, {
          name,
          description,
          price,
          formError: addEquipmentError.message,
        });
      }
    } catch (error: any) {
      return fail(500, {
        name,
        description,
        price,
        files,
        formError: error.message,
      });
    }

    return { success: true };
  },
};
