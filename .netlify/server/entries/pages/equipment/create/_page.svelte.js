import { c as create_ssr_component, o as onDestroy, d as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import "devalue";
import "@tiptap/starter-kit";
const Tiptap_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.active.svelte-153cjhs{background:black;color:white}",
  map: null
};
const Tiptap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  let { description } = $$props;
  onDestroy(() => {
  });
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `${``} <div placeholder="Opis przedmiotu"${add_attribute("this", element, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let description;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-full flex flex-col items-center"><div class="md:max-w-7xl w-full px-2 sm:px-6 lg:px-8"><div class="font-bold text-4xl" data-svelte-h="svelte-5ul3gh"><h1 class="text-center">Dodaj przedmiot</h1></div> <form method="post" enctype="multipart/form-data"><div class="form-control flex flex-col"><label for="name" class="label" data-svelte-h="svelte-18ajpwq"><span class="label-text">Nazwa przedmiotu</span></label> <input name="name" class="input input-bordered h-12" placeholder="Nazwa przedmiotu"> <label for="category" class="label" data-svelte-h="svelte-54dg97"><span class="label-text">Kategoria przedmiotu</span></label> <select name="category" class="select select-bordered w-full max-w-xs"><option value="strength" data-svelte-h="svelte-1o7nd5w">Siłowy</option><option value="cardio" data-svelte-h="svelte-1yn9m5q">Cardio</option></select> <label for="price" class="label" data-svelte-h="svelte-xclvfe"><span class="label-text">Cena przedmiotu (w zł)</span></label> <input name="price" type="number" class="input input-bordered h-12" placeholder="Cena przedmiotu"> <label for="description" class="label" data-svelte-h="svelte-1k5876l"><span class="label-text">Opis przedmiotu</span></label> ${validate_component(Tiptap, "Tiptap").$$render(
      $$result,
      { description },
      {
        description: ($$value) => {
          description = $$value;
          $$settled = false;
        }
      },
      {}
    )} <label for="file" class="label" data-svelte-h="svelte-1ujdgte"><span class="label-text">Zdjęcia przedmiotu</span></label> ${``} <input type="file" name="itemFiles" ${"multiple"} class="file-input file-input-bordered file-input-secondary w-full max-w-xs" accept="image/*"> <input type="text" name="description" class="hidden"${add_attribute("value", description, 0)}> ${form?.formError ? `<p class="text-error text-xl">${escape(form.formError)}</p>` : ``} ${`<button type="submit" class="btn btn-primary w-full mt-10" ${""}>Dodaj przedmiot</button>`}</div></form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
