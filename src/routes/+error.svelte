<script>
  import { page } from "$app/stores";
</script>

<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <h1 class="text-center text-3xl text-warning">{$page?.error?.message}</h1>
</div>
