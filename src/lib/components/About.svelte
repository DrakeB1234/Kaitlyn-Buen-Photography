<section id="about" class="about">
  <div class="wrapper">
    <div class="content">
      <img src="/picofme.webp" alt="" />
      <div class="text">
        <p class="heading-primary">A Little About Myself...</p>
        <p class="body-regular">
          Hi there! I'm Kaitlyn, and I'm a photographer based in <span
            style="font-weight: var(--font-weight-bold);">Springfield, MO</span
          >. Photography has always been more than just pictures for me — it's
          about capturing genuine moments that tell your story. Whether it's the
          quiet sweetness of a newborn, the laughter between a couple, or the
          joy and connection of family life, I love preserving those emotions so
          you can relive them for years to come.
        </p>
        <p class="body-regular">
          My goal with every session is to create a relaxed, comfortable
          atmosphere where you can just be yourselves. The best photos happen in
          those in-between moments — the giggles, the cuddles, the glances that
          say it all.
        </p>
        <p class="body-regular">
          Thank you for letting me be a part of your memories. I can`t wait to
          help you capture yours!
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section.about {
    background-color: var(--color-accent-base);
  }
  section.about div.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xlarge);
    padding: var(--spacing-2xlarge) var(--spacing-xlarge);
    grid-template-areas: "image text";

    & > img {
      grid-area: image;
    }

    & > div.text {
      grid-area: text;
    }

    & > div.text p.body-regular:not(:last-child) {
      margin-bottom: var(--spacing-base);
    }

    & p.heading-primary {
      margin-bottom: var(--spacing-base);
    }
    & p.body-regular {
      line-height: 1.6;
    }
  }

  @media (max-width: 40em) {
    section.about div.content {
      grid-template-columns: 1fr;
      grid-template-areas: "text" "image";
    }
  }
</style>
