<script lang="ts">
  import "./Card.scss";

  export let className = "";
</script>

<section class="d-grid gap-1r card-container justify-center {className}">
  <slot />
</section>
