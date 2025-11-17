<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Reviews from "$lib/components/Reviews.svelte";
  import Wrapper from "$lib/components/Wrapper.svelte";
</script>

<Navbar />
<Wrapper backgroundColor="var(--color-accent-base)">
  <About />
  <Reviews />
</Wrapper>
<Footer />
