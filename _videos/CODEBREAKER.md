---
date: 2020-12-04
title: "CODEBREAKERS: Queer film theory (and why it matters)"
status: Auto
aka: !!seq
  - "Queering Cinema (by any means necessary)"
  - "Codebreakers: a rant by James Somerton (Thumbnail)"
topics: !!seq
links: !!seq
  - "https://www.youtube.com/watch?v=i_ElaGEfcxg"
# description: "a video essay on...?"
notes:
  - hbomb

contributors:
  downloaded: "[tobi-cat](https://github.com/tobi-cat) from [YouTube Archive video](https://www.youtube.com/watch?v=i_ElaGEfcxg)"
  formatting: 
  citation: 

cite:
  clips: !!map
  yikes: !!map
  misinformation: !!map
  plagiarized: !!map
---
{% assign tustin = site.data.cite.tustin2121 %}
{% assign hbomb = site.data.cite.hbomb %}

<compare>
<credits class="desc">

\[Lost]

</credits>
<comment>

{% include chapter-link at="00:00" for="Introduction" %}  
{% include chapter-link at="01:00" for="Part 1: What is film theory?" %}  

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
</compare>

<compare>
<james {% include timecode %}>

Having made a few videos about queer coding and representation in movies, I've gotten a lot of feedback from a lot of different people. But one comment that I see over and over and over again is something like this:

\[Video blurs and quote shown on screen, James reads in artificial high pitched voice]:

> "This was never meant to be gay. You're just reading into it too much"

...or...

\[Video blurs again and quote shown on screen, James reads in artificial low pitched voice]:

> "You're reaching pretty far to find anything queer about this"

And so I decided that people are *woefully* undereducated on film theory, which is -- as we know -- the most important subject you could ever study in school. Because if these people leaving these comments knew what film theory was, they'd know what queer theory is.
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
</compare>

<compare>
<james {% include timecode %}>

\[On screen next to James]: "Structuralist Film Theory"

The Structuralist film theory emphasizes how films convey meaning through the use of codes and conventions, not dissimilar to the way languages are used to construct meaning in communication. An example of this is understanding how the simple combination of shots can create an additional idea. The blank expression on a person's face, an appetizing meal, and then back to the person's face. While nothing in this sequence literally expresses hunger or desire, the juxtaposition of the images convey that meaning to the audience.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

\[On screen next to James]: "Marxist Film Theory"

Marxist film theory is one of the oldest forms of film theory. Sergey Eisenstein and many other Soviet filmmakers in the 1920s expressed ideas of Marxism through through film. In fact, the Hegelian Dialectic was considered best displayed in film editing through the development of the montage, a Russian invention. The biggest reason Russian filmmakers began doing this was because they had a serious problem with how Hollywood was making movies. Eisenstein's solution was to shun narrative structure by eliminating the individual protagonist in favor of telling stories where the action is moved by a group, and the story is told through a clash of one image against the next, whether in composition, motion, or idea.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

\[On screen next to James]: "Formalist Film Theory"

Formalist film theory is a theory of film study that is focused on the formal or technical elements of a film, i.e the lighting, scoring, sound, set design, use of color, sha-composition, and editing. It's a major theory of film study today. Formalism at its most general considers the synthesis or lack of synthesis of the multiple elements of film production, and the effects, emotional and intellectual, of that synthesis, and of the individual elements. 

For example, let's take the single element of editing: A formalist might study how standard Hollywood continuity editing editing creates a more comforting effect, and non-continuity or jump cut editing might become more disconcerting or volatile. A good example of this would be Tarantino's *Pulp Fiction* or the first season of Netflix's *The Witcher*.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

\[On screen next to James]: "Feminist Film Theory"

