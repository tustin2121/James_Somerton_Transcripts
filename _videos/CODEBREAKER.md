---
# cSpell:words: Yorgos Lanthimos
date: 2020-12-04
title: "CODEBREAKERS: Queer film theory (and why it matters)"
status: Finished
aka: !!seq
  - "Queering Cinema (by any means necessary)"
  - "Codebreakers: a rant by James Somerton (Thumbnail)"
topics: !!seq
  - Poetic / Prose Edda
  - Achilles and Patroclus
  - The Song of Achilles / Troy
links: !!seq
  - "https://www.youtube.com/watch?v=i_ElaGEfcxg"
# description: "a video essay on...?"
notes:
  - hbomb

contributors:
  downloaded: "[tobi-cat](https://github.com/tobi-cat) from [YouTube Archive video](https://www.youtube.com/watch?v=i_ElaGEfcxg)"
  formatting: $cite$tustin2121
  citation: 

cite:
  clips: !!map
    the_favorite: { short: "The Favorite (2018)", full: "TODO The Favorite" }
  yikes: !!map
  misinformation: !!map
    prose_edda: "James makes up several things about the Prose Edda."
    poetic_edda: "He also makes up things about the Poetic Edda."
  plagiarized: !!map
    film_class:
      color: 4
      short: "(DaVega, 2016)"
      full: "DaVega, S.W. (2016). Film Theories Handout in <em>FILMST 101 - Intro to Film Studies</em> [Class materials]. Santa Barbara City College."
      url: "https://soma.sbcc.edu/users/davega/xNON_ACTIVE_CLASSES/FILMST_101/04_FILM_THEORIES/FilmTheories.pdf"
      chain:
        _desc_: "which took overviews from..."
        wiki_theory: 
          full: "Wikipedia. (2009). <em>Film theory</em> [Article]."
          url: "https://en.wikipedia.org/w/index.php?title=Film_theory&oldid=312921719"
          chain:
            _desc_: "which plagiarized from..."
            read_film: &read_film { color: 1, short: "(Monaco, 1977)", full: "Monaco, J. (1977). <em>How to Read a Film: Movies, Media, and Beyond</em> Oxford University Press, Inc.", url: "https://www.google.com/books/edition/How_to_Read_a_Film/ub74_dtjxKoC?hl=en&gbpv=1&pg=PA297&printsec=frontcover" }
---
{% assign tustin = site.data.cite.tustin2121 %}
{% assign hbomb = site.data.cite.hbomb.video %}

<compare>
<credits class="desc">

\[Lost]

</credits>
<comment>

{% include chapter-link at="00:00" for="Introduction" %}  
{% include chapter-link at="01:00" for="Part 1: What is film theory?" %}  
{% include chapter-link at="07:49" for="Part 2: What is Queer Theory?" %}  
{% include chapter-link at="14:23" for="Part 3: Yes. We are looking for it." %}  
{% include chapter-link at="23:49" for="Part 4: Erasure" %}  
{% include chapter-link at="28:11" for="Part 5: Achilles was a bottom" %}  
{% include chapter-link at="32:03" for='Part 6: The "Big Gay Lie"' %}  
{% include chapter-link at="38:34" for="Part 7: Queering History" %}  

</comment>
</compare>

{% include transcript-start %}
{% assign timecode = "0:00" %}

<compare>
<credits {% include timecode %} class="opening">

\[Computer command line theming]:

> \>STARTING PROCEDURE

<details>
<summary>[Starts printing C++ code for some sort of MIDI reading program to the screen]:</summary>

```c++
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include "midiread.hpp"

#ifdef __MSDOS__
#define WRITE_BINARY "wb"
#define READ_BINARY  "rb"
#define READ_TEXT    "rt"
#define READWRITE_BINARY "wrb"
#else
#define WRITE_BINARY "w"
#define READ_BINARY  "r"
#define READ_TEXT    "r"
#define READWRITE_BINARY "w"
#endif

#ifndef MAXEVENTLEN
#define MAXEVENTLEN 1024
#endif

void lexstart(char* name);
int yyerror( char* msg );
int yylex();
int yyparse();
static void miditext(FILE* f, /* cut off*/);
static void midiendtrack(FILE* f, /* cut off*/);
static long log2(long n);
static void copybytes(FILE* f, /* cut off*/);
static int isactive();
static int lastevent = 0xff;
static int option_noteoff = 0; // cut off
static long filesize = 0;
static int percent = 0;
static int compress = 1;
static void readchannel();
static void putcode(FILE* f, /*cut off*/);
static void noteon(FILE* f, /*cut off*/); // "note on"
static void noteoff(FILE* f, /*cut off*/); // "note off"
static void time(long n);

extern char* yytext;
extern long /* too blurred */();
extern FILE* yyin;
extern FILE* yyout;
// It's now too blurred to make out
```

Other lines include:
```c++
(strncmp(s, "major", 3) == 0 || strncmp(s, "Major", 3) == 0)
*s >= '1' && *s <= '7' && strchr("b#", s[1]) !== 0
if (strncmp(s, "major", 3) == 0 || strncmp(s, "Major", 3) == 0)
'' - '0';

("illegal key signature: missing maj or min");
```

</details>

\[Eventually the screen flashes and we get]:

> codebreakers  
a rant by james somerton

\[Fuzz to white then fade to James over a red curtain backdrop. ]

</credits>
<comment>
{% include header for=tustin %}

This video is <s>pretentiously</s> presented in the CinemaScope aspect ratio.

![Alt text](../media/cinemascope.jpg)

</comment>
</compare>

<compare>
<james {% include timecode %}>

Having made a few videos about queer coding and representation in movies, I've gotten a lot of feedback from a lot of different people. But one comment that I see over and over and over again is something like this:

\[Video blurs and quote shown on screen, James reads in artificial high pitched voice]:

> "This was never meant to be gay. You're just reading into it too much"

...or...

\[Video blurs again and quote shown on screen, James reads in artificial low pitched voice]:

> "You're reaching pretty far to find anything queer about this"

