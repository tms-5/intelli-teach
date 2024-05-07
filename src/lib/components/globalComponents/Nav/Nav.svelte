<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import logo from "$lib/assets/img/logo.png";

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

<nav class="d-flex justify-s-b pl-1r pr-1r bg-deep-blue-300 mb-2r align-center">
  <div class="d-flex align-center c-pointer" on:click={() => goto("/")}>
    <img src={logo} height="40" alt="Logo" />
    <div class="c-light-blue-200 f-1-1">
      <span class="c-white fw-800">GO</span>Teacher
    </div>
  </div>
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
