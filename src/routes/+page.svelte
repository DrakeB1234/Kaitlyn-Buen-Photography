<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<Navbar />
<Carousel imageData={data.images} />
<Wrapper maxWidth={1100} backgroundColor="var(--color-accent-base)">
  <About />
  <Reviews />
</Wrapper>
<Wrapper backgroundColor="var(--color-primary-base)">
  <section class="contact">
    <ContactForm maxWidth={450} />
  </section>
</Wrapper>
<Wrapper backgroundColor="var(--color-primary-dark)">
  <Footer />
</Wrapper>

<style>
  section.contact {
    padding: var(--spacing-2xlarge) var(--spacing-base);
    background-color: var(--color-primary-base);
  }
</style>
