---
layout: vidindex
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

<div class="video-list">
  <div class="video-card">
    <div class="title"><a href>Video Card Example (Links to Transcript)</a></div>
    <div class="date">Release Date</div>
    <div class="topics"><p>Topics</p><p>&amp; Media</p><p>Discussed</p></div>
    <div class="aka">
      <p>Alternate titles to videos, since James renamed videos a lot</p>
      <p>(Even outside trying to cover up all the plagiarism he did)</p>
      <p>Also includes words in (Thumbnail)s</p>
    </div>
    <div class="status">Transcript Status</div>
    <div class="score">
      <div class="plagiarized">P</div>
      <div class="misinfo">M</div>
      <div class="yikes">Y</div>
    </div>
    <div class="vidlinks"><a href>Video</a> | <a href>Links</a></div>
  </div>
</div>

Score Squares:
- <span style="background-color: var(--video-box-stolen-bg); color: var(--video-box-stolen-text)">P = Number of sources plagiarized</span>
- <span style="background-color: var(--video-box-fabricated-bg); color: var(--video-box-fabricated-text)">M = Number of instances of misinformation</span>
- <span style="background-color: var(--video-box-yikes-bg); color: var(--video-box-yikes-text)">Y = Number of "Yikes!" takes, from misogyny to acephobia</span>

Statuses: 
- <span class="status alert">Missing</span> = Transcript is missing though video archive exists
- <span class="status">Script</span> = Transcript is raw transcript data uploaded from a script, not yet properly formatted
- <span class="status">Auto</span> = Transcript is raw auto-transcript, not yet properly formatted
- <span class="status">In Progress</span> = Transcript has some work done
- <span class="status ready">Finished</span> = Transcript is complete, attributions needed.
- <span class="status complete">Complete</span> = Transcript has been fully reviewed and things attributed

James regularly renamed his videos, not just to hide a reupload due to plagiarism, but also to try and game the algorithm. Alternate titles to videos will be given under the original title, where possible. Alternate titles might also include prominent words in the thumbnails.

<div class="video-list">
{% assign vidList = site.videos | sort: 'date' | reverse %}
{% for video in vidList %}
{%- include video-card.html video=video -%}
{% endfor %}
</div>

{% comment %} {% assign videos = site.videos | sort: 'date' | reverse %} {% endcomment %}
{% comment %}
Template for new videos
---
date: 2023‑11‑23
title: title
status: Auto
aka: !!seq
  - "title"
topics: !!seq
  - "<media>"
links: !!seq
  - "https://archive.org/details/james-somerton-youtube-2023-12-03"
  - "https://archive.org/details/james-somerton-public-records"
  - "https://archive.org/details/james-somerton-videos-backup"
description: "a video essay on <xyz>."

cite:
  clips: !!map
  yikes: !!map
  misinformation: !!map
  plagiarized: !!map
---
notes:
  - hbomb
{% endcomment %}

[^vimeo]: This video was exclusive to Vimeo for age-gating reasons.
[^unreleased]: This video was not yet released to the public before the plagiarism video came out.
[^hbomb-min]: This video is one of the (minimum) 26 HBomberGuy said were confirmed to have plagiarism in his video.
[^multipart]: This video is a compilation of multiple previously released videos.
[^odd-linebreaks]: Transcript had unusual line break characters prior to cleanup
[^short-advert]: Had a short that advertised the early release of this video on his patreon.