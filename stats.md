---
layout: default
title: Fun Video Statistics
desc: A table of auto-calculated stats for all of the video transcripts on the site.
---

# "Fun" Video Statistics!

The following table of statistics is calculated from the video transcripts automatically.

(If you are helping with the code and want to add to these statistics, feel free to mark things with `stat:id="stat-name"`. If the statistic is new, you'll need to remember to add the name to the below table manually.)

{% assign stats = site.data.stats._global %}

|  |  |
|:----:|:------------|
| {{stats.sources }} | Number of unique sources James plagiarized. |
| {{stats.p-wiki }} | &nbsp;&nbsp;&nbsp;&nbsp; Wikipedia articles plagiarized. |
| {{stats.p-youtube }} | &nbsp;&nbsp;&nbsp;&nbsp; YouTube videos plagiarized. |
| {{stats.p-news }} | &nbsp;&nbsp;&nbsp;&nbsp; News articles plagiarized. |
| {{stats.p-academic }} | &nbsp;&nbsp;&nbsp;&nbsp; Journal-published academic articles plagiarized. |
| {{stats.lies }} | Number of lies James has told in his videos.[^v] |
| {{stats.yikes }} | Problematic takes in James's videos. |
| | |
| {{stats.blatant-bgm }} | Clips that include background music added by the third party James stole the clip from. |
| {{stats.sub-queer }} | Times James substituted an umbrella term ("queer" usually) over a more specific identity ("trans", "lesbian", etc). |
| {{stats.baa }} | Times James uses the phrase "by all accounts". |

[^v]: This is only the misinformation in his videos, not the ones that he told his audience about external things, like "death threats" and the like.