<script>
  import logo from "$lib/assets/img/logo.png";
  import { goto } from "$app/navigation";
  import Button from "$lib/components/globalComponents/Button/Button.svelte";

  const slides = [
    { component: "Slide 1", number: 1 },
    { component: "Slide 2", number: 2 },
    { component: "Slide 3", number: 3 },
  ];
</script>

<section class="d-grid justify-items-center pb-2r">
  <div class="w-80">
    <div
      class="fw-800 f-2 c-light-blue-100 text-center align-center d-flex justify-center"
    >
      <img src={logo} height="40" alt="Logo" />
      <span class="c-light-blue-200">GO</span>Teach
    </div>
    <p class="c-light-purple-50">
      The developed tool aims to facilitate the implementation of evidence-based
      teaching strategies in the context of high school education, integrating
      Artificial Intelligence technologies to enrich pedagogical practices.
      Inspired by the article "Using AI to Implement Effective Teaching
      Strategies in Classrooms" by Ethan Mollick and Lilach Mollick, the tool
      allows teachers to input specific data and combine it with prompts
      carefully refined by the project team. These prompts are sent to ChatGPT,
      which returns detailed and personalized outputs, offering practical
      resources for educators to incorporate the teaching strategies into their
      classes.
    </p>
  </div>
  <div class="d-flex gap-1r">
    <Button
      label="Learn More About The Strategies"
      onClick={() => goto("/prompt-generator")}
      className="w-auto"
      style="default"
    />
    <Button
      label="Get Started With The Tool"
      onClick={() => goto("/prompt-generator")}
      className="w-auto"
      style="septenary"
    />
  </div>
</section>
<!-- <section class="bg-light-blue-50 p-2">
  <div class="d-flex">
    <div>Strategia 1</div>
    <Caroussel {slides} />
  </div>
</section> -->
