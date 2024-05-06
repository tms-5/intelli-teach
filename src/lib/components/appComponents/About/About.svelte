<script>
  import "./About.scss";
  import Card from "$lib/components/globalComponents/Card/Card.svelte";
</script>

<section class="c-light-purple-100 d-flex justify-center about-container">
  <Card className="w-80">
    <h1>About the Project</h1>
    <div class="text">
      <p>
        The project began as a partnership between the Informatics Center at
        UFPE and the CSAIL group at the American School of Recife. CSAIL is a
        technology group focused on extracurricular activities.
      </p>
      <p>
        The "GenAI&Education Project" aims to apply strategies discussed in the
        article "Using AI to Implement Effective Teaching Strategies in
        Classrooms: Five Strategies, Including Cues" by Dr. Ethan Mollick and
        Dr. Lilach Mollick. The article provides guidance on using AI to rapidly
        implement evidence-based teaching strategies that instructors can
        integrate into their lessons. It discusses five teaching strategies with
        proven value, but difficult to implement in practice due to time and
        effort constraints. It shows how AI can help instructors create
        materials that support these strategies and improve student learning.
        The strategies include providing multiple examples and explanations;
        identifying and addressing students' misconceptions; frequent low-risk
        testing; assessing students' learning; and distributed practice. The
        article offers guidelines on how AI can support each strategy and
        discusses both the promises and perils of this approach, arguing that AI
        can act as a "force multiplier" for instructors if implemented
        cautiously and carefully in support of evidence-based teaching
        practices.
      </p>
      <p>
        The goal of our work with CSAIL is to refine and improve these developed
        suggestions and apply them with teachers for validation.
      </p>
      <p>
        The methodology of the work includes weekly in-person and online
        meetings where we discuss progress and next steps. Initially, we focused
        on contextualizing the project and aligning expectations with the group.
        We decided to develop a presentation for the school coordinator to
        approve the project. After approval, the CSAIL students presented the
        project to other teachers to encourage their participation in the
        experiment. Teachers who agreed to participate were Tarcísio Melo
        (Chemistry), Patrícia Barros (Portuguese, Literature, and Writing),
        Angelyca Rocha (Portuguese and Literature), and Rafel Cadena (Physics
        and Earth Sciences). We conducted individual interviews with each of
        them to understand their needs and interests.
      </p>
      <p>
        Next, we explained the project to the teachers, contextualized the
        strategies, and discussed which would be most relevant to their classes.
        After choosing the strategies, we refined the prompts provided by the
        article, creating a context for each and using prompt engineering to
        improve them. Then, we generated the outputs with GPT and delivered them
        to the teachers for validation.
      </p>
      <p>
        We identified the need to develop a tool that would allow teachers to
        insert the prompt skeleton and generate a form for them to fill out.
        This form would be sent to the GPT, and the final output would be
        returned to the teacher. However, to test the integration with the GPT,
        we need credits; meanwhile, we use our own personal GPT and send the
        outputs for validation.
      </p>
    </div>
  </Card>
</section>
