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

  // function prev() {
  //   currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
  // }

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

<Wrapper maxWidth={850} backgroundColor="var(--color-primary-2xdark)">
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
    position: relative;
    max-height: 600px;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center center;
  }
</style>
