<script>
  import Links from "./Links.svelte";
  import SocialLinks from "./SocialLinks.svelte";
</script>

<section class="footer">
  <SocialLinks />
  <div class="bottom">
    <Links spacing="var(--spacing-large)" />
    <p class="body-small">Callie Buentello ©2025</p>
  </div>
</section>

<style>
  .footer {
    padding-top: var(--spacing-large);
    background-color: var(--color-primary-dark);
    color: var(--color-white);

    & .bottom {
      margin-top: var(--spacing-large);
      padding: var(--spacing-base);
      text-align: center;
    }

    & .bottom > p {
      margin-top: var(--spacing-large);
    }
  }
</style>
