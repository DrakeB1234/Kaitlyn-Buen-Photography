<script lang="ts">
  type IconProps = {
    color?: string;
    size?: number;
    flip?: boolean;
  };
  let {
    color = "var(--color-white)",
    size = 30,
    flip = false,
  }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  viewBox="0 -960 960 960"
  transform={flip ? "scale(-1,1)" : undefined}
>
  <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
</svg>
