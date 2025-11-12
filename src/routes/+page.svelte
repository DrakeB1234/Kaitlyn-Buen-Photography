<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { mainCarouselImages } from "$lib/data/imageData";
</script>

<Navbar />
<Carousel imageData={mainCarouselImages} />
<Wrapper backgroundColor="var(--color-accent-base)">
  <About />
</Wrapper>
<Wrapper backgroundColor="var(--color-primary-base)">
  <section class="contact">
    <ContactForm />
  </section>
</Wrapper>
<Wrapper backgroundColor="var(--color-primary-dark)">
  <Footer />
</Wrapper>

<style>
  section.contact {
    padding: var(--spacing-xlarge) var(--spacing-base);
    background-color: var(--color-primary-base);
  }
</style>
