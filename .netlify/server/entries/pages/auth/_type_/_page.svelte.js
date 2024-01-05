import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import "devalue";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  let currentPageType;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    {
      currentPageType = $page.params.type;
    }
  }
  $$unsubscribe_page();
  return `<div class="flex gap-4 flex-col justify-center items-center w-full h-full"><h1 class="text-3xl">${currentPageType === "login" ? `Logowanie` : `Rejestracja`}</h1> <form method="post" class="flex flex-col gap-4 items-center justify-center w-80"><input name="email"${add_attribute("value", form?.email ?? "", 0)} placeholder="Email" class="input input-bordered w-full max-w-xs"> <input type="password" name="password" placeholder="Password" class="input input-bordered w-full max-w-xs"> ${form?.message ? `<p class="text-error text-xl uppercase">${escape(form?.message)}</p>` : ``} ${currentPageType === "login" ? `<button class="btn w-full btn-primary text-center" formaction="?/login" data-svelte-h="svelte-1c7zm4z">Zaloguj się</button> <p data-svelte-h="svelte-1rsbfxm">Nie masz jeszcze konta? <a href="/auth/register" class="text-secondary">Zarejestruj się</a></p>` : `<button class="btn w-full btn-primary text-center" formaction="?/register" data-svelte-h="svelte-tvbm8a">Zarejestruj się</button> <p data-svelte-h="svelte-1c629d0">Masz już konto? <a href="/auth/login" class="text-secondary">Zaloguj się</a></p>`}</form></div>`;
});
export {
  Page as default
};
