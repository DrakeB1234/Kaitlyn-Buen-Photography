<script lang="ts">
  import Icon from "./Icon.svelte";

  import { page } from "$app/state";
  import { onNavigate } from "$app/navigation";

  const currentPath = $derived(page.url.pathname);

  let sidebarOpen = $state(false);
  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);
  const closeSidebar = () => (sidebarOpen = false);

  onNavigate(() => {
    closeSidebar();
  });
</script>

<div class="logo">
  <a href="/">
    <img
      src="/icons/logo.svg"
      alt="logo"
      loading="lazy"
      width="180"
      height="180"
    />
  </a>
</div>

<nav class="navbar-desktop">
  {@render links()}
</nav>

<section class="navbar-mobile">
  <button
    class="btn btn-color-brand"
    onclick={toggleSidebar}
    aria-label="Open menu"
    aria-expanded={sidebarOpen}
  >
    <Icon name="material-menu" color="white" />
  </button>
</section>

<aside class="sidebar {sidebarOpen ? 'open' : ''}" role="navigation">
  {@render links()}

  <div class="side-container">
    <button
      class="btn btn-color-tan"
      onclick={closeSidebar}
      aria-label="Close menu"
    >
      <Icon name="material-close" />
    </button>
  </div>
</aside>

{#snippet links()}
  <ul class="links" role="list">
    <li>
      <a class:active={currentPath === "/"} href="/">HOME</a>
    </li>
    <li>
      <a class:active={currentPath === "/about"} href="/about">ABOUT</a>
    </li>
    <li>
      <a class:active={currentPath === "/wedding"} href="/wedding">WEDDING</a>
    </li>
    <li>
      <a class:active={currentPath === "/pricing"} href="/pricing">PRICING</a>
    </li>
    <li>
      <a class:active={currentPath === "/gallery"} href="/gallery">GALLERY</a>
    </li>
    <li>
      <a class:active={currentPath === "/contact"} href="/contact">CONTACT</a>
    </li>
  </ul>
{/snippet}

<style>
  div.logo {
    display: flex;
    justify-content: center;
    padding: var(--space-16);
  }
  div.logo img {
    max-width: 140px;
    height: auto;
  }
  .navbar-desktop,
  .navbar-mobile {
    position: sticky;
    top: 0;
    padding: var(--space-16);
    z-index: 10;
    background-color: var(--color-bg-brand);
  }

  .navbar-desktop .links {
    justify-content: space-evenly;
    max-width: 800px;
    margin: auto;
  }

  .navbar-mobile {
    display: flex;
    justify-content: end;
    padding-block: 0;
    padding-right: 0;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    min-height: 100vh;
    transition: right 0.3s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: 10;
    display: flex;
    overflow: auto;
    background-color: var(--color-bg-brand);
  }

  .sidebar.open {
    right: 0;
  }

  .sidebar .side-container {
    background-color: var(--color-bg-tan);
  }

  .links {
    display: flex;
    justify-content: center;

    width: 100%;
    color: var(--color-text-inverse);
  }

  .links li,
  .links a {
    padding-bottom: 3px;
  }

  a.active {
    border-bottom: 2px solid var(--color-border-inverse);
  }

  @media (min-width: 40em) {
    div.logo img {
      max-width: 170px;
    }
    .navbar-mobile {
      display: none;
    }
  }
  @media (max-width: 40em) {
    .navbar-desktop {
      display: none;
    }
    .links {
      flex-direction: column;
      justify-content: start;
      align-items: end;
      gap: var(--space-16);

      font-size: var(--font-size-xlg);

      padding: var(--space-52);
    }
  }
</style>