Feminist film theory is the theoretical film criticism derived from feminist politics and feminist theory. Feminists have many approaches to cinema analysis regarding the film elements analyzed and their theoretical underpinnings. The development of Feminist film theory was influenced by Second Wave Feminism and the development of Women's Studies within academia. Feminist scholars began applying the new theories arising from these movements to analyzing film. Initial attempts in the United States in the early 1970s were generally based on Sociological Theory and focused on the function of women characters in particular film narratives or genres, And of stereotypes as a reflection of a society's view of women.

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

\[On screen next to James]: "Auteur Film Theory"


Auteur theory in film holds that a director's film reflects that director's personal creative vision, as if he were the primary auteur, the French word for "author". In some cases, film producers are considered to have a similar auteur role for films that they have produced, such as David Os Selnick and Kevin Feige. 

</james>
<from></from>
</compare>

<compare>
<james {% include timecode %}>

So it's clear that there are many ways of examining film in a critical way. not one school of film theory can fully describe a complete understanding of film itself. So, for using theory in film criticism, a critic usually has to state which theory they're drawing from. This goes to say, however, that film can be criticized with pre-existing schools of thought, like with Marxism and Feminism. In both of these cases, scholars and critics took certain tenants of these studies and applied them to an analysis of film. So if there is a Marxist and Feminist reading of cinema, why not a queer one? 

</james>
<from></from>
</compare>

## Part 2: What is Queer Theory?

<compare>
<james {% include timecode %}>

Originating in the early 1990s, the school of thought called "Queer theory" compromises a diverse body of intellectual inquiry. It holds that specific psychological, political, and cultural codes have elevated heterosexuality to the status of a sexual given. A man or woman can automatically be assumed to be cisgender and heterosexual. Differences in gender and sexuality are modifications on what is considered to be a given. He isn't just a *man*, he is a *gay man*. Straight is the default, and furthermore, straight is the objective. 

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



