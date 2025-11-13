<script lang="ts">
  type IconProps = {
    color?: string;
    size?: number;
  };
  let { color = "var(--color-white)", size = 24 }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  viewBox="0 -960 960 960"
>
  <path
    d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
  />
</svg>
