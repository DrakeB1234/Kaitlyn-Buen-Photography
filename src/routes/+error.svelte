<script lang="ts">
  import { page } from "$app/state";
</script>

<section>
  <h2 class="heading-primary">Oops!</h2>
  <h1 class="heading-secondary">{page.status}: {page.error?.message}</h1>
  <a href="/">Go back home</a>
</section>

<style>
  section {
    text-align: center;
    padding: var(--space-52) var(--space-16);
  }
  a {
    text-decoration: underline;
    color: var(--color-primary-light);
  }
</style>
