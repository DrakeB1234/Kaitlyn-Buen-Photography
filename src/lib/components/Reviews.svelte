<section class="reviews">
  <h2 class="heading-secondary">Reviews</h2>
  <div class="review-container">
    <div class="review">
      <p class="body-large">
        The pictures were we had taken came back quickly and they were so cute,
        the lighting chose for the pictures was great and i would recommend
        getting your pictures done with kaitlyn!
      </p>
      <p class="body-large">- Ella Thompson</p>
    </div>
    <div class="review">
      <p class="body-large">My photos turned out amazing, thank you!</p>
      <p class="body-large">- Elysse Knapp</p>
    </div>
  </div>
</section>

<style>
  section.reviews {
    padding: var(--spacing-2xlarge) var(--spacing-base);
  }
  section.reviews > h2 {
    text-align: center;
  }
  .review-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xlarge) var(--spacing-xlarge);
    place-items: center;
    margin-top: var(--spacing-xlarge);
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
</style>
