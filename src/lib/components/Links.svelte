<script lang="ts">
  import { page } from "$app/state";

  type Props = {
    spacing?: string;
  };

  let { spacing = "var(--spacing-2xlarge)" }: Props = $props();

  const currentPath = $derived(page.url.pathname);
</script>

<ul role="list" style="gap: {spacing}">
  <li>
    <a class="navbar-text {currentPath === '/' ? 'active' : ''}" href="/"
      >Home</a
    >
  </li>
  <li>
    <a class="navbar-text" href="/">About</a>
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/pricing' ? 'active' : ''}"
      href="/pricing">Pricing</a
    >
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/gallery' ? 'active' : ''}"
      href="/gallery">Gallery</a
    >
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/contact' ? 'active' : ''}"
      href="/contact">Contact</a
    >
  </li>
</ul>

<style>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  a.active {
    border-bottom: 2px solid var(--color-white);
  }
</style>
