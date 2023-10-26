<script lang="ts">
  import MenuClose from "$lib/icons/menuClose.svelte";
  import MenuOpen from "$lib/icons/menuOpen.svelte";
  import { cartStore } from "$lib/stores/CartStore";
  import { goto } from "$app/navigation";
  import { navEquipmentLinks, navUserLinks } from "$lib/data/navLinks";
  import Cart from "$lib/icons/Cart.svelte";

  export let supabase: any;
  export let session: any;
  export let profile: any;
  let userMenuOpened = false;
  let mobileMenuOpened = false;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    goto("/auth/login");
  };
  $: cartLength = $cartStore.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
          <a href="/" class="btn btn-ghost normal-case text-xl p-2 font-bold"
            >Siłkex</a
          >
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {#each navEquipmentLinks as equipmentLink}
              <a
                class="btn btn-ghost normal-case text-lg p-2"
                href={equipmentLink.href}>{equipmentLink.name}</a
              >
            {/each}
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <a
          href="/finalization"
          class="btn btn-ghost normal-case text-lg p-0 md:p-2 md:mr-4"
          aria-current="page"
        >
          <div class="indicator">
            <Cart />
            <span class="badge badge-sm indicator-item">{cartLength}</span>
          </div>
        </a>
        <!-- Profile dropdown -->
        {#if session?.user}
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="btn btn-ghost normal-case text-lg p-2"
                on:click={() => {
                  mobileMenuOpened = false;
                  userMenuOpened = !userMenuOpened;
                }}
              >
                {profile.name ? profile.name : "Konto"}
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
              {#each navUserLinks as userLink}
                <a
                  href={userLink.href(session.user.id)}
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0">{userLink.name}</a
                >
              {/each}
              <button
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                on:click={handleSignOut}
                id="user-menu-item-0">Wyloguj</button
              >
            </div>
          </div>
        {:else}
          <a
            href="/auth/login"
            class="hidden sm:block btn btn-ghost normal-case text-lg p-2"
            >Logowanie</a
          >
        {/if}
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
      {#each navEquipmentLinks as equipmentLink}
        <a
          class="block btn text-start btn-ghost rounded-md px-3 py-2 text-base font-medium"
          href={equipmentLink.href}>{equipmentLink.name}</a
        >
      {/each}
      <a
        href="/auth/login"
        class="btn btn-ghost text-start block rounded-md px-3 py-2 text-base font-medium"
        >Logowanie</a
      >
    </div>
  </div>
</nav>
