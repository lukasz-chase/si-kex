<script lang="ts">
  import { Editor } from "@tiptap/core";
  import type { PageData } from "./$types";
  import { generateHTML } from "@tiptap/html";
  import StarterKit from "@tiptap/starter-kit";
  import { onDestroy, onMount } from "svelte";

  export let data: PageData;

  let element: HTMLElement;
  let editor: any;
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
</script>

<div>
  <h1>{data.itemData.name}</h1>

  <div bind:this={element} />
</div>
