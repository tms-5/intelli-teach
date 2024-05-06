<script lang="ts">
  import "./Select.scss";
  import { onMount, afterUpdate } from "svelte";
  import Arrow from "$lib/assets/icons/arrow-select.svg";
  // COMPONENT
  import OptionSelect from "./Option/OptionSelect.svelte";
  // STORE
  import type { SelectOption } from "$lib/types/globalInterfaces";

  export let className: string | undefined = undefined;
  export let options: SelectOption[];
  export let onChangeValue: (label: string, value: any) => void;
  export let defaultValue: any = "";
  export let id: string = "";

  export let defaultInitialLabelShow: boolean = true;

  let viewOptions = false;
  let optionChecked: SelectOption;
  let isExpanded: boolean = false;
  let element: HTMLDivElement;
  let width_options: number;

  function activeOption(label: string | number, optionChecked: any) {
    return label === optionChecked ? true : false;
  }

  function onClickOption(label: string, value: any) {
    optionChecked = { label: label, value: value };
    onChangeValue(label, value);
  }

  function changeOptionChecked(value: any) {
    if (Array.isArray(options)) {
      const foundOption = options.find((element) => element.value === value);
      if (foundOption !== undefined) {
        optionChecked = foundOption;
      } else {
        optionChecked = {
          label: "",
          value: "",
        };
      }
    } else {
      optionChecked = {
        label: "",
        value: "",
      };
    }
  }

  $: width_options = element?.clientWidth;

  onMount(() => {
    changeOptionChecked(defaultValue);
  });

  afterUpdate(() => {
    if (viewOptions || isExpanded) {
      width_options = element?.clientWidth;
    }
  });

  function handleViewOptionsChange() {
    viewOptions = !viewOptions;
    isExpanded = !isExpanded;
  }
</script>

<div id={id ?? "app-cover"} class="p-relative">
  <div
    role="button"
    tabindex="0"
    class="search-field {className} w-100 c-pointer"
    on:click={handleViewOptionsChange}
    on:keydown={(e) => {
      if (e?.key === "Enter") handleViewOptionsChange;
    }}
    bind:this={element}
  >
    <div class="selected-value no-br">
      <span>
        {optionChecked?.label ||
          (defaultInitialLabelShow ? "Select a option" : "")}
      </span>
      <img src={Arrow} width="10px" alt="Arrow" />
    </div>
  </div>
  {#if viewOptions || isExpanded}
    <div
      id="options"
      style={`width:${width_options - 20}px;`}
      on:mouseleave={handleViewOptionsChange}
      role="button"
      tabindex="0"
    >
      {#each options as option}
        <OptionSelect
          label={option?.label}
          value={option?.value}
          checked={activeOption(option?.value, optionChecked?.value)}
          onClick={onClickOption}
        />
      {/each}
      <div id="option-bg" />
    </div>
  {/if}
</div>
