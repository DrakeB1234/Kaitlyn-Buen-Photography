<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import QuickButtonLinks from "$lib/components/QuickButtonLinks.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import { fullImagesMainCarousel } from "$lib/data/carouselImageData";
</script>

<svelte:head>
  <link rel="canonical" href="https://kaitlynbuenphotography.com/" />
  <title>Kaitlyn Buen Photography | Springfield, MO Photographer</title>
</svelte:head>

<main>
  <Carousel imageData={fullImagesMainCarousel} />
  <QuickButtonLinks />
  <About />
  <Reviews />
  <ContactForm />
</main>
