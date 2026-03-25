---
layout: page
title: Blog
permalink: /blog/
---

<style>
.blog-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.blog-hero {
  text-align: center;
  margin: 0 auto 2.75rem auto;
}

.blog-hero p {
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.7;
}

.blog-section-block {
  margin-top: 2.5rem;
}

.blog-section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.blog-entry {
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 18px;
  padding: 1.25rem;
  height: 100%;
}

.blog-entry h2 {
  margin-top: 0.4rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  line-height: 1.3;
}

.blog-meta {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.blog-section {
  font-weight: 700;
  margin-bottom: 0.85rem;
}

.blog-notes {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-left: 3px solid rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
}

.blog-notes p {
  margin-bottom: 0;
}

.instagram-embed-wrap {
  margin: 1rem auto 0 auto;
  max-width: 420px;
}

.instagram-media {
  min-width: unset !important;
  width: 100% !important;
  max-width: 420px !important;
  margin: 0 auto !important;
}

.blog-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.blog-button {
  display: inline-block;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.22);
  font-weight: 600;
}

@media (max-width: 640px) {
  .blog-entry h2 {
    font-size: 1.25rem;
  }

  .instagram-embed-wrap,
  .instagram-media {
    max-width: 100% !important;
  }
}
</style>

<div class="blog-wrapper">

  <div class="blog-hero">
    <p>
      Musings on computer science, language, and politics. Right now, for the Stanford Political Review, I am working on a series of op-eds titled <em>Humanity’s Most Important Arguments: 4 Ideas that Matter for AI Policy</em>. The first issue, <em>To Regulate or Not to Regulate</em>, is coming soon.
    </p>
  </div>

  <section class="blog-section-block">
    <div class="blog-section-heading">Featured</div>
    <div class="blog-grid">
      {% for entry in site.data.blog_entries.entries %}
        {% if entry.featured == true %}
          {% include blog-entry.html entry=entry %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="blog-section-block">
    <div class="blog-section-heading">All</div>
    <div class="blog-grid">
      {% for entry in site.data.blog_entries.entries %}
        {% unless entry.featured == true %}
          {% include blog-entry.html entry=entry %}
        {% endunless %}
      {% endfor %}
    </div>
  </section>

</div>

<script async src="//www.instagram.com/embed.js"></script>
