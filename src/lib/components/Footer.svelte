<script>
  import Links from "./Links.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper backgroundColor="var(--color-primary-dark)">
  <section class="footer">
    <h1 class="body-large">Kaitlyn Buen Photography</h1>
    <SocialLinks size={30} />
    <div class="bottom">
      <div class="links">
        <Links style="justify-content: center; gap: var(--spacing-base);" />
      </div>
      <p class="body-small">Callie Buentello ©2025</p>
    </div>
  </section>
</Wrapper>

<style>
  .footer {
    padding-top: var(--spacing-2xlarge);
    padding-bottom: var(--spacing-base);
    background-color: var(--color-primary-dark);
    color: var(--color-white);

    & .bottom {
      margin-top: var(--spacing-xlarge);
      padding: var(--spacing-base);
      text-align: center;
    }

    & .bottom > p {
      margin-top: var(--spacing-xlarge);
    }
  }
  .footer > h1 {
    text-align: center;
    padding-bottom: var(--spacing-large);
  }
</style>
