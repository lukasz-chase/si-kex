<script lang="ts">
  import { addItemToCart } from "$lib/Stores/CartStore";
  import Check from "$lib/icons/check.svelte";
  import type { item } from "$lib/types";

  export let item: item;
  let addedToCart = false;
  const addItemToCartHandler = (item: item) => {
    addItemToCart({ ...item, quantity: 1 });
    addedToCart = true;
    setTimeout(() => (addedToCart = false), 1000);
  };
</script>

<div class="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img class="w-64 h-64" src={item.img} alt={item.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{item.name}</h2>
    <div class="card-actions justify-end">
      <p class="my-auto text-xl text-warning">{item.price}zł</p>
      <button
        class="btn btn-secondary"
        on:click={() => addItemToCartHandler(item)}>Do koszyka</button
      >
    </div>
  </div>
</div>
{#if addedToCart}
  <div class="toast">
    <div class="alert alert-success">
      <span class="flex items-center gap-4"
        >Produkt dodany pomyślnie <Check w={4} h={4} /></span
      >
    </div>
  </div>
{/if}
