<script lang="ts">
  import { fade } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";
  import { createSwipe } from "$lib/helpers/swipe";
  import { cubicIn } from "svelte/easing";
  import ArrowIcon from "$lib/icons/ArrowIcon.svelte";

  type Props = {
    imageData: string[];
    intervalTimeout?: number;
  };

  let { imageData = [], intervalTimeout = 3500 }: Props = $props();

  let currentIndex = $state(0);
  let interval: ReturnType<typeof setInterval> | null;

  function handleManualImageChange(direction: "prev" | "next") {
    if (interval !== null) clearInterval(interval);
    interval = null;

    if (direction === "prev") prevImage();
    if (direction === "next") nextImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageData.length;
  }

  onMount(() => {
    interval = setInterval(nextImage, intervalTimeout);
  });

  onDestroy(() => {
    if (interval !== null) clearInterval(interval);
  });
</script>

<section
  class="carousel"
  use:createSwipe={{
    onSwipeLeft: () => handleManualImageChange("next"),
    onSwipeRight: () => handleManualImageChange("prev"),
  }}
>
  <div class="background" style="background-image: url({imageData[0]});"></div>

  <div class="carousel-content">
    {#each imageData as img, i}
      {#if i === currentIndex}
        <img
          src={img}
          alt={`Slide ${i + 1}`}
          class="fade-image"
          loading="lazy"
          transition:fade={{ duration: 450, easing: cubicIn }}
        />
      {/if}
    {/each}
    <div class="controls">
      <div class="control-container">
        <button class="reset" onclick={() => handleManualImageChange("prev")}>
          <ArrowIcon />
        </button>
        <p class="body-large">{currentIndex + 1}/{imageData.length}</p>
        <button class="reset" onclick={() => handleManualImageChange("next")}>
          <ArrowIcon flip />
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  section.carousel {
    position: relative;
    overflow: hidden;
  }
  .carousel-content {
    position: relative;
    min-height: 700px;
    overflow: hidden;
    width: 90%;
    max-width: 1200px;
    margin-inline: auto;
  }

  .fade-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }
  .controls {
    position: absolute;
    inset: 0;
    top: unset;
    padding: var(--spacing-small);
    color: var(--color-white);
  }
  .control-container {
    margin-inline: auto;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--spacing-base);
    background-color: rgba(0, 0, 0, 0.6);
    padding: var(--spacing-2xsmall) var(--spacing-small);
    border-radius: var(--radius-base);
  }
  .control-container p {
    min-width: 3rem;
    text-align: center;
  }

  div.background {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: blur(10px) brightness(0.6);
    transform: scale(1.1);
    z-index: -1;
    background-color: var(--color-white);
  }

  @media (max-width: 40em) {
    div.background {
      all: unset;
    }
    .carousel-content {
      min-height: 350px;
      width: 100%;
    }
  }
</style>
