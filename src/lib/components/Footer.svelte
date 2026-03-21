<script>
  import SocialLinks from "./SocialLinks.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper backgroundColor="var(--color-primary-dark)">
  <section class="footer">
    <h2 class="body-large">My Socials</h2>
    <SocialLinks size={36} />
    <div class="text-container">
      <h1 class="body-large">Kaitlyn Buen Photography</h1>
      <p class="body-small">Callie Buentello ©2026</p>
    </div>
  </section>
</Wrapper>

<style>
  .footer {
    padding-block: var(--spacing-2xlarge);
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    text-align: center;
  }
  h2 {
    margin-bottom: var(--spacing-large);
  }
  .text-container {
    margin-top: var(--spacing-2xlarge);
  }
  .text-container > p {
    margin-top: var(--spacing-base);
  }
</style>
