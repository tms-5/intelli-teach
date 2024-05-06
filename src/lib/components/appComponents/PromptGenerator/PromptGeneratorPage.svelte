<script lang="ts">
  import './PromptGeneratorPage.scss'
  import { setContext } from "svelte";
  import FormsSkeleton from "./FormsSkeleton/FormsSkeleton.svelte";
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

<main class="d-flex w-100 justify-center p-3 d-grid text-center">
  <h1 class="c-white">IntelliTeach</h1>
  <FormsSkeleton>
    {#if current_step === 0}
      <SelectStrategy />
    {:else if current_step === 1}
      <StrategyQuestions />
    {:else if current_step === 2}
      <Output />
    {/if}
  </FormsSkeleton>
</main>
