<script lang="ts">
  import { page } from "$app/state";
  import Navbar from "$lib/components/Navbar.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<Navbar />
<Wrapper backgroundColor="var(--color-white)">
  <section>
    <h2 class="heading-primary">Oops!</h2>
    <h1 class="heading-secondary">{page.status}: {page.error?.message}</h1>
    <a href="/">Go back home</a>
  </section>
</Wrapper>

<style>
  section {
    text-align: center;
    padding: var(--spacing-2xlarge) var(--spacing-base);
  }
  a {
    text-decoration: underline;
    color: var(--color-primary-light);
  }
</style>
