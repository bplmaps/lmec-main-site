---
title: >
    All the maps, all the time: an interview with Bert Spaan
author: Bert Spaan & Ian Spangler
description: Digitized maps---especially georeferenced ones---can be tough to find, hard to access, and difficult to bring to life. With his Allmaps project, Bert Spaan is trying to change that.
date: 2022-06-08T01:30:00.000+00:00
draft: true
image: images/blog/allmaps-card.png
backgroundImage: images/blog/allmaps-banner.png
tags:
- GIS
- georeferencing
- digital humanities
- map collections

---

> Since late 2021, the LMEC has collaborated with [Bert Spaan](https://bertspaan.nl/), a map enthusiast and software engineer based in the Netherlands, to support his development of the georeferencing project [Allmaps](https://allmaps.org/). We sat down with Bert to learn all about Allmaps: where it came from, where it's going, and what's been most exciting along the way.

###  Turning maps into data

It might sound strange, at first, but lots of maps aren't compatible with maps.

Many maps that you encounter online---like this [map of the Russian invasion of Ukraine](https://www.aljazeera.com/wp-content/uploads/2022/03/INTERACTIVE-Russia-Ukraine-map-Who-controls-what-in-Ukraine-DAY-8.png?resize=770%2C513), or the [Sanborn maps featured in this article](https://www.bloomberg.com/news/articles/2014-10-13/the-accidental-revelations-of-sanborn-maps)---lack any machine-readable spatial data. That means a modern mapping software like Google Maps or [QGIS](https://cartinal.leventhalmap.org/guides/get-started-qgis/) wouldn't know where to plop it on the surface of the earth any better than this [picture of an old boat](https://www.historicnewengland.org/explore/collections-access/gusn/277288/).

<!-- {{< figure 
    class="figure-left"
    src="/images/blog/atlascope1.png"
    caption="See this view of downtown Boston in [Atlascope](https://atlascope.leventhalmap.org/#view:share$base:000$overlay:39999059011260$zoom:16.90$center:-7910726.693603568,5214225.985323061$mode:glass$pos:320)" 
>}} -->

Thankfully, we can attach geographic coordinates to digital map images through a process known as [georeferencing](https://cartinal.leventhalmap.org/guides/georeference.html). We rely on georeferencing in a lot of our work at the Map Center. In making [Atlascope](https://atlascope.leventhalmap.org/), for example, we georeferenced over a hundred atlases of the Greater Boston area.

You can access nearly [a thousand georeferenced maps in our collections portal](https://collections.leventhalmap.org/search?f%5Bgeoreferenced_bsi%5D%5B%5D=yes&q=). This may seem like a lot, but it represents less than 10% of our digital collections, and a tiny fraction of the hundreds of thousands of maps at the Boston Public Library overall.

{{< figure 
    class="figure-center"
    src="/images/blog/allmaps-georef.png"
    caption="Georeferencing a map of Cambridge in [Allmaps](https://editor.allmaps.org/#/)" 
>}}

### Interview

**Ian Spangler:** Tell me a little bit about yourself. How did you find yourself doing this kind of work at the intersection of geography, librarianship, and the digital humanities?
 
**Bert Spaan:** Sometime during my computer science study, I discovered I could combine my interest in maps and cartography with my knowledge of programming. I
 
As a kid, was always looking at maps – thinking about faraway places – studying compsci because classmates that were doing it and had an idea to make maps with computers/combine love for maps with love for programming and databases, which I was pretty handy with – found this MA  program in Utrecht about geometric alg/route finding/solving geometries w/ math – did an exchange at UW-Madison w/ ??? – briefly worked for TomTom, back then everybody still bought standalone carto devices, and I worked for a year helping them make those – then worked at a web dev company followed by a big Dutch GIS company, neither of which were perfect but taught a lot – then I worked for a Waag, non-profit research institute for arts science and technology, projects about  that did ethics of technology, open source data/software, etc., and organized the Dutch chapter of Maptime 
 
& i also created this map http://code.waag.org/buildings/ which led to many new cartography projects at Waag.
 
& during that time I created this project about the history of Dutch place names, and we turned this into a web service which was used especially for historians – I applied for a job at NYPL Labs, the digital humanities research lab at the New York Public Library, working in their NYC Space/Time directory, a digital atlas of the history of NYC, At the NYPL, I had the chance to work with the Library’s amazing collections of digitized maps and create new tools and websites to  – we tried to make maps easier to find and access, but it only worked for the NYPL and not for other institutions. Through Josh Hadro that I got involved at IIIF + Jules Schoonman, with him I started the Allmaps project.
 
**IS:** Georeferencing, or the process of associating the pixel space of static maps with coordinates in geographic space, is something we're really excited about here at the Map Center. We've been so thrilled to partner with you to help migrate our georeferencing workflow into Allmaps. Could you tell us a little bit about what Allmaps is, and explain the major problem that you were trying to solve by developing it?
 
**BS:** Allmaps is a collection of software tools that make it easier and more inspiring to explore, georeference and work with collections of digitized maps. I really wan there to be an easier way to find, explore, and view digitized maps.
 
Before I started working on Allmaps, I was doing lots of small projects as a freelancer. Working w/ diff institutions in Netherlands with digitized maps, and always had to start from scratch because every inst worked in a different way. There was never good software, never good tools that would make working with collections of maps easier. I made this one tool called Maps by Decade and wanted to replicate it for the Netherlands, but couldn’t work with those collections in the same manner when I got back.
 
At that point I heard about IIIF and started thinking about how to make a tool that could help people find maps and how they could use them. I started Allmaps really out of wanting something to exist and it didn’t so I figured I’d just start making it. Many existing georeferencing projects focus on producing GeoTIFFs or warped maps only, while I’m much more interested in the metadata. With the metadata, I can use that to make data in a different way, or create an application that does something slightly different but metadata would save me from only being able to access warped tile layers and GeoTIFFs. For example, there’s this app in the Netherlands that allows you to download warped tilelayers but it focused exclusively on accessing imagery without accessing source material. One of the other things I don’t like about many existing tools is that they’re all about history. There are still beautiful maps being made today, and I think it would be great to show people other modern maps besides Google Maps – it doesn’t need to be Google or historical maps, there are others and I’d love to increase access to them. Allmaps is primarily about the metadata and about open data, so that developers can build on top of it without only having access to the imagery.
 
You can also go back from a GeoJSON to pixels if you’re using georeferencing data (show example from our current exhibition of redlining map)
 
 
**IS:** I know that the international image interoperability framework (IIIF) plays a major role in Allmaps' technical stack---could you talk about what it means and why it's important to use IIIF and some of the other components that comprise Allmaps?
 
**BS:** Before IIIF, every institution used a different technology to access their digitized collections (if it was possible at all). Creating cross-institutional tools that worked with digitized images was very difficult - a lot of the work had to be put in first accessing the images. IIIF makes this part of Allmaps very easy.
 
IIIF not only standardizes how to access images, but also standardizes accessing metadata and creating collections of images.
 
What I hope is that projects like Allmaps can be a reason for institutions to start a IIIF server. There’s lots of other great examples of tools being built with IIIF (link here to the examples) so maybe this will help inspire
 
**IS:** On the user side, what key features distinguish Allmaps from other georeferencers?
 
With Allmaps, you can start georeferencing any map that’s available through IIIF. There’s no need to create an account or to import images.
 
There’s no need to create derivative images on the server. It all works by using URL’s; you can use the Allmaps viewer by using the URL and the same works for the Editor, which makes it really easy to share whether it’s original, georeferenced, warped, etc; you can just take the URL and share it. (in the web render maps of Boston, all the examples of warped maps are coming from the DC servers in Boston, and we’re not lookimgn at GeoTIFFs – just looking at a map image that’s been warped online by control points that are stored at Allmaps)
 
It’s based on open standards nad all components of Allmaps comunicate by using this open standard, which is the IIIF georeferencer extension. It’s not a closed ecosystem. People can adapt parts of it, create new tools, and use this open standard to create other things. In general it uses modern web technology, and while this may not be modern 5 years from now, it allows us to do things that we couldn’t do 5 years ago.
 
**IS:** So far, what's been the most exciting thing about developing Allmaps?
 
**BS:** I’m currently working on a new version of Allmaps Viewer, it can draw hundreds (if not more) maps at the same time.
 
**IS:** In the long run, what's your dream for Allmaps? Where do you see it headed in 5 or even 10 years?
 
**BS:** Software ages, but i hope the metadata spec will be around for a while.
 
I hope the georeferencing metadata will be preserved in archives, alongside digitized maps
 
New tools will be developed to search, georeference and view digizited maps, but the georeferencing metadata will still be useful
 
**IS:** As you reflect on how the project has evolved since the early stages as a prototype…
 
**BS:** Allmaps started as an idea, developed during a few workshops/hackathons (in NL, at Wikimedia conference, and geo4libcamp). Then I met Jules Schoonman again to work on an exhibition about Cornelis Krayenhoff who made the first accurate map of the Netherlands in the early 1800s. It was difficult to work with the maps we needed, from different institutions. We decided we needed something better, Jules funded first prototype of Allmaps
 
Only since this spring, I’m able to work on Allmaps full-time. I have many ideas and plans for the project, and I plan to keep working on Allmaps for the foreseeable future.
 
Ideas when the technology that powers Allmaps is finished: use Allmaps in history classes, teach about maps, work on vectorization algorithms.
 
**IS:** We'll be posting regular updates about Allmaps in our Map Center newsletters and on the website, but for folks who are excited about your work, what's the best way to stay in touch with you? (e.g., Twitter)
 
**BS:** For now, the best way to keep updated about the project is to follow me on Twitter. And at some point, I’ll start publishing blog posts on the homepage of Allmaps and there’ll be a tool to discover collections of maps from different institutions.


