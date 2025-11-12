<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Wrapper from "./Wrapper.svelte";

  type Props = {
    imageData: string[];
    intervalTimeout?: number;
  };

  let { imageData = [], intervalTimeout = 5000 }: Props = $props();

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

<Wrapper backgroundColor="var(--color-primary-2xdark)">
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
    background-color: #000;
    max-height: 550px;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
</style>
