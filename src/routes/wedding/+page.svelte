<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import SlidingImagesCarousel from "$lib/components/SlidingImagesCarousel.svelte";
  import { BASE_APP_TITLE, BASE_APP_URL } from "$lib/data/constants";
  import { weddingCarouselImages } from "$lib/data/imageData";
  import {
    weddingPackageAdditionsData,
    weddingPackageData,
  } from "$lib/data/weddingPackageData";
  import { messengerLink } from "$lib/helpers/helpers";
</script>

<svelte:head>
  <link rel="canonical" href={BASE_APP_URL + "wedding"} />
  <title>Wedding | {BASE_APP_TITLE}</title>
</svelte:head>

<main>
  <SlidingImagesCarousel
    imageData={weddingCarouselImages}
    animationDuration={80}
  />

  <div class="about-wedding-container">
    <div class="about-wedding-image">
      <img
        loading="lazy"
        src="/images/wedding/IMG_ring.webp"
        alt="wedding"
        width="1600"
        height="1067"
      />
    </div>
    <div class="about-wedding-text">
      <h2 class="text-lg">Micro Wedding Photography</h2>
      <p>
        Your wedding day is one the the biggest days of your life! It embodies
        your love for each other and is te beginning of your future. My goal is
        to capture the essence of your love story. I want to capture all the
        precious moments your special day has to offer.
      </p>
      <h2 class="text-lg">Getting ready and Ceremony</h2>
      <p>
        From the anticipation of getting ready to the heartfelt moments of your
        ceremony, I’m passionate about preserving the emotions and memories that
        make your wedding day unforgettable. During the ceremony, I work
        alongside a trusted second photographer to capture every meaningful
        moment from multiple perspectives.
      </p>
      <h2 class="text-lg">Wedding Party and Family Photos</h2>
      <p>
        Wedding party and family photos are a meaningful part of your wedding
        day, capturing the people who have supported and celebrated alongside
        you. From your wedding party to your closest family members, these
        portraits preserve the relationships that make your day so special while
        keeping the experience relaxed and efficient so you can get back to
        enjoying every moment.
      </p>
    </div>
  </div>

  <h2 class="text-lg header-text">Micro Wedding Packages</h2>

  <div class="wedding-packages-container">
    {#each weddingPackageData as pkg}
      <div class="content-container">
        <div class="title-container">
          <h2 class="text-lg">{pkg.name}</h2>
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
    <div class="content-container">
      <div class="title-container">
        <h2 class="text-lg">Extras</h2>
      </div>
      <div class="heading-container"></div>

      <div class="details-container">
        {#each weddingPackageAdditionsData as item, i (i)}
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
          >Interested? Contact me! <Icon
            size={16}
            name="material-link"
            color="var(--color-bg-blue)"
          /></a
        >
      </div>
    </div>
  </div>

  <div class="contact-form-container">
    <ContactForm
      textareaPlaceholder="Hello Kaitlyn! I am interested in booking a wedding with you!"
    />
  </div>
</main>

<style>
  main {
    background-color: var(--color-bg-tan);
  }
  .about-wedding-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-36) var(--space-24);

    padding: var(--space-72) var(--space-16);
    max-width: 1000px;
    margin: auto;
  }
  .about-wedding-image img {
    width: auto;
    height: 100%;

    object-fit: cover;
  }

  .about-wedding-text h2 {
    margin-bottom: var(--space-16);
  }
  .about-wedding-text p {
    margin-bottom: var(--space-36);
    max-width: var(--text-box-max-width-40);
  }

  .header-text {
    max-width: 1000px;
    margin: auto;
    padding-left: var(--space-16);
  }

  .wedding-packages-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: var(--space-24);

    padding: var(--space-36) var(--space-16);
    padding-top: var(--space-24);
    max-width: 1000px;
    margin: auto;
  }

  .content-container {
    border: 4px double var(--color-border);
  }

  .title-container {
    padding: var(--space-24) var(--space-16);
    background-color: var(--color-bg-tan-sunken);
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

  .contact-form-container {
    background-color: var(--color-bg-brand);
  }

  @media (max-width: 40em) {
    .wedding-packages-container {
      grid-template-columns: 1fr;
    }

    .about-wedding-container {
      padding-top: var(--space-24);
    }
  }
</style>
