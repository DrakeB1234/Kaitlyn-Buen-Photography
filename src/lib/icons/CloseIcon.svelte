<script lang="ts">
  type IconProps = {
    color?: string;
    size?: number;
  };
  let { color = "var(--color-primary-dark)", size = 40 }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  viewBox="0 -960 960 960"
>
  <path
    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
  />
</svg>
