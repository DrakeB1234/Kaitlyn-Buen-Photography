<script lang="ts">
  import {
    emailLink,
    facebookLink,
    instagramLink,
    messengerLink,
  } from "$lib/helpers/helpers";
  import EmailIcon from "$lib/icons/EmailIcon.svelte";
  import FacebookIcon from "$lib/icons/FacebookIcon.svelte";
  import InstagramIcon from "$lib/icons/InstagramIcon.svelte";
  import MessengerIcon from "$lib/icons/MessengerIcon.svelte";

  const {
    color = "var(--color-white",
    size = 34,
    justifyContent = "center",
  }: { color?: string; size?: number; justifyContent?: string } = $props();
</script>

<div class="social-links">
  <ul role="list" style="justify-content: {justifyContent};">
    <li>
      <a target="_blank" href="mailto:{emailLink}"
        ><EmailIcon {size} color="var(--color-white)" /></a
      >
    </li>
    <li>
      <a target="_blank" href={facebookLink}><FacebookIcon {size} {color} /></a>
    </li>
    <li>
      <a target="_blank" href={messengerLink}
        ><MessengerIcon {size} {color} /></a
      >
    </li>
    <li>
      <a target="_blank" href={instagramLink}
        ><InstagramIcon {size} {color} /></a
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
