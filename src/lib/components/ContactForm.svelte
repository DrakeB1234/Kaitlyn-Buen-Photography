<script lang="ts">
  import SendIcon from "$lib/icons/SendIcon.svelte";

  const {
    labelColor = "var(--color-white)",
    center = true,
    maxWidth = 0,
  }: { labelColor?: string; center?: boolean; maxWidth?: number } = $props();

  const emailto: string = "dkbuentello@gmail.com";
  let subject: string = $state("Photography Services");
  let message: string = $state("");
</script>

<form
  style="margin-inline: {center ? 'auto' : 'unset'}; max-width: {maxWidth
    ? `${maxWidth}px`
    : 'unset'};"
>
  <label for="subject" style="color: {labelColor}">Subject</label>
  <input id="subject" placeholder="Subject" bind:value={subject} />

  <label for="message" style="color: {labelColor}">Message</label>
  <textarea
    id="message"
    placeholder="Hello Kaitlyn! I am interested in booking a appointment with you for a couples shoot!"
    bind:value={message}
  ></textarea>
  <a
    href="mailto:{emailto}?subject={subject}&body={message}"
    class="button-primary"
  >
    <SendIcon size={20} color="var(--color-white)" />
    <p class="body">Send</p>
  </a>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin-inline: auto;

    & label {
      color: var(--color-white);
      margin-bottom: var(--spacing-xsmall);
    }

    & textarea,
    input {
      padding: var(--spacing-small) var(--spacing-small);
      border-radius: var(--radius-small);
      border: 1px solid var(--color-neutral-base);
      margin-bottom: var(--spacing-base);
      color: var(--color-primary-xdark);

      &::placeholder {
        color: var(--color-neutral-dark);
      }
    }

    & textarea {
      min-height: 8em;
      resize: none;
    }
  }
</style>
