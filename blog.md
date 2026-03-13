---
layout: page
title: Blog
permalink: /blog/
---

<style>
.blog-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

.blog-hero {
  text-align: center;
  margin: 0 auto 2.5rem auto;
}

.blog-hero p {
  max-width: 640px;
  margin: 0 auto;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.blog-entry {
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 18px;
  padding: 1.25rem;
  max-width: 760px;
  margin: 0 auto;
}

.blog-entry h2 {
  margin-top: 0.4rem;
  margin-bottom: 0.75rem;
  font-size: 2rem;
  line-height: 1.25;
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
    font-size: 1.5rem;
  }

  .instagram-embed-wrap,
  .instagram-media {
    max-width: 100% !important;
  }
}
</style>

Musings on computer science, language, and politics!

  <section class="blog-list">
    {% for entry in site.data.blog_entries.entries %}
      {% include blog-entry.html entry=entry %}
    {% endfor %}
  </section>
</div>

<script async src="//www.instagram.com/embed.js"></script>
