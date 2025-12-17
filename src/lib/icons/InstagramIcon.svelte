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
    fill-rule="evenodd"
    d="M18 1a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5h12ZM8.6 3.8a4.7 4.7 0 0 0-4.7 4.7v7c0 2.6 2.2 4.7 4.7 4.7h7.3c2.4 0 4.4-2 4.4-4.3V8.4c0-2.5-2.1-4.7-4.7-4.7h-7Z"
    clip-rule="evenodd"
  />
  <path
    fill={color}
    d="M14.6 12c0 1.6-1.1 2.8-2.6 2.8S9.4 13.6 9.4 12c0-1.5 1.1-2.8 2.6-2.8s2.6 1.3 2.6 2.8Z"
  />
  <path
    fill={color}
    fill-rule="evenodd"
    d="M18.7 8.5c0-1.7-1.5-3.2-3.2-3.2h-7a3.2 3.2 0 0 0-3.2 3.2v7c0 1.7 1.5 3.2 3.2 3.2h7.3c1.6 0 2.9-1.3 2.9-2.8V8.4ZM7.9 12c0-2.4 1.8-4.3 4.1-4.3s4.1 2 4.1 4.3c0 2.4-1.8 4.3-4.1 4.3s-4.1-2-4.1-4.3Zm8.5-3.4c.5 0 1-.4 1-1 0-.5-.5-1-1-1s-1 .5-1 1c0 .6.4 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>
