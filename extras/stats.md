---
layout: default
title: Fun Video Statistics
desc: A table of auto-calculated stats for all of the video transcripts on the site.
---

# "Fun" Video Statistics!

The following table of statistics is calculated from the video transcripts automatically.

(If you are helping with the code and want to add to these statistics, feel free to mark things with `stat:id="stat-name"`. If the statistic is new, you'll need to remember to add the name to the below table manually.)

{% assign T = "&nbsp;&nbsp;&nbsp;&nbsp;" %}
{% assign stats = site.data.stats._global %}

|  |  |
|:----:|:------------|
| {{stats.p-total }} | Number of [unique sources James plagiarized](sources.md). |
| {{stats.p-wiki }} | {{T}} Wikipedia articles plagiarized. |
| {{stats.p-youtube }} | {{T}} YouTube videos plagiarized. |
| {{stats.p-news }} | {{T}} News articles plagiarized. |
| {{stats.p-book }} | {{T}} Published books plagiarized. |
| {{stats.p-academic }} | {{T}} Journal-published academic articles plagiarized. |
| {{stats.p-student }} | {{T}} University student academic papers plagiarized (yes, really). |
| | |
| {{stats.m-total }} | Number of lies James has told in his videos.[^v] |
| {{stats.m-context }} | {{T}} Instances of misinformation by stripping context from what he's plagiarizing. |
| {{stats.m-inverse }} | {{T}} Instances of James flipping the meaning of what he's copying. |
| | |
| {{stats.y-total }} | Problematic takes in James's videos.[^y] |
| {{stats.y-misogyny }} | {{T}} Instances of misogyny. |
| {{stats.y-misgendering }} | {{T}} Instances of misgendering. |
| {{stats.y-transphobia }} | {{T}} Instances of transphobia. |
| {{stats.y-acephobia }} | {{T}} Instances of acephobia. |
| {{stats.y-biphobia }} | {{T}} Instances of biphobia / bi erasure. |
| {{stats.y-exclusion }} | {{T}} Instances of any of the above by exclusion. |
| {{stats.y-persecution }} | {{T}} Times that James implies that gay men are the only ones being persecuted. |
| | |
| | Videos "Written by"...
| {{stats.w-nick-james }} | {{T}} Nick Herrgott & James Somerton
| {{stats.w-james-nick }} | {{T}} James Somerton & Nick Herrgott
| {{stats.w-james }} | {{T}} James Somerton
| {{stats.w-nick }} | {{T}} Nick Herrgott
| {{stats.w-none }} | {{T}} (no credit)
| {{stats.wp-nick }} | {{T}} Nick Herrgott (credited post-callout in the description) (non-exclusive with one of the above)
| | |
| {{stats.irony }} | Instances of [irony in hindsight.]({{ "/themes/ironic" | relative_url }}) |
| {{stats.blatant-bgm }} | Clips that include background music added by the third party James stole the clip from. |
| {{stats.sub-queer }} | Times James substituted an umbrella term ("queer" usually) over a more specific identity ("trans", "lesbian", etc). |
| {{stats.changed-number }} | Times James inexplicably changed a number in something he was plagiarizing. |
| {{stats.changed-name }} | Times James just got a person's name wrong. |
| {{stats.changed-quote }} | Times James inexplicably changed a direct quote he was copying. |
| {{stats.made-quote }} | Times James turned something that wasn't a direct quote into a direct quote. |
| {{stats.mined-quote }} | Times James removed context from a quote so much it changed its meaning. |
| {{stats.correction }} | Times James actually corrected an incorrect source he was copying from. |
| | |
| {{stats.malaprop }} | Times James has used a malapropism or otherwise used the wrong word inadvertently. |
| {{stats.baa }} | Times James uses the phrase "by all accounts". |

[^v]: This is only the misinformation in his videos, not the ones that he told his audience about external things, like "death threats" and the like.
[^y]: Sub-stats of problematic takes are all not mutually exclusive of each other. eg, James can have one take that is both misogyny and transphobia, both by exclusion, and all three will have one added each.