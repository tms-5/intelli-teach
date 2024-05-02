<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { getStrategyQuestion } from "./controller";
  import type { QuestionsPromptForms } from "$lib/types/globalInterfaces";
  import { debounce } from "$lib/utils/functions";
  import type { PromptGeneratorController } from "../controller";

  let disabled = true;
  const changeStep = getContext<(arg0: number) => void>("changeStep");
  const PromptController =
    getContext<PromptGeneratorController>("PromptController");
  let questions: any[] = [];

  let answers: Record<string, string | number | boolean | string[]> = {};

  onMount(() => {
    const selectedStrategy = PromptController.getSelectedStrategy;
    questions = getStrategyQuestion(selectedStrategy);
    PromptController.initializeForms(questions);
    answers = PromptController.getFormsData;
  });

  function handleAnswer(question: QuestionsPromptForms, event: Event) {
    const { value } = event.target as HTMLInputElement | HTMLSelectElement;
    disabled = PromptController.changeForm(question.key, value);
  }

  const debouncedUpdate = debounce(handleAnswer, 200);
</script>

<div class="gap-1r d-grid">
  {#each questions as question}
    <div class="d-grid">
      <label for="prompt">{question.question}</label>
      {#if question.type === "select"}
        <select
          class="bg-light-blue-100 d-grid"
          bind:value={answers[question.key]}
          on:change={(event) => handleAnswer(question, event)}
        >
          <option value="-1" class="d-none" selected>Select an option</option>
          {#each question.options as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      {:else if question.type === "text"}
        <input
          type="text"
          bind:value={answers[question.key]}
          on:input={(event) => debouncedUpdate(question, event)}
        />
      {/if}
    </div>
  {/each}
</div>
<div class="d-flex justify-s-b w-100">
  <button on:click={() => changeStep(0)} class="w-auto">Back</button>
  <button on:click={() => changeStep(2)} class="w-auto" {disabled}>Next</button>
</div>
