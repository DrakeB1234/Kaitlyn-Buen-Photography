<script lang="ts">
  import SendIcon from "$lib/icons/SendIcon.svelte";

  const {
    labelColor = "var(--color-white)",
    center = true,
    maxWidth = 0,
  }: { labelColor?: string; center?: boolean; maxWidth?: number } = $props();

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(e);
  };
</script>

<form
  onsubmit={handleFormSubmit}
  style="margin-inline: {center ? 'auto' : 'unset'}; max-width: {maxWidth
    ? `${maxWidth}px`
    : 'unset'};"
>
  <label for="email" style="color: {labelColor}">Your Email</label>
  <input name="email" placeholder="youremail@gmail.com" />
  <label for="message" style="color: {labelColor}">Message</label>
  <textarea
    name="message"
    placeholder="Hello Kaitlyn! I am interested in booking a appointment with you for a couples shoot!"
  ></textarea>
  <button type="submit">
    <SendIcon size={20} color="var(--color-white)" />
    <p class="body">Send</p>
  </button>
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

    & input,
    textarea {
      padding: var(--spacing-small) var(--spacing-small);
      border-radius: var(--radius-small);
      border: 1px solid var(--color-neutral-base);
      margin-bottom: var(--spacing-base);
      color: var(--color-primary-xdark);

      &::placeholder {
        color: var(--color-neutral-dark);
      }
    }

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-xsmall);
      padding: var(--spacing-xsmall) var(--spacing-base);
      margin-top: var(--spacing-base);
      border-radius: var(--radius-base);
      border: 1px solid var(--color-primary-base);
      background-color: var(--color-primary-xlight);
      color: var(--color-white);
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--color-primary-light);
      }
    }

    & textarea {
      min-height: 8em;
      resize: none;
    }
  }
</style>
