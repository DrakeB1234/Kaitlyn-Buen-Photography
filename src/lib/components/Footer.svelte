<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<section class="footer">
  <h2 class="text-base">My Socials</h2>
  <SocialLinks size={36} />
  <div class="text-container">
    <h1 class="text-base">Kaitlyn Buen Photography</h1>
    <p class="text-caption">Callie Buentello ©2026</p>
  </div>
</section>

<style>
  .footer {
    padding-block: var(--space-52);
    background-color: var(--color-bg-navy);
    text-align: center;
  }
  h1,
  h2,
  p {
    color: var(--color-text-inverse);
  }

  h2 {
    margin-bottom: var(--space-24);
  }
  .text-container {
    margin-top: var(--space-52);
  }
  .text-container > p {
    margin-top: var(--space-16);
  }
</style>
