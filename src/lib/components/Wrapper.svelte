<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    backgroundColor?: string;
    children: Snippet;
  };

  let { backgroundColor = "red", children }: Props = $props();
</script>

<div style="background-color: {backgroundColor}">
  <div class="wrapper">{@render children()}</div>
</div>

<style>
  .wrapper {
    max-width: 1000px;
    margin-inline: auto;
  }
</style>
