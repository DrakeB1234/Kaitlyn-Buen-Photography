<script lang="ts">
  import CloseIcon from "$lib/icons/CloseIcon.svelte";
  import ShareIcon from "$lib/icons/ShareIcon.svelte";

  type Props = {
    imgSrc: string;
    closeFunc: () => void;
  };

  let { imgSrc, closeFunc }: Props = $props();

  async function handleSharePressed() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${imgSrc}`);
      alert("Image link copied!");
    } catch (err) {
      alert("Failed to copy image link.");
    }
  }
</script>

<div class="full-image-backdrop" onclick={closeFunc} role="none">
  <div class="top-bar" onclick={(e) => e.stopPropagation()} role="none">
    <button class="reset" onclick={handleSharePressed}>
      <ShareIcon />
    </button>
    <button class="reset" onclick={closeFunc}>
      <CloseIcon size={24} color="var(--color-white)" />
    </button>
  </div>
  <img
    src={imgSrc}
    alt={imgSrc}
    onclick={(e) => e.stopPropagation()}
    role="none"
  />
</div>

<style>
  .top-bar {
    display: flex;
    gap: var(--spacing-large);
    justify-content: end;
    padding: var(--spacing-small) var(--spacing-base);
    background-color: var(--color-primary-2xdark);
  }

  .full-image-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
  }
</style>
