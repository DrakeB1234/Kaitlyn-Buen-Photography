<section class="quick-links">
  <div class="small-logo">
    <img
      class="logo-flower"
      src="/icons/logo-flower.svg"
      alt="logo"
      loading="lazy"
      width="100"
      height="100"
    />
    <img
      class="logo-text"
      src="/icons/logo-small.svg"
      alt="logo"
      loading="lazy"
      width="400"
      height="150"
    />
  </div>
  <div class="buttons">
    <a class="button-primary" href="/pricing">View my Pricing!</a>
    <a class="button-secondary" href="/gallery">Check out my work!</a>
  </div>
</section>

<style>
  a {
    padding-block: var(--spacing-small);
  }
  .quick-links {
    padding: var(--spacing-base);
  }
  .small-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    padding: var(--spacing-large) var(--spacing-xlarge);
    padding-bottom: var(--spacing-base);
  }
  .small-logo img.logo-text {
    max-width: 250px;
    height: auto;
  }
  .small-logo img.logo-flower {
    max-width: 80px;
    height: auto;
  }
  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--spacing-base);
    /* padding-inline: var(--spacing-base); */
    padding-top: var(--spacing-base);
  }
</style>
