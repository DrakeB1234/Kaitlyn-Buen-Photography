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
		color = "var(--color-text);",
		size = 24,
		...rest
	}: {
		name: IconName;
		color?: string;
		size?: number;
		[key: string]: any;
	} = $props();
</script>

<svg aria-hidden="true" fill={color} width={size} height={size} {...rest}>
	<use href="/sprite.svg#{name}" />
</svg>
