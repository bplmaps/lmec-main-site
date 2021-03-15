+++
author = "Belle Lipton"
backgroundImage = "images/blog/tc.png"
date = 2021-03-19T19:56:17Z
description = "We spoke with Massachusetts Department of Transportation's lead developer to discuss what it means to oversee public data"
image = "images/blog/tc-2.png"
tags = ["GIS Data", "Data Curation", "Library Services", "Public Resources", "Get to Know Your Data"]
title = "Get to Know Your Data: A Conversation with MassDOT"

+++

### Town Corners Map

The Leventhal Map & Education Center (LMEC) recently partnered with Massachusetts Department of Transportation (MassDOT) to create a webmap for viewing town corners. 

The LMEC holds and cares for [town boundaries atlases](https://bpl.bibliocommons.com/item/show/2764806075). Years ago, MassDOT created a [dataset](https://geo-massdot.opendata.arcgis.com/datasets/e1a9ce19ec8d4b8ab3074918fbf1b34d_0) linking to pictures of the atlas maps, intended for administrative purposes. We worked together with MassDOT to create a new tool for finding and using these atlases.



<iframe width="600" height="550" src="https://geoservices.leventhalmap.org/town-corners/" ></iframe>

_New LMEC webmap to easily find any town corner_

The historic town boundaries atlases in the LMEC's physical collections are fascinating resources. They depict Massachusetts town extents, using maps, descriptions, tables, and sometimes even photographs. 


{{< figure src="/images/blog/tc-5.jpg" caption="Atlas of the boundaries of the town of Kingston, Plymouth County, 1899" >}}

Tables include geographic [triangulation stations](https://en.wikipedia.org/wiki/Triangulation_station) and the distances between them. 


{{< figure src="/images/blog/tc-6.png" caption="Triangulation stations in Kingston, Massachusetts" >}}

Map insets, now accessible from the [LMEC Town Corners Webmap](https://geoservices.leventhalmap.org/town-corners/), show the details of town corners as they are in the historic atlases.

{{< figure src="/images/blog/tc-4.jpg" caption="Town boundary between Kingston and Duxbury, along the Jones River" >}}


Making geospatial reference maps that aid in finding historic materials is a lot of work. For example, LMEC GIS interns spent over a year creating materials for our tool [Atlascope](https://atlascope.leventhalmap.org/). 

When we found out MassDOT had already created data for town corner atlases, we called them right away. We were then able to work together to make public the town corner images seen in the LMEC webmap.

### Interview 

After finishing the town corners webmap, I was still curious about MassDOT. The LMEC engages in many [activities to promote GIS data literacy](https://www.leventhalmap.org/articles/introducing-our-public-data-project/) in our work with the public. I wanted to learn more about what else the GIS folks at MassDOT have to offer. 

I sat down with Carl Hughes, MassDOT's lead GIS developer. We had a discussion about how he creates data materials and thinks about public audiences. 

_The text of this interview has been lightly edited for clarity._

**Belle Lipton: How long have you worked with MassDOT?**

Carl Hughes: Five years. 

**BL: How many people are in GIS services there?**

CH: The team is around 15 people or so. We manage the GIS data & infrastructure. 

**BL: What are some of the main datasets you manage?**

CH: The road inventory is the main dataset we work on. We also manage rail, transit, airports, bike networks, the crash inventory, and many other assets. 


**BL: What are some attitudes and constraints which affect the accessibility of your datasets and web tools for everyday people?**


CH: We're very focused on the road inventory. That's everything from speed limit data, to pavement condition, to guard rail locations. Those aren't very interesting, in and of themselves to the public. We spend a lot of money, however, collecting, maintaining, cleaning, updating and building tools to support that data. 
The benefit is that it gets drawn up into non-MassDOT tools like GoogleMaps and Waze. That's the primary way most people interact with the data we collect and the work we do. If we built a tool to show, for instance, the locations of road closures, nobody would use that application. It would be inconvenient. But GoogleMaps does take that information from us.

When we structure data, much of that formatting is federally-regulated. For example, there are many attributes we collect and report on that wouldn't mean a lot to the public. For instance, "jurisdiction", "functional classification", "federal functional classification", etc . If I told you jurisdiction means ownership and, ownership signifies who is responsible for the road, that makes a bit more sense. Internally, we say things like, "oh you know, the jurisdiction dataset", or, "is it accepted or unaccepted?". We use those terms internally, but they might not make sense to the average person. What it means is, does the city own it and does the city maintain it? Was it built within a city but is it "unaccepted" so the city does not pay to maintain it? All this feeds into this thing called chapter 90, which is funding that the towns get, calculated on population, jobs, and then the actual mileage of roads that are accepted within their town. So the data we maintain has real implications for the towns, but it doesn't bother the public.

**BL: Who are the "publics" you create data and web tools for, generally?**

CH: We gear our materials towards 1. Developers who are doing construction or transportation work 2. City planners (we work closely with all the cities and towns, so we gear a lot of our “public stuff” just towards them). 3. Researchers, academics and activists focused  on transportation equity, who are usually more interested in MBTA-related datasets.

A lot of the time, when we make something “public,” we don't build it for your everyday citizen. They don't necessarily care about the pavement condition. They do care about it, but they care about it on their commute, like if they have a pothole and they want to report it, or something like that.

**BL: How would you describe your ideal public data user?**

CH: Somebody with a good sense of the geography of the state, so they know what they're looking at. Also, a question at hand that they're trying to answer. Many of our tools and datasets aren't meant for browsing or exploring the way other tools are. It does help if you have an interest in a type of asset, or something like that to know what you're looking at. We also assume an understanding of the queries and filters, which plays into the language we use. For example, what does "ownership" mean, what does "asset condition" mean? What is an "asset inspection"? It's the most recent time somebody went out and looked at that asset and filled out a form we made, which gives us a sense of the asset's condition. So having a general understanding of what they're looking at, and what they want to find out from it. 


**BL: Do you use Google Maps, Apple Maps or Waze?**

CH: I mean, I use GoogleMaps, it's just easiest!



### Learn More

- Find data in MassDOT's data portal, [GeoDOT](https://massdot.maps.arcgis.com/home/index.html)
- Learn how the pandemic has impacted travel patterns in Massachusetts with MassDOT's [COVID Mobility Dashboard](https://mobility-massdot.hub.arcgis.com/)
- Become a data sleuth by signing up for LMEC's Spring workshop series, [Making Sense of Maps and Data](https://www.leventhalmap.org/event/making-sense-of-maps-data/)
- Learn more about how data and society impact one another by checking out LMEC's Spring lecture series [More Angles on Bending Lines](update me!)
- Get GIS data help from the LMEC by making a [GIS reference request](https://www.leventhalmap.org/research/geospatial/)

