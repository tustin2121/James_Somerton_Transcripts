---
layout: default
title: Ironic Quotes | Themes of Somerton
desc: A list of James quotes which are ironic or hilarious in hindsight.
stat_id: irony
---

# Ironic Quotes!

<table>
<tr>
	<th>Video</th>
	<th>Quote</th>
</tr>
{% for item in site.data.themes.irony %}
{% assign video = site.videos | where: "slug", item.source | first %}
<tr>
<td>{{ video.title }} <a href="{{ "/videos/" | append: item.source | relative_url }}#{{ item.id }}">(jump <i class="fa-solid fa-share-from-square"></i>)</a></td>
<td>{{ item.quote }}</td></tr>
{% endfor %}
</table>


