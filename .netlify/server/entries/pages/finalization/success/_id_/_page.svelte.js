import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { h } = $$props;
  let { w } = $$props;
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.w === void 0 && $$bindings.w && w !== void 0)
    $$bindings.w(w);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${"w-" + escape(w, true) + " h-" + escape(h, true)}"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center flex-col justify-center gap-4 text-4xl mt-10 text-success"><h1 data-svelte-h="svelte-mf35ot">Sukces!</h1> ${validate_component(Check, "Check").$$render($$result, { h: 24, w: 24 }, {}, {})} <h2 data-svelte-h="svelte-oxjl83">Płatność powiodła się, zamówienie zostało złożone</h2></div>`;
});
export {
  Page as default
};
