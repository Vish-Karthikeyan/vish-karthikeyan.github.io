---
layout: page
title: Blog
permalink: /blog/
---

<style>
.blog-hero {
  text-align: center;
  margin: 0 auto 3rem auto;
}

.blog-hero p {
  max-width: 720px;
  margin: 0 auto;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-entry {
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  padding: 1.5rem;
}

.blog-entry h2 {
  margin-top: 0;
  margin-bottom: 0.35rem;
}

.blog-meta {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.blog-notes {
  margin-top: 1rem;
  padding: 1rem;
  border-left: 3px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.04);
  border-radius: 10px;
}

.blog-links {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.blog-button {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.3);
  font-weight: 600;
}

.instagram-embed-wrap {
  margin-top: 1rem;
}

.instagram-media {
  margin: 0 auto !important;
}
</style>

<section class="blog-hero">
  <h1>Blog</h1>
  <p>Musings on computer science, language, and politics.</p>
</section>

<section class="blog-list">
  {% for entry in site.data.blog_entries.entries %}
    {% include blog-entry.html entry=entry %}
  {% endfor %}
</section>

<script async src="//www.instagram.com/embed.js"></script>
