<script lang="ts">
  import type { ImageData } from "$lib/data/imageData";

  let {
    imageData = [],
    animationDuration = 40,
  }: {
    imageData: ImageData[];
    animationDuration?: number;
  } = $props();
</script>

<section class="slider-container">
  <div class="slider-track" style="--duration: {animationDuration}s;">
    <div class="slide-group">
      {#each imageData as image}
        <div class="slide">
          <img
            src={image.url}
            alt="Gallery preview"
            loading="lazy"
            width={image.width}
            height={image.height}
          />
        </div>
      {/each}
    </div>

    <div class="slide-group" aria-hidden="true">
      {#each imageData as image}
        <div class="slide">
          <img
            src={image.url}
            alt="Gallery preview"
            loading="lazy"
            width={image.width}
            height={image.height}
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .slider-container {
    width: 100%;
    overflow: hidden;
    background-color: var(--color-bg-tan);
  }

  .slider-track {
    display: flex;
    width: max-content;

    animation: scroll var(--duration) linear infinite;
  }

  .slide-group {
    display: flex;
    flex-shrink: 0;
  }

  .slide {
    height: 350px;
    flex-shrink: 0;

    background-color: var(--color-bg-grey);
  }

  .slide img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 40em) {
    .slide {
      height: 250px;
    }
  }
</style>
