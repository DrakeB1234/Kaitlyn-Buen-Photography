<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { dev } from "$app/environment";
	import "../app.css";

	injectAnalytics({
		mode: dev ? "development" : "production",
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<title>Kaitlyn Buen Photography | Springfield, MO Photographer</title>
	<meta
		name="description"
		content="Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."
	/>

	<!-- SEO -->
	<meta
		property="og:title"
		content="Kaitlyn Buen Photography | Springfield, MO Photographer"
	/>
	<meta
		property="og:description"
		content="Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."
	/>

	{@html `<script type="application/ld+json">\
		{\
      "@context": "https://schema.org",\
      "@type": "LocalBusiness",\
      "name": "Kaitlyn Buen Photography",\
      "image": "https://kaitlynbuenphotography.vercel.app/images/full/gallery/IMG_0279.webp",\
      "address": {\
        "@type": "PostalAddress",\
        "addressLocality": "Springfield",\
        "addressRegion": "MO",\
        "addressCountry": "US"\
      },\
      "url": "https://kaitlynbuenphotography.vercel.app",\
      "priceRange": "$$",\
      "hasMap": "https://www.google.com/maps/place/Springfield,+MO",\
      "servesCuisine": "Photography",\
      "description": "Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."\
    }\
  </script>\
	`}
</svelte:head>

{@render children()}
