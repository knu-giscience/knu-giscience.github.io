---
layout: about
title: about
permalink: /
subtitle: <em>Geography that listens to data, places, and people.</em>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

<style>
  /* ---------- Home page custom ---------- */
  .home-intro {
    max-width: 660px;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--global-text-color, #333);
    margin: 0.6rem 0 2.4rem;
  }

  .pillars {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    margin: 1.5rem 0 2.6rem;
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
  }
  @media (min-width: 760px) {
    .pillars { grid-template-columns: repeat(3, 1fr); border-top: none; }
  }
  .pillar {
    padding: 1.5rem 1.6rem;
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
    transition: background-color .2s ease;
  }
  @media (min-width: 760px) {
    .pillar {
      border-bottom: none;
      border-right: 1px solid var(--global-divider-color, #e5e5e5);
      padding: 0 1.6rem 0.4rem 0;
    }
    .pillar:last-child { border-right: none; padding-right: 0; }
    .pillar:first-child { padding-left: 0; }
    .pillar:not(:first-child) { padding-left: 1.6rem; }
  }
  .pillar:hover { background-color: rgba(0,0,0,0.015); }

  .pillar-num {
    font-family: "Roboto Slab", Georgia, serif;
    font-size: 0.85rem;
    letter-spacing: 0.18em;
    color: #2c3260;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .pillar h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
  .pillar p {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #555;
    margin: 0;
  }

  .home-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.6rem;
    font-size: 0.95rem;
    margin: 0 0 2rem;
    padding: 0.9rem 0 1rem;
    border-top: 1px solid var(--global-divider-color, #e5e5e5);
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
  }
  .home-cta a {
    color: inherit;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color .15s ease;
  }
  .home-cta a:hover { border-bottom-color: currentColor; }
  .home-cta .arrow { color: #2c3260; margin-right: 0.3rem; font-weight: 700; }

  /* Tweaks for the auto-rendered news / selected publications headings */
  article > h2 {
    font-size: 1.45rem;
    margin-top: 2rem;
    border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
    padding-bottom: 0.4rem;
  }

  /* Make the hero subtitle (page.subtitle) feel like a real hero line */
  .post-header .desc {
    font-size: 1.35rem;
    line-height: 1.4;
    color: #444;
    margin-top: 0.4rem;
  }
  @media (min-width: 760px) {
    .post-header .desc { font-size: 1.6rem; }
  }
</style>

<p class="home-intro">
  We are a research lab at the <strong>Department of Geography, Kyungpook
  National University</strong>, working at the intersection of GIScience,
  spatial big data, and mobility — to understand how cities, regions, and
  people move and change.
</p>

<div class="pillars">
  <div class="pillar">
    <div class="pillar-num">01 — RESEARCH</div>
    <h3>GIScience</h3>
    <p>Representing and analysing the real world for the digital-twin era.</p>
  </div>
  <div class="pillar">
    <div class="pillar-num">02 — RESEARCH</div>
    <h3>Spatial Big Data</h3>
    <p>Discovering hidden patterns from mobile, social-media, and sensor data.</p>
  </div>
  <div class="pillar">
    <div class="pillar-num">03 — RESEARCH</div>
    <h3>Mobility &amp; Future Vehicles</h3>
    <p>Tracking how EVs, AVs, and shared mobility reshape urban space.</p>
  </div>
</div>

<div class="home-cta">
  <a href="{{ '/members/' | relative_url }}"><span class="arrow">→</span>Meet the team</a>
  <a href="{{ '/publications/' | relative_url }}"><span class="arrow">→</span>Read our publications</a>
  <a href="{{ '/projects/' | relative_url }}"><span class="arrow">→</span>Ongoing projects</a>
  <a href="{{ '/contact/' | relative_url }}"><span class="arrow">→</span>Get in touch</a>
</div>
