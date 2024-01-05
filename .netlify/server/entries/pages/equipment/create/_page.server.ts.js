import { e as error, f as fail } from "../../../../chunks/index.js";
import { s as supabase } from "../../../../chunks/supabaseClient.js";
const PRIVATE_BUCKET_URL = "https://masgnaxzsduaxaalwgfm.supabase.co/storage/v1/object/public/equipment";
const load = async ({ locals: { getSession, supabase: supabase2 } }) => {
  const session = await getSession();
  if (!session || session.user.user_metadata.role === "user") {
    throw error(401, { message: "Brak dostępu" });
  }
  return {
    session
  };
};
const actions = {
  default: async ({ request, locals: { getSession } }) => {
    const session = await getSession();
    if (!session) {
      throw error(401, { message: "Brak dostępu" });
    }
    const formData = await request.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const files = formData.getAll("itemFiles");
    const price = formData.get("price");
    const category = formData.get("category");
    let fileNames = [];
    if (!files || !name || !description || !price || !category) {
      return fail(400, {
        name,
        description,
        price,
        category,
        formError: "Pola nie mogą być puste"
      });
    }
    const uploadPromises = files.map(async (file, i) => {
      const fileName = `${name}-${i}`;
      const { error: storageError, data } = await supabase.storage.from("equipment").upload(fileName, file, {
        cacheControl: "3600",
        upsert: false
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
      const { error: addEquipmentError } = await supabase.from("equipment").insert({
        name,
        description,
        price: Number(price),
        category,
        images: fileNames
      });
      if (addEquipmentError) {
        return fail(500, {
          name,
          description,
          price,
          category,
          formError: addEquipmentError.message
        });
      }
    } catch (error2) {
      return fail(500, {
        name,
        description,
        price,
        category,
        formError: error2.message
      });
    }
    return { success: true, name: "", description: "", price: 0 };
  }
};
export {
  actions,
  load
};
