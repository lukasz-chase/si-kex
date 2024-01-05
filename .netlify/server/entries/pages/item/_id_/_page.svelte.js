import { c as create_ssr_component, o as onDestroy, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "@tiptap/starter-kit";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let imageIndex = 0;
  let element;
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4 md:p-8 mx-auto max-w-screen-xl"><div class="flex flex-col md:flex-row"><div class="w-full md:w-1/2 flex justify-center"><div class="relative w-full md:w-1/2 md:mr-4 h-96"><button class="btn btn-circle btn-sm absolute top-1/2 left-2 -translate-y-1/2 z-10">${escape("<")}</button> <img${add_attribute("src", data.itemData.images[imageIndex], 0)}${add_attribute("alt", `${data.itemData.name} image ${imageIndex + 1}`, 0)} class="w-full h-full absolute"> <button class="btn btn-circle btn-sm absolute top-1/2 right-2 -translate-y-1/2 z-10">${escape(">")}</button></div></div> <div class="w-full md:w-1/2"><h1 class="text-3xl font-bold mb-4">${escape(data.itemData.name)}</h1> <p class="text-xl font-semibold mb-4 tabular-nums">${escape(data.itemData.price)} ZŁ</p> <button class="btn btn-secondary" data-svelte-h="svelte-1q2bfpo">Do koszyka</button></div></div> <div class="bg-base-200 p-4 rounded mt-10"${add_attribute("this", element, 0)}></div></div> ${``}`;
});
export {
  Page as default
};
