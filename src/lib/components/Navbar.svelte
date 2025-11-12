<script lang="ts">
  import LogoIcon from "$lib/icons/LogoIcon.svelte";
    import Links from "./Links.svelte";

  let { hideLogoHeader = false }: { hideLogoHeader?: boolean } = $props();
</script>

{#if !hideLogoHeader}
  <main class="header">
    <div class="wrapper">
      <div class="logo">
        <LogoIcon color="var(--color-white)" />
      </div>
    </div>
  </main>
{/if}

<nav class="navbar">
  <Links />
</nav>

<style>
  .header {
    background-color: var(--color-primary-base);
  }
  .logo {
    display: flex;
    justify-content: center;
    padding: var(--spacing-base);
  }
  nav.navbar {
    position: sticky;
    inset: 0;
    color: var(--color-white);
    padding: var(--spacing-base);
    z-index: 10;
    background-color: var(--color-primary-base);
  }

  @media (max-width: 40em) {
    nav.navbar {
      display: none;
    }
  }
</style>
