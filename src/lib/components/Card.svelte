<script lang="ts">
  import { addItemToCart } from "$lib/Stores/CartStore";
  import type { item } from "$lib/types";

  export let item: item;
</script>

<div class="card card-compact w-64 bg-base-100 shadow-xl">
  <figure><img src={item.img} alt={item.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{item.name}</h2>
    <div class="card-actions justify-end">
      <p class="my-auto text-xl text-warning">{item.price}zł</p>
      <button
        class="btn btn-secondary"
        on:click={() => addItemToCart({ ...item, quantity: 1 })}
        >Do koszyka</button
      >
    </div>
  </div>
</div>
