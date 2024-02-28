---
layout: default
title: Site Style Guide | James Somerton Transcripts
desc: Instructions on how to read this site.
include-script: true

cite:
  clips: !!map
    hello_world: { short: "Gay Movie 2! (Director, 2023)", full: "Author, N. (2023, Jul 5). <em>Gay Movie 2!</em> [Film]." }
  yikes: !!map
  misinformation: !!map
  plagiarized: !!map
    article: { color: 1, short: "Plagiarized article (Author, 2000)", full: "Author, N. (2000, Feb 5). <em>Plagiarized article</em> [Article]. Site name. Retrieved on Feb 27, 2024, from", url: "http://www.example.com/" }
    video: { color: 3, short: "Plagiarized video (Director, 1999)", full: "Author, N. (1999, Jul 12). <em>Plagiarized video</em> [Film]. Site name. Retrieved on Feb 27, 2024, from", url: "http://www.example.com/" }
    wikipedia: { color: 4, short: "Plagiarized video (Wikipedia, 2024)", full: "Wikipedia. (2024, Jul 12). <em>Main Page</em> [Article]. Wikipedia. Retrieved on Feb 27, 2024, from", url: "https://en.wikipedia.org/wiki/Main_Page" }
---
{% assign tustin = site.data.cite.tustin2121 %}
{% assign todd = site.data.cite.todd.video %}

# How to read this site

This site is meant as both a reference and a fact checking site. The purpose of this site is for people who are perhaps looking for something that James has said that you've maybe internalized and now question whether it is true. It's meant for people who want to make sure all the plagiarism James did is caught and documented. And if you really want to, you can use it as an aid while watching James's videos.

If you'd like to help with anything, feel free to [submit an issue with any new sources](https://github.com/tustin2121/James_Somerton_Transcripts/issues) or [submit a pull request with any code changes](https://github.com/tustin2121/James_Somerton_Transcripts/pulls). You might also want to join the [Former Fans discord server](https://discord.gg/PVXTAeVZHE) where we're discussing this stuff in #general-plagiarism.

<div>

-----

<compare>
<james>

The video transcript will be on the left in orange boxes. <mark>Any text that has been plagiarized</mark> <mark>will be marked like this</mark>, both on the left and the right. <mark>It does not have to be</mark> exact <mark>to be considered plagiarism, but the words that are copied verbatam<sup class="add">[sic: verbatim]</sup> will be marked</mark> like this.

<mark x>Sometimes plagiarism is just copying ideas, or an order of ideas, and those will sometimes be marked where found.</mark>

</james>
<from {% include citation for=page.cite.plagiarized.article at="¶ 1" %}>

<mark>Any text that was plagiarized</mark> is copied over to the right side of the page and <mark>will be marked like this</mark> for your comparison convenience. <mark>It does not have to be</mark> word-for-word <mark>to be considered plagiarism, but the words that are copied verbatim will be marked</mark> as such. 

<mark x>Sometimes the plagiarism is more subtle, such as taking the ideas that someone is talking about, in the order they're talking about them, and that sort of plagiarism will also be marked where discovered.</mark> This kind is obviously harder to detect.

</from>
<james {% include timecode %}>

<mark num=1>Sometimes</mark> <mark num=2>things have been reworded or reordered</mark>, and yet <mark num=3>the plagiarism is still obvious</mark>. This is done to <mark num=4>hide</mark> and <mark num=5>try</mark> to get away with it. The <mark num=6>little number at the front of</mark> the <mark num=7>highlighted sections</mark> will <mark>help you see how the sentence has been reworded.</mark>

</james>
<from {% include citation for=page.cite.plagiarized.article at="¶ 2" %}>

You'll often find that <mark num=1>sometimes</mark> <mark num=3>the plagiarism is obvious</mark>, but that <mark num=2>things have been reworded or reordered</mark>. James often does this to <mark num=5>try</mark> and <mark num=4>hide</mark> his plagiarism more. Note that each <mark num=7>highlighted phrase</mark> has a <mark num=6>little number at the front of</mark> it in superscript. This is to <mark>help you see exactly how the sentence has been reworded.</mark> I will be including at least the whole paragraph of a plagiarized text, but if it gets too long I will truncate it with a [...]

</from>
<james {% include timecode %}>

Sometimes correctsions<sup class="add">[sic: corrections]</sup> for spelling or wording will be called out with superscript. Other times there may be <del>corrections</del><ins>word changes</ins> like this to indicate when the captions from the video don't line up with what's spoken. Both of these will usually only happen with certain videos which have had their scripts uploaded as captions.

</james>
<from {% include citation for=page.cite.plagiarized.article at="¶ 3-5" %}>

