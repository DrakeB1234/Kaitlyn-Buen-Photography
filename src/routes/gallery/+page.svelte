<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import type { PageProps } from "../$types";

  const { data }: PageProps = $props();
</script>

<Navbar />

<Wrapper maxWidth={1400} backgroundColor="var(--color-white)">
  <section class="masonry">
    {#each data.images as url}
      <img src={url} alt="" loading="lazy" />
    {/each}
  </section>
</Wrapper>
<Footer />

<style>
  .masonry {
    column-count: 3;
    column-gap: var(--spacing-xsmall);
    padding: var(--spacing-base);
    padding-bottom: var(--spacing-2xlarge);
  }

  .masonry img {
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--spacing-xsmall);
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
