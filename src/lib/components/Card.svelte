<script lang="ts">
  import type { item } from "$lib/types";

  export let item: item;
</script>

<a
  href="/item/{item.id}"
  class="card card-compact w-64 h-96 bg-base-100 shadow-xl"
>
  <figure>
    <img class="h-64 w-64" src={item.images[0]} alt={item.name} />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-lg md:text-xl">{item.name}</h2>
    <div class="card-actions justify-end">
      <p class="my-auto text-lg md:text-xl text-warning">{item.price}zł</p>
    </div>
  </div>
</a>
