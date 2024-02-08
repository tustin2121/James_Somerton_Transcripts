---
layout: default
title: All Plagiarized Sources
desc: A list of all plagiarized sources on the site.
---

# All Sources

{% assign list = site.data.stats._all | sort_natural:'full' %}

<ul class="refs plagiarized" header="It has been proven that James has plagiarized from {{ list.size }} sources:">
{%- for item in list -%}
<li> {{ item.full | default: item.short | default: "[MISSING]" }} <a href="{{ item.archive }}{{ item.url }}">{{ item.url }}</a></li>
{%- endfor -%}
</ul>
