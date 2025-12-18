<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { packageAdditionsData, packageData } from "$lib/data/packageData";
  import { messengerLink } from "$lib/helpers/helpers";
  import ExternalLink from "$lib/icons/ExternalLink.svelte";

  const data = packageData;
  const additionsData = packageAdditionsData;
</script>

<svelte:head>
  <title>Pricing | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<Navbar />
<Wrapper backgroundColor="var(--color-white)" maxWidth={700}>
  <main>
    {#each data as data, i (i)}
      <div class="package-image">
        <img
          loading="lazy"
          src={data.imageURL}
          alt="package"
          width="668"
          height="350"
        />
        <div class="package-text">
          <h2 class="package-text-large">{data.name}</h2>
        </div>
      </div>
      <div class="package-details">
        <h2 class="body-large">Starting at <span>${data.price}</span></h2>
        <hr />
        <div class="data">
          {#each data.details as detail, i (i)}
            <p class="body-large">{detail}</p>
          {/each}
        </div>
        <a class="icon" href={messengerLink} target="_blank"
          >Interested? Contact me! <ExternalLink
            color="var(--color-primary-light)"
          /></a
        >
      </div>
    {/each}

    <h2 class="heading-secondary">Package Additions / Fees</h2>
    <div class="package-details additions">
      <p class="body-large title">Additions</p>
      <div class="data">
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
      </div>
      <hr />
      <p class="body-large title">Fees</p>
      <div class="data">
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
      <a class="icon" href={messengerLink} target="_blank"
        >Questions? Contact me! <ExternalLink
          color="var(--color-primary-light)"
        /></a
      >
    </div>
  </main>
</Wrapper>

<Footer />

<style>
  main {
    padding: var(--spacing-base);
  }
  .package-image {
    position: relative;

    & .package-text {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      inset: 0;
    }

    & h2 {
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.4);
    }

    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center 40%;
      max-height: 350px;
    }
  }
  .package-details {
    margin-bottom: var(--spacing-xlarge);
    padding: var(--spacing-xlarge) var(--spacing-base);
    border: 4px double black;
    border-top: 0;
  }
  .package-details > h2 {
    margin-bottom: var(--spacing-large);
  }
  .package-details > .data {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
    padding-block: var(--spacing-large);
  }

  .package-details.additions {
    border: 4px double black;
  }
  .package-details.additions > p.title {
    font-weight: var(--font-weight-bold);
  }
  .package-details.additions > p.title:nth-of-type(2) {
    margin-top: var(--spacing-large);
  }
  .package-details.additions > div.data {
    padding-top: var(--spacing-base);
  }

  span {
    font-weight: var(--font-weight-bold);
  }
  a.icon {
    width: fit-content;
    margin-top: var(--spacing-small);
  }
</style>