The text in the right-side source boxes is here for comparison only. I will be sure to give page or paragraph where you can read the original. You can click the blue link in the top-right corner to jump to the APA-style citation for this text, and from there I will try to always include a link to where you can read it yourself. (You may have to sign up for archive.org to borrow a book, but usually James copied from easily accessible material that wasn't behind a paywall).

I don't want to deprive the authors any more than James did, but I do want to be able to include context to show how James usually ripped off and mutilated these authors' ideas. I believe this to be fair use and properly cited.

However, if you are one of the plagiarized authors and would like the text of your work to be taken down from this site, please [submit an issue](https://github.com/tustin2121/James_Somerton_Transcripts/issues) and I will gladly clear out the right side boxes. 

</from>
<james>

<u>[On screen]: I will call out when something relevant is shown on-screen.</u>

Usually, James will show and read out quotes--

<u>[Scrolling on screen]:</u>
> "In full screen, which I will try and match the formatting, style, and punctuation of, even if that means sometimes having to correct <del>a thing</del><ins>something</ins> James mispronounces."

Other times, <q>words may appear on screen</q> floating next to James's head, which he will then <q>read out loud anyway</q> as if to highlight the words.

</james>
<from></from>
</compare>

<compare>
<visual {% include citation for=page.cite.plagiarized.video at="(3:22)" %}>
{% assign vid = page.cite.plagiarized.video.color %}

Sometimes, there will be transcripts with stolen visuals from other documentaries or youtube creators.

</visual>
<visual-line></visual-line>
<james>
	
<span visual={{vid}} on="3:12" off="3:31">Parts which have footage from another video will be marked with a highlight bar between the two columns. The numbers in the middle bar highlights are the start and end timestamps in the original video.</span> The highlight is positioned to roughly match up in the left-side transcript with when in the video the stolen footage is shown. (You'll need Javascript turned on to see these highlights.)

</james>
<from {% include citation for=page.cite.plagiarized.wikipedia at="Plot ¶5" %}>

This can even be separate from what is being said in the video, so textual plagiarism will still be called out on the right.

<footer>If you don't see any numbers in the middle, you might be on a very narrow screen, where the numbers will disappear to save screen space.</footer>
</from>
<clip visual={{vid}} on="5:10" off="5:16" {% include citation for=page.cite.clips.hello_world %}>

Man A: (to Man B) "Video clips James uses will be included here."

<u>[With some description as to what's going on.]</u>

<u>[The two men kiss passionately.]</u>

</clip>
<james {% include timecode %}>

Sometimes James will just make up something which is <mark fc=false>perfectly true, honest! Go look it up!</mark>

</james>
<comment {% include commenter for=tustin %}>

In which case, there will be a comment, usually linking off to [some source](https://en.wikipedia.org/wiki/Source) with the factual information to correct the misinformation.

</comment>
<james {% include timecode %}>

<mark fc>Sometimes we just want to comment on something</mark>, or may be pointing something out that we're not sure is true<sup cn></sup> but still find suspicious.

<span visual=none on="?" off="?">Other times, we want to point out</span> some <mark yikes>absolutely terrible take James had about things.</mark> And we'll provide commentary as to how <span visual={{vid}} on="2:22" off="2:24">exactly this is a "yikes" take.</span>

</james>
<comment {% include commenter video=todd %}>

Some commentary may be provided by a famous YouTube personality, like HBomberGuy or Todd in the Shadows. These boxes will have their take from their video transcribed verbatim here. The link in the top corner will link off to the time in the video where they said this thing.

</comment>
</compare>

<compare>
<james {% include timecode %}>

Sometimes James does actually <mark fc=true>correct things</mark> from the sources he's plagiarizing from. It's rare, but it has been shown to happen.

</james>
<comment span=2 {% include commenter for=tustin %}>

Commentary in these boxes is copy-pasted from people making the comments, so their text is verbatim how they wrote it (plus or minus [some] minor grammar changes and punctuation). The link in the top corner will usually link off to the exact message where this text was copied from.

I (tustin2121) am the creator and maintainer of the site, so you'll often see my name on the box as I will give more meta commentary on things. I will point out if I'm summarizing something and make sure things are properly linked and cited.

<details>
<summary>If things get too long...</summary>

I may put very lengthy information in 'detail' paragraphs that you have to click to open. These are to allow me to give you full context about things without unnecessarily stretching the transcript page more than it already is.

> May also contain lengthy quotes.

</details>

<footer>

I may provide footnotes, like this, signed of course if it's not my comment box. {% include signed for=tustin %}

</footer>
</comment>
<credits {% include timecode %} header="Title Card:">

If something is purely visual. It will be presented in grey boxes like these.

> Written by  
James Somerton  
& Nick Herrgott

> Executive Producers  
[Six Patron Names]

</credits>
</compare>

<div class="notice-banner">Notice banners like this may appear for meta-textual purposes, eg spoiler/trigger warnings.</div>

<compare>
<comment {% include commenter for=tustin %}>

(Note: As in warnings that I'm giving, not warnings James is giving in his videos. James's warnings will be in a box on the left.)

</comment>
<james {% include timecode %}>

Let me tell you about the sponsor of this video:

[Sponsor Read]
<!--ATLAS VPN. Blah blah blah-->

</james>
<comment {% include commenter for=tustin %}>

I will be cutting out any links to James's socials and patreon(s), as well as any sponsor spots he did. He doesn't need the publicity.

I will also be cutting any names of former patrons, because it's not our fault we were duped. (I'm a former patron, and this site is basically how I'm getting my feelings about it out.)

</comment>
</compare>

</div>

----

<div class="podcast">

<compare>
<james>

Some videos are podcast episodes, where James and Nick will banter back and forth about things.

</james>
<nick>

They will be formatted like this, with their back and forth more visually shown.

</nick>
<comment span=2>
{% include header for=tustin %}

And of course, fact checking will happen on the right here, as usual.

</comment>
<james>

They may sometimes interrupt one another, and where it's possible to hear, I'll make sure to include what was said in the cross-talk.

</james>
<nick crosstalk>

They may--

</nick>
<nick>

Yeah, and, um-- I'm-- I'm gonna try and cut out, um... some... some of the ums and repetition that... that comes from unscripted content like this. Just to, you know, be easier on the eyes. No promises though.

</nick>
</compare>

</div>
