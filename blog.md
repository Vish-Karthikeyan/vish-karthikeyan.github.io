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

.blog-title-spacer {
  margin-bottom: 1.5rem;
}

.blog-hero {
  margin-bottom: 3.25rem;
}

.blog-hero p {
  max-width: 820px;
  margin: 0;
  line-height: 1.75;
  font-size: 1.05rem;
}

.blog-section-block {
  margin-bottom: 3rem;
}

.blog-section-heading {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.blog-entry {
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 18px;
  padding: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 0.6rem;
}

.blog-entry h2 {
  margin-top: 0.2rem;
  margin-bottom: 0.65rem;
  font-size: 1.8rem;
  line-height: 1.25;
}

.blog-subtitle {
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.blog-notes {
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-left: 3px solid rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  line-height: 1.65;
}

.blog-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.blog-button {
  display: inline-block;
  padding: 0.72rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.22);
  font-weight: 600;
}

.blog-button:hover {
  background: rgba(255,255,255,0.06);
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

.blog-empty {
  opacity: 0.7;
  font-style: italic;
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-entry h2 {
    font-size: 1.45rem;
  }

  .instagram-embed-wrap,
  .instagram-media {
    max-width: 100% !important;
  }
}
</style>

<div class="blog-wrapper">
  <div class="blog-title-spacer"></div>

  <div class="blog-hero">
    <p>
      Musings on computer science, language, and politics. Right now, for the Stanford Political Review, I am working on a series of op-eds titled <em>Humanity’s Most Important Arguments: 4 Ideas that Matter for AI Policy</em>. The first issue, <em>To Regulate or Not to Regulate</em>, is coming soon.
    </p>
  </div>

  <section class="blog-section-block">
    <div class="blog-section-heading">Featured</div>
    <div class="blog-grid">
      {% assign featured_articles = site.data.blog_articles.articles | where: "featured", true %}
      {% if featured_articles.size > 0 %}
        {% for article in featured_articles %}
          {% include blog-entry.html article=article %}
        {% endfor %}
      {% else %}
        <div class="blog-empty">Featured essays coming soon.</div>
      {% endif %}
    </div>
  </section>

  <section class="blog-section-block">
    <div class="blog-section-heading">All</div>
    <div class="blog-grid">
      {% for article in site.data.blog_articles.articles %}
        {% unless article.featured == true %}
          {% include blog-entry.html article=article %}
        {% endunless %}
      {% endfor %}
    </div>
  </section>
</div>

<script async src="//www.instagram.com/embed.js"></script>
