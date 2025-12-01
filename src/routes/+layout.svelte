<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { dev } from "$app/environment";
	import "../app.css";

	injectAnalytics({
		mode: dev ? "development" : "production",
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Kaitlyn Buen Photography | Springfield, MO</title>
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

	{@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "ImageObject",
      "contentUrl": "https://kaitlynbuenphotographer.vercel.app/full/gallery/IMG_0279.webp",
      "license": "https://kaitlynbuenphotographer.vercel.app",
      "creator": {
        "@type": "Photographer",
        "name": "Kaitlyn Buen"
      }
    }
  </script>`}
</svelte:head>

{@render children()}
