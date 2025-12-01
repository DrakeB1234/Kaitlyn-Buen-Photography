<script>
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<svelte:head>
  <title>Contact Me | Kaitlyn Buen Photography</title>
</svelte:head>

<Navbar />

<Wrapper maxWidth={600} backgroundColor="var(--color-white)">
  <main class="contact">
    <div class="item">
      <p class="body-large">Contact me with my socials</p>
      <SocialLinks color="var(--color-primary-base)" justifyContent="start" />
    </div>
    <div class="item">
      <p class="body-large">Or Feel Free to send me an Email!</p>
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
  main.contact > div.item > p {
    padding-bottom: var(--spacing-large);
  }
</style>
