<script lang="ts">
  import { getContext } from "svelte";
  import type { PromptGeneratorController } from "../controller";
  import Select from "$lib/components/globalComponents/Select/Select.svelte";
  import Button from "$lib/components/globalComponents/Button/Button.svelte";

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

<div class="text-start">
  <label for="prompt" class="c-light-blue-100 fw-700"
    >1- What strategy do you want to choose?</label
  >
  <div class="mt-1r" />
  <Select
    options={strategies.map((strategy) => ({
      ...strategy,
      label: strategy.text,
    }))}
    defaultValue={selectedStrategy}
    id="selectStrategy"
    onChangeValue={(label, value) =>
      handleChangeStrategy({ currentTarget: { value } })}
  />
</div>
<div class="d-flex justify-end">
  <Button
    label="Next"
    onClick={() => changeStep(1)}
    className="w-auto"
    style="senary"
  />
</div>