And so I decided that people are *woefully* undereducated on film theory, which is -- as we know -- the most important subject you could ever study in school. Because if these people leaving these comments knew what film theory was, they'd know what Queer Theory is.
{% assign timecode = "1:00" %}

</james>
<from></from>
</compare>

## Part 1: What is film theory?

<compare>
<james {% include timecode %}>

"Film theory" discusses the essence of cinema and provides conceptual frameworks for understanding a film's
relationship to reality, other arts, individual viewers, and society as a whole. This term is not to be confused with "film analysis", a way of analyzing film which may draw upon ideas from film theory.

\[On screen next to James, he reads it out]:

> Film analysis is the process in  
> which a film is analyzed in terms  
> of Mise-en-scène,  
> Montage,  
> Cinematography,  
> Sound,  
> and editing.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

As the new popular form of the 20th century, film immediately invited theoretical attempts to define its nature and function, mostly as a result of film's own inferiority complex as the youngest of the arts. The impetus for much of early film theory was to gain a degree of legitimacy. Writers, directors, producers, and critics wanted to slap a philosophical academic lens onto movies so that they could be held in the same esteem as theater, and the novel. 

However, much of coding in film, especially queer coding, is rooted in film language itself. And "film language" refers to conventions and patterns in lighting, sound, and visual elements that reinforce the narrative structure. This doesn't necessarily refer to elements of the narrative itself, like something written into the script or an actor's performance. These elements are usually more subtle.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

They're used to change the moods or attitudes of a scene highlight, a recurring theme of the film, or convey an unspoken message that the director is trying to get across. That last part is important for queer coding; go watch [my videos on "gaybaiting"](Unrequited1.md) for more on that.

You can see clear examples of lighting used as film language in *Avengers: Infinity War*, where scenes lit with purple highlight Thanos's influence and cruelty. And scenes lit with orange are in resistance to him. *The Last Jedi* -- the absolute best *Star Wars* movie of all time, we can all agree on that -- very deliberately depicts objects being split apart. This can speak to the content of fractured alliances within the movie itself, the divided nature of the fan base as a whole, or making a meta self-aware statement of the director's knowledge of the film's own divisive content.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Granted, while film language is not limited to lighting and visual cues, these are very explicit examples. Most film language is never meant to be picked up by the audience at large, but rather send subliminal messages to influence how you feel about certain scenes and characters. In some respects, all of this was anticipated by the development of film theory at a time when the cinema was just being born. Early theorists emphasized how film differed from reality and how it might be considered a valid art form. 

In the years after World War II, the French film critic and theorist Andre Bezine reacted against this approach to the cinema, arguing that film's essence lay in its ability to mechanically reproduce reality, not in its differences from reality. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

In the 1960s and 70s, film theory took up residence in academia, importing concepts from established disciplines like

\[On screen next to James, he reads it out]:

> Psychoanalysis  
> Gender Studies  
> Anthropology  
> Literary Theory  
> Semiotics [and] 
> Linguistics  

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

During the 1990s, the digital revolution and image technologies had an impact on film theory in *various* ways. There has been a refocus onto celluloid film's ability to capture an indexical image of a moment in time by theorists, like Maran Don, Philip Rosen, and Laura Mulvy. 

Today there are many different schools of film theory. So let's talk about them: 😊

</james>
<from></from>
<james {% include timecode %}>

\[On screen next to James]: "Structuralist Film Theory"

The Structuralist film theory emphasizes how films convey meaning through the use of codes and conventions, not dissimilar to the way languages are used to construct meaning in communication. An example of this is understanding how the simple combination of shots can create an additional idea. The blank expression on a person's face, an appetizing meal, and then back to the person's face. While nothing in this sequence literally expresses hunger or desire, the juxtaposition of the images convey that meaning to the audience.

</james>
<from></from>
<james {% include timecode %}>

\[On screen next to James]: "Marxist Film Theory"

Marxist film theory is one of the oldest forms of film theory. Sergey Eisenstein and many other Soviet filmmakers in the 1920s expressed ideas of Marxism through through film. In fact, the Hegelian Dialectic was considered best displayed in film editing through the development of the montage, a Russian invention. The biggest reason Russian filmmakers began doing this was because they had a serious problem with how Hollywood was making movies. Eisenstein's solution was to shun narrative structure by eliminating the individual protagonist in favor of telling stories where the action is moved by a group, and the story is told through a clash of one image against the next, whether in composition, motion, or idea.

</james>
<from></from>
<james {% include timecode %}>

\[On screen next to James]: "Formalist Film Theory"

Formalist film theory is a theory of film study that is focused on the formal or technical elements of a film, i.e the lighting, scoring, sound, set design, use of color, sha-composition, and editing. It's a major theory of film study today. Formalism at its most general considers the synthesis or lack of synthesis of the multiple elements of film production, and the effects, emotional and intellectual, of that synthesis, and of the individual elements. 

For example, let's take the single element of editing: A formalist might study how standard Hollywood continuity editing editing creates a more comforting effect, and non-continuity or jump cut editing might become more disconcerting or volatile. A good example of this would be Tarantino's *Pulp Fiction* or the first season of Netflix's *The Witcher*.

</james>
<from></from>
<james {% include timecode %}>

\[On screen next to James]: "Feminist Film Theory"

Feminist film theory is the theoretical film criticism derived from feminist politics and feminist theory. Feminists have many approaches to cinema analysis regarding the film elements analyzed and their theoretical underpinnings. The development of Feminist film theory was influenced by Second Wave Feminism and the development of Women's Studies within academia. Feminist scholars began applying the new theories arising from these movements to analyzing film. Initial attempts in the United States in the early 1970s were generally based on Sociological Theory and focused on the function of women characters in particular film narratives or genres, And of stereotypes as a reflection of a society's view of women.

</james>
<from></from>
<james {% include timecode %}>

\[On screen next to James]: "Auteur Film Theory"


Auteur theory in film holds that a director's film reflects that director's personal creative vision, as if he were the primary auteur, the French word for "author". In some cases, film producers are considered to have a similar auteur role for films that they have produced, such as David Os Selnick and Kevin Feige. 

