---
layout: page
title: Projects
permalink: /projects/
---

<style>
.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.project-title {
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 5px;
}

.project-subtitle {
  font-size: 0.95em;
  color: #666;
  margin-bottom: 15px;
}

.project-abstract {
  margin-bottom: 15px;
  line-height: 1.5;
}

.project-media {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.project-media embed {
  border-radius: 8px;
}
</style>

---

<div class="project-card">

<div class="project-title">
GRAB: GRounding-based, Repository-Aware Boolean Gate — Reducing Hallucinations via Tool Usage Awareness in LLM-based Coding Agents
</div>

<div class="project-subtitle">
(Final project for CS 229: Machine Learning)
</div>

<div class="project-abstract">
Large language model (LLM)-based coding agents frequently hallucinate implementation details such as incorrect API calls, nonexistent file paths, and fabricated configuration keys. These failures arise when the agent attempts to act under an incomplete context window instead of explicitly requesting missing information via tools.

We study tool use awareness for coding agents: given a prompt, a draft code snippet, and repository context, should the agent invoke an information-gathering tool or proceed without one? We frame this as a supervised classification problem over a repository-level hallucination feature vector and train a constrained XGBoost classifier, GRAB (GRounding-based, Repository-Aware Boolean gate), to gate tool calls within an iterative refinement loop.

On SWE-bench Verified, GRAB reduces hallucination rate from ~50–69% baselines to 44%, while maintaining optimal tool efficiency.
</div>

<div class="project-media">
  <embed src="/assets/projects/GRAB.pdf" type="application/pdf" width="300px" height="200px" />
  <embed src="/assets/projects/GRAB_poster.pdf" type="application/pdf" width="300px" height="200px" />
</div>

</div>

---

<div class="project-card">

<div class="project-title">
Provable Limits of Expressivity of Transformers
</div>

<div class="project-subtitle">
2026 — ongoing · Final project for CS 254: Complexity Theory
</div>

<div class="project-abstract">
This project investigates the circuit complexity of functions computed by transformer architectures and the formal language classes they can recognize.

We analyze how attention mechanisms (hard vs. soft, unique vs. averaged) influence expressivity, and how transformer depth (fixed vs. O(log n)) affects computational power. The work explores both unconditional impossibility results and limits under standard complexity assumptions, aiming to bridge the gap between theoretical constraints and empirical success.
</div>

<div class="project-media">
  <embed src="CS_254_Final_Report.pdf" type="application/pdf" width="300px" height="200px" />
</div>

</div>

---

<div class="project-card">

<div class="project-title">
Is AI as Racist as We Think? Contextualizing Bias in Human and LLM Criminal Judgments
</div>

<div class="project-subtitle">
2025 — ongoing
</div>

<div class="project-abstract">
This project uses a matched-guise experimental design to compare professional human judgments and commercially available LLMs on identical decision-making tasks. The focus is on criminal guilt and sentencing severity derived from controlled case descriptions.

The study isolates how linguistic cues shape divergence in reasoning across biological and probabilistic systems, offering insight into how bias manifests differently in humans versus models.
</div>

<div class="project-media">
  <!-- Add files when available -->
  <!-- <embed src="bias_paper.pdf" width="300px" height="200px" /> -->
  <!-- <embed src="bias_poster.pdf" width="300px" height="200px" /> -->
</div>

</div>