This is called "heteronormativity" and it's the most intellectual way that you can call a [ __ ] basic by exposing the limitations of heteronormative conditioning and taking
advantage of the culturally performative aspects of gender the aim of queer theory is to draw a distinction between
the individual and the formative processes that influence gender and sexuality it's not to say that it's bad
to be straight but instead queer theory looks at all sexuality and gender as being neutral and questions why weight
and preference are given to some while others are seen as abnormal queer theory
is not only the analysis of codes and conditioning associated with heteronormativity but more recently is
being extended to discuss and document the interactions of queer people in their own communities a queer
perspective then is looking at a vast array of sexual codes that exist in culture and does not privilege
heterosexual codes as natural or authoritative the designation of queer is itself a form of empowerment through
which a disenfranchised subculture has taken charge of a term that the straits have used historically as a derogatory
label theorists vary in their configurations on which groups and perspectives are included under the
blanket of queer film theory many theorists find any challenge to the normative nature of heterosexuality to
qualify as queer such as the non-traditional family at the end of aliens while others use the term to
apply specifically to gender and sexual orientations that challenge or complicate the presumed alliance between
sexual identity and gender identity this isn't to say that a queer reading is one that requires us to see a certain
character as queer coded a queer reading can examine the ways in which the narratives themes and language of a film
reinforce and exemplify heteronormative values for instance the film cordelia is
a period horror movie however you wouldn't know it from the movie's poster
a wave of queer eyebrows were raised unsure as to what about the movie's poster was supposed to be so
scary the messaging in this poster is that the horror here is a dominant woman
and a submissive man to everyone outside the hetero hemony this just looks like a good time queerness doesn't even need to
be present in a film to derive a queer reading from it just like there can be a feminist reading of reservoir dogs where
there are almost no female characters by examining the way patriarchal masculinity factors into the depictions
of each character there can also be a queer reading of kill bill my favorite movie there are no openly queer
characters in the film and for characters who might be queer their queerness is not at all encoded in the
language of the film however the bride when she realized that she was pregnant immediately wanted to leave behind her
atypical chosen family instead of raising her daughter among a group of cutthroat assassins she wanted a better
life by forcing herself into the most heteronormative family that she could find on short notice because growing up
poor in el paso texas is so much better than growing up around rich assassins it
is this rejection of non-conformity which sends her life into ruins and
spurs the whole bloody affair into action and yes ator hanzo is totally gay
in essence queer theory is watching a film through a queer lens reading the film as queer whether it was meant to be
or not finding a way to see art in a queer way but that said reading gay
characters into film is not only a part of queer theory it's pretty much the og gay mood we do it without realizing it
even before queer theory we would watch a play or a movie and see a character and we would look at them and say what
they're going through is a queer experience intended or not that's easy to do with some movies the queer subtext
in a nightmare on elm street part two is so obvious the straight people readily picked it up the lesbian energy in
dracula's daughter the bisexual tension erupting from rebel without a cause even the relationship between captain america
and bucky burns was read as gay by millions of straight movie goers but other movies require a bit more digging
in evil queens i talked about the queerness of the '90s renaissance disney movies especially aladdin and the lion
king when i first mentioned this to people they thought i was crazy then i explained it to them and they came
around to seeing it my way in the legend of kora there actually are confirmed bisexual characters but ask any queer
person who's watched the show and they'll tell you every damn character on it is b or pansexual it's not wishful
thinking it's a queer reading of the show bolin's close relationship with veric maos will they won't they with
prince woo which seems to be getting closer to becoming canon in the graphic novels media that attracts a queer
reading is usually produced by straight people with no intention on being r as queer but the lgbt population so starved
for proper representation will look through every nook and cranny of their favorite movies tv shows and books to
find some hint that's somewhere in that story there's at least a moment that makes them feel like they belong that's
why people cry out for more media produced for queer people by queer people because otherwise we basically
don't exist we can be told over and over and over again that we're just trying to find something that isn't there this
argument isn't new straight people telling gay people that we're reading too much into a story that we just
looking for gayness
well it's because we [music]
are where else are we going to look for queerness the torrent of explicitly queer media that's been pouring out at
us over the last 100 years if you take news or history books for granted it's like queer people just popped up in 1969
and trans people didn't come along until caitlyn jenner which is a bit of an unfortunate introduction suddenly these
people just materialized the complete lack of historical coverage and cultural awareness of these people is a major
contributing reason why straits still to this day say that we choose to be gay or
choose to be trans but you'd be hard pressed to find actual honest queer representation in history it's not that
it doesn't exist though it's just that our white cisgender heterosexual usually male historians tend to
straightwashing with xy chromosomes buried with makeup and a corset with drawn on breasts puzzling archaeologists
as to why he would be buried like that or viking burial mounds where male warriors would be buried with combs
jewels and mirrors and instead of you know boy things or even something like
the lovers of media petrified holding hands who are suddenly the brothers of media or very good friends of
media or roommates of media and speaking of roommates what about the inexplicable
mysteries we will never truly know the answers to like why lady elanor butler and sarah pby would run away from their
marriage arrangements moved whales and adopt a small dog they affectionately named
safos mysteries we will never know and what about abraham lincoln who shared his bed
with his bodyguard for his entire tenure in the white house surely it was just a matter of different times times were
different back then men expressed manliness in different ways it was just different times folks different times no
homo president there also seems to be a strange element of history which compulsively tries to impose
postcolonial values upon pre- christianized societies i'm not sure if it's just that we're so indoctrinated
into our own social structures or if our small l liberal society needs to believe
that our social values are actually progressing and so we will force history to be as regressive as possible to make
our own time look better in contrast but why is it so hard to believe that a viking society who believed that a god
that shaped everyone out of mead and clay who hung from a tree connecting nine distinct worlds and realms together
and who was eaten by a wolf the size of the moon couldn't see that a young boy
in the village who liked dresses and flowers might actually be a girl and on the topic of mythology many classical
scholars like to gloss over and rewrite myths to have a straight leaning heracles is torid of male lovers are
mostly forgotten about or achilles who by most mythological accounts preferred men exclusively not that you'd know it
from nearly a thousand years the scholar is desperately trying to rearrange all of helenic culture to invent this kind
of masculinity where strip men can just be that close i mean it doesn't help that many of these stories were
translated and recopied by christian monks and scholars in the dark ages in many cases their original texts are lost
the author of bolf for example though far from queer makes an explicit point of mentioning that the text is being
doctored so that it can survive christian purges it's not always done maliciously but many ancient monks saw
the artistic value of these stories and saw that they would not survive christian censorship heavy edits were necessary to
align with christian values for instance the poetic and prosaic eta the
predominant source of what we know of viking culture was written by a single monk in iceland these stories were
collected from oral traditions runestones and scavenged from what writings could be found before they were
destroyed by christians writings in these edas now explicitly decry homosexual acts between
men deeming them as being shameful and unmanly but there is archaeological evidence that refutes much of what the
edas say throwing doubt on on how honest these documents are burial mounds have been found with women honored as warrior
heroes or with same-sex couples resembling marriages surviving standing stones and wood carvings implicitly
suggest same-sex interactions and that does little to say of eyewitness accounts of byzantine merchants and
travelers which point out just how sex positive and gender woke this society of barbarians really
was in cultures that place such a strong value on sex why are heterosexual
couplings seen as the only culturally viable way of getting it as has been
frequently noted the ancient greeks did not have terms or concepts that correspond to the contemporary dichotomy
of heterosexual and homosexual there's a wealth of material from ancient greece
pertinent to issues of sexuality ranging from dialogues of plato such as the symposium to plays by aristophanes and
greek artwork and vases probably the most frequent assumption about sexual orientation at least by ancient greek
authors is that people can respond erotically to beauty in either sex some were noted for their exclusive interest
in people of one gender for example alexander the great was known for his exclusive interest in other men such
people however are generally portrayed as the exception to the rule furthermore the issue of what biological sex one is
attracted to is seen as an issue of taste or preference rather than as a moral issue a character in plutarch's
eroticus argues that the noble lover of beauty engages in love wherever he sees
excellence and splendid natural endowment without regard to any difference in physiological detail
essentially gender just becomes an irrelevant detail and instead the excellence in character and beauty is
what is most important plato in the symposium argues for an army to be comprised of same-sex lovers thieves did
actually formed such a regiment the sacred band of thieves consisting of 500 soldiers 250 couples the were renowned
in the ancient world for their valor in battle and they're still talked about today ancient rome had many parallels to
ancient greece in its understanding of same-sex attraction and sexual issues more generally this is especially true
under the republic yet under the empire roman society slowly became more
negative in its views towards sexuality probably due to social and economic turmoil even before christianity became
influential exactly what attitude the new testament has towards sexuality in general and samesex attraction in
particular is a matter of sharp debate some say that many passages taken today
as condemnations of homosexuality are more concerned with prostitution or where same-sex acts are described as
unnatural the meaning is more akin to out of the ordinary rather than as immoral yet others have argued that the
homophobic conventional contemporary reading is more plausible so could it also be that we're reading history with
not only a heteronormative lens but a postp puritan one where we're examining cultures whose gods and myths encourage
them to have sex for pleasure and fun but we're doing so within the stuffy cultural expectations that say sex is
only for procreation if sex isn't just for babies why not do it with whoever that would
make the most sense right but given our current cultural discomfort with sex academics seem reluctant to see it that
way though an interesting observation of our own recorded history is how casually
historic writers recorded sex and same-sex pairings language used to describe these relations say with
achilles and patrias are so casual it's easy to dismiss them as really good friends food for thought the term
companion in history almost always was used to describe romantic or sexual relations not buds or gal pals that's
why the movie long-term companion is called that and not long-term friend with benefits it's almost as if our
ancestors never really expected homophobia sex phobia to be a serious issue instead we have to dig through
implications through innuendo through double on andras that were meant to be dirty jokes that somehow survived over
centuries but whose double meanings can be dismissed as just being from a different
time we have to dig maybe not because our ancestors saw same-sex relations and
gender non-conformity as shameful but instead because they took all of it completely for granted any
civilization is characterized by its past it's in looking back that we find our
collective identity nations rise and fall and people come and go as do attitudes and societal norms yet as a
queer community the history of our people is often lost to us unlike the
societal conditioning we receive from our parents we don't get a queer rule book when we come out nor are we taught
the great deeds of our gay predecessors so as we start out on our lifelong personal journeys how do we
discover our queer identity if we don't know much about those who came before us what if the accomplishments of historic
queers are hidden for us by a thick coat of straightwashing it provokes a deep and meaningful
question i think what is the real tangible impact
of gay [music]
eraser only in recent years as hard fought for queer rights have been w have
societal attitudes begun to soften and as this happened so have academic
historians once reluctant to discuss the sexuality of historical figures at all unless they were straight begun to move
with the times younger more liberal historians in particular are leading the charge more rounded in their outlook and
not threatened by sexuality they've started to look back through the archives and sift through the evidence
passed down from generation to generation in so doing they've discovered the queer histories of people
such as al alander the great leonardo da vinci florence nightingale king james i 6 william shakespeare richard the first
julius caesar virgil not to mention half the philosophers in greece but not all historians have been so open-minded too
many old academics many still writing remain adamant that some of their key historical subjects couldn't possibly
have been gay too often characters from history who were close to people of the same sex and reading between the lines
were clearly an intimate and passionate samesex relationships are marked down as friends or very close friends or
confidants i'm actually about to break your brains but history has been gay a
lot longer than heterosexuality has existed before freud and kinsey
sexuality was largely regarded as fluid all that talk about the homosexuals are going to corrupt your brothers sons and
husbands sounds ridiculous to us today because we think of sexuality as largely
fixed the term homosexual heterosexual bi isexual they're all terms that arose
out of the latter part of the 19th century not greece and rome before that
academics tried to describe samesex attraction simply as sexual inversion though we were mostly just referred to
as queers and perverts but as the concept of homosexuality didn't exist
neither did heterosexuality as early as the 1930s and 40s people actually did literally
believe that sexual acts between two men were something that any man was capable of and this is clear in criminal cases
prosecuting men for having sex with men it was specifically the acts of buggery and felacio that were observed as
illegal also known more generally as sodomy courts prosecuted men as it was a
crime that they chose to do or an illicit lifestyle that they chose agency
and the choice to commit illicit acts of what was called perversion was key in
the prosecution of these men women weren't usually prosecuted for queer acts because lawmakers were usually too
squeamish to talk about women and sexuality so these cases were normally thrown out that isn't to say that there
wasn't a stigma attached to it just that they were more likely to get away with it this is a pivotal distinction in how
sexuality was observed before and after the development of clinical psychology
but extrapolate this mindset to pre-christian societies which had no stigma against queerness and you kind of
get this fantasy land where people are people and sometimes they like men and sometimes they like women and some
cultures also didn't really care much for the distinction between either of those either the greeks saw gender as a
continuum egyptian and persian women could buy property own businesses and manage their own estates roman law
allowed a few different ways that unwed women could have political protections and norse and celtic culture held men
and women under roughly the same codes of honor so it never really mattered what was between your legs as long as
you weren't an [ __ ] however with the absence of explicit evidence of graphic sexual activity why would most of us
leave that behind historians seem happy to view an absence of dirty laundry as an absence of gay
fact this feels like a conscious and concerted attempt to erase our history
the authors of these books hold a prejudice that screams out in their work the silence is
deafening such views damage our collective understanding of our queer past and leave the later generations of
gay lesbian by and trans people without a link to their history our ancestors are closeted in death and we are shut in
the dark as a result but sometimes queer representation does manage to pop
[music] up to some historians it is the love
that launched a thousand warriors and representation that survived the test of time to other more pigheaded historians
it is nothing but a friendship very good friendship a friendship which was very beneficial
however looking at the relationship between achilles and patrickus scholars have discussed over the years whether their relationship matches with our
understanding of homosexuality today many scholars argue that greeks do not have the same sex labels as we do now
many claimed that homer's treatment of the relationship between achilles and patrias in the iliad is ambiguous it's
not clear if they were lovers who slept together or just best friends who shared the same
bed so how did this affect the current representation of the pair well the movie troy contained several factual
inaccuracies which deviated greatly from the story of the iliad for example menas and agamemnon died far too prematurely
another noticeable difference that changes the whole story is the suddenly minor role of patrick l who is now the
cousin of achilles something akin to a fanboy while in the iliad he is revered
admired by aill and all the soldiers around him and he dies a hero giving his
life for achilles in the movie he's just a dumb
cousin while the ilad depicts achilles and patrick's relationship as one of respect in troy ailles is a blasphemous
brute acting only for his own glory and pleasure by reducing patrias to a minor
character troy reduces achilles as a hero and by rendering its storyline entirely heteronormative the film
manipulates the rage of of achilles into selfish wrath rather than an emotional outburst at the murder of his lover and
best friend troy compares the relationship between achilles and patrias to that of hector and paris
depriving the plot of the nuances of relationships in the iliad for the sake of heteronormativity in action movies
deleting any bit of queerness so that they could appeal to straight men have quotes spewed by them and posters for
the movie peppering dorm room walls funnily enough it was the much more accidentally homeown erotic 300 that
actually managed to accomplish this a few years later the song of achilles meline miller's book brings the
relationship between achilles and patrickis in the opposite direction from patrick's point of view miller narrates
an intense love story from youth to the death of the pair it embellishes the few known specifics of the youth of achilles
and offers a stirring glimpse into the lives of both heroes from a mention of patrickus being a skilled physician in
the iliad miller constructs patrick's lifetime of learning about medicine and links it into patrick's decision to
fight in the war she highlights the ambiguities of the iliad taking homer's plot and clarifying it in a modern light
achilles and patrickus are pretty damn gay and do a whole lot more than just share a tent and if the ending doesn't
just break you emotionally you have no soul i'm sorry some recent stories tended to portray achilles and patrick's
relationship as close but ambiguous such as in pat barker's the silence of the girls some however such as miller
attempt to reclaim the element of the narrative as emily hower in for the most beautiful even in dc comics achilles is
resurrected as wonder woman's gay male counterpart and has a relationship with the reincarnation of patrick and a side
quest in the video game hades is plotted around getting achilles and patrick back together after death the debate still
continues today as to whether achilles and patrickus were lovers or just intimate friends who spent all their
time together and wanted to have their ashes mixed together so that they could be together for eternity friends a very
valid interpretation valid you are very valid you straightwashing gay erasing
[music] mother as a film the imitation game is
fine conventional but not painful to watch a plethora of critics queer and not determined that the film's a safe
desexualized version of turing's life at a singular moment possibly implying that it was a desexualization of turing
himself the daily beasts tim teeman argues that the film is one big gay lie
saying the film winds up feeling like one of those films where the real story in this case turing's personal life is
happening offscreen gawker accused the film of cowardice writing the imitation game
thinks it can get away with skirting the more salacious details of turing's life because it follows a gay man during a
time when the revelation of such details could lead to his arrest the vitriol thrown toward the imitation game made me
consider films with queer characters that were not queer films and conversely films with straight characters or at
least a lack of queer ones and yet they still fit within the categorization of queer there's a lot of movies with
peripheral and incidental queer characters where identity and sexuality aren't at the forefront ironically it's
rent despite its multiple queer characters seems to be one of the least queer films i've ever seen even as a
teenager though i adored the message of no day but today i barely acknowledged it as a queer musical how could i after
having seen hedwig in the angry inch 5,000 times r screenwriter steven chabowski and director chris columbus'
notions of queerness seem limited the queer characters on display
regardless of whether they're given a song or not are really secondary to the gen x whining of extremely flawed
straight characters like mark roger and mimi instead it's articulated expositionally in tracks like tango
marine where the bisexual marine is described as being the [ __ ] [ __ ] in all of slutd them because bisexual and
i'll follow you where queer couple angel and collins sing about the near fantasy life they hope to have together after
escaping new york and assumedly aids but even these are products of jonathan larson and not the filmmakers it ends up
being more queer adjacent than queer in and of itself something to consider when using the phrase queer adjacent is who
is this film for rent is for straight people mostly and it shows in its
depictions of its queer characters as a palatable and watered down version of queerness especially as they compare to
the real world queers of new york at the time contemporaries to the characters in pose rent deals with heavy subjects aids
addiction homelessness but without much complexity and it's mostly presented in an asexual way that's fine in the mid
1990s when the musical was produced but almost three decades later the depiction
at least with regard to the lack of nuance feels dated who was rent for
originally the dominant culture as a way of elevating visibility
so these pieces of text were not made with a queer audience in mind at least not at the forefront frankly it doesn't
feel like the imitation game was either despite how much it was touted as a queer film around oscar season the
writer very bluntly said he did not write a gay movie to come down on a more
concrete definition of queer cinema one may merely look at critic b ruby rich she described queer cinema as being able
to articulate the gay lesbian bisexual and trans gender identity and experience
as well as a form of sexuality that is fluid and subversive in comparison to traditional understandings of sexuality
as well as heteronormativity basically it comes down to the character's lived experience so where does the imitation
game fit in this that's the funny thing the film occupies an ambiguous limbo
perhaps best described as a film that desperately wants to qualify as queer the oscars do love them some gays but
doesn't know how to do it right some of the ingredients are there but they feel half baked alan turing is
gay but we only know this because of history it's interesting that so many
commentators have been vocal about the sex or lack thereof in the imitation game which raises the question of how
one should approach sexuality on one side there are aged representations of queer men as being basically asexual
philadelphia will and grace beings that are never given the opportunity to desire or act on desire really
conversely some media appears to be working toward a normalization of queerness such as the show shameless
which features gay characters in its main ensemble an ftm love interest and an underlying sense of pansexuality
running through a great number of the cast of characters it just feels odd we're over two decades out from will and
grace que's folks spent 5 years on tv showing gay characters being very sexual
ryan murphy has made a career of queering up tv and streaming Hollywood hasn't really sh shed away from it
they've made movies like brokeback mountain but here's the imitation game legs squeezed tightly together too
afraid to give up its modesty but desperately wanting to be invited to the orgy acknowledging that yes alan turing
was gay but hey how about that science the imitation game shows alan
turing in a relationship with kira nightly despite the fact that he was chemically castrated for being gay this
is after he developed technology that turned the tide of world war ii if the film intends to depict alan turing as
important and significant why isn't it chronicling the way he died the english government tried a war hero as a
criminal because of who he loved turing opted for chemical castration instead of prison this
process introduces a flood of hormones that as intended would erase sexual libido rendering him impotent this
process also severely impedes the brain's ability to naturally reduce and regulate hormon in the blood turing
developed severe depression and eventually killed himself his story in history is not only one of
genius and perseverance but also of a tragedy that could have been avoided without bigoted laws the laws and
culture that turing defended were the ones that sentenced him but the imitation game ignores this essentially
presenting homophobic english laws as being just as heroic as turing it's an
but we seem to be making some progress whether historians like it or
not the favorite directed by yorgos lanos with the bafta and oscar winning olivia coleman in the role of queen anne
the film focuses on the relationships between anne and her ladies in waiting sarah duchess of mboro played by rachel
vice and abigail masham played by emma stone the favorite is queer history in two senses of the term since it depicts
what by all accounts was a real queer relationship between queen anne and lady sarah churchill an 18th century
forbearer to winston while also extrapolating on what we know to actively create the relationship's more
intimate moments queering history while the details of sarah and anne's relationship behind closed doors is
unknown the letters between the two women make it hard to pass them off as just gal pals the letters contain
phrases like i can't go to bed without seeing you and come to me as soon as you can that i
may cleave myself to you in case it wasn't clear cleaving means sex some
would counter the evidence in these letters by arguing that courtly correspondence was always this flowery
and poetic it's true that if we considered every pair of people in that time period who profess their love for
each other to actually be lovers it would mean the whole english court was one big free love commune which
considering the amount of inbreeding maybe however however there's a difference between enthusiastic
friendship and the kind of relationship that makes fathers recall their daughters from court because they're getting inappropriately close to queen
anne that seems to be what happened with mary cornwallis a lady of the bed chamber in anne's service and this in a
situation where the queen's obsession with their daughter would typically be a parents wildest dream if that wasn't
proof enough later in life sarah publicly accused anne of lesbianism in revenge for being jilted and banished
from court this too can be seen as evidence since sarah used an's letters to her as proof of the queen's
inclinations if sarah could use those letters to accuse an even then then they
must have been very erotic even by the standards of courtly love of course any film is provocative as the favorite
makes people wonder how much of it is really true how much does the film present queer history and how much is it
queering history it's true that when anne cheekily tells sarah i like it when
she puts her tongue inside me the present brings its own humor into the past the present also inserts itself
into the past when the actors speak in accents we can actually understand and when the whole thing is recorded on a
modern camera because it's a movie the favorite is a game-changing period piece because it throws out the rule book for
how period pieces relate to truth and reality the favorite is both queer history and queering history because as
director yorgos lanos clearly knows our viewpoint of history is never purely a
reconstruction of the facts we actively construct history based on our own opinion
we figure out what we know and then we fill in the details with our own incomplete biased and flawed
perspectives lanos dances a beautiful tight rpp routine on the line between these two aspects of the period piece
with the favorites dead pan accuracy it's the very facts of the period like men in high heels that make the world of
queen anne's court seem absurd to us not only is this interplay between the known and the unknowable hilarious at times
it's the basis of good storytelling in any period piece though the favorite certainly takes it farther than anything
that has come before it it also bears mentioning that if a filmmaker doesn't choose to queer history that doesn't
mean they're telling history like it was it just means they're strating history stratifying straightening
replacing the gay agenda with a straight agenda does not mean that there's no agenda capot and the co porter biopic
night and day also short changeed their queer subjects removing or overriding
their sexualities the question isn't one of removing agendas from film it's a question of which agenda we choose as
the queer crisis collective asks who thrives who dies whose body matters
whose history survives who is missing queer stories aren't just for
people in their lifetime they are a beacon for future generations to look back and feel camaraderie and
empowerment with people from long ago who were like they are now so we can
grow up never thinking once that we are alone that we have ever been alone they
should know that the greatest thinkers of greece were queer that safo the human version ran a girlsonly poetry school on
the island of lesbos that alexander the great loved men the great heroes of myth
like achilles and heracles were not bound by heteronormative expectations
the queen christina of sweden ruled the country as an out lesbian that chaikovsky one of the most
significant composers in history was gay and while closeted to the public he was accepted by his family that the great
writers of a dward in england like virginia wolf embraced their queerness that the man who stopped the nazi war
machine in its tracks was inhumanely punished because
he loved men the next generation should know about these men and women their stories
their accomplishments how they change the world so that they know they too can
change the world to make it that much easier for them to start feeling around in the dark
for the closet [music]
door
[music]
