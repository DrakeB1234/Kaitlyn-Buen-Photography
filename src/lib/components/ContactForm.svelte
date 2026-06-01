<script lang="ts">
  import { emailLink } from "$lib/helpers/helpers";
  import Icon from "./Icon.svelte";

  const {
    variant = "brand",
    textareaPlaceholder = "Hello Kaitlyn! I am interested in booking a appointment with you for a couples shoot!",
  }: { variant?: "brand" | "white"; textareaPlaceholder?: string } = $props();

  const emailto: string = emailLink;
  let subject: string = $state("Photography Services");
  let message: string = $state("");
</script>

<div class="wrapper">
  <h2 class={"text-variant-" + variant}>Get in Touch!</h2>
  <form>
    <label for="subject" class={"text-variant-" + variant}>Subject</label>
    <input id="subject" placeholder="Subject" bind:value={subject} />

    <label for="message" class={"text-variant-" + variant}>Message</label>
    <textarea
      id="message"
      placeholder={textareaPlaceholder}
      bind:value={message}
    ></textarea>
    <a
      href="mailto:{emailto}?subject={subject}&body={message}"
      class="btn btn-color-blue"
    >
      <Icon name="material-send" color="var(--color-text-inverse)" />
      <p>Send</p>
    </a>
  </form>
</div>

<style>
  .wrapper {
    padding: var(--space-52) var(--space-24);
  }
  form {
    display: grid;

    max-width: 450px;
    margin: auto;
    margin-top: var(--space-36);
  }
  .text-variant-brand {
    color: white;
  }
  h2 {
    text-align: center;
  }
  label {
    line-height: 1.5;
    font-size: var(--font-size-base);
    margin-bottom: var(--space-4);
  }
  input,
  textarea {
    border: 1px solid var(--color-border);
    padding: var(--space-12);
    border-radius: var(--radius-base);
  }
  textarea {
    min-height: 8em;
    resize: none;
  }
  input {
    margin-bottom: var(--space-16);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);

    padding-block: var(--space-4);
    margin-top: var(--space-24);
  }

  a p {
    color: var(--color-text-inverse);
  }
</style>
