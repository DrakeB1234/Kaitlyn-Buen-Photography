<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { packageAdditionsData, packageData } from "$lib/data/packageData";

  const data = packageData;
  const additionsData = packageAdditionsData;
</script>

<Navbar />
<Wrapper backgroundColor="var(--color-white)" maxWidth={700}>
  <main>
    <p class="body disclaimer">
      *All packages requires a <span>$15 non-refundable</span> deposit that goes
      towards the full-price of the package.
    </p>
    {#each data as data, i (i)}
      <div class="package-image">
        <img src={data.imageURL} alt="" />
        <div class="package-text">
          <p class="package-text-large">{data.name}</p>
        </div>
      </div>
      <div class="package-details">
        <p class="body-large">Starting at <span>${data.price}</span></p>
        {#each data.details as detail, i (i)}
          <p class="body-large">{detail}</p>
        {/each}
      </div>
    {/each}

    <div class="package-additions">
      <p class="heading-secondary">Package Additions / Fees</p>
      <div class="package-details">
        <p class="body-large title">Additions</p>
        {#each additionsData.additions as item, i (i)}
          <p class="body-large">
            <span
              >${item.minPrice
                ? `${item.minPrice} - ${item.price}`
                : item.price}</span
            >
            {item.detail}
          </p>
        {/each}
        <p class="body-large title">Fees (contact me for more info)</p>
        {#each additionsData.fees as item, i (i)}
          <p class="body-large">
            <span
              >${item.minPrice
                ? `${item.minPrice} - ${item.price}`
                : item.price}</span
            >
            {item.detail}
          </p>
        {/each}
      </div>
    </div>
  </main>
</Wrapper>

<Footer />

<style>
  main {
    padding: var(--spacing-base);
  }
  p.disclaimer {
    margin-bottom: var(--spacing-small);
  }
  .package-image {
    position: relative;

    & .package-text {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      inset: 0;

      & p {
        background-color: rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.5);
        color: var(--color-white);
      }
    }

    & img {
      width: 100%;
      object-fit: cover;
      object-position: center 40%;
      max-height: 300px;
    }
  }
  .package-details {
    margin-top: var(--spacing-xsmall);
    margin-bottom: var(--spacing-xlarge);
    padding: var(--spacing-large) var(--spacing-base);
    border: 4px double black;

    & p:not(:last-child) {
      margin-bottom: var(--spacing-base);
    }
  }
  .package-details > p.title:not(:first-child) {
    margin-top: var(--spacing-xlarge);
  }
  span {
    font-weight: var(--font-weight-bold);
  }
</style>
