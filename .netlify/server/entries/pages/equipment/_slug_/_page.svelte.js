import { c as create_ssr_component, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../../chunks/ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<a href="${"/item/" + escape(item.id, true)}" class="card card-compact w-64 h-96 bg-base-100 shadow-xl"><figure><img class="h-64 w-64 flex-1"${add_attribute("src", item.images[0], 0)}${add_attribute("alt", item.name, 0)}></figure> <div class="flex flex-col h-28 justify-between flex-auto p-2"><h2 class="card-title text-lg md:text-xl">${escape(item.name)}</h2> <div class="card-actions justify-end"><p class="my-auto text-lg md:text-xl text-warning">${escape(item.price)}zł</p></div></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex flex-col justify-center items-center w-full"><h1 class="text-2xl md:text-5xl font-bold text-primary uppercase">Sprzęt ${escape(data.title === "cardio" ? data.title : "siłowy")}</h1> <div class="md:max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex justify-center md:justify-start items-center flex-col md:flex-row gap-4 mt-10">${each(data.equipmentData, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, { item }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
