<script>
  import EmailIcon from "$lib/icons/EmailIcon.svelte";
  import FacebookIcon from "$lib/icons/FacebookIcon.svelte";
  import MessengerIcon from "$lib/icons/MessengerIcon.svelte";
</script>

<div class="social-links">
  <ul role="list">
    <li>
      <a target="_blank" href="/"
        ><EmailIcon size={34} color="var(--color-white)" /></a
      >
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=61582624177580"
        ><FacebookIcon size={34} color="var(--color-white)" /></a
      >
    </li>
    <li>
      <a target="_blank" href="https://www.messenger.com/t/61582624177580"
        ><MessengerIcon size={34} color="var(--color-white)" /></a
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
    padding: var(--spacing-base);
    padding-top: var(--spacing-xlarge);
  }
</style>
