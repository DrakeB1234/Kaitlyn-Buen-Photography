<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<svelte:head>
  <title>Contact Me | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<Navbar />

<Wrapper maxWidth={600} backgroundColor="var(--color-white)">
  <main class="contact">
    <div class="item">
      <SocialLinks color="var(--color-primary-base)" />
    </div>
    <div class="item">
      <ContactForm labelColor="var(--color-primary-2xdark)" center={false} />
    </div>
  </main>
</Wrapper>

<Footer />

<style>
  main.contact {
    padding: var(--spacing-2xlarge) var(--spacing-large);
  }
  main.contact > div.item:not(:last-child) {
    margin-bottom: var(--spacing-2xlarge);
  }
</style>
