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
    <div class="grid md:grid-cols-2 gap-4 w-full mt-4 md:mt-10">
      {#each data.orders as order}
        <div class="card bg-secondary p-2 shadow-md">
          <h2 class="card-title justify-between">
            <span>{order.status}</span>
            <span
              >{format(new Date(order.created_at), "yyyy-MM-dd HH:mm:ss")}</span
            >
          </h2>
          <div class="card-body">
            <h3>Zamówione przedmioty:</h3>
            {#each JSON.parse(order.items) as item}
              <a href="/item/{item.id}" class="text-primary-content">
                {item.name} <b class="text-black">x{item.quantity}</b>
              </a>
            {/each}
            <span>Koszt zamówienia: <b>{order.price}zł</b></span>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
