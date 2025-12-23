<script lang="ts">
  import {
    emailLink,
    facebookLink,
    instagramLink,
    messengerLink,
  } from "$lib/helpers/helpers";
  import Icon from "./Icon.svelte";

  const {
    size = 48,
    justifyContent = "center",
  }: { color?: string; size?: number; justifyContent?: string } = $props();
</script>

<div class="social-links">
  <ul role="list" style="justify-content: {justifyContent};">
    <li>
      <a target="_blank" href="mailto:{emailLink}"
        ><Icon name="email" {size} /></a
      >
    </li>
    <li>
      <a target="_blank" href={facebookLink}><Icon name="facebook" {size} /></a>
    </li>
    <li>
      <a target="_blank" href={messengerLink}
        ><Icon name="messenger" {size} /></a
      >
    </li>
    <li>
      <a target="_blank" href={instagramLink}
        ><Icon name="instagram" {size} /></a
      >
    </li>
  </ul>
</div>

<style>
  .social-links ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--spacing-large);
  }
</style>
