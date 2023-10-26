<script lang="ts">
  import "../app.css";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import Nav from "$lib/components/Nav.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { supabase, session, profile } = data;
  $: ({ supabase, session, profile } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<Nav {supabase} {session} {profile} />
<div class="h-[calc(100vh-6rem)] w-full">
  <slot />
</div>
