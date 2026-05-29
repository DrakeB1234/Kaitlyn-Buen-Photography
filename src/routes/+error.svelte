<script lang="ts">
  import { page } from "$app/state";
</script>

<section>
  <h2>Oops!</h2>
  <h1 class="text-lg">{page.status}: {page.error?.message}</h1>
  <a href="/">Go back home</a>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    gap: var(--space-8);

    padding: var(--space-52) var(--space-16);
    background-color: var(--color-bg-tan);
  }
  a {
    color: var(--color-text-blue);
    text-decoration: underline;
    margin-top: var(--space-16);
  }
</style>
