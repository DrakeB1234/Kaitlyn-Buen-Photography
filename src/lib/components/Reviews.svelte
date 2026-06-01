<script>
  import { reviewsData } from "$lib/data/reviewsData";
</script>

<div class="wrapper">
  <section class="reviews">
    {#each reviewsData as review (review.name)}
      <div class="review">
        <p class="body-regular">{review.message}</p>
        <p class="body-large">- {review.name}</p>
      </div>
    {/each}
  </section>
</div>

<style>
  .wrapper {
    background-color: var(--color-bg-tan);
  }
  section.reviews {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-36);
    place-items: center;
    align-items: stretch;

    overflow: hidden;
    max-width: 1000px;
    padding: var(--space-52) var(--space-36);
    margin: auto;

    border-top: 4px double var(--color-border);
  }
  .review {
    text-align: center;
  }
  .review p:first-child {
    max-width: var(--line-width-xsmall);
  }
  .review > p:last-child {
    margin-top: var(--space-16);
  }
  p.body-regular {
    line-height: 1.8;
  }
</style>
