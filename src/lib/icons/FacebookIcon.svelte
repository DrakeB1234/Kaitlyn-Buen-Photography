<script lang="ts">
  type IconProps = {
    color?: string;
    size?: number;
  };
  let { color = "black", size = 24 }: IconProps = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill={color}
    d="M12 2c5.523 0 10 4.477 10 10 0 5.116-3.841 9.33-8.797 9.925v-6.853h2.732l.57-3.105h-3.302V9.959c.301-.724.566-1.066 1.473-1.29h1.978v-2.7c-1.142-.332-1.979-.393-3.155-.27a4.23 4.23 0 0 0-3.94 4.219v2.049h-2.06v3.105h2.06v6.626C5.216 20.608 2 16.68 2 12 2 6.477 6.477 2 12 2Z"
  />
</svg>
