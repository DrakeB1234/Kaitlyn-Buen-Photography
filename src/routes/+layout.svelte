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
</svelte:head>

{@render children()}
