<script lang="ts">
  import {
    addItemToCart,
    cartStore,
    removeItemFromCart,
  } from "$lib/stores/CartStore";
  async function checkout() {
    const data = await fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: $cartStore.cartItems,
      }),
    }).then((data) => data.json());
    window.location.replace(data.url);
  }
</script>

{#if $cartStore.cartItems.length > 0}
  <div
    class="flex flex-col md:flex-row gap-4 justify-center items-center w-full"
  >
    <div class="w-full md:w-2/3 flex flex-col gap-4 mt-10">
      {#each $cartStore.cartItems as cartItem}
        <div
          class="flex flex-row h-32 w-full items-center justify-between border-primary border-2 p-2 md:p-4"
        >
          <div class="h-full flex items-center gap-4">
            <img class="h-full" src={cartItem.images[0]} alt={cartItem.name} />
            <span class="font-bold text-md md:text-2xl">{cartItem.name}</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2 text-md md:text-xl font-bold">
              <button
                class="btn btn-circle btn-sm"
                on:click={() => removeItemFromCart(cartItem.id)}>-</button
              >
              <span>{cartItem.quantity}</span>
              <button
                class="btn btn-circle btn-sm"
                on:click={() => addItemToCart(cartItem)}>+</button
              >
            </div>
            <span class="text-sm md:text-xl"
              >Cena: <b>{cartItem.price * cartItem.quantity} zł</b></span
            >
          </div>
        </div>
      {/each}
    </div>
    <div class="flex flex-col md:self-end">
      <span class="text-2xl">Suma: <b>{$cartStore.cartPrice} zł</b></span>
      <button
        disabled={$cartStore.cartItems.length === 0}
        on:click={checkout}
        class="btn btn-wide btn-primary">Zapłać</button
      >
    </div>
  </div>
{:else}
  <div
    class="flex flex-col items-center justify-center text-lg md:text-2xl xl:text-4xl text-warning uppercase mt-10"
  >
    <h1>Nie masz nic w koszyku</h1>
    <div class="mt-4 flex gap-4">
      <a href="/equipment/strength" class="btn">Sprzęt siłowy</a>
      <a href="/equipment/cardio" class="btn btn-secondary">Sprzęt cardio</a>
    </div>
  </div>
{/if}
