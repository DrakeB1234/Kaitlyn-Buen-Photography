<script lang="ts">
  import { page } from "$app/state";

  const currentPath = $derived(page.url.pathname);
</script>

<ul role="list">
  <li>
    <a class="navbar-text {currentPath === '/' ? 'active' : ''}" href="/"
      >HOME</a
    >
  </li>
  <li>
    <a class="navbar-text" href="/">ABOUT</a>
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/pricing' ? 'active' : ''}"
      href="/pricing">PRICING</a
    >
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/gallery' ? 'active' : ''}"
      href="/gallery">GALLERY</a
    >
  </li>
  <li>
    <a
      class="navbar-text {currentPath === '/contact' ? 'active' : ''}"
      href="/contact">CONTACT</a
    >
  </li>
</ul>

<style>
  a.active {
    border-bottom: 2px solid var(--color-white);
  }
</style>
