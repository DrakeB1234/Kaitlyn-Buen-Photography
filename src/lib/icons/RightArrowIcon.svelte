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
  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
</svg>
