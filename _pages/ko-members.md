---
layout: page
title: 멤버
permalink: /ko/members/
nav: false
description: GIScience &amp; Spatial Bigdata Lab 구성원
lang: ko
---

<style>
  .member-section { margin-top: 1.5rem; margin-bottom: 2.5rem; }
  .member-section h2 { font-size: 1.4rem; margin-bottom: 1rem; }
  .member-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  .member-card { text-align: center; }
  .member-card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    background: #f0f0f0;
  }
  .member-card .name { font-weight: 600; margin-top: 0.6rem; }
  .member-card .role { font-size: 0.9rem; color: #888; }
  .member-card .meta { font-size: 0.85rem; margin-top: 0.4rem; line-height: 1.4; }
  .member-card .note { font-size: 0.8rem; font-style: italic; color: #888; margin-top: 0.3rem; }
  .pi-card { display: flex; gap: 1.5rem; align-items: flex-start; }
  .pi-card img {
    width: 200px; height: 200px; object-fit: cover; border-radius: 50%;
    background: #f0f0f0; flex-shrink: 0;
  }
  .pi-card .info { flex: 1; }
</style>

{% assign pi = site.data.members_ko.pi[0] %}
<div class="member-section">
  <h2>교수</h2>
  <div class="pi-card">
    <img src="{{ '/assets/img/' | append: pi.image | relative_url }}" alt="{{ pi.name }}">
    <div class="info">
      <p><strong style="font-size:1.15rem;">{{ pi.name }}</strong></p>
      <p>{% if pi.role %}<strong>직책:</strong> {{ pi.role }}{% endif %}</p>
      {% if pi.education %}<p><strong>학력:</strong><br>{{ pi.education | newline_to_br }}</p>{% endif %}
      {% if pi.position %}<p><strong>현직:</strong> {{ pi.position }}</p>{% endif %}
      {% if pi.email %}<p><strong>이메일:</strong> {{ pi.email }}</p>{% endif %}
    </div>
  </div>
</div>

{% assign groups = "phd,ms,ug,alumni" | split: "," %}
{% assign labels = "박사과정,석사과정,학부생,동문" | split: "," %}

{% for group in groups %}
  {% assign members = site.data.members_ko[group] %}
  {% if members and members.size > 0 %}
  <div class="member-section">
    <h2>{{ labels[forloop.index0] }}</h2>
    <div class="member-grid">
      {% for m in members %}
      <div class="member-card">
        {% if m.image %}
          <img src="{{ '/assets/img/' | append: m.image | relative_url }}" alt="{{ m.name }}" onerror="this.src='{{ '/assets/img/prof_pic.jpg' | relative_url }}'">
        {% else %}
          <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="{{ m.name }}">
        {% endif %}
        <div class="name">{{ m.name }}</div>
        <div class="role">
          {{ m.role }}{% if m.since %} · 입학 {{ m.since }}{% endif %}
        </div>
        {% if m.affiliation %}<div class="meta">{{ m.affiliation }}</div>{% endif %}
        {% if m.interests %}<div class="meta"><strong>연구분야:</strong> {{ m.interests }}</div>{% endif %}
        {% if m.email %}<div class="meta"><a href="mailto:{{ m.email }}">{{ m.email }}</a></div>{% endif %}
        {% if m.note %}<div class="note">{{ m.note }}</div>{% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
  {% endif %}
{% endfor %}
