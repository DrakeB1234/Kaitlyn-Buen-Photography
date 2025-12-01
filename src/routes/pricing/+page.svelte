<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
  import { packageAdditionsData, packageData } from "$lib/data/packageData";
  import { getMessengerLinkWithPrefilledMessage } from "$lib/helpers/helpers";
  import ExternalLink from "$lib/icons/ExternalLink.svelte";

  const data = packageData;
  const additionsData = packageAdditionsData;

  const messengerLink = (ref: string, message?: string) =>
    getMessengerLinkWithPrefilledMessage(ref, message);
</script>

<svelte:head>
  <title>Pricing | Kaitlyn Buen Photography Springfield, MO</title>
</svelte:head>

<Navbar />
<Wrapper backgroundColor="var(--color-white)" maxWidth={700}>
  <main>
    {#each data as data, i (i)}
      <div class="package-image">
        <img src={data.imageURL} alt="" loading="lazy" />
        <div class="package-text">
          <p class="package-text-large">{data.name}</p>
        </div>
      </div>
      <div class="package-details">
        <p class="body-large">Starting at <span>${data.price}</span></p>
        {#each data.details as detail, i (i)}
          <p class="body-large">{detail}</p>
        {/each}
        <a
          class="icon"
          href={messengerLink(`${data.name} Package`, data.message)}
          target="_blank"
          >Interested? Contact me! <ExternalLink
            color="var(--color-primary-light)"
          /></a
        >
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
        <p class="body-large title">Fees</p>
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
        <a class="icon" href={messengerLink(`Additions Fees`)} target="_blank"
          >Questions? Contact me! <ExternalLink
            color="var(--color-primary-light)"
          /></a
        >
      </div>
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
