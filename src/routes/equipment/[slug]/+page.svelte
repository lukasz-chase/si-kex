<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex flex-col justify-center items-center w-full">
  <h1 class="text-2xl md:text-5xl font-bold text-primary uppercase">
    Sprzęt {data.title === "cardio" ? data.title : "siłowy"}
  </h1>
  <div
    class="w-full md:w-2/3 flex justify-center md:justify-start items-center flex-col md:flex-row gap-4 mt-10"
  >
    {#each data.equipmentData as item}
      <Card {item} />
    {/each}
  </div>
</div>
