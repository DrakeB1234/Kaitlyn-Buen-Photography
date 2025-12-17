<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import FullImage from "$lib/components/FullImage.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { thumbnailsImagesGallery } from "$lib/data/imageData";

  let showFullImage: boolean = $state(false);

  let selectedImageName: string = $state("");

  function handleImgClick(src: string) {
    const parts = src.split("/");
    const imgName = parts.find((e) => e.includes(".webp"));
    if (!imgName) return;
    selectedImageName = imgName;
    showFullImage = true;
  }

  afterNavigate(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
</script>

<svelte:head>
  <title>Gallery | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<Navbar />

{#if showFullImage}
  <FullImage
    imgName={selectedImageName}
    closeFunc={() => (showFullImage = false)}
  />
{/if}
<Wrapper maxWidth={1200} backgroundColor="var(--color-white)">
  <section class="masonry" id="gallery">
    {#each thumbnailsImagesGallery as item, i (i)}
      <img
        loading="lazy"
        src={item.url}
        alt=""
        onclick={() => handleImgClick(item.url)}
        role="none"
        width={item.width}
        height={item.height}
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
    height: auto;
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
