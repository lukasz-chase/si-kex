import { c as create_ssr_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
import { format } from "date-fns";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4 md:mt-10">${!data.orders ? `<h1 data-svelte-h="svelte-lyxaeo">Nie znaleziono żadnych zamówień</h1>` : `<h1 class="text-center text-3xl" data-svelte-h="svelte-gey93s">Twoje zamówienia</h1> <div class="grid md:grid-cols-2 gap-4 w-full mt-4 md:mt-10">${each(data.orders, (order) => {
    return `<div class="card bg-secondary p-2 shadow-md"><h2 class="card-title justify-between"><span>${escape(order.status)}</span> <span>${escape(format(new Date(order.created_at), "yyyy-MM-dd HH:mm:ss"))}</span></h2> <div class="card-body"><h3 data-svelte-h="svelte-7j3f7q">Zamówione przedmioty:</h3> ${each(JSON.parse(order.items), (item) => {
      return `<a href="${"/item/" + escape(item.id, true)}" class="text-primary-content">${escape(item.name)} <b class="text-black">x${escape(item.quantity)}</b> </a>`;
    })} <span>Koszt zamówienia: <b>${escape(order.price)}zł</b></span></div> </div>`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
