---
layout: page
title: Projects
permalink: /projects/
---

<style>
.projects-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 8px;
}

.project-subtitle {
  font-size: 0.98rem;
  color: #666;
  margin-bottom: 18px;
}

.project-abstract {
  line-height: 1.7;
  margin-bottom: 20px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.project-button {
  display: inline-block;
  padding: 10px 14px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: inherit;
}

.project-button:hover {
  background-color: #f5f5f5;
}

.project-media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.media-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.media-label {
  font-size: 0.95rem;
  font-weight: 600;
}

.media-frame {
  width: 100%;
  height: 420px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  overflow: hidden;
  background: #fafafa;
}

.media-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.coming-soon {
  color: #777;
  font-style: italic;
}
</style>

<div class="projects-page">

<div class="project-card">
  <div class="project-title">
    GRAB: GRounding-based, Repository-Aware Boolean Gate — Reducing Hallucinations via Tool Usage Awareness in LLM-based Coding Agents
  </div>

  <div class="project-subtitle">
    Final project for CS 229: Machine Learning
  </div>

  <div class="project-abstract">
    Large language model (LLM)-based coding agents frequently hallucinate implementation details such as incorrect API calls, nonexistent file paths, and fabricated configuration keys. These failures arise when the agent attempts to act under an incomplete context window instead of explicitly requesting missing information via tools.
    <br><br>
    We study tool use awareness for coding agents: given a prompt, a draft code snippet, and repository context, should the agent invoke an information-gathering tool or proceed without one? We frame this as a supervised classification problem over a repository-level hallucination feature vector and train a constrained XGBoost classifier, GRAB (GRounding-based, Repository-Aware Boolean Gate), to gate tool calls within an iterative refinement loop.
    <br><br>
    On SWE-bench Verified, GRAB reduces hallucination rate from ~50–69% baselines to 44%, while maintaining optimal tool efficiency.
  </div>

  <div class="project-links">
    <a class="project-button" href="{{ '/assets/projects/GRAB.pdf' | relative_url }}" target="_blank" rel="noopener">Open report in new window</a>
    <a class="project-button" href="{{ '/assets/projects/GRAB_poster.pdf' | relative_url }}" target="_blank" rel="noopener">Open poster in new window</a>
  </div>

  <div class="project-media-grid">
    <div class="media-card">
      <div class="media-label">Report preview</div>
      <div class="media-frame">
        <iframe src="{{ '/assets/projects/GRAB.pdf' | relative_url }}"></iframe>
      </div>
    </div>

    <div class="media-card">
      <div class="media-label">Poster preview</div>
      <div class="media-frame">
        <iframe src="{{ '/assets/projects/GRAB_poster.pdf' | relative_url }}"></iframe>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-title">
    Provable Limits of Expressivity of Transformers
  </div>

  <div class="project-subtitle">
    2026 — ongoing · Final project for CS 254: Complexity Theory
  </div>

  <div class="project-abstract">
    This project investigates the circuit complexity of functions computed by transformer architectures and the formal language classes they can recognize.
    <br><br>
    We analyze how attention mechanisms, including hard versus soft attention and unique versus averaged attention, influence expressivity, and how transformer depth, including fixed depth versus O(log n), affects computational power.
  </div>

  <div class="project-links">
    <a class="project-button" href="{{ '/assets/projects/CS_254_Final_Report.pdf' | relative_url }}" target="_blank" rel="noopener">Open report in new window</a>
  </div>

  <div class="project-media-grid">
    <div class="media-card">
      <div class="media-label">Report preview</div>
      <div class="media-frame">
        <iframe src="{{ '/assets/projects/CS_254_Final_Report.pdf' | relative_url }}"></iframe>
      </div>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-title">
    Is AI as Racist as We Think? Contextualizing Bias in Human and LLM Criminal Judgments
  </div>

  <div class="project-subtitle">
    2025 — ongoing
  </div>

  <div class="project-abstract">
    This project uses a matched-guise experimental design to compare professional human judgments and commercially available LLMs on identical decision-making tasks.
  </div>

  <div class="coming-soon">
    Materials coming soon.
  </div>
</div>

</div>
