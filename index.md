---
---
# James Somerton Transcripts

Project creator TerraJRiley:
> After HBomberGuy's latest video "Plagiarism and You(Tube)" I was incredibly dissapointed to hear that a creator I followed had been doing a whole bunch of plagiarism.  So, I dusted of my old Google Developer account and grabbed all the transcripts that I could get at the time of writing.  If I'm REALLY lucky then I'll also find an easy way to actually check all of these for plagiarism.

Feel free to submit a pull request [on the repo](https://github.com/tustin2121/James_Somerton_Transcripts) with any plagiarism found or new transcripts created.

## Contributors:
- Project creator: [TerraJRiley](https://github.com/TerraJRiley)
- Contributors: 
	- [Tustin2121](https://github.com/tustin2121)
	- [/u/DHLawrence_sGhost](https://www.reddit.com/u/DHLawrence_sGhost)
- Video archives:
	- https://archive.org/details/james-somerton-youtube-2023-12-03
	- https://archive.org/details/james-somerton-public-records
	- https://archive.org/details/james-somerton-videos-backup
	- https://www.youtube.com/@JamesSomertonArchive/videos

# Transcript Index

Statuses: 
- <font color="red">Incomplete</font> = Transcript is incomplete
- Script = Transcript is raw transcript data uploaded from a script, not yet properly formatted
- Auto = Transcript is raw auto-transcript, not yet properly formatted
- <font color="red">Missing</font> = Transcript is missing though video archive exists
- In Progress = Transcript has some work done
- <font color="cyan">Finished</font> = Transcript is complete, attributions needed.
- <font color="gree">Complete</font> = Transcript has been fully reviewed and things attributed

James regularly renamed his videos, not just to hide a reupload due to plagiarism, but also to try and game the algorithm. Alternate titles to videos will be given under the original title, where possible. Alternate titles might also include prominent words in the thumbnails.

{% comment %} {% assign videos = site.videos | sort: 'date' | reverse %} {% endcomment %}
<div class="video-list">
{% for video in site.videos %}
<div class="video-card">
	<div class="title"><a href="{{ video.url }}">{{ video.title }}</div>
	<div class="date">Released {{ video.date | date_to_string }}</div>
	{% if video.aka %}
	<div class="aka">{{ video.aka }}</div>
	<div class="topics">{{ video.topics | array_to_sentence_string: "" }}</div>
	{% case video.status %}
		{% when "Incomplete", "Missing" %}
			<div class="status alert">{{ video.status }}</div>
		{% when "Finished" %}
			<div class="status ready">{{ video.status }}</div>
		{% when "Complete" %}
			<div class="status complete">{{ video.status }}</div>
		{% else %}
			<div class="status">Script</div>
	{% endcase %}
	<div class="vidlinks">
		{%- for link in video.links -%}
			<a href="{{ link }}">V{{ forloop.index }}</a>{% unless forloop.last %} | {% endunless -%}
		{%- endfor -%}
	</div>
	{% endif %}
</div>
{% endfor %}
</div>

{% comment %}
Template for new videos
---
date: 2023‑11‑23
title: "<title>"
status: "Missing"
aka: !!seq
  - "<title>"
topics: !!seq
  - "<media>"
links: !!seq
  - "https://archive.org/details/james-somerton-youtube-2023-12-03"
description: "a video essay on <xyz>."

cite:
  clips: !!map
  plagiarized: !!map
---
{% endcomment %}