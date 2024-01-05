import { c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { c as cartStore } from "../../../chunks/CartStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_cartStore();
  return `${$cartStore.cartItems.length > 0 ? `<div class="flex flex-col md:flex-row justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="flex flex-col gap-4 mt-10 w-full max-w-4xl">${each($cartStore.cartItems, (cartItem) => {
    return `<div class="flex flex-row h-32 w-full items-center justify-between border-primary border-2 p-2 md:p-4"><div class="h-full flex items-center gap-4"><img class="h-full"${add_attribute("src", cartItem.images[0], 0)}${add_attribute("alt", cartItem.name, 0)}> <span class="font-bold text-md md:text-2xl">${escape(cartItem.name)}</span></div> <div class="flex flex-col"><div class="flex items-center gap-2 text-md md:text-xl font-bold"><button class="btn btn-circle btn-sm" data-svelte-h="svelte-1lrcxma">-</button> <span>${escape(cartItem.quantity)}</span> <button class="btn btn-circle btn-sm" data-svelte-h="svelte-p4ba39">+</button></div> <span class="text-sm md:text-xl">Cena: <b>${escape(cartItem.price * cartItem.quantity)} zł</b></span></div> </div>`;
  })}</div> <div class="flex flex-col md:self-end"><span class="text-2xl">Suma: <b>${escape($cartStore.cartPrice)} zł</b></span> <button ${$cartStore.cartItems.length === 0 ? "disabled" : ""} class="btn btn-wide btn-primary">Zapłać</button></div></div>` : `<div class="flex flex-col items-center justify-center text-lg md:text-2xl xl:text-4xl text-warning uppercase mt-10" data-svelte-h="svelte-1goa0pl"><h1>Nie masz nic w koszyku</h1> <div class="mt-4 flex gap-4"><a href="/equipment/strength" class="btn">Sprzęt siłowy</a> <a href="/equipment/cardio" class="btn btn-secondary">Sprzęt cardio</a></div></div>`}`;
});
export {
  Page as default
};
