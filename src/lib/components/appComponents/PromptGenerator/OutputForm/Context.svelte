<script lang="ts">
  import { getContext } from "svelte";
  import all_contexts from "../Data/strategy_context.json";
  import type { PromptGeneratorController } from "../controller";
  import { getContextForStrategy } from "./controller";
  import type { StrategyContexts } from "$lib/types/globalInterfaces";
  import Select from "$lib/components/globalComponents/Select/Select.svelte";

  const PromptController: PromptGeneratorController =
    getContext("PromptController");
  let contexts: StrategyContexts[] | undefined = getContextForStrategy(
    PromptController.getSelectedStrategy,
    all_contexts
  );

  let text = "";

  function handleSelectChange(value: string) {
    const targetValue = contexts?.filter(
      (context) => context.version === value
    )[0];
    text = PromptController.getCustomText(targetValue?.context ?? "");
  }
</script>

<h1 class="c-light-purple-50">The context</h1>

<label for="context" class="c-light-purple-100">Version:</label>
<Select
  id="context"
  options={contexts?.map((context) => ({
    value: context.version,
    label: context.version,
  })) ?? []}
  onChangeValue={(label, value) => handleSelectChange(value)}
/>

<p class="text-start c-light-purple-50">{text}</p>
