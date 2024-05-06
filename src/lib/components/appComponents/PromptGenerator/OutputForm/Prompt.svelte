<script lang="ts">
  import { getContext } from "svelte";
  import all_prompts from "../Data/strategy_prompt.json";
  import type { PromptGeneratorController } from "../controller";
  import { getPromptForStrategy } from "./controller";
  import type { StrategyPrompt } from "$lib/types/globalInterfaces";
  import Select from "$lib/components/globalComponents/Select/Select.svelte";

  const PromptController: PromptGeneratorController =
    getContext("PromptController");
  let prompts: StrategyPrompt[] | undefined = getPromptForStrategy(
    PromptController.getSelectedStrategy,
    all_prompts
  );

  let text = "";

  function handleSelectChange(value: string) {
    const targetValue = prompts?.filter(
      (prompt) => prompt.version === value
    )[0];
    text = PromptController.getCustomText(targetValue?.prompt ?? "");
  }
</script>

<h1 class="c-light-purple-50">The Prompt</h1>

<label for="context" class="c-light-purple-100">Version:</label>
<Select
  id="context"
  options={prompts?.map((prompt) => ({
    value: prompt.version,
    label: prompt.version,
  })) ?? []}
  onChangeValue={(label, value) => handleSelectChange(value)}
/>

<p class="text-start c-light-purple-50">{text}</p>
