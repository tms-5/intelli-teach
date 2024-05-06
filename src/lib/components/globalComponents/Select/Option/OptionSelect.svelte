<script lang="ts">
  export let label: string;
  export let value: string | number;
  export let checked: boolean = false;
  export let onClick: (label: string, value: string | number) => void;
</script>

<div
  class={`option p-2 d-flex gap-1 align-center c-pointer ${checked ? "check-active" : "non-active"}`}
  on:click={() => {
    onClick(label, value);
    checked = !checked;
  }}
  on:keyup={() => {}}
  role="button"
  tabindex="0"
>
  <input
    class="option-select"
    type="radio"
    name="platform"
    {value}
    {checked}
  />
  <span class="f-09 fw-600 mr-1 first-letter-uppercase">{label}</span>
</div>
