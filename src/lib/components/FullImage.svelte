<script lang="ts">
  import Icon from "./Icon.svelte";
  import Wrapper from "./Wrapper.svelte";

  type Props = {
    imgName: string;
    closeFunc: () => void;
  };

  let { imgName, closeFunc }: Props = $props();
  const basePath = `images/full/gallery/${imgName}`;

  async function handleSharePressed() {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/${basePath}`,
      );
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
        <h1 class="body-small filename">{imgName}</h1>
        <div class="actions">
          <button
            class="reset icon-btn"
            onclick={handleSharePressed}
            aria-label="Copy Link"
          >
            <Icon name="material-share" color="var(--color-white)" />
          </button>
          <button class="reset icon-btn" onclick={closeFunc} aria-label="Close">
            <Icon name="material-close" color="var(--color-white)" />
          </button>
        </div>
      </div>

      <div class="image-wrapper">
        <img src={basePath} alt={imgName} role="none" loading="lazy" />
      </div>
    </div>
  </Wrapper>
</div>

<style>
  .full-image-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    padding-top: var(--spacing-base);
  }

  .container {
    display: flex;
    flex-direction: column;
    max-height: 96dvh;
    background-color: var(--color-primary-2xdark);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-base);
    padding: var(--spacing-small) var(--spacing-base);
    background-color: var(--color-grey-dark);
  }

  .filename {
    color: var(--color-white);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--font-size-base);
  }

  .actions {
    display: flex;
    gap: var(--spacing-base);
  }

  .icon-btn {
    cursor: pointer;
  }

  .image-wrapper {
    display: flex;
    min-height: 0;
  }

  img {
    object-fit: contain;
  }
</style>
