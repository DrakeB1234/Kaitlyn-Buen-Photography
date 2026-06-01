<div class="wrapper">
  <section class="about-me">
    <img
      class="about-me-image"
      src="/picofme.webp"
      alt="picofme"
      loading="lazy"
      width="500"
      height="500"
    />
    <div class="text">
      <h2 class="text-lg">A Little About Myself...</h2>
      <p>
        Hi there! I'm Kaitlyn, and I'm a photographer based in <span
          style="font-weight: var(--font-weight-bold);">Springfield, MO</span
        >. Photography has always been more than just pictures for me — it's
        about capturing genuine moments that tell your story. Whether it's the
        the laughter between a couple, or the joy and connection of family life,
        I love preserving those emotions so you can relive them for years to
        come.
      </p>
      <p>
        My goal with every session is to create a relaxed, comfortable
        atmosphere where you can just be yourselves. The best photos happen in
        those in-between moments — the giggles, the cuddles, the glances that
        say it all.
      </p>
      <p>
        Thank you for letting me be a part of your memories. I can`t wait to
        help you capture yours!
      </p>
    </div>
  </section>
</div>

<style>
  .wrapper {
    background-color: var(--color-bg-tan);
  }
  .about-me {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-24);

    padding: var(--space-52) var(--space-36);
    padding-bottom: var(--space-72);
    max-width: 1000px;
    margin: auto;
  }
  .about-me-image {
    width: auto;
    height: 100%;

    object-fit: cover;
  }

  h2 {
    margin-bottom: var(--space-16);
  }

  p:not(:last-child) {
    margin-bottom: var(--space-16);
  }

  @media (max-width: 40em) {
    .about-me {
      grid-template-columns: 1fr;
      gap: var(--space-36);
    }
  }
</style>
