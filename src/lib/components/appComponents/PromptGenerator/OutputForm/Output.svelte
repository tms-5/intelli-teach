<script lang="ts">
  import { getContext } from "svelte";
  import Context from "./Context.svelte";
  import Prompt from "./Prompt.svelte";

  const changeStep: (step: number) => void = getContext("changeStep");
</script>

<div>
  <Context />
  <div class="mt-3r" />
  <Prompt />
</div>
<div class="d-flex">
  <button on:click={() => changeStep(1)} class="w-auto">Back</button>
</div>
