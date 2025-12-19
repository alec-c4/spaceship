<script lang="ts">
  let name = $state('');
</script>

<div class="my-6 p-6 border border-border rounded-lg bg-card">
  <input
    type="text"
    bind:value={name}
    placeholder="Enter your name"
    class="px-3 py-2 border border-input rounded-md mb-4 w-full"
  />
  {#if name}
    <p class="text-lg">Hello, <strong class="text-primary">{name}</strong>! 👋</p>
  {/if}
</div>