</james>
<from></from>
<james {% include timecode %}>

So it's clear that there are many ways of examining film in a critical way. not one school of film theory can fully describe a complete understanding of film itself. So, for using theory in film criticism, a critic usually has to state which theory they're drawing from. This goes to say, however, that film can be criticized with pre-existing schools of thought, like with Marxism and Feminism. In both of these cases, scholars and critics took certain tenants of these studies and applied them to an analysis of film. So if there is a Marxist and Feminist reading of cinema, why not a queer one? 

</james>
<from></from>
</compare>
{% assign timecode = "7:49" %}

## Part 2: What is Queer Theory?

<compare>
<james {% include timecode %}>

Originating in the early 1990s, the school of thought called "Queer Theory" compromises<sup class="add">[sic: comprises]</sup> a diverse body of intellectual inquiry. It holds that specific psychological, political, and cultural codes have elevated heterosexuality to the status of a sexual given. A man or woman can automatically be assumed to be cisgender and heterosexual. Differences in gender and sexuality are modifications on what is considered to be a given. He isn't just a *man*, he is a *gay man*. Straight is the default, and furthermore, straight is the objective. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Social rewards are provided for queers who can pass. Certain opportunities and privileges are awarded to queer folks who seem to have assimilated into the straight expectations and values. This includes things like--

\[Appearing on screen as he speaks them]:

--<q>Marriage</q>, <q>Parenthood</q>, <q>Settling Down</q> at X years old, <q>Moving to the Suburbs</q>, and fulfilling various traditions the society has--

\[The last one is presented on-screen as "Being Basic as Fuck".]

