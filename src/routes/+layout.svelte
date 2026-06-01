<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { dev } from "$app/environment";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { beforeNavigate } from "$app/navigation";
	import {
		APP_META_DESCRIPTION,
		APP_META_IMAGE_URL,
		BASE_APP_URL,
	} from "$lib/data/constants";

	injectAnalytics({
		mode: dev ? "development" : "production",
	});

	let { children } = $props();

	beforeNavigate(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant",
		});
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />

	<meta
		name="description"
		content="Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."
	/>

	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Kaitlyn Buen Photography | Springfield, MO Photographer"
	/>
	<meta property="og:description" content={APP_META_DESCRIPTION} />
	<meta property="og:url" content={BASE_APP_URL} />
	<meta property="og:image" content={APP_META_IMAGE_URL} />

	{@html `<script type="application/ld+json">\
		{\
      "@context": "https://schema.org",\
      "@type": "LocalBusiness",\
      "name": "Kaitlyn Buen Photography",\
      "image": "${APP_META_IMAGE_URL}",\
      "address": {\
        "@type": "PostalAddress",\
        "addressLocality": "Springfield",\
        "addressRegion": "MO",\
        "addressCountry": "US"\
      },\
      "url": "${BASE_APP_URL}",\
      "priceRange": "$$",\
      "hasMap": "https://www.google.com/maps/place/Springfield,+MO",\
      "servesCuisine": "Photography",\
      "description": "${APP_META_DESCRIPTION}"\
    }\
  </script>\
	`}
</svelte:head>

<Navbar />
{@render children()}
<Footer />
