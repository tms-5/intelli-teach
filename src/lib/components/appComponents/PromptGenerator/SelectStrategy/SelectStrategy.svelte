<script lang="ts">
  import { getContext } from "svelte";
  import type { PromptGeneratorController } from "../controller";

  const PromptController: PromptGeneratorController =
    getContext("PromptController");
  const changeStep: (step: number) => void = getContext("changeStep");
  let selectedStrategy: number = PromptController.getSelectedStrategy;

  function handleChangeStrategy(event: { currentTarget: { value: any } }) {
    PromptController.changeChooseStrategy(Number(event.currentTarget.value));
  }
  let strategies = [
    {
      value: 1,
      text: "Strategy 1: Using AI to Produce Many Varied Examples",
    },
    {
      value: 2,
      text: "Strategy 2: Using AI to Provide Multiple Explanations",
    },
    {
      value: 3,
      text: "Strategy 3: Using AI to Develop Low-Stakes Tests",
    },
    {
      value: 4,
      text: "Strategy 4: Using AI to Assess Student Learning",
    },
    {
      value: 5,
      text: "Strategy 5: Using AI to Distribute Practice of Important Ideas",
    },
  ];
</script>

<div>
  <label for="prompt">1- What strategy do you wanna choose?</label>
  <select class="bg-light-blue-100 d-grid" on:change={handleChangeStrategy}>
    <option value="0" class="d-none">Select a strategy</option>
    {#each strategies as strategy}
      <option
        value={strategy.value}
        selected={selectedStrategy == strategy.value}>{strategy.text}</option
      >
    {/each}
  </select>
</div>
<div class="d-flex">
  <button on:click={() => changeStep(1)} class="w-auto">Next</button>
</div>
