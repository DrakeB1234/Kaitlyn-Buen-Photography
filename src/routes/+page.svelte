<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import QuickButtonLinks from "$lib/components/QuickButtonLinks.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
  import { homeCarouselImagesOrdered } from "$lib/data/imageData";
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL} />
  <title>{BASE_APP_TITLE}</title>
</svelte:head>

<main>
  <Carousel imageData={homeCarouselImagesOrdered} />
  <QuickButtonLinks />
  <About />
  <Reviews />
  <ContactForm />
</main>
