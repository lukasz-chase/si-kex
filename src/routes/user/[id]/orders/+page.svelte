<script lang="ts">
  import type { PageData } from "./$types";
  import { format } from "date-fns";

  export let data: PageData;
</script>

<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4 md:mt-10">
  {#if !data.orders}
    <h1>Nie znaleziono żadnych zamówień</h1>
  {:else}
    <h1 class="text-center text-3xl">Twoje zamówienia</h1>
    <div class="grid md:grid-cols-2 gap-4 mt-4 md:mt-10">
      {#each data.orders as order}
        <div class="card bg-base-200 w-fit p-2">
          <h2 class="card-title">
            {format(new Date(order.created_at), "yyyy-MM-dd HH:mm:ss")} - {order.status}
          </h2>
          <div class="card-body">
            <h3>Zamówione przedmioty:</h3>
            {#each JSON.parse(order.items) as item}
              <a href="/item/{item.id}" class="text-accent">
                {item.name} <b class="text-black">x{item.quantity}</b>
              </a>
            {/each}
            <span>Koszt zamówienia: {order.price}zł</span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
