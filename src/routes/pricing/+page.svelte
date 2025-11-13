<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<Navbar />
<Wrapper backgroundColor="var(--color-white)" maxWidth={700}>
  <main>
    <div class="package-image">
      <img src="/images/main-carousel/IMG_0149.webp" alt="" />
      <div class="package-text">
        <p class="package-text-large">Family</p>
      </div>
    </div>
    <div class="package-details">
      <p class="body-large">Starting at $50</p>
      <p class="body-large">20+ edited photos</p>
      <p class="body-large">30 mintue shoot</p>
      <p class="body-large">Shot at pre-selected locations</p>
    </div>
    <div class="package-image">
      <img src="/images/main-carousel/IMG_9405.webp" alt="" />
      <div class="package-text">
        <p class="package-text-large">Couples</p>
      </div>
    </div>
    <div class="package-details">
      <p class="body-large">Starting at $50</p>
      <p class="body-large">20+ edited photos</p>
      <p class="body-large">30 mintue shoot</p>
      <p class="body-large">Shot at pre-selected locations</p>
    </div>
  </main>
</Wrapper>

<Footer />

<style>
  main {
    padding: var(--spacing-base);
  }
  .package-image {
    position: relative;

    & .package-text {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      inset: 0;

      & p {
        text-shadow: 0 0 20px rgba(0, 0, 0);
        color: var(--color-white);
      }
    }

    & img {
      width: 100%;
      object-fit: cover;
      object-position: center 30%;
      max-height: 300px;
    }
  }
  .package-details {
    margin-top: var(--spacing-xsmall);
    margin-bottom: var(--spacing-xlarge);
    padding: var(--spacing-large) var(--spacing-base);
    border: 1px solid black;

    & p:not(:last-child) {
      margin-bottom: var(--spacing-base);
    }
  }
</style>
