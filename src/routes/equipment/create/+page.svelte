<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import Tiptap from "$lib/Tiptap.svelte";

  export let form;

  let loading: boolean = false;
  let description: string;
  let itemImages: FileList;

  const setImages = (
    e: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) => {
    if (e.currentTarget.files) {
      itemImages = e.currentTarget.files;
    }
  };
  const setPreview = (file: File) => {
    return URL.createObjectURL(file);
  };
  const addItem: SubmitFunction = () => {
    loading = true;
    return async ({ update }) => {
      loading = false;
      await update();
    };
  };
</script>

<div class="w-full flex flex-col items-center">
  <div class="md:max-w-7xl w-full px-2 sm:px-6 lg:px-8">
    <div class="font-bold text-4xl">
      <h1 class="text-center">Dodaj przedmiot</h1>
    </div>
    <form use:enhance={addItem} method="post" enctype="multipart/form-data">
      <div class="form-control flex flex-col">
        <label for="name" class="label">
          <span class="label-text">Nazwa przedmiotu</span>
        </label>
        <input
          name="name"
          class="input input-bordered h-12"
          placeholder="Nazwa przedmiotu"
        />
        <label for="category" class="label">
          <span class="label-text">Kategoria przedmiotu</span>
        </label>
        <select name="category" class="select select-bordered w-full max-w-xs">
          <option value="strength">Siłowy</option>
          <option value="cardio">Cardio</option>
        </select>
        <label for="price" class="label">
          <span class="label-text">Cena przedmiotu (w zł)</span>
        </label>
        <input
          name="price"
          type="number"
          class="input input-bordered h-12"
          placeholder="Cena przedmiotu"
        />
        <label for="description" class="label">
          <span class="label-text">Opis przedmiotu</span>
        </label>
        <Tiptap bind:description />

        <label for="file" class="label">
          <span class="label-text">Zdjęcia przedmiotu</span>
        </label>
        {#if itemImages}
          <div class="flex gap-4">
            {#each itemImages as itemImage}
              <img
                src={setPreview(itemImage)}
                class="w-20 h-20 self-center my-2"
                alt="przedmiot"
              />
            {/each}
          </div>
        {/if}
        <input
          on:change={setImages}
          type="file"
          name="itemFiles"
          multiple={true}
          class="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          accept="image/*"
        />
        <input
          type="text"
          bind:value={description}
          name="description"
          class="hidden"
        />
        {#if form?.formError}<p class="text-error text-xl">
            {form.formError}
          </p>
        {/if}
        {#if loading}
          <span class="loading loading-xl loading-spinner self-center" />
        {:else}
          <button
            type="submit"
            class="btn btn-primary w-full mt-10"
            disabled={loading}>Dodaj przedmiot</button
          >
        {/if}
      </div>
    </form>
  </div>
</div>
