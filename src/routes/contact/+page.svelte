<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL + "contact"} />
  <title>Contact | {BASE_APP_TITLE}</title>
</svelte:head>

<main class="contact">
  <SocialLinks />
  <ContactForm variant="white" />
</main>

<style>
  main {
    background-color: var(--color-bg-white);
    padding: var(--space-52) var(--space-24);
  }
</style>
