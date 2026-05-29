<script lang="ts">
  import FullImage from "$lib/components/FullImage.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
  import { thumbnailsImagesGallery } from "$lib/data/imageData";

  let showFullImage: boolean = $state(false);

  let selectedImageNum: number = $state(0);

  function handleImgClick(index: number) {
    selectedImageNum = index;
    showFullImage = true;
  }
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL + "gallery"} />
  <title>Gallery | {BASE_APP_TITLE}</title>
</svelte:head>

{#if showFullImage}
  <FullImage
    imgNum={selectedImageNum}
    closeFunc={() => (showFullImage = false)}
  />
{/if}

<main>
  <section class="masonry" id="gallery">
    {#each thumbnailsImagesGallery as item, i (i)}
      <img
        loading="lazy"
        src={item.url}
        alt=""
        onclick={() => handleImgClick(i)}
        role="none"
        width={item.width}
        height={item.height}
      />
    {/each}
  </section>
</main>

<style>
  main {
    background-color: var(--color-bg-tan);
  }
  .masonry {
    column-count: 3;
    column-gap: var(--space-12);

    max-width: 1200px;
    margin: auto;
    padding: var(--space-12);

    background-color: var(--color-bg-white);
  }

  .masonry img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: var(--space-12);
    cursor: pointer;
  }

  @media (max-width: 50em) {
    .masonry {
      column-count: 2;

      padding: var(--space-8);
      column-gap: var(--space-8);
    }
    .masonry img {
      margin-bottom: var(--space-8);
    }
  }
</style>
