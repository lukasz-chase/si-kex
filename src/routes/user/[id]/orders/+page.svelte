<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if !data.orders}
  <h1>Nie znaleziono żadnych zamówień</h1>
{:else}
  <h1>Twoje zamówienia</h1>
  {#each data.orders as order}
    <div>
      <h2>{order.status}</h2>
      <div>
        {#each JSON.parse(order.items) as item}
          <Card {item} />
        {/each}
      </div>
      <span>{order.price}</span>
    </div>
  {/each}
{/if}
