<section class="quick-links">
  <div class="logo-container">
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
  <div class="button-container">
    <a class="btn btn-color-blue" href="/pricing">View my Pricing!</a>
    <a class="btn btn-color-tan btn-outline" href="/gallery"
      >Check out my work!</a
    >
  </div>
</section>

<style>
  a {
    padding-block: var(--space-12);
  }
  .quick-links {
    background-color: var(--color-bg-tan);
    padding: var(--space-24);
    padding-top: var(--space-36);
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo-text {
    max-width: 250px;
    height: auto;
  }
  .logo-flower {
    max-width: 80px;
    height: auto;
  }
  .button-container {
    display: flex;
    justify-content: center;
    gap: var(--space-8);

    margin-top: var(--space-36);
  }
</style>
