import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><h1 class="text-center text-3xl text-warning">${escape($page?.error?.message)}</h1></div>`;
});
export {
  Error as default
};
