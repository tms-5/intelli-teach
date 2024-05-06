<script lang="ts">
  function formatTopic(topic: string, index: number, text: string) {
    return `<p><span>${index}. <b>${topic}</b>:</span> ${text}</p>`;
  }
</script>

<div class="uppercase fw-900 f-2">Strategy 2</div>
<div class="text w-100">
  <p>
    This strategy emphasizes the importance of delivering logical and coherent
    explanations to effectively teach and build foundational knowledge among
    students. According to Ericsson & Lehmann (1996) and Willingham (2023),
    effective teaching explanations must consider several key elements:
  </p>

  {@html formatTopic(
    "Assessment of Prior Knowledge",
    1,
    "Instructors need to understand what students already know to tailor explanations accordingly."
  )}
  {@html formatTopic(
    "Structured Sequencing",
    2,
    "Explanations should progress from simple to complex, ensuring a clear and manageable learning trajectory"
  )}
  {@html formatTopic(
    "Use of Organizational Cues",
    3,
    "Signals such as 'next we'll move on to…' help students follow the structure of the lesson and understand the progression of topics."
  )}
  {@html formatTopic(
    "Inclusion of Concrete Details",
    4,
    "Adding examples or analogies helps students relate new concepts to familiar ideas, enhancing comprehension and retention."
  )}
  {@html formatTopic(
    "Teaching for Reproduction",
    5,
    "The ultimate goal is for students to articulate the concepts in their own words, demonstrating thorough understanding."
  )}

  <h3><b>Benefits:</b></h3>
  {@html formatTopic(
    "Enhanced Understanding",
    1,
    "Well-structured explanations facilitate deeper comprehension and help students form robust mental maps of topics."
  )}
  {@html formatTopic(
    "Increased Engagement",
    2,
    "Using familiar examples and a clear sequence keeps students engaged and makes learning more accessible."
  )}
  {@html formatTopic(
    "Improved Knowledge Retention",
    3,
    "Organizational cues and step-by-step explanations aid in memory retention and recall."
  )}

  <h3><b>Potential Pitfalls:</b></h3>
  {@html formatTopic(
    "Time-Consuming Preparation",
    1,
    "Crafting multiple, detailed explanations tailored to diverse student backgrounds and understanding levels can be labor-intensive."
  )}
  {@html formatTopic(
    "Cognitive Overload",
    2,
    "Too much detail or complex terminology might overwhelm novices, hindering their ability to grasp fundamental concepts."
  )}
  {@html formatTopic(
    "Expert Blindness",
    3,
    "Instructors, as experts, may struggle to simplify their deep knowledge into forms that are accessible to beginners."
  )}
  <p>
    Language models like ChatGPT can be extremely valuable in assisting teachers
    with the strategy of delivering logical and coherent explanations,
    addressing many of the challenges inherent in this approach. Here’s how AI
    can be effectively integrated:
  </p>
</div>
