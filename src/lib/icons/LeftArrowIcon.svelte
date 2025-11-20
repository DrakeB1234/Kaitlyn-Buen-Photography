<script lang="ts">
  type IconProps = {
    color?: string;
    size?: number;
  };
  let { color = "var(--color-white)", size = 30 }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  viewBox="0 -960 960 960"
>
  <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
</svg>
