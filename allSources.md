---
layout: default
title: All Plagiarized Sources
desc: A list of all plagiarized sources on the site.
---

{% assign list = site.data.stats._all | sort_natural:'full' %}

<ul class="refs plagiarized">
{%- for item in list -%}
<li id="{{ item.short | slugify }}"> {{ item.full | default: item.short | default: "[MISSING]" }} <a href="{{ item.url }}">{{ item.url }}</a></li>
{%- endfor -%}
</ul>
