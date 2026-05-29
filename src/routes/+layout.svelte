<script lang="ts">
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { dev } from "$app/environment";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { beforeNavigate } from "$app/navigation";

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
	<meta
		property="og:description"
		content="Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."
	/>
	<meta property="og:url" content="https://kaitlynbuenphotography.com/" />
	<meta
		property="og:image"
		content="https://www.kaitlynbuenphotography.com/images/full/gallery/IMG_107.webp"
	/>

	{@html `<script type="application/ld+json">\
		{\
      "@context": "https://schema.org",\
      "@type": "LocalBusiness",\
      "name": "Kaitlyn Buen Photography",\
      "image": "https://kaitlynbuenphotography.com/images/full/gallery/IMG_0279.webp",\
      "address": {\
        "@type": "PostalAddress",\
        "addressLocality": "Springfield",\
        "addressRegion": "MO",\
        "addressCountry": "US"\
      },\
      "url": "https://kaitlynbuenphotography.com",\
      "priceRange": "$$",\
      "hasMap": "https://www.google.com/maps/place/Springfield,+MO",\
      "servesCuisine": "Photography",\
      "description": "Photographer local to Springfield, MO. Creating relaxed, comfortable atmospheres."\
    }\
  </script>\
	`}
</svelte:head>

<Navbar />
{@render children()}
<Footer />
