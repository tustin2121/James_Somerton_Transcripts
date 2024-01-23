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
| {{stats.p-total }} | Number of unique sources James plagiarized. |
| {{stats.p-wiki }} | &nbsp;&nbsp;&nbsp;&nbsp; Wikipedia articles plagiarized. |
| {{stats.p-youtube }} | &nbsp;&nbsp;&nbsp;&nbsp; YouTube videos plagiarized. |
| {{stats.p-news }} | &nbsp;&nbsp;&nbsp;&nbsp; News articles plagiarized. |
| {{stats.p-book }} | &nbsp;&nbsp;&nbsp;&nbsp; Published books plagiarized. |
| {{stats.p-academic }} | &nbsp;&nbsp;&nbsp;&nbsp; Journal-published academic articles plagiarized. |
| {{stats.p-student }} | &nbsp;&nbsp;&nbsp;&nbsp; University student academic papers plagiarized (yes, really). |
| | |
| {{stats.m-total }} | Number of lies James has told in his videos.[^v] |
| {{stats.m-context }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of misinformation by stripping context from what he's plagiarizing. |
| {{stats.m-inverse }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of James flipping the meaning of what he's copying. |
| | |
| {{stats.y-total }} | Problematic takes in James's videos.[^y] |
| {{stats.y-misogyny }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of misogyny. |
| {{stats.y-transphobia }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of transphobia. |
| {{stats.y-acephobia }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of acephobia. |
| {{stats.y-exclusion }} | &nbsp;&nbsp;&nbsp;&nbsp; Instances of any of the above by exclusion. |
| | |
| {{stats.irony }} | Instances of irony in hindsight. |
| {{stats.blatant-bgm }} | Clips that include background music added by the third party James stole the clip from. |
| {{stats.sub-queer }} | Times James substituted an umbrella term ("queer" usually) over a more specific identity ("trans", "lesbian", etc). |
| {{stats.changed-number }} | Times James inexplicably changed a number in something he was plagiarizing. |
| {{stats.changed-name }} | Times James just got a person's name wrong. |
| {{stats.changed-quote }} | Times James inexplicably changed a direct quote he was copying. |
| {{stats.made-quote }} | Times James turned something that wasn't a direct quote into a direct quote. |
| {{stats.correction }} | Times James actually corrected an incorrect source he was copying from. |
| {{stats.baa }} | Times James uses the phrase "by all accounts". |

[^v]: This is only the misinformation in his videos, not the ones that he told his audience about external things, like "death threats" and the like.
[^y]: Sub-stats of problematic takes are all not mutually exclusive of each other. eg, James can have one take that is both misogyny and transphobia, both by exclusion, and all three will have one added each.