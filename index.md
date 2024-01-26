---
layout: vidindex
---
# James Somerton Transcripts

> After HBomberGuy's latest video "Plagiarism and You(Tube)" I was incredibly dissapointed to hear that a creator I followed had been doing a whole bunch of plagiarism.  So, I dusted of my old Google Developer account and grabbed all the transcripts that I could get at the time of writing.  If I'm REALLY lucky then I'll also find an easy way to actually check all of these for plagiarism.  
> <span class="signature">--Project creator [TerraJRiley](https://github.com/TerraJRiley/James_Somerton_Transcripts)</span>

> We didn't find an automated and easy way to check all of the transcripts for plagiarism, and so this is a community effort, formatting and marking up the transcripts *by hand* for any and all instances of plagiarism, misinformation, and problematic takes. This project started days after HBomberGuy's video.  
> <span class="signature">--Project maintainer [Tustin2121](https://github.com/tustin2121/)</span>


Feel free to submit an issue [on the repo](https://github.com/tustin2121/James_Somerton_Transcripts) with any plagiarism found, or submit a pull request with new transcripts created.

<div class="instructions">
<div>

Contributors:
{%- assign contributors = site.data.cite | where: "contributor",true -%}
{%- for name in contributors %}
- [{{ name.name }}]({{name.link}}) - {{name.descriptive}}
{%- endfor -%}

</div><div>

Video archives:
- [James Somerton Youtube (2023-12-03)](https://archive.org/details/james-somerton-youtube-2023-12-03) on the Internet Archive
- [James Somerton Public Records](https://archive.org/details/james-somerton-public-records) on the Internet Archive
- [James Somerton's videos (backup)](https://archive.org/details/james-somerton-videos-backup) on the Internet Archive
- [James Somerton Archive](https://www.youtube.com/@JamesSomertonArchive/videos) on YouTube
- [James Somerton Reuploads](https://youtube.com/@jamessomertonreuploads/videos) on YouTube
- [Archive: James Somerton](https://youtube.com/@ArchiveJamesSomerton/videos) on YouTube

</div>
</div>

[List of all plagiarized sources](allSources.md)

# Transcript Index

<div>
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
      <div class="bar">
        <span class="plagiarized" style="width:31%"></span>
        <span class="misinfo" style="width:20%"></span>
      </div>
    </div>
    <div class="vidlinks"><a href>Video</a> | <a href>Links</a></div>
  </div>
</div>

<div class="instructions">
<div>

Score Squares:
- <span style="background-color: var(--video-box-stolen-bg); color: var(--video-box-stolen-text)">P = Number of sources plagiarized</span>
- <span style="background-color: var(--video-box-fabricated-bg); color: var(--video-box-fabricated-text)">M = Number of instances of misinformation</span>
- <span style="background-color: var(--video-box-yikes-bg); color: var(--video-box-yikes-text)">Y = Number of "Yikes!" takes, from misogyny to acephobia</span>
- The bar above the squares indicates how much of the video<br/>was plagiarized or misinformation by volume.

</div>
<div>

Transcript Statuses: 
- <span class="status alert">Missing</span> = Transcript is missing though video archive exists
- <span class="status">Script</span> = Transcript is raw transcript data uploaded from a script, not yet properly formatted
- <span class="status">Auto</span> = Transcript is raw auto-transcript, not yet properly formatted
- <span class="status">In Progress</span> = Transcript has some work done
- <span class="status ready">Finished</span> = Transcript is complete, citations needed.
- <span class="status complete">Complete</span> = Transcript has been fully reviewed and things cited.

</div>
</div>

{%  assign vids_fin = site.videos | where: 'status', 'Finished' -%}
{%- assign vids_comp = site.videos | where: 'status', 'Complete' -%}
{%- assign vids_fin = vids_fin | concat: vids_comp -%}
Finished: {{ vids_fin.size }} / {{ site.videos.size }} &nbsp; | &nbsp;  Complete: {{ vids_comp.size }} / {{ site.videos.size }} &nbsp; | &nbsp; [Other "fun" stats](stats.md) &nbsp; | &nbsp; [How to read this site](instructions.md)

<div class="instructions">
  <label><input type="checkbox" id="view-old" /> Show old videos</label>
  <label><input type="checkbox" id="view-pod" /> Show podcast videos</label>
  <label><input type="checkbox" id="view-new" /> Show new videos</label>
  <label><input type="checkbox" id="view-done" /> Hide incomplete</label>
</div>
<div class="video-list">

{% assign vidList = site.videos | sort: 'date' | reverse %}
{% for video in vidList %}
  {%- if video.parent -%}{%- continue -%}{%- endif -%}
  {%- include video-card video=video -%}
  
  {%- assign vid = video.id | split: '/' | last -%}
  {%- assign subList = site.videos | where: 'parent', vid | reverse -%}
  {%- if subList.size > 0 -%} 
    <div class="video-list {%- include video-filter video=video -%}">
      {%- for subVid in subList -%} 
        {%- include video-card video=subVid -%}
      {%- endfor -%}
    </div>
  {%- endif -%}
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
# description: "a video essay on...?"

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