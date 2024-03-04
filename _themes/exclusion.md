---
title: Exclusion | Themes of Somerton
desc: "A dive into one of the threads of James's 'yikes' takes: Exclusion!"
stat_id: y-exclusion
---

# Themes of Somerton: Exclusion

James plagiarizes from many queer people, but tends to be pretty selective about what parts of a person's work he copies from. 


<table>
<tr>
	<th>Video</th>
	<th>Instance</th>
</tr>
{% for item in site.data.themes.y-misogyny %}
{% assign video = site.videos | where: "slug", item.source | first %}
<tr>
<td>{{ video.title }} <a href="{{ "/videos/" | append: item.source | relative_url }}#{{ item.id }}">(jump <i class="fa-solid fa-share-from-square"></i>)</a></td>
<td>{{ item.quote }}</td></tr>
{% endfor %}
</table>

