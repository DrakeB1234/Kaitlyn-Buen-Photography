<script lang="ts">
	type IconName =
		| "material-close"
		| "material-link"
		| "material-menu"
		| "material-send"
		| "material-share"
		| "material-left-arrow"
		| "material-right-arrow"
		| "email"
		| "facebook"
		| "messenger"
		| "instagram";

	let {
		name,
		color = "var(--color-primary-xdark);",
		size = 24,
	}: {
		name: IconName;
		color?: string;
		size?: number;
	} = $props();
</script>

<svg
	aria-hidden="true"
	fill={color}
	width={size}
	height={size}
	style="height: auto; width: auto;"
>
	<use href="/sprite.svg#{name}" />
</svg>
