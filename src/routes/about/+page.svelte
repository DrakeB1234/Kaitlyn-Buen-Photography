<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL + "about"} />
  <title>About | {BASE_APP_TITLE}</title>
</svelte:head>

<main>
  <About />
  <Reviews />
</main>
