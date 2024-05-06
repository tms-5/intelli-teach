<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  $: currentPath = $page.url.pathname;

  const navigateTo = (route: string) => {
    goto(route);
    currentPath = route;
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "Prompt Generator", path: "/prompt-generator" },
    { name: "Strategies", path: "/strategies" },
    { name: "About", path: "/about-project" },
  ];
</script>

<nav class="d-flex justify-s-b pl-1r pr-1r bg-deep-blue-300 mb-2r">
  <h3 class="c-light-purple-25">IntelliTeach</h3>
  <ul class="d-flex gap-1r">
    {#each routes as { name, path }, i}
      <li>
        <button
          class="nav-button b-none p-relative bg-transparent fw-500 f-1r c-pointer {currentPath ===
          path
            ? 'c-light-blue-200 fw-800'
            : 'c-light-purple-100 fw-600'}"
          on:click={() => navigateTo(path)}
          on:keydown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              navigateTo(path);
            }
          }}
        >
          {name}</button
        >
      </li>
    {/each}
  </ul>
</nav>
