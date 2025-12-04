<script lang="ts">
  import Links from "./Links.svelte";
  import Wrapper from "./Wrapper.svelte";
  import MenuIcon from "$lib/icons/MenuIcon.svelte";
  import CloseIcon from "$lib/icons/CloseIcon.svelte";

  let { hideLogoHeader = false }: { hideLogoHeader?: boolean } = $props();

  let sidebarOpen = $state(false);
  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);
  const closeSidebar = () => (sidebarOpen = false);
</script>

{#if !hideLogoHeader}
  <div class="logo">
    <a href="/">
      <img src="/logo.svg" alt="logo" loading="lazy" width="200" height="200" />
    </a>
  </div>
{/if}

<nav class="navbar-desktop">
  <Wrapper backgroundColor="var(--color-primary-base)">
    <Links style="justify-content: space-evenly;" />
  </Wrapper>
</nav>

<section class="navbar-mobile">
  <button
    class="icon"
    onclick={toggleSidebar}
    aria-label="Open menu"
    aria-expanded={sidebarOpen}
  >
    <MenuIcon />
  </button>
</section>

<aside class="sidebar {sidebarOpen ? 'open' : ''}" role="navigation">
  <div class="links">
    <Links
      style="flex-direction: column; align-items: end; gap: var(--spacing-large);"
    />
  </div>

  <div class="exit-button">
    <button class="icon" onclick={closeSidebar} aria-label="Close menu">
      <CloseIcon />
    </button>
  </div>
</aside>

<style>
  div.logo {
    display: flex;
    justify-content: center;
    padding: var(--spacing-base);
    background-color: var(--color-primary-base);
  }
  div.logo img {
    max-width: 140px;
    height: auto;
  }
  .navbar-desktop,
  .navbar-mobile {
    position: sticky;
    top: 0;
    color: var(--color-white);
    padding: var(--spacing-base);
    z-index: 10;
    background-color: var(--color-primary-base);
  }

  .navbar-mobile {
    display: flex;
    justify-content: end;
    padding-block: 0;
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
    background-color: var(--color-primary-base);
  }

  .sidebar.open {
    right: 0;
  }

  .exit-button {
    background-color: var(--color-white);
  }

  .links {
    width: 100%;
    padding: var(--spacing-2xlarge) var(--spacing-2xlarge);
    color: var(--color-white);
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
  }
</style>