--but which have no value aside from being rituals that we practice. And gender reveal parties... (That's a new one...) [Stares off to the side in disgust]

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

This is called "heteronormativity" and it's the most intellectual way that you can call a bitch basic. By exposing the limitations of heteronormative conditioning and taking advantage of the culturally performative aspects of gender, the aim of Queer Theory is to draw a distinction between the individual and the formative processes that influence gender and sexuality. It's not to say that it's bad to be straight, but instead Queer Theory looks at all sexuality and gender as being neutral and questions why weight and preference are given to some while others are seen as abnormal. 

Queer Theory is not only the analysis of codes and conditioning associated with heteronormativity, but more recently is being extended to discuss and document the interactions of queer people in their own communities. A queer perspective then is looking at a vast array of sexual codes that exist in culture, and does not privilege heterosexual codes as natural or authoritative. The designation of queer is itself a form of empowerment through which a disenfranchised subculture has taken charge of a term that the straights have used historically as a derogatory label. 

</james>
<from></from>
<james {% include timecode %}>

Theorists vary in their configurations on which groups and perspectives are included under the blanket of "queer film theory". Many theorists find any challenge to the normative nature of heterosexuality to qualify as queer, such as the non-traditional family at the end of aliens, while others use the term to apply specifically to gender and sexual orientations that challenge or complicate the presumed alliance between sexual identity and gender identity.

This isn't to say that a queer reading is one that requires us to see a certain character as queer coded. A queer reading can examine the ways in which the narratives, themes, and language of a film reinforce and exemplify heteronormative values. For instance, the film *Cordelia* is a period horror movie. However... you wouldn't know it from the movie's poster. A wave of queer eyebrows were raised, unsure as to what about the movie's poster was supposed to be so... scary. The messaging in this poster is that the horror here is a dominant woman and a submissive man. To everyone outside the hetero hegemony, this just looks like a good time.

</james>
<from></from>
<james {% include timecode %}>

Queerness doesn't even need to be present in a film to derive a queer reading from it. Just like there can be a feminist reading of *Reservoir Dogs*, where there are almost no female characters, by examining the way patriarchal masculinity factors into the depictions of each character. 

There can also be a queer reading of *Kill Bill*, my favorite movie. There are no openly queer characters in the film, and for characters who might be queer, their queerness is not at all encoded in the language of the film. However, the bride, when she realized that she was pregnant, immediately wanted to leave behind her atypical chosen family. Instead of raising her daughter among a group of cutthroat assassins, she wanted a better life by forcing herself into the most heteronormative family that she could find on short notice. Because growing up poor in El Paso, Texas, is *so* much better than growing up around rich assassins.

It is this rejection of non-conformity which sends her life into ruins, and spurs the whole bloody affair into action. (And, yes, ator hanzo is totally gay.)

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

In essence, Queer Theory is watching a film through a queer lens, reading the film as queer whether it was meant to be or not. Finding a way to see art in a queer way. But that said, reading gay characters into film is not only a part of Queer Theory. it's pretty much the OG gay mood. We do it without realizing it. 

</james>
<from></from>
<james {% include timecode %}>

Even before Queer Theory, we would watch a play or a movie and see a character, and we would look at them and say what they're going through is a queer experience, intended or not. That's easy to do with some movies. The queer subtext in *A Nightmare On Elm Street: Part Two* is so obvious the straight people readily picked it up. The lesbian energy in *Dracula's Daughter*, the bisexual tension erupting from *Rebel Without A Cause*, even the relationship between Captain America and Bucky Burns was read as gay by *millions* of straight movie goers.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

But other movies require a bit more digging. In [Evil Queens](Qvu84kjtGvE), I talked about the queerness of the '90s renaissance disney movies especially *Aladdin* and *The Lion King*. When I first mentioned this to people, they thought I was crazy. Then I explained it to them, and they came around to seeing it my way.

</james>
<comment>
{% include header video=hbomb at="1h59m18s" %}

> And everyone clapped.

</comment>
</compare>

<compare>
<james {% include timecode %}>

<span visual=none on="?" off="?">In *The Legend Of Korra*, there actually are confirmed bisexual characters. But ask any queer person who's watched the show and they'll tell you every damn character on it is bi or pansexual.</span> It's not wishful thinking; it's a queer reading of the show. 

<span visual=none on="?" off="?">Bolin's close relationship with Veric.</span> 

<span visual=none on="?" off="?">Mako's will-they-won't-they with Prince Woo (which seems to be getting closer to becoming canon in the graphic novels).</span>

<footer>James mispronounces Mako's name, using a short-a sound instead of a long a.</footer>

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Media that attracts a queer reading is usually produced by straight people, with no intention on being read as queer. But the LGBT population, so starved for proper representation, will look through every nook and cranny of their favorite movies, tv shows, and books to find some hint that's somewhere in that story... there's at least a *moment* that... makes them feel like they belong. That's why people cry out for more media produced for queer people by queer people, because otherwise we basically don't exist. We can be told *over and over and over* again that we're just trying to find something that isn't there.

This argument isn't new. Straight people telling gay people that we're reading too much into a story, that we just *looking* for gayness...

Well... it's because we are.

</james>
<from></from>
</compare>
{% assign timecode = "14:23" %}

## Part 3: Yes. We are looking for it.

<compare>
<james {% include timecode %}>

Where else are we going to look for queerness? The torrent of explicitly queer media that's been *pouring out at us* over the last 100 years?! If you take news or history books for granted, it's like queer people just &mdash; bloop! &mdash; popped up in 1969! And trans people didn't come along until Caitlyn Jenner. (Which is a bit of an unfortunate introduction.)

Suddenly these people just materialized! The complete lack of historical coverage and cultural awareness of these people is a major contributing reason why straights *still to this day* say that we "choose to be gay" or "choose to be trans". 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

But you'd be hard pressed to find actual honest queer representation in history. It's not that it doesn't exist though. It's just that our white, cisgender, heterosexual, usually-male historians tend to straight-wash out own history in academia. 

Whether it's Egyptian mummies with XY chromosomes, buried with makeup and a corset, with drawn-on breasts, *puzzling* archaeologists as to why *he* would be buried like that! Or viking burial mounds, where male warriors would be buried with combs, jewels, and mirrors and instead of, you know... [air quotes] "boy things". 

Or even something like The Lovers Of Me'dia<sup>1</sup>, petrified, holding hands, who are suddenly the *brothers* of me'dia, or *very good friends* of me'dia... or *roommates* of me'dia. 

<footer>1. Corrected on-screen to "The Lovers of Modena"</footer>

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

And speaking of roommates, what about the *inexplicable mysteries* we will never *truly know the answers to*, like why [Lady Elanor Butler and Sarah Ponsonby](https://en.wikipedia.org/wiki/Ladies_of_Llangollen) would run away from their marriage arrangements, moved <del>to</del> Wales, and adopt a small dog they affectionately named... *Sapphos*. (Mysteries... we will never know...)

And what about Abraham Lincoln, who shared his bed with his bodyguard for his entire tenure in The White House. Surely it was just a matter of different times. Times were different back then. Men expressed manliness in different ways! It was just different times, folks! Different times! No homo president!

</james>
<from></from>
<james {% include timecode %}>

There also seems to be a strange element of history which *compulsively* tries to impose postcolonial values upon pre-christianized societies. I'm not sure if it's just that we're so indoctrinated into our own social structures or if our (small "L") liberal society needs to believe that our social values are actually *progressing*, and so we will force history to be as regressive as possible to make our own time look better in contrast. 

But why is it so hard to believe that a Viking society, who believed that a god that shaped everyone out of mead and clay, who hung from a tree connecting nine distinct worlds and realms together, and who was eaten by a wolf the size of the moon... couldn't see that a young boy in the village who liked dresses and flowers might *actually* be a girl. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

And on the topic of mythology, many classical scholars<sup cn></sup> like to gloss over and rewrite myths to have a straight leaning. <mark fc=false>Heracles's torrid of male lovers</mark> are mostly forgotten about. Or Achilles, who by most mythological accounts, preferred men exclusively. Not that you'd know it; from nearly a thousand years the scholar is desperately trying to rearrange all of Hellenic culture to invent this kind of masculinity where straight men can just be *that close*. 

</james>
<comment>
{% include header for=tustin %}

"Torrid" means [hot or passionate](https://www.merriam-webster.com/dictionary/torrid), or even just dry heat. It is not a noun for a collective, like James is apparently attempting to use here. There's [not even a word *close* to "torrid"](https://www.wordhippo.com/what-is/another-word-for/collection.html) that might be a collective noun that he was trying to use. So here's some he could have used instead:

"Heracles's myriad of male lovers", "Heracles's assemblage of male lovers", "his retinue of male lovers", "his hoard of male lovers", "his multitude of male lovers", "throng of male lovers", "cadre of male lovers", "congregation of male lovers", "compliment of male lovers", "crew of male lovers", "battalion of male lovers", "fraternity of male lovers", "armada of male lovers", "council of male lovers", "quota of male lovers", "glee club of male lovers"...

</comment>
</compare>

<compare>
<james {% include timecode %}>

I mean, it doesn't help that many of these stories were translated and recopied by Christian monks and scholars in the Dark Ages; in many cases their original texts are lost. The author of Beowulf, for example, though far from queer, makes an explicit point of mentioning that the text is being doctored so that it can survive Christian purges.<sup cn></sup> It's not always done maliciously, but many ancient monks saw the artistic value of these stories and saw that they would not survive Christian censorship. Heavy edits were necessary to align with Christian values.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

For instance, the Poetic and <mark fc=false>Prosaic Edda</mark>, the predominant source of what we know of Viking culture, <mark fc=false>was written by a single monk in Iceland</mark>. These stories were collected from oral traditions, runestones, and scavenged from what writings could be found before they were destroyed by Christians. <mark fc>Writings in these Eddas now explicitly decry homosexual acts between men, deeming them as being shameful and unmanly.</mark> 

</james>
<comment id="prose_edda">
{% include header for=tustin %}

1. Nobody calls it "the Prosaic Edda". It's the [Prose Edda](https://en.wikipedia.org/wiki/Prose_Edda).</li>
2. The Prose Edda was attributed to [Snorri Sturluson](https://en.wikipedia.org/wiki/Snorri_Sturluson), who was never a monk, but rather a historian, poet, and lawspeaker.</li>
3. <span id="poetic_edda">We don't know who wrote or compiled the [Poetic Edda](https://en.wikipedia.org/wiki/Poetic_Edda), but it was never speculated to be Snorri.</span>
4. [Need a better-informed opinion.] Vikings seemed to only really care when the men were bottoms (["eg, willingly being the 'female' partner in a homosexual act"](https://library.oapen.org/bitstream/handle/20.500.12657/61672/9781800647749.pdf) (pg 340)).

</comment>
<james {% include timecode %}>

But there is archaeological evidence that refutes much of what the Eddas say, throwing doubt on on how honest these documents are. Burial mounds have been found with women honored as warrior heroes, or with same-sex couples resembling marriages. Surviving standing stones and wood carvings implicitly suggest same-sex interactions. 

And that does little to say of eyewitness accounts of byzantine merchants and travelers which point out just how sex positive and gender woke this society of barbarians really was. In cultures that place such a strong value on sex, why are heterosexual couplings seen as the only culturally viable way of getting it?

</james>
<from></from>
<james {% include timecode %}>

As has been frequently noted, the ancient greeks did not have terms or concepts that correspond to the contemporary dichotomy of "heterosexual" and "homosexual". There's a wealth of material from ancient greece pertinent to issues of sexuality, ranging from dialogues of Plato such as the *Symposium* to plays by Aristophanes and greek artwork and vases. 

Probably the most frequent assumption about sexual orientation, at least by ancient greek authors, is that people can respond erotically to beauty in either sex. Some were noted for their exclusive interest in people of one gender, for example, Alexander the Great was known for his exclusive interest in other men. Such people however are generally portrayed as the exception to the rule.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Furthermore, the issue of what biological sex one is attracted to is seen as an issue of taste or preference, rather than as a moral issue. A character in Plutarch's *Eroticus* argues that:

> "The noble lover of beauty engages in love wherever he sees excellence and splendid natural endowment without regard to any difference in physiological detail".

Essentially, gender just becomes an irrelevant detail, and instead the excellence in character and *beauty* is what is most important. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Plato in the *Symposium* argues for an army to be comprised of same-sex lovers. Thebes did actually form such a regiment, the [Sacred Band of Thebes](https://en.wikipedia.org/wiki/Sacred_Band_of_Thebes), consisting of 500 soldiers, 250 couples.

\[On screen, showing footage of some trailer for "Sacred Band of Thebes"]: "Yep. They even make porn about them."

They were renowned in the ancient world for their valor in battle and they're still talked about today. Ancient Rome had many parallels to ancient Greece in its understanding of same-sex attraction, and sexual issues more generally. This is especially true under *the Republic*, yet under the Empire, Roman society slowly became more negative in its views towards sexuality, probably due to social and economic turmoil, even before Christianity became influential. 

</james>
<from></from>
<james {% include timecode %}>

Exactly what attitude the New Testament has towards sexuality in general (and same-sex attraction in particular) is a matter of sharp debate. Some say that many passages taken today as condemnations of homosexuality are more concerned with prostitution. Or where same-sex acts are described as unnatural, the meaning is more akin to "out of the ordinary" rather than as "immoral". Yet others have argued that the homophobic conventional contemporary reading is more plausible.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

So could it also be that we're reading history with, not only a heteronormative lens, but a post-puritan one? Where we're examining cultures whose gods and myths encourage them to have sex for pleasure and fun, but... we're doing so within the stuffy cultural expectations that say sex is only for procreation. If sex isn't just for babies, why not do it with whoever? That would make the most sense right? But given our current cultural discomfort with sex, academics seem... reluctant to see it that way. 

</james>
<from></from>
<james {% include timecode %}>

Though an interesting observation of our own recorded history is how casually historic writers recorded sex and same-sex pairings. Language used to describe these relations, say with Achilles and Patroclus, are so casual, it's easy to dismiss them as really good friends. 

</james>
<from></from>
<james {% include timecode %}>

Food for thought: the term "companion" in history almost *always* was used to describe romantic or sexual relations,<sup cn></sup> not "buds" or "gal pals". That's why the movie *Long-Term Companion* is called that and not "Long-Term Friend With Benefits". 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

It's almost as if our ancestors never really expected homophobia or sex-phobia to be a serious issue. Instead we have to dig through implications, through innuendo, through double-entendres that were meant to be dirty jokes, that somehow survived over centuries, but whose double meanings can be dismissed as... just being from a different time. We have to dig. Maybe not because our ancestors saw same-sex relations and gender non-conformity as *shameful*. But instead because they took all of it completely for granted.

Any civilization is characterized by its past. It's in looking back that we find our collective identity. naTions rise and fall, and people come and go, as do attitudes and societal norms. Yet as a queer community, the history of our people is often lost to us. Unlike the societal conditioning we receive from our parents, we don't get a queer rule book when we come out. Nor are we taught the great deeds of our gay predecessors. 

</james>
<from></from>
<james {% include timecode %}>

So as we start out on our lifelong personal journeys... how do we discover our queer identity if we don't know much about... those who came before us? What if the accomplishments of historic queers are hidden for us by a thick coat of straightwashing? <span stat:id="irony" id="gay-erasure">It provokes a deep and meaningful question, I think: what is the real tangible impact of gay erasure?</span>

</james>
<from></from>
</compare>

## Part 4: Erasure

<compare>
<james {% include timecode %}>

Only in recent years, as hard fought for queer rights have been won, have societal attitudes begun to soften. And as this happened, so have academic historians, once reluctant to discuss the sexuality of historical figures *at all* (unless they were straight), begun to move with the times. Younger more liberal historians in particular are leading the charge, more rounded in their outlook and not threatened by sexuality. tHey've started to look back through the archives and sift through the evidence passed down from generation to generation.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

In so doing, they've discovered the queer histories of people such as Alexander the Great, Leonardo da Vinci, Florence Nightingale, King James the Sixth, William Shakespeare, Richard the First, Julius Caesar, Virgil, not to mention half the philosophers in Greece. 

But not all historians have been so open-minded. Too many old academics, many still writing, remain adamant that some of their key historical subjects couldn't *possibly* have been gay. Too often, characters from history who were close to people of the same sex, and reading between the lines, were clearly an intimate and passionate same-sex relationships, are marked down as "friends" or "*very close* friends" or "*confidants*". 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

I'm actually about to break your brains, but history has been gay a *lot* longer than heterosexuality has existed. Before Freud and Kinsey, sexuality was largely regarded as fluid. All that talk about "the homosexuals are going to corrupt your brothers, sons, and husbands" sounds ridiculous to us today because we think of sexuality as largely fixed. The term "homosexual", "heterosexual", "bisexual"... they're all terms that arose out of the latter part of the 19th century, not... Greece and Rome. Before that, academics tried to describe same-sex attraction simply as sexual inversion. Though we were mostly just referred to as "queers" and "perverts". But as the concept of homosexuality *didn't exist*, neither did heterosexuality. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

As early as the 1930s and 40s, people actually did literally believe that sexual acts between two men were something that any man was capable of, and this is clear in criminal cases prosecuting men for having sex with men. It was specifically the acts of buggery and fellatio that were observed as illegal. (Also known more generally as "sodomy"). Courts prosecuted men as it was a crime that they chose to do. Or an illicit lifestyle that they chose. Agency, and the choice to commit illicit acts of what was called "perversion", was key in the prosecution of these men. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Women weren't usually prosecuted for queer acts because lawmakers were usually too squeamish to talk about women and sexuality, so these cases were normally thrown out. That isn't to say that there wasn't a *stigma* attached to it, just that they were more likely to get away with it. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

This is a pivotal distinction in how sexuality was observed before and after the development of clinical psychology. But extrapolate this mindset to pre-Christian societies, which had *no* stigma against queerness, and you kind of get this fantasy land where... people are people and sometimes they like men, and sometimes they like women, and... some cultures also didn't really care much for the distinction between *either of those either*. 

</james>
<from></from>
<james {% include timecode %}>

The Greeks saw gender as a continuum. 

</james>
<from></from>
<james {% include timecode %}>

Egyptian and Persian women could buy property, own businesses, and manage their own estates. 

</james>
<from></from>
<james {% include timecode %}>

Roman law allowed a few different ways that unwed women could have political protections. 

</james>
<from></from>
<james {% include timecode %}>

And Norse and Celtic culture held men and women under roughly the same codes of honor, so it never really mattered what was between your legs, as long as you weren't an asshole.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

However, with the absence of explicit evidence of graphic sexual activity &mdash; why would most of us leave that behind? &mdash; historians seem happy to view an absence of dirty laundry as an absence of gay fact. This feels like a conscious and concerted attempt to erase our history. The authors of these books hold a prejudice that screams out in their work. The *silence* is *deafening*. 

Such views damage our collective understanding of our queer past and leave the later generations of gay, lesbian, bi, and trans people without a link to their history. Our ancestors are closeted in death, and *we* are shut in the dark as a result. But sometimes queer representation does manage to pop up...

</james>
<from></from>
</compare>
{% assign timecode = "28:11" %}

## Part 5: Achilles was a bottom

<compare>
<james {% include timecode %}>

To some historians, it is the love that launched a thousand warriors, and representation that survived the test of time. To other more pigheaded historians, it is nothing but a friendship. A very good friendship. A friendship which was very... beneficial.

However, looking at the relationship between Achilles and Patroclus, scholars have discussed over the years whether their relationship *matches* with our understanding of homosexuality today. Many scholars argue that Greeks do not have the same sex labels as we do now. Many claimed that Homer's treatment of the relationship between Achilles and Patroclus in the Iliad is ambiguous. It's not clear if they were lovers who slept together or just "best friends who shared the same bed". [Ironic stretching, forced smile]

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

So how did this affect the current representation of the pair. Well, the movie *Troy* contained *several*... *factual inaccuracies*, which deviated greatly from the story of the *Iliad*. For example, Menelaus and Agamemnon died *far* too prematurely. Another noticeable difference, that changes the whole story, is the suddenly minor role of Patroclus, who is now the *cousin* of Achilles, something akin to a fanboy... While in the *Iliad* he is revered, admired by Achilles and all the soldiers around him, and he *dies* a hero... giving his life for Achilles. In the movie... he's just a dumb cousin.

While the *Iliad* depicts Achilles and Patroclus's relationship as one of respect, in *Troy* Achilles is a blasphemous *brute* acting only for his own glory and... *pleasure*. By reducing Patroclus to a minor character, *Troy* reduces Achilles as a hero. And by rendering its storyline entirely heteronormative, the film manipulates the rage of Achilles into selfish wrath rather than an emotional outburst at the murder of his lover and best friend.

*Troy* compares the relationship between Achilles and Patroclus to that of Hector and Paris, depriving the plot of the nuances of relationships in the *Iliad*... for the sake of heteronormativity in action movies. Deleting any bit of queerness so that they could appeal to straight men. Have quotes spewed by them and posters for the movie peppering dorm room walls. Funnily enough, it was the *much* more accidentally homoerotic *300* that *actually* managed to accomplish this a few years later.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

*The Song of Achilles*, Madeline Miller's book, brings the relationship between Achilles and Patroclus in the opposite direction. From Patroclus's point of view, Miller narrates an intense love story from youth to the death of the pair. It embellishes the few known specifics of the youth of Achilles and offers a stirring glimpse into the lives of both heroes. From a mention of Patroclus being a skilled physician in the *Iliad*, Miller constructs Patroclus's lifetime of learning about medicine and links it into Patroclus's decision to fight in the war. She highlights the ambiguities of the *Iliad*, taking Homer's plot and clarifying it in a modern light. Achilles and Patroclus are *pretty damn gay*, and do a whole lot more than just share a tent. And if the ending doesn't just *break* you, emotionally, you have no soul, I'm sorry.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Some recent stories tended to portray Achilles and Patroclus's relationship as close, but ambiguous, such as in Pat Barker's *The Silence Of The Girls*. Some, however, such as Miller, attempt to reclaim the element of the narrative as Emily Howser in *For The Most Beautiful*. Even in DC Comics, Achilles is resurrected as Wonder Woman's gay male counterpart and has a relationship with the reincarnation of Patroclus. And a side quest in the video game *Hades* is plotted around getting Achilles and Patroclus back together after death.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

The debate still continues today as to whether Achilles and Patroclus were lovers or just intimate friends (who spent all their time together and wanted to have their ashes mixed together so that they could be together for eternity)... *FRIENDS!* A very valid interpretation. Valid. You are very valid, you straight-washing, gay-erasing motherf&mdash;

</james>
<from></from>
</compare>

## Part 6: The "Big Gay Lie"

<compare>
<james {% include timecode %}>

As a film, *The Imitation Game* is... fine. Conventional but not painful to watch. A plethora of critics, queer and not, determined that the film's a safe *desexualized* version of Turing's life at a singular moment, possibly implying that it was a desexualization of Turing himself. The Daily Beast's Tim Teeman argues that the film is <q>one big gay lie</q>, saying:

> "The film winds up feeling like one of those films where the real story, in this case Turing's personal life, is happening off-screen."

Gawker accused the film of cowardice, writing:

> "*The Imitation Game* thinks it can get away with skirting the more salacious details of Turing's life because it follows a gay man during a time when the revelation of such details could lead to his arrest."

The vitriol thrown toward *The Imitation Game* made me consider films with queer characters that were not queer films, and conversely films with straight characters (or at least a lack of queer ones) and yet, they still fit within the categorization of "queer". There's a *lot* of movies with peripheral and incidental queer characters where identity and sexuality aren't at the forefront. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Ironically, it's *RENT*, despite its multiple queer characters, seems to be one of the *least* queer films I've ever seen. Even as a teenager, though I *adored* the message of "No Day But Today", I barely acknowledged it as a *queer* musical. How could I, after having seen *Hedwig and The Angry Inch* five-thousand times. *RENT* screenwriter Stephen Chbosky and director Chris Columbus's notions of queerness seem... limited. 

The queer characters on display, regardless of whether they're given a song or not, are really secondary to the Gen X whining of extremely flawed straight characters like Mark Roger and Mimi. Instead it's articulated expositionally in tracks like "Tango Maureen", where the bisexual Maureen is described as being the sluttiest slut in all of slutdom, because bisexual. And "I'll Follow You", where queer couple Angel and Collins sing about the near-fantasy life they hope to have together after escaping New York, and assumedly AIDS. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

But even these are products of Jonathan Larson and not the filmmakers. It ends up being more queer-adjacent than queer in-and-of-itself. Something to consider when using the phrase "queer-adjacent" is "who is this film for?" *RENT* is for straight people, mostly, and it shows in its depictions of its queer characters as a palatable and watered down version of queerness, especially as they compare to the *real world* queers of New York at the time &mdash; contemporaries to the characters in *Pose*. 

*RENT* deals with heavy subjects &mdash; AIDS, addiction, homelessness &mdash; but without much complexity. And it's mostly presented in an asexual way. That's fine in the mid 1990s when the musical was produced, but almost three decades later the depiction, at least with regard to the lack of nuance, feels dated. Who was *RENT* for originally? The dominant culture. As a way of elevating visibility. So these pieces of text were not made with a queer audience in mind. At least not at the forefront.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Frankly, it doesn't feel like *The Imitation Game* was either. Despite how much it was touted as a queer film around Oscar season, the writer very bluntly said he did not write a gay movie. To come down on a more concrete definition of queer cinema, one may merely look at critic B. Ruby Rich. She described queer cinema as being able to articulate the--

> "gay, lesbian, bisexual, and transgender identity and experience, as well as a form of sexuality that is fluid and subversive in comparison to traditional understandings of sexuality."

As well as heteronormativity. Basically it comes down to the character's lived experience. 

So where does *The Imitation Game* fit in this? That's the funny thing: the film occupies an ambiguous limbo. Perhaps best described as a film that *desperately* wants to qualify as queer (the Oscars do love them some gays), but doesn't know how to do it right. Some of the ingredients are there, but they feel half baked. Alan Turing is *gay*... but... we only know this because of history. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

It's interesting that so many commentators have been vocal about the sex, or lack thereof, in *The Imitation Game*, which raises the question of how one should approach sexuality. On one side, there are aged representations of queer men as being basically asexual (*Philadelphia*, *Will and Grace*) beings that are never given the opportunity to desire, or act on desire, really. Conversely some media appears to be working toward a *normalization* of queerness, such as the show *Shameless*, which features gay characters in its main ensemble, an FTM love interest, and an underlying sense of pansexuality running through a great number of the cast of characters. 

It just feels odd. We're over two decades out from *Will and Grace*. *Queer as Folk* spent five years on TV showing gay characters being *very* sexual. Ryan Murphy has made a career of queering up TV and streaming. Hollywood hasn't *really* shied away from it; they've made movies like *Brokeback Mountain*. But here's *The Imitation Game*, legs squeezed tightly together, too afraid to give up its modesty, but *desperately* wanting to be invited to the orgy. Acknowledging that, yes, Alan Turing was gay, but *hey! How about that science?!* 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

*The Imitation Game* shows Alan Turing in a relationship with Kira Nightly, despite the fact that he was chemically castrated for being gay. This is after he developed technology that turned the tide of World War II. If the film intends to depict Alan Turing as important and significant, why isn't it chronicling the way he died? 

The English Government... tried a war hero as a *criminal* because of who he loved. Turing opted for chemical castration instead of prison. This process introduces a flood of hormones that, as intended, would erase sexual libido, rendering him impotent. This process also severely impedes the brain's ability to naturally reduce and regulate hormones in the blood. Turing developed severe depression... and eventually killed himself. His story in history is not only one of genius and perseverance, but also of a tragedy that *could* have been avoided without bigoted laws. The laws and culture that Turing defended were the ones that sentenced him. But *The Imitation Game* ignores this, essentially presenting homophobic English laws as being just as heroic as Turing. It's annoying. 

</james>
<from></from>
<james {% include timecode %}>

But we seem to be making *some* progress? Whether historians like it or not.

</james>
<from></from>
</compare>
{% assign timecode = "38:34" %}

## Part 7: Queering History

<compare>
<james {% include timecode %}>

*The Favorite*, directed by Yorgos Lanthimos, with the BAFTA and oscar winning Olivia Coleman in the role of Queen Anne. The film focuses on the relationships between Anne and her ladies in waiting: Sarah Duchess of Marlborough, played by Rachel Weisz, and Abigail Masham, played by Emma Stone.

*The Favorite* is queer history in *two* senses of the term, since it depicts what <span stat:id="baa">by all accounts</span> was a real queer relationship between Queen Anne and Lady Sarah Churchill, an 18th century forbearer to Winston. While also extrapolating on what we know, to actively create the relationship's more intimate moments. Queering history.

</james>
<from></from>
<james {% include timecode %}>

While the details of Sarah and Anne's relationship behind closed doors is unknown, the letters between the two women make it hard to pass them off as just "gal pals". The letters contain phrases like "I can't go to bed without seeing you" and "come to me as soon as you can that I may cleave myself to you". In case, it wasn't clear, "cleaving" means sex.

Some would counter the evidence in these letters by arguing that courtly correspondence was *always* this flowery and poetic. It's true, that if we considered every pair of people in that time period who profess their love for each other to actually be lovers, it would mean the whole English cOurt was one big free love commune... which considering the amount of inbreeding... maybe...

</james>
<from></from>
<james {% include timecode %}>

However, there's a difference between enthusiastic *friendship* and the kind of relationship that makes *fathers* recall their daughters from court, because they're getting inappropriately close to Queen Anne. That seems to be what happened with Mary Cornwallis, a lady of the bed chamber in Anne's service. And this, in a situation where the Queen's obsession with their daughter would *typically* be a parent's wildest dream! If that wasn't proof enough, later in life Sarah publicly accused Anne of lesbianism in revenge for being jilted and banished from court. This too can be seen as evidence since Sarah used Anne's letters to her as proof of the queen's inclinations. If Sarah could use those letters to accuse an *even then*, then they must have been *very* erotic, even by the standards of courtly love. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

Of course any film is provocative as *The Favorite* makes people wonder how much of it is really true. How much does the film present queer history and how much is it *queering* history. It's true that when Anne cheekily tells Sarah:

</james>
<from></from>
<clip {% include citation for=page.cite.clips.the_favorite %}>

Anne: "I like it when she puts her tongue inside me."

</clip>
<james {% include timecode %}>

The present brings its own humor into the past. The present also inserts itself into the past when the actors speak in accents we can actually *understand*, and when the whole thing is recorded on a modern camera because *it's a movie!* 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

*The Favorite* is a game-changing period piece because it throws out the rule book for how period pieces relate to truth and reality. *The Favorite* is both queer history and *queering* history, because as director Yorgos Lanthimos clearly knows, our viewpoint of history is never *purely* a reconstruction of the facts. We actively construct history, based on our own opinion. We figure out what *we* know and then we fill in the details with our own incomplete biased and flawed perspectives. 

Lanthimos dances a beautiful tight rope routine on the line between these two aspects of the period piece, with *The Favorite*'s dead pan accuracy. It's the very *facts* of the period, like men in high heels, that make the world of Queen Anne's court seem absurd to us. Not only is this interplay between the known and the unknowable hilarious at times, it's the basis of good storytelling, in any period piece. Though *The Favorite* certainly takes it farther than anything that has come before it. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

It also bears mentioning that if a filmmaker doesn't choose to queer history, that doesn't mean they're telling history like it was. It just means they're "straighting" history. Straightifying? Straightening. Replacing the gay agenda with a straight agenda does *not* mean that there's no agenda.

</james>
<from></from>
<james {% include timecode %}>

[Capote](https://en.wikipedia.org/wiki/Capote_(film)) and the Cole Porter biopic [*Night And Day*](https://en.wikipedia.org/wiki/Night_and_Day_(1946_film)) also short-changed their queer subjects, removing or overriding their sexualities. The question isn't one of *removing* agendas from film, it's a question of which agenda we choose. As the queer crisis collective asks: 

\[Appearing on screen next to James]:
> Who thrives?  
> Who dies?  
> Whose body matters?  
> Whose history survives?  
> Who is missing?  

\[Fade to black]

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

\[Fade back in]

Queer stories aren't just for people in their lifetime. They are a beacon for future generations to look back and feel camaraderie and empowerment with people from long ago. Who were like they are now. So we can grow up, never thinking once that we are alone. That we have ever been alone. 

They should know that the greatest thinkers of Greece were queer. That Sappho (the human version) ran a girls-only poetry school on the island of Lesbos. That Alexander the Great loved men. The great heroes of myth, like Achilles and Heracles, were not bound by heteronormative expectations. That Queen Christina of Sweden ruled the country as an out lesbian. That Chaikovsky, one of the most significant composers in history, was gay, and while closeted to the public, he was accepted by his family. That the great writers of Edwardian England, like Virginia Wolf, *embraced* their queerness. That the man who stopped the Nazi war machine in its *tracks* was inhumanely punished, because he loved men. 

The next generation should know about these men and women. Their stories, their accomplishments, how they change the world. So that they know they too can change the world. To make it that much easier for them. To start feeling around in the dark for the closet door.

\[James fades away]

</james>
<from></from>
<credits {% include timecode %} class="closing">

> Written by  
James Somerton  
& Nick Herrgott

> Edited by  
James Somerton

\[Scrolling]:
<blockquote style="text-align:right">

Music by  
SoftPiano

Thank you to my Patrons

[List of Patron names]

Sources:  
Tim Teeman  
Kyle Turner  
Tracy Gilchrst  
Alex Von Tunzelmann  
Patty Ahn  
Julia Himberg  
Damon Young  
Judith Butler  
Patricia White  
B. Ruby Rich  

</blockquote>

</credits>
</compare>
