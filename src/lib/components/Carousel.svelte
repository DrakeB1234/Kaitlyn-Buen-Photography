<script lang="ts">
  import { fade } from "svelte/transition";
  import { gestures } from "$lib/helpers/gestures";
  import { cubicIn } from "svelte/easing";
  import type { ImageData } from "$lib/data/imageData";
  import Icon from "./Icon.svelte";
  import { onMount } from "svelte";

  let {
    imageData = [],
    intervalTimeout = 5000,
  }: {
    imageData: ImageData[];
    intervalTimeout?: number;
  } = $props();

  let currentIndex = $state(0);
  let interval: ReturnType<typeof setInterval>;

  function navigate(direction: number, isManual = false) {
    if (isManual) clearInterval(interval);
    currentIndex =
      (currentIndex + direction + imageData.length) % imageData.length;
  }

  onMount(() => {
    if (intervalTimeout > 0) {
      interval = setInterval(() => navigate(1), intervalTimeout);
    }
    return () => clearInterval(interval);
  });
</script>

<section
  class="carousel"
  use:gestures
  onswipeleft={() => navigate(1, true)}
  onswiperight={() => navigate(-1, true)}
>
  <div
    class="background"
    style="background-image: url({imageData[currentIndex]?.url});"
  ></div>

  <div class="carousel-content">
    {#key currentIndex}
      <img
        src={imageData[currentIndex].url}
        alt={`Slide ${currentIndex + 1}`}
        class="fade-image"
        loading="lazy"
        transition:fade={{ duration: 450, easing: cubicIn }}
        draggable="false"
        width={imageData[currentIndex].width}
        height={imageData[currentIndex].height}
      />
    {/key}

    <div class="controls">
      <div class="control-container">
        <button class="btn" onclick={() => navigate(-1, true)}>
          <Icon name="material-left-arrow" color="var(--color-text-inverse)" />
        </button>
        <p class="body-large">{currentIndex + 1}/{imageData.length}</p>
        <button class="btn" onclick={() => navigate(1, true)}>
          <Icon name="material-right-arrow" color="var(--color-text-inverse)" />
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  /* Styles remain unchanged */
  section.carousel {
    position: relative;
    overflow: hidden;
  }
  .carousel-content {
    position: relative;
    min-height: 500px;
    overflow: hidden;
    max-width: 800px;
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
    padding: var(--space-12);
  }
  .control-container {
    margin-inline: auto;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--space-16);
    background-color: rgba(0, 0, 0, 0.6);
    padding: var(--space-4) var(--space-12);
    border-radius: var(--radius-base);
  }
  .control-container p {
    color: var(--color-text-inverse);
    min-width: 5ch;
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
  }

  .btn {
    background-color: transparent;
    padding: var(--space-4);
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
