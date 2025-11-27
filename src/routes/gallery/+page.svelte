<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import FullImage from "$lib/components/FullImage.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { galleryImages, mainCarouselImages } from "$lib/data/imageData";

  const images = [...mainCarouselImages, ...galleryImages];
  let showFullImage: boolean = $state(false);

  let selectedImageSrc: string = $state("");

  function handleImgClick(src: string) {
    selectedImageSrc = src;
    showFullImage = true;
  }
</script>

<Navbar />

{#if showFullImage}
  <FullImage
    imgSrc={selectedImageSrc}
    closeFunc={() => (showFullImage = false)}
  />
{/if}
<Wrapper maxWidth={1200} backgroundColor="var(--color-white)">
  <section class="masonry">
    {#each images as url, i (`${url}-${i}`)}
      <img
        src={url}
        alt=""
        loading="lazy"
        onclick={() => handleImgClick(url)}
        role="none"
      />
    {/each}
  </section>
</Wrapper>
<Footer />

<style>
  .masonry {
    column-count: 3;
    column-gap: var(--spacing-xsmall);
    padding: var(--spacing-xsmall);
    padding-bottom: var(--spacing-2xlarge);
  }

  .masonry img {
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--spacing-xsmall);
    cursor: pointer;
  }

  @media (max-width: 50em) {
    .masonry {
      column-count: 2;
      padding: var(--spacing-2xsmall);
      padding-bottom: var(--spacing-2xlarge);
      column-gap: var(--spacing-2xsmall);
    }
    .masonry img {
      margin-bottom: var(--spacing-2xsmall);
    }
  }
</style>
