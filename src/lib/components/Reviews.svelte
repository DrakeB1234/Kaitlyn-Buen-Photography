<section class="reviews">
  <div class="review-container">
    <div class="review">
      <p class="body-regular">
        The pictures were we had taken came back quickly and they were so cute,
        the lighting chose for the pictures was great and i would recommend
        getting your pictures done with kaitlyn!
      </p>
      <p class="body-large">- Ella</p>
    </div>
    <div class="review">
      <p class="body-regular">
        Over the weekend, I had pictures taken for my birthday with two amazing
        friends and we all had a blast! Kaitlyn is kind, amazing, and funny. If
        you need any pictures to save for a lifetime, she's the gal for you!
      </p>
      <p class="body-large">- Krista</p>
    </div>
    <div class="review">
      <p class="body-regular">
        Kaitlyn took beautiful photos! We got our family photos and was so happy
        with how they turned out! Definitely recommend!
      </p>
      <p class="body-large">- Ashley</p>
    </div>
  </div>
</section>

<style>
  section.reviews {
    padding: var(--spacing-2xlarge);
  }
  .review-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xlarge);
    place-items: center;
    align-items: stretch;
    margin-top: var(--spacing-2xlarge);
  }
  .review {
    text-align: center;
  }
  .review p:first-child {
    max-width: var(--line-width-xsmall);
  }
  .review > p:last-child {
    margin-top: var(--spacing-base);
  }
  p.body-regular {
    line-height: 1.8;
  }
</style>
