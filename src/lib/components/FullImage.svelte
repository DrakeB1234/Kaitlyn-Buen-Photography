<script lang="ts">
  import CloseIcon from "$lib/icons/CloseIcon.svelte";
  import ShareIcon from "$lib/icons/ShareIcon.svelte";
  import Wrapper from "./Wrapper.svelte";

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
  <Wrapper backgroundColor="transparent">
    <div class="container" onclick={(e) => e.stopPropagation()} role="none">
      <div class="top-bar">
        <h1 class="filename">{imgSrc.split("/").pop()}</h1>
        <div class="actions">
          <button
            class="reset icon-btn"
            onclick={handleSharePressed}
            aria-label="Copy Link"
          >
            <ShareIcon />
          </button>
          <button class="reset icon-btn" onclick={closeFunc} aria-label="Close">
            <CloseIcon size={24} color="var(--color-white)" />
          </button>
        </div>
      </div>

      <div class="image-wrapper">
        <img src={imgSrc} alt={imgSrc} role="none" />
      </div>
    </div>
  </Wrapper>
</div>

<style>
  .full-image-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9); /* Darker background for focus */
    z-index: 100; /* Ensure it's above everything */
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px); /* Optional: Blur background */
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 96dvw;
    max-height: 96dvh;
    width: fit-content;
    background-color: var(--color-primary-2xdark); /* Matches your theme */
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-medium);
    padding: var(--spacing-small) var(--spacing-base);
    background-color: var(--color-grey-dark);
    flex-shrink: 0;
  }

  .filename {
    color: var(--color-white);
    font-size: var(--font-size-base);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }

  .actions {
    display: flex;
    gap: var(--spacing-small);
  }

  .icon-btn {
    cursor: pointer;
  }

  /* This wrapper holds the image and tells it how to behave */
  .image-wrapper {
    flex: 1; /* Take all remaining vertical space */
    min-height: 0; /* Crucial CSS trick: allows flex child to shrink below content size */
    display: flex;
    justify-content: center;
    background-color: black;
    position: relative;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    /* This ensures the full image is visible without cropping */
    object-fit: contain;
    width: auto;
    height: auto;
  }
</style>
