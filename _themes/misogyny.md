---
title: Misogyny | Themes of Somerton
desc: "A dive into one of the threads of James's 'yikes' takes: Misogyny!"
stat_id: y-misogyny
---

First brought up by HBomberGuy in his famous video ({% include inline-citation video=site.data.cite.hbomb.video at="9709s" %}), James seems to have a bias against women in quite a few of his takes...

<table>
<tr>
	<th>Video</th>
	<th>Quote</th>
</tr>
{% for item in site.data.themes.y-misogyny %}
{% assign video = site.videos | where: "slug", item.source | first %}
<tr>
<td>{{ video.title }} <a href="{{ "/videos/" | append: item.source | relative_url }}#{{ item.id }}">(jump <i class="fa-solid fa-share-from-square"></i>)</a></td>
<td>{{ item.quote }}</td></tr>
{% endfor %}
</table>
