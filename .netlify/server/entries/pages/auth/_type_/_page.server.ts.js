import { f as fail, r as redirect } from "../../../../chunks/index.js";
const actions = {
  register: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      return fail(500, {
        message: "Pola nie mogą być puste",
        success: false,
        email
      });
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "user"
        }
      }
    });
    if (error) {
      return fail(500, {
        message: "Błąd, Spróbuj ponownie później",
        success: false,
        email
      });
    }
    const { error: signInError, data } = await supabase.auth.signInWithPassword(
      {
        email,
        password
      }
    );
    await supabase.from("profiles").upsert({ id: data?.user.id });
    if (signInError) {
      return fail(500, {
        message: "Błąd, Spróbuj ponownie później",
        success: false,
        email
      });
    }
    if (data) {
      throw redirect(303, "/");
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      return fail(500, {
        message: "Pola nie mogą być puste",
        success: false,
        email
      });
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      return fail(500, {
        message: "Błąd, Spróbuj ponownie później",
        success: false,
        email
      });
    }
    if (data) {
      throw redirect(303, "/");
    }
  }
};
export {
  actions
};
