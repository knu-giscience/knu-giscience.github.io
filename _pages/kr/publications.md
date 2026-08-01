---
layout: page
permalink: /kr/publications/
title: publications
description: Publications by category, in reverse chronological order.
lang: kr
page_key: publications
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

## I. Refereed Journal Articles

<div class="publications">
{% bibliography -f 01_journal_kr %}
</div>

## II. Peer-reviewed Book Chapters

<div class="publications">
{% bibliography -f 02_book_chapter %}
</div>

## III. Selected Peer-reviewed Conference Proceedings

<div class="publications">
{% bibliography -f 03_conference %}
</div>

## IV. Research Reports to Sponsors

<div class="publications">
{% bibliography -f 04_report %}
</div>
