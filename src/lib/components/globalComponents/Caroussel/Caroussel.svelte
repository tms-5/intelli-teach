<script lang="ts">
  import "./Caroussel.scss";
  export let slides: { component: any; number: number }[] = [];
</script>

<div class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    {#each slides as { component, number }, i}
      <li class="carousel__slide">
        <div class="carousel__snapper">
          {#if i > 0}
            <a href={`#carousel__slide${i}`} class="carousel__prev"
              >Go to previous slide</a
            >
          {:else}
            <a href={`#carousel__slide${slides.length}`} class="carousel__prev"
              >Go to last slide</a
            >
          {/if}
          {#if i < slides.length - 1}
            <a href={`#carousel__slide${i + 2}`} class="carousel__next"
              >Go to next slide</a
            >
          {:else}
            <a href="#carousel__slide1" class="carousel__next"
              >Go to first slide</a
            >
          {/if}
        </div>
        <div class="carousel__snapper">
          {#if component}
            {#if typeof component === "object"}
              <svelte:component this={component} />
            {:else if typeof component === "string"}
              {@html component}
            {/if}
          {/if}
        </div>
      </li>
    {/each}
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      {#each slides as { number }, i}
        <li class="carousel__navigation-item">
          <a
            href={`#carousel__slide${i + 1}`}
            class="carousel__navigation-button">Go to slide {number}</a
          >
        </li>
      {/each}
    </ol>
  </aside>
</div>
