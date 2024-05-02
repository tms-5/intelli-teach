<script lang="ts">
  import { getContext } from "svelte";
  import all_contexts from "../Data/strategy_context.json";
  import type { PromptGeneratorController } from "../controller";
  import { getContextForStrategy } from "./controller";
  import type { StrategyContexts } from "$lib/types/globalInterfaces";

  const PromptController: PromptGeneratorController =
    getContext("PromptController");
  let contexts: StrategyContexts[] | undefined = getContextForStrategy(
    PromptController.getSelectedStrategy,
    all_contexts
  );

  let selectedContext = contexts?.[0] ?? null;
  let text = "";

  function handleSelectChange(event: Event) {
    const targetValue = (event.target as HTMLSelectElement).selectedIndex - 1;
    selectedContext = contexts?.[targetValue] ?? null;
    text = PromptController.getCustomText(selectedContext?.context ?? "");
  }
</script>

<div class="justify-center text-center">
  <h1>The context</h1>
  <div class="d-grid justify-center">
    <label for="context">Context:</label>
    <select
      class="bg-light-blue-100 d-grid"
      id="context"
      on:change={handleSelectChange}
    >
      <option value="0" class="d-none">Select a version</option>
      {#if contexts}
        {#each contexts as context}
          <option value={context.version}>{context.version}</option>
        {/each}
      {/if}
    </select>
  </div>

  <p class="text-start">{text}</p>
</div>
