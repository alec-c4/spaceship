<script lang="ts">
  let count = $state(0);
</script>

<div class="my-6 p-6 border border-border rounded-lg bg-card">
  <p class="mb-4 text-lg">Current count: <strong>{count}</strong></p>
  <button
    onclick={() => count++}
    class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
  >
    Increment Counter
  </button>
  <button
    onclick={() => (count = 0)}
    class="ml-2 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    Reset
  </button>
</div>
