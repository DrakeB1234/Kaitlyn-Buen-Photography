<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { packageAdditionsData, packageData } from "$lib/data/packageData";
  import { messengerLink } from "$lib/helpers/helpers";

  const data = packageData;
  const additionsData = packageAdditionsData;
</script>

<svelte:head>
  <title>Pricing | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<main>
  <div class="content">
    {#each data as data, i (i)}
      <div class="content-container">
        <div class="package-image">
          <img
            loading="lazy"
            src={data.imageObj.url}
            alt="package"
            width={data.imageObj.width}
            height={data.imageObj.height}
          />
          <div class="package-text">
            <h2 class="text-2xlg">{data.name}</h2>
          </div>
        </div>

        <div class="heading-container">
          <h2 class="text-base">
            Starting at <span class="text-lg">${data.price}</span>
          </h2>
        </div>
        <div class="details-container">
          {#each data.details as detail, i (i)}
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
  .content {
    max-width: 650px;
    margin: auto;
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
    max-height: 350px;
  }

  .content-container {
    border: 4px double var(--color-border);
    margin-bottom: var(--space-36);
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
