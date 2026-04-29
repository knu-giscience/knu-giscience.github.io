---
layout: page
title: 출판물
permalink: /ko/publications/
nav: false
description: 분류별 출판물 목록 (역연대순)
lang: ko
---

{% include bib_search.liquid %}

## I. Refereed Journals Articles

<div class="publications">
{% bibliography --query "@article" %}
</div>

## II. Peer-reviewed Book Chapters

<div class="publications">
{% bibliography --query "@incollection" %}
</div>

## III. Selected Peer-reviewed Conference Proceedings

<div class="publications">
{% bibliography --query "@inproceedings" %}
</div>

## IV. Research Reports to Sponsors

<div class="publications">
{% bibliography --query "@techreport" %}
</div>
