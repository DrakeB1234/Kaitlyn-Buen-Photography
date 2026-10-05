<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
  import { packageAdditionsData, packageData } from "$lib/data/packageData";
  import { messengerLink } from "$lib/helpers/helpers";

  const data = packageData;
  const additionsData = packageAdditionsData;
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL + "pricing"} />
  <title>Pricing | {BASE_APP_TITLE}</title>
</svelte:head>

<main>
  <h2 class="text-lg page-heading">Package Information</h2>

  <div class="content">
    {#each data as pkg, i (i)}
      <div class="content-container">
        <div class="package-image">
          <img
            loading="lazy"
            src={pkg.imageObj.url}
            alt="package"
            width={pkg.imageObj.width}
            height={pkg.imageObj.height}
          />
          <div class="package-text">
            <h2 class="text-2xlg">{pkg.name}</h2>
          </div>
        </div>

        <div class="heading-container">
          <h2 class="text-base">
            Starting at <span class="text-lg">${pkg.price}</span>
          </h2>
        </div>
        <div class="details-container">
          {#each pkg.details as detail, i (i)}
            <p>{detail}</p>
          {/each}
        </div>
        <div class="link-container">
          <a href={messengerLink} target="_blank"
            >Interested? Contact me! <Icon
              size={16}
              name="material-link"
              color="var(--color-bg-blue)"
            /></a
          >
        </div>
      </div>
    {/each}

    <h2 class="text-lg space-below">Package Additions / Fees</h2>
    <div class="content-container">
      <div class="heading-container">
        <p class="text-bold">Additions</p>
      </div>
      <div class="details-container">
        {#each additionsData.additions as item, i (i)}
          <p class="body-large">
            <span class="text-bold"
              >${item.minPrice
                ? `${item.minPrice} - ${item.price}`
                : item.price}</span
            >
            {item.detail}
          </p>
        {/each}
      </div>
      <div class="heading-container">
        <p class="text-bold">Fees</p>
      </div>
      <div class="details-container">
        {#each additionsData.fees as item, i (i)}
          <p>
            <span class="text-bold"
              >${item.minPrice
                ? `${item.minPrice} - ${item.price}`
                : item.price}</span
            >
            {item.detail}
          </p>
        {/each}
      </div>
      <div class="link-container">
        <a href={messengerLink} target="_blank"
          >Questions? Contact me! <Icon
            size={16}
            name="material-link"
            color="var(--color-bg-blue)"
          /></a
        >
      </div>
    </div>
  </div>
</main>

<style>
  main {
    padding: var(--space-16);
    background-color: var(--color-bg-tan);
  }

  .page-heading {
    max-width: 650px;
    margin: auto;
    margin-top: var(--space-36);
    margin-bottom: var(--space-24);
  }

  .content {
    display: grid;
    gap: var(--space-36);
    max-width: 650px;
    margin: auto;
  }

  .content-container {
    border-radius: 4px;
    overflow: hidden;
  }

  .package-image {
    position: relative;
  }

  .package-text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;
  }

  .package-text h2 {
    color: var(--color-text-inverse);
    background: transparent;
    text-shadow: 0 0 20px rgba(0, 0, 0);
  }

  .package-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center 30%;
    max-height: 300px;
    border-bottom: 1px solid var(--color-border);
  }

  .content-container {
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-1);
    background-color: oklch(94% 0.016 67.483);
  }

  .heading-container {
    padding: var(--space-24) var(--space-16);
    padding-bottom: var(--space-16);
  }

  .details-container {
    padding: var(--space-24);
    padding-top: 0;
  }

  .link-container {
    padding: var(--space-24) var(--space-16);
    padding-top: 0;
  }

  a {
    display: flex;
    align-items: center;
    color: var(--color-bg-blue);

    gap: var(--space-4);
  }

  .space-below {
    margin-bottom: var(--space-12);
  }
</style>
