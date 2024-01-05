import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component, b as each, d as add_attribute } from "../../chunks/ssr.js";
import { c as cartStore } from "../../chunks/CartStore.js";
const app = "";
const MenuClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mobileMenuOpened } = $$props;
  if ($$props.mobileMenuOpened === void 0 && $$bindings.mobileMenuOpened && mobileMenuOpened !== void 0)
    $$bindings.mobileMenuOpened(mobileMenuOpened);
  return `<svg class="${escape(mobileMenuOpened ? "hidden" : "block", true) + " h-6 w-6"}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`;
});
const MenuOpen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mobileMenuOpened } = $$props;
  if ($$props.mobileMenuOpened === void 0 && $$bindings.mobileMenuOpened && mobileMenuOpened !== void 0)
    $$bindings.mobileMenuOpened(mobileMenuOpened);
  return `<svg class="${escape(mobileMenuOpened ? "block" : "hidden", true) + " h-6 w-6"}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;
});
const navEquipmentLinks = [
  {
    name: "Sprzęt Siłowy",
    href: "/equipment/strength"
  },
  {
    name: "Sprzęt Cardio",
    href: "/equipment/cardio"
  }
];
const navUserLinks = [
  {
    name: "Zamówienia",
    href: (id) => `/user/${id}/orders`
  },
  {
    name: "Ustawienia",
    href: (id) => `/user/${id}/settings`
  }
];
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartLength;
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  let { supabase } = $$props;
  let { session } = $$props;
  let { profile } = $$props;
  let mobileMenuOpened = false;
  if ($$props.supabase === void 0 && $$bindings.supabase && supabase !== void 0)
    $$bindings.supabase(supabase);
  if ($$props.session === void 0 && $$bindings.session && session !== void 0)
    $$bindings.session(session);
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  cartLength = $cartStore.cartItems.reduce((total, item) => total + item.quantity, 0);
  $$unsubscribe_cartStore();
  return `<nav class=""><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 btn btn-ghost" aria-controls="mobile-menu" aria-expanded="false"><span class="absolute -inset-0.5"></span> <span class="sr-only" data-svelte-h="svelte-1g18m0b">Otwórz menu</span> ${validate_component(MenuClose, "MenuClose").$$render($$result, { mobileMenuOpened }, {}, {})} ${validate_component(MenuOpen, "MenuOpen").$$render($$result, { mobileMenuOpened }, {}, {})}</button></div> <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex items-center"><a href="/" class="btn btn-ghost normal-case text-xl p-2 font-bold" data-svelte-h="svelte-1exyfsu">Siłkex</a></div> <div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4">${each(navEquipmentLinks, (equipmentLink) => {
    return `<a class="btn btn-ghost normal-case text-lg p-2"${add_attribute("href", equipmentLink.href, 0)}>${escape(equipmentLink.name)}</a>`;
  })}</div></div></div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"><a href="/finalization" class="btn btn-ghost normal-case text-lg p-0 md:p-2 md:mr-4" aria-current="page"><div class="indicator">${validate_component(Cart, "Cart").$$render($$result, {}, {}, {})} <span class="badge badge-sm indicator-item">${escape(cartLength)}</span></div></a>  ${session?.user ? `<div class="relative ml-3"><div><button type="button" class="btn btn-ghost normal-case text-lg p-2">${escape(profile.name ? profile.name : "Konto")}</button></div> <div class="${"absolute " + escape("hidden", true) + " bg-base-200 right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">${each(navUserLinks, (userLink) => {
    return `<a${add_attribute("href", userLink.href(session.user.id), 0)} class="btn btn-ghost w-full" role="menuitem" tabindex="-1" id="user-menu-item-0">${escape(userLink.name)}</a>`;
  })} <button class="btn btn-ghost w-full" role="menuitem" id="user-menu-item-0" data-svelte-h="svelte-vp18r">Wyloguj</button></div></div>` : `<a href="/auth/login" class="hidden sm:block btn btn-ghost normal-case text-lg p-2" data-svelte-h="svelte-1jbspok">Logowanie</a>`}</div></div></div> <div class="${"sm:hidden bg-base-100 border-b-2 border-accent z-10 w-full absolute " + escape("hidden", true)}" id="mobile-menu"><div class="space-y-1 px-2 pb-3 pt-2">${each(navEquipmentLinks, (equipmentLink) => {
    return `<a class="block btn text-start btn-ghost rounded-md px-3 py-2 text-base font-medium"${add_attribute("href", equipmentLink.href, 0)}>${escape(equipmentLink.name)}</a>`;
  })} ${!session?.user ? `<a href="/auth/login" class="btn btn-ghost text-start block rounded-md px-3 py-2 text-base font-medium" data-svelte-h="svelte-azr0rn">Logowanie</a>` : ``}</div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { supabase, session, profile } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ supabase, session, profile } = data);
  return `${validate_component(Nav, "Nav").$$render($$result, { supabase, session, profile }, {}, {})} <div class="h-[calc(100vh-6rem)] w-full">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
