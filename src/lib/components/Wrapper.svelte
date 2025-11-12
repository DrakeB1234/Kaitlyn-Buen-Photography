<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    backgroundColor?: string;
    maxWidth?: number;
    children: Snippet;
  };

  let { backgroundColor = "red", maxWidth = 1000, children }: Props = $props();
</script>

<div style="background-color: {backgroundColor}">
  <div class="wrapper" style="max-width: {maxWidth}px;">
    {@render children()}
  </div>
</div>

<style>
  .wrapper {
    max-width: 1000px;
    margin-inline: auto;
  }
</style>
