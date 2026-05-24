<script lang="ts">
  import { fullImagesGallery, type ImageData } from "$lib/data/imageData";
  import { gestures } from "$lib/helpers/gestures";
  import Icon from "./Icon.svelte";

  type Props = {
    imgNum: number;
    closeFunc: () => void;
  };

  let { imgNum = $bindable(), closeFunc }: Props = $props();

  const MIN_IMAGES_LENGTH = 0;
  const MAX_IMAGES_LENGTH = fullImagesGallery.length - 1;

  async function handleSharePressed() {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}${selectedImgObj.url}`,
      );
      alert("Image link copied!");
    } catch (err) {
      alert("Failed to copy image link.");
    }
  }

  let selectedImgObj: ImageData = $derived(fullImagesGallery[imgNum]);
  let currentImgName = $derived(`IMG_${100 + imgNum}`);

  function navigate(direction: number) {
    let newNum = imgNum + direction;

    if (newNum > MAX_IMAGES_LENGTH) newNum = MIN_IMAGES_LENGTH;
    if (newNum < MIN_IMAGES_LENGTH) newNum = MAX_IMAGES_LENGTH;

    imgNum = newNum;
  }
</script>

<div class="full-image-backdrop" onclick={closeFunc} role="none">
  <div
    class="container"
    use:gestures
    onswipeleft={() => navigate(1)}
    onswiperight={() => navigate(-1)}
    onclick={(e) => e.stopPropagation()}
    role="none"
  >
    <div class="top-bar">
      <p class="filename">{currentImgName}.webp</p>
      <div class="actions">
        <button class="btn" onclick={handleSharePressed} aria-label="Copy Link">
          <Icon name="material-share" color="var(--color-text-inverse)" />
        </button>
        <button class="btn" onclick={closeFunc} aria-label="Close">
          <Icon name="material-close" color="var(--color-text-inverse)" />
        </button>
      </div>
    </div>

    <img
      src={selectedImgObj.url}
      alt={selectedImgObj.url}
      width={selectedImgObj.width}
      height={selectedImgObj.height}
      role="none"
      loading="lazy"
    />
  </div>
</div>

<style>
  .full-image-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;

    padding: var(--space-16);

    background-color: rgba(0, 0, 0, 0.7);
  }

  .container {
    width: fit-content;
    height: 100%;
    margin-inline: auto;

    overflow: hidden;
    background-color: var(--color-bg-navy);
  }

  img {
    width: 100%;
    height: calc(100% - 58px);
    object-fit: contain;
    -webkit-user-drag: none;
  }

  .btn {
    padding: var(--space-8);
    background-color: transparent;
  }

  .btn:hover {
    background-color: var(--color-navy-hover);
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-8) var(--space-16);
  }

  .filename {
    color: var(--color-text-inverse);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 40em) {
    .container {
      height: auto;
    }

    img {
      height: 100%;
    }
  }
</style>
