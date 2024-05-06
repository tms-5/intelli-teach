<script lang="ts">
  import './PromptGeneratorPage.scss'
  import { setContext } from "svelte";
  import Card from "$lib/components/globalComponents/Card/Card.svelte";
  import SelectStrategy from "./SelectStrategy/SelectStrategy.svelte";
  import StrategyQuestions from "./StrategyQuestions/StrategyQuestions.svelte";
  import { PromptGeneratorController } from "./controller";
  import Output from "./OutputForm/Output.svelte";

  let current_step = 0;
  let PromptController = new PromptGeneratorController();

  function changeStep(step: number) {
    current_step = step;
  }

  setContext("PromptController", PromptController);
  setContext("changeStep", changeStep);
</script>

<main class="d-flex w-100 justify-center d-grid text-center">
  <Card>
    {#if current_step === 0}
      <SelectStrategy />
    {:else if current_step === 1}
      <StrategyQuestions />
    {:else if current_step === 2}
      <Output />
    {/if}
  </Card>
</main>
