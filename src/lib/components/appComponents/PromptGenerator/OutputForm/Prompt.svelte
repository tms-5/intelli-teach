<script lang="ts">
  import { getContext } from "svelte";
  import all_prompts from "../Data/strategy_prompt.json";
  import type { PromptGeneratorController } from "../controller";
  import { getPromptForStrategy } from "./controller";
  import type { StrategyPrompt } from "$lib/types/globalInterfaces";

  const PromptController: PromptGeneratorController =
    getContext("PromptController");
  let prompts: StrategyPrompt[] | undefined = getPromptForStrategy(
    PromptController.getSelectedStrategy,
    all_prompts
  );

  let selectedPrompt = prompts?.[0] ?? null;
  let text = "";

  function handleSelectChange(event: Event) {
    const targetValue = (event.target as HTMLSelectElement).selectedIndex - 1;
    selectedPrompt = prompts?.[targetValue] ?? null;
    text = PromptController.getCustomText(selectedPrompt?.prompt ?? "");
  }
</script>

<div class="justify-center">
  <h1>The Prompt</h1>
  <div class="d-grid justify-center">
    <label for="context">Context:</label>
    <select
      class="bg-light-blue-100 d-grid"
      id="context"
      on:change={handleSelectChange}
    >
      <option value="0" class="d-none">Select a version</option>
      {#if prompts}
        {#each prompts as prompt}
          <option value={prompt.version}>{prompt.version}</option>
        {/each}
      {/if}
    </select>
  </div>

  <p class="text-start">{text}</p>
</div>
