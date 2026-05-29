<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
</script>

<svelte:head>
  <link rel="canonical" href="https://kaitlynbuenphotography.com/contact" />
  <title>Contact Me | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<main class="contact">
  <SocialLinks color="var(--color-primary-base)" />
  <ContactForm variant="white" />
</main>

<style>
  main {
    background-color: var(--color-bg-tan);
    padding: var(--space-52) var(--space-24);
  }
</style>
