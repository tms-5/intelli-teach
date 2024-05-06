<script lang="ts">
  import "./Strategies.scss";
  import Card from "$lib/components/globalComponents/Card/Card.svelte";
  import Strategy1 from "./Strategy/Strategy1.svelte";
  import Strategy2 from "./Strategy/Strategy2.svelte";
  import Strategy3 from "./Strategy/Strategy3.svelte";
  import Strategy4 from "./Strategy/Strategy4.svelte";
  import Strategy5 from "./Strategy/Strategy5.svelte";

  let strategies = [
    {
      value: 1,
      text: "Using AI to Produce Many Varied Examples",
    },
    {
      value: 2,
      text: "Using AI to Provide Multiple Explanations",
    },
    {
      value: 3,
      text: "Using AI to Develop Low-Stakes Tests",
    },
    {
      value: 4,
      text: "Using AI to Assess Student Learning",
    },
    {
      value: 5,
      text: "Using AI to Distribute Practice of Important Ideas",
    },
  ];

  let selectedStrategy = 1;
</script>

<section class="d-flex justify-center strategies-container">
  <aside class="gap-1r wrapper-menu">
    {#each strategies as strategy}
      <button
        class="square-menu-strategy {selectedStrategy == strategy.value
          ? 'selected'
          : ''}"
        on:click={() => {
          selectedStrategy = strategy.value;
        }}
      >
        <span>Strategy {strategy.value}</span>
        <span>{strategy.text}</span>
      </button>
    {/each}
  </aside>
  <aside>
    <Card className="c-light-blue-200">
      {#if selectedStrategy === 1}
        <Strategy1 />
      {:else if selectedStrategy === 2}
        <Strategy2 />
      {:else if selectedStrategy === 3}
        <Strategy3 />
      {:else if selectedStrategy === 4}
        <Strategy4 />
      {:else if selectedStrategy === 5}
        <Strategy5 />
      {/if}
    </Card>
  </aside>
</section>
