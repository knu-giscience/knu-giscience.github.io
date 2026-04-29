---
layout: about
title: about
permalink: /
subtitle: <strong>Geography that listens to data, places, and people.</strong>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p><strong>Department of Geography</strong></p>
    <p>Kyungpook National University</p>
    <p>80 Daehak-ro, Buk-gu, Daegu 41566</p>
    <p>📞 +82-53-950-7173</p>

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
  .pillar-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.8rem 0 0.5rem;
  }
  @media (min-width: 720px) {
    .pillar-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
  }
  .pillar {
    padding: 1.1rem 1.2rem;
    border: 1px solid var(--global-divider-color, #e7e7e7);
    border-radius: 12px;
    background: var(--global-card-bg-color, #fafafa);
    transition: transform .15s ease, box-shadow .15s ease;
  }
  .pillar:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  }
  .pillar .icon { font-size: 1.6rem; margin-bottom: 0.4rem; line-height: 1; }
  .pillar h3 {
    font-size: 1rem; font-weight: 700; margin: 0.2rem 0 0.4rem;
    letter-spacing: 0.01em;
  }
  .pillar p { font-size: 0.9rem; line-height: 1.45; margin: 0; color: #555; }
  .quick-links {
    margin-top: 1.4rem;
    font-size: 0.95rem;
  }
  .quick-links a {
    display: inline-block;
    margin-right: 1.1rem;
    padding-bottom: 1px;
    border-bottom: 1px solid transparent;
  }
  .quick-links a:hover { border-bottom-color: currentColor; }
</style>

We are a research lab at the **Department of Geography, Kyungpook National
University**, working at the intersection of GIScience, spatial big data,
and mobility — to understand how cities, regions, and people move and
change.

<div class="pillar-grid">
  <div class="pillar">
    <div class="icon">🗺️</div>
    <h3>GIScience</h3>
    <p>Representing and analyzing the real world for the digital-twin era.</p>
  </div>
  <div class="pillar">
    <div class="icon">📊</div>
    <h3>Spatial Big Data</h3>
    <p>Discovering hidden patterns from mobile, social-media, and sensor data.</p>
  </div>
  <div class="pillar">
    <div class="icon">🚗</div>
    <h3>Mobility &amp; Future Vehicles</h3>
    <p>Tracking how EVs, AVs, and shared mobility reshape urban space.</p>
  </div>
</div>

<div class="quick-links">
  → <a href="{{ '/members/' | relative_url }}">Members</a>
  <a href="{{ '/publications/' | relative_url }}">Publications</a>
  <a href="{{ '/projects/' | relative_url }}">Projects</a>
  <a href="{{ '/news/' | relative_url }}">News</a>
  <a href="{{ '/contact/' | relative_url }}">Contact</a>
</div>
