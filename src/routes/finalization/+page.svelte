<script lang="ts">
  import {
    addItemToCart,
    cartStore,
    removeItemFromCart,
  } from "$lib/Stores/CartStore";
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
    <div class="w-full md:w-2/3 flex gap-4 mt-10">
      {#each $cartStore.cartItems as cartItem}
        <div
          class="flex flex-row h-32 w-full items-center justify-between border-primary border-2 p-4"
        >
          <div class="h-full flex items-center gap-4">
            <img class="h-full" src={cartItem.img} alt={cartItem.name} />
            <span class="font-bold text-2xl">{cartItem.name}</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-2 text-xl font-bold">
              <button
                class="btn btn-circle"
                on:click={() => removeItemFromCart(cartItem.id)}>-</button
              >
              <span>{cartItem.quantity}</span>
              <button
                class="btn btn-circle"
                on:click={() => addItemToCart(cartItem)}>+</button
              >
            </div>
            <span>Cena: <b>{cartItem.price * cartItem.quantity} zł</b></span>
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
  <div class="text-center">
    <span>Nie masz nic w koszyku</span>
  </div>
{/if}
