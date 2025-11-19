<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Wrapper from "./Wrapper.svelte";

  type Props = {
    imageData: string[];
    intervalTimeout?: number;
  };

  let { imageData = [], intervalTimeout = 3500 }: Props = $props();

  let currentIndex = $state(0);
  let interval: ReturnType<typeof setInterval>;

  function prev() {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % imageData.length;
  }

  onMount(() => {
    interval = setInterval(next, intervalTimeout);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<Wrapper
  maxWidth={1150}
  backgroundColor="transparent"
  style="position: relative; overflow: hidden;"
>
  <div
    class="background"
    style="background-image: url({imageData[currentIndex]});"
  ></div>
  <section class="carousel">
    <div
      class="carousel-track"
      style="transform: translateX(-{currentIndex * 100}%)"
    >
      {#each imageData as img, i}
        <img src={img} alt={`Slide ${i + 1}`} loading="lazy" />
      {/each}
    </div>
  </section>
</Wrapper>

<style>
  section.carousel {
    overflow: hidden;
    max-height: 700px;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  .carousel-track > img {
    width: 100%;
    object-fit: cover;
    object-position: center top;
  }
  div.background {
    position: absolute;
    inset: 0;
    background-image: url("");
    filter: blur(10px) brightness(0.7);
    transform: scale(1.1);
    transition: background-image 0.5s ease-in-out;
  }

  @media (max-width: 40em) {
    div.background {
      all: unset;
    }
  }
</style>
