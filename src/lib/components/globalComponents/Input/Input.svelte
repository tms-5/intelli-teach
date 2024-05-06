<script lang="ts">
  import { debounce } from "$lib/utils/functions";
  import "./Input.scss";

  export let labelText: string = "";
  export let id: string = "";
  export let placeholder: string = "";
  export let className: string = "";
  export let value: any = "";
  export let type: string = "text";
  export let rightImage: string = "";
  export let max_length: number = 100;
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let onChange: (name: string, value: string) => void = () => {};
  export let onRightButtonClick: () => void = () => {};
  let hasnt_error = true;

  const debouncedUpdate = debounce(handleInput, 200);

  function handleInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    hasnt_error = newValue.length > 0;
    if (hasnt_error) {
      onChange(id, newValue);
    }
  }

  $: {
    if (required && !value) {
      hasnt_error = false;
    } else {
      hasnt_error = value.length > 0;
    }
  }
</script>

<div class="d-flex direction-column align-start w-100">
  {#if labelText}
    <label for="input">{labelText}</label>
  {/if}
  <div class="w-100 p-relative d-flex align-center">
    <input
      name="input"
      {id}
      {placeholder}
      class={`input-field ${className} ${rightImage ? "pr-2r" : ""} ${hasnt_error ? "b-none" : "error"}`}
      maxlength={max_length}
      {type}
      {value}
      {disabled}
      on:input={debouncedUpdate}
    />

    {#if rightImage && !disabled}
      <button
        class="p-absolute img-input-field bg-transparent b-none d-flex align-center"
        on:click={onRightButtonClick}
        on:keydown={() => {}}
        aria-label="rightImage"
      >
        <img src={rightImage} alt="rightImage" width="13px" />
      </button>
    {/if}
  </div>
</div>
