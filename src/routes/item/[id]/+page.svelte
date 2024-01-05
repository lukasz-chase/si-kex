<script lang="ts">
  import { Editor } from "@tiptap/core";
  import type { PageData } from "./$types";
  import StarterKit from "@tiptap/starter-kit";
  import { onDestroy, onMount } from "svelte";
  import { addItemToCart } from "$lib/asd/CartStore
  import Check from "$lib/icons/check.svelte";
  import type { Item } from "$lib/types";

  export let data: PageData;
  let imageIndex: number = 0;
  let element: HTMLElement;
  let editor: any;
  let addedToCart = false;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: data.itemData.description,
      editable: false,
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  const decreaseImageIndex = () => {
    imageIndex =
      (imageIndex - 1 + data.itemData.images.length) %
      data.itemData.images.length;
  };

  const increaseImageIndex = () => {
    imageIndex = (imageIndex + 1) % data.itemData.images.length;
  };
  const addItemToCartHandler = (item: Item) => {
    addItemToCart({ ...item, quantity: 1 });
    addedToCart = true;
    setTimeout(() => (addedToCart = false), 1000);
  };
</script>

<div class="p-4 md:p-8 mx-auto max-w-screen-xl">
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex justify-center">
      <div class="relative w-full md:w-1/2 md:mr-4 h-96">
        <button
          class="btn btn-circle btn-sm absolute top-1/2 left-2 -translate-y-1/2 z-10"
          on:click={decreaseImageIndex}>{"<"}</button
        >

        <img
          src={data.itemData.images[imageIndex]}
          alt={`${data.itemData.name} image ${imageIndex + 1}`}
          class="w-full h-full absolute"
        />
        <button
          class="btn btn-circle btn-sm absolute top-1/2 right-2 -translate-y-1/2 z-10"
          on:click={increaseImageIndex}>{">"}</button
        >
      </div>
    </div>

    <div class="w-full md:w-1/2">
      <h1 class="text-3xl font-bold mb-4">{data.itemData.name}</h1>
      <p class="text-xl font-semibold mb-4 tabular-nums">
        {data.itemData.price} ZŁ
      </p>
      <button
        class="btn btn-secondary"
        on:click={() => addItemToCartHandler(data.itemData)}>Do koszyka</button
      >
    </div>
  </div>

  <div class="bg-base-200 p-4 rounded mt-10" bind:this={element} />
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
