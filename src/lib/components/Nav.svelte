<script lang="ts">
  import MenuClose from "$lib/icons/menuClose.svelte";
  import MenuOpen from "$lib/icons/menuOpen.svelte";
  import { cartStore } from "$lib/Stores/CartStore";
  let userMenuOpened = false;
  let mobileMenuOpened = false;
  $: cartLength = $cartStore.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  $: console.log(mobileMenuOpened);
</script>

<nav class="">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 btn btn-ghost"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => {
            mobileMenuOpened = !mobileMenuOpened;
            userMenuOpened = false;
          }}
        >
          <span class="absolute -inset-0.5" />
          <span class="sr-only">Otwórz menu</span>
          <MenuClose {mobileMenuOpened} />
          <MenuOpen {mobileMenuOpened} />
        </button>
      </div>
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex items-center">
          <a href="/" class="btn btn-ghost normal-case text-xl p-0 font-bold"
            >Siłkex</a
          >
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a
              class="btn btn-ghost normal-case text-lg p-0"
              href="/equipment/cardio">Sprzęt cardio</a
            >
            <a
              class="btn btn-ghost normal-case text-lg p-0"
              href="/equipment/strength">Sprzęt siłowy</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
          >
          <span class="badge badge-sm indicator-item">{cartLength}</span>
        </div>
        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button
              type="button"
              class="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              on:click={() => {
                mobileMenuOpened = false;
                userMenuOpened = !userMenuOpened;
              }}
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">Otwórz menu użytkownika</span>
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
          <div
            class="absolute {!userMenuOpened &&
              'hidden'} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabindex="-1"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0">Konto</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1">Ustawienia</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2">Wyloguj się</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="sm:hidden bg-base-100 border-b-2 border-accent z-10 w-full absolute {mobileMenuOpened
      ? 'block'
      : 'hidden'}"
    id="mobile-menu"
  >
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a
        href="/equipment/cardio"
        class="block btn text-start btn-ghost rounded-md px-3 py-2 text-base font-medium"
        aria-current="page">Sprzęt cardio</a
      >
      <a
        href="/equipment/strength"
        class="btn btn-ghost text-start block rounded-md px-3 py-2 text-base font-medium"
        >Sprzęt siłowy</a
      >
    </div>
  </div>
</nav>
