---
title: How well do you know your Massachusetts towns?
author: Ian Spangler
description: Silly games can open new windows into map collections
date: 2022-11-06T09:30:00-05:00
image: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:9k41zj46s/3120,559,3215,831/full/0/default.jpg
backgroundImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:9k41zj46s/3120,559,3215,831/full/0/default.jpg
tags:
- collections

---
## A mass-ive challenge

How well do you know your Massachusetts towns? Off the top of your head, could you name ten? Twenty? Fifty?

With this [new game](https://towns-challenge.glitch.me) from the Leventhal Map and Education Center, try your hand at guessing every town in Massachusetts. At 351 towns total, only the bravest and boldest will make it all the way. Thankfully, even if you never finish the challenge, you'll still be shown a map from our collections—and invited to georeference it in [Allmaps](https://allmaps.org)—for every town you answer correctly!

{{< figure src="/uploads/challenge.png" class="figure-center" caption="How many towns can you make it through?" >}}

## Background & inspiration

In July 2022, the LMEC partnered with the UK-based digital agency [Cogapp](https://cogapp.com) to support one of their internal hack days. The goal was to devise interesting ways to visualize and engage with the 11,000+ maps in LMEC's digital collections. After a brief introduction on using our APIs, the Cogapp team was set loose, and we were delighted to see the results.

{{< figure src="https://miro.medium.com/max/1400/1*GL2KiyKMOx-Gn5f55eF-ig.png" class="figure-right" caption="Hannah Baker's original state guessing game." >}}

I was particularly struck by [Hannah Baker's state-guessing game](https://blog.cogapp.com/usa-states-challenge-b7d9b4fc027b). For each correct answer, a user was shown a random map from our collections, providing a playful glimpse into the range of materials you can find online at our [digital collections portal](https://collections.leventhalmap.org).

Since Hannah made the code [public on GitHub](https://github.com/CogappLabs/states-challenge), I decided to take a pass at reinventing it for a different geography: the commonwealth of Massachusetts.

Technically speaking, the Mass Towns Challenge relies on a couple of public APIs, or [application programming interfaces](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction), that allow independent programmers to retrieve metadata and high-quality map images from the LMEC's digital collections. If you're curious how these work, you can get started playing with them in a pair of [Jupyter notebooks we made](https://github.com/bplmaps/collections-api).

{{< figure src="/uploads/allmaps.png" class="figure-left" caption="Easily georeference LMEC maps using [Allmaps Editor](https://editor.allmaps.org/#/)!" >}}

Speaking of APIs, the Mass Towns Challenge also makes use of Bert Spaan's new [Allmaps API](https://observablehq.com/@allmaps/all-maps-in-allmaps), creating opportunities to georeference maps from LMEC collections for free in a web browser. Since October 2021, we've been supporting Bert's work on the [Allmaps platform](https://www.leventhalmap.org/articles/bert-spaan-interview/), and are thrilled to be able to leverage the free tools he's created to make it easier to access

## Map collections as guessing games

Entering the cartographic archives of the LMEC—or any other map library, for that matter—can feel a lot like a guessing game. You don't always know what you're looking for, and sometimes what you find opens up more questions than it answers. We've built lots of tools, such as [@auto_mapic](https://www.leventhalmap.org/articles/automapic/) and [Atlascope](https://atlascope.org), that approach this guessing game from different angles, but every approach is partial and imperfect. Our hope in building little games like the Mass Towns Challenge is to provide unexpected insights into the LMEC map collections.

After a bit of tinkering with the code, I realized it was working: town by town, I started to see things I'd never noticed before.

**Weymouth** introduced me to this [wide, wide map](https://collections.leventhalmap.org/search/commonwealth:js956k17g) depicting a ship canal from the Taunton River to the Boston Harbor that would never be built.

{{< figure src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:9k41zj46s/full/pct:50/0/default.jpg" class="figure-center" caption="A canal across Mass that would never be built" >}}

Originally devised in the early 20th century, the Taunton-Weymouth canal was to span 35 miles and [cost over $10 million](https://archive.org/details/reportonshipcan00unkngoog/page/n8/mode/2up). The price tag was ultimately its downfall; instead, as [this map shows](https://collections.leventhalmap.org/search/commonwealth:jh343z21h), we ended up with the canal that {{< popup img-src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:jh343z22s/1622,2613,860,629/pct:50/0/default.jpg" target="blank" >}}"makes the Cape an island" {{</popup>}}.

Elsewhere, **Wilbraham** showed me a fascinating [map of the world](https://collections.leventhalmap.org/search/commonwealth:v979xk78h) from the early 19th century. I was confused why I was seeing it---"Aren't I supposed to be shown maps of the town?"---until I realized the author was a "schoolboy" at the Wilbraham Wesleyan Seminary.

{{< figure src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:tx31t1196/full/pct:50/0/default.jpg" class="figure-center" caption="*The map of the world*, by Graty P. Leonard" >}}

Finally, **Dedham** introduced me to a fascinating [advertising notice](https://collections.leventhalmap.org/search/commonwealth:q524n5692) for the release of an [1876 bird's-eye view of Dedham](https://collections.leventhalmap.org/search/commonwealth:x633fc822) by Edwin Whitefield. Today, bird's-eye view maps are helpful historical documents that capture a community's urban morphology, which---lacking tools like satellite imagery or flyover photos---had to be imagined by artists in the 19th century.

{{< figure src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524nh961/full/pct:20/0/default.jpg" class="figure-right" caption="Notice for Edward Whitefield's *View of Dedham* (1876)" >}}

Unlike many bird's-eye maps of the day, {{< popup img-src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:x633fc83b/211,421,7478,4607/pct:5/0/default.jpg" target="blank" >}}Whitefield's actual view{{</popup>}}includes no legend, indication of prominent buildings, or other alteration to the scene. Instead, important citizens like Dr. Stimson and Mr. Quincy, as well as significant places like the Court House and Memorial Hall, were {{< popup img-src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524nh961/2394,906,1938,922/pct:50/0/default.jpg" target="blank">}}noted in the ad.{{</popup>}}The notice helps contextualize the role bird's-eye view maps played in late 19th century civic life: they allowed people to see themselves as part of a larger whole, while at the same time authenticating class divisions between citizens of different social and economic standing.

Through making and playing this game, I also learned that there's **at least one town in Massachusetts** that turns up zero maps. Can you track it down, or maybe find even more gaps in our collections? Try it out, and [let us know](mailto:ispangler@leventhalmap.org) what you discover!

<a href="https://towns-challenge.glitch.me/" class="btn btn-md btn-outline-primary">Play the Mass Towns Challenge</a>

> View the source code and [remix it freely on Glitch](https://glitch.com/edit/#!/towns-challenge).