<script lang="ts">
  type Props = {
    spacing?: string;
  };

  let { spacing }: Props = $props();
</script>

<ul
  role="list"
  style="justify-content: {spacing ? 'center' : 'space-evenly'}; gap: {spacing}"
>
  <li><a class="navbar-text" href="/">Home</a></li>
  <li><a class="navbar-text" href="/">About</a></li>
  <li><a class="navbar-text" href="/">Pricing</a></li>
  <li><a class="navbar-text" href="/">Gallery</a></li>
  <li><a class="navbar-text" href="/">Contact</a></li>
</ul>

<style>
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>
