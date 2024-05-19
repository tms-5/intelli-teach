<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { getStrategyQuestion } from "./controller";
  import type { QuestionsPromptForms } from "$lib/types/globalInterfaces";
  import { debounce } from "$lib/utils/functions";
  import type { PromptGeneratorController } from "../controller";
  import Button from "$lib/components/globalComponents/Button/Button.svelte";
  import Select from "$lib/components/globalComponents/Select/Select.svelte";
  import Input from "$lib/components/globalComponents/Input/Input.svelte";

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

  function handleAnswer(
    question: QuestionsPromptForms,
    value: string | number
  ) {
    disabled = PromptController.changeForm(question.key, value);
  }

  const debouncedUpdate = debounce(handleAnswer, 200);

  function returnString(value: string | number | boolean | string[]) {
    return value.toString();
  }

  function handleAnswerTextArea(question: QuestionsPromptForms, event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    disabled = PromptController.changeForm(question.key, value);
  }
</script>

<div class="gap-1r d-grid text-start">
  {#each questions as question}
    <div class="d-grid">
      <label for="prompt" class="c-light-blue-100 fw-700"
        >{question.question}</label
      >
      <div class="mt-1r" />
      {#if question.type === "select"}
        <Select
          options={question.options.map((option) => ({
            value: option,
            label: option,
          }))}
          defaultValue={answers[question.key]}
          onChangeValue={(label, value) => handleAnswer(question, value)}
        />
      {:else if question.type === "text"}
        <Input
          id={question.key}
          value={answers[question.key]}
          onChange={(name, value) => debouncedUpdate(question, value)}
          placeholder={question.placeholder}
        />
      {:else if question.type === "text-area"}
        <textarea
          id={question.key}
          value={returnString(answers[question.key])}
          on:input={(event) => handleAnswerTextArea(question, event)}
          placeholder={question.placeholder}
          class="w-100 p-1r"
        ></textarea>
      {/if}
    </div>
  {/each}
</div>
<div class="d-flex justify-s-b w-100">
  <Button
    label="Back"
    onClick={() => changeStep(0)}
    className="w-auto"
    style="quaternary"
  />
  <Button
    label="Next"
    onClick={() => changeStep(2)}
    className="w-auto"
    style="senary"
    {disabled}
  />
</div>
