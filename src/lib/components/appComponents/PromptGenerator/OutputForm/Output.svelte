<script lang="ts">
  import { getContext } from "svelte";
  import Context from "./Context.svelte";
  import Prompt from "./Prompt.svelte";
  import Button from "$lib/components/globalComponents/Button/Button.svelte";

  const changeStep: (step: number) => void = getContext("changeStep");
</script>

<div class="text-start">
  <Context />
  <div class="mt-3r" />
  <Prompt />
</div>
<div class="d-flex">
  <Button
    label="Back"
    onClick={() => changeStep(1)}
    className="w-auto"
    style="quaternary"
  />
</div>
