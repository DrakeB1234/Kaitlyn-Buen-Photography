<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<Wrapper backgroundColor="var(--color-primary-base)">
  <Navbar />
</Wrapper>
<Wrapper backgroundColor="var(--color-white)">
  <section class="carousel">
    <img src="/images/carousel/IMG_0149.webp" alt="" />
  </section>
</Wrapper>
<Wrapper backgroundColor="var(--color-accent-base)">
  <About />
</Wrapper>
<Wrapper backgroundColor="var(--color-primary-dark)">
  <Footer />
</Wrapper>

<style>
  section.carousel {
    color: var(--color-white);
    padding: var(--spacing-base);

    & img {
      width: 100%;
      object-fit: cover;
      max-height: 500px;
    }
  }
</style>
