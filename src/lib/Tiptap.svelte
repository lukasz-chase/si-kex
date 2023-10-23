<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";

  let element: HTMLElement;
  let editor: any;
  export let description;
  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: "Description",
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },
      editorProps: {
        attributes: {
          class: "textarea textarea-bordered h-24",
        },
      },
      onUpdate: ({ editor }) => {
        description = JSON.stringify(editor.getJSON());
        // send the content to an API here
      },
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

{#if editor}
  <div class="flex gap-4">
    <button
      class="btn btn-ghost"
      type="button"
      on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      class:active={editor.isActive("heading", { level: 1 })}
    >
      H1
    </button>
    <button
      class="btn btn-ghost"
      type="button"
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class:active={editor.isActive("heading", { level: 2 })}
    >
      H2
    </button>
    <button
      class="btn btn-ghost"
      type="button"
      on:click={() => editor.chain().focus().setParagraph().run()}
      class:active={editor.isActive("paragraph")}
    >
      P
    </button>
    <button
      class="btn btn-ghost"
      type="button"
      on:click={() => editor.chain().focus().toggleBold().run()}
      class:active={editor.isActive("bold")}
    >
      Bold
    </button>
  </div>
{/if}

<div placeholder="Opis przedmiotu" bind:this={element} />

<style>
  button.active {
    background: black;
    color: white;
  }
</style>
