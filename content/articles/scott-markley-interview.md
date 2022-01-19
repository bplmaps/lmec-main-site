---
title: An interview with Scott Markley
author: Ian Spangler & Scott Markley
draft: true
description: Welcome to our new Assistant Curator for Digital and Participatory Geography!
date: 2021-11-03T01:30:00.000+00:00
image: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524n1743/661,702,8449,4015/full/0/default.jpg
backgroundImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524n1743/661,702,8449,4015/full/0/default.jpg
tags:
- interview
- announcement
- staff
- GIS

---

> This article is a part of the **Get to Know Your Data** series, where we talk to the people and institutions that create, store, and share geospatial data. In this series, we ask about how data managers engage with public audiences and grapple with the social lives of the data that they manage.

**Ian Spangler**: I would love to to kick this interview off by just having you tell us a little bit about yourself. What brought you into the world of maps and geography, and in particular, the data set that will be talking about today?

**Scott Markley**: Okay. I think I'm probably a rare breed of someone who was a geography major as an undergrad, and the reason why was, I didn't know what I wanted to do in college. I took a geography class and I really enjoyed it, so I signed up for that, and in doing  what is required for the major I started taking geographic information systems (GIS) courses, like many of us do. I had never heard of GIS, and I really enjoyed that as well.

I kept down that path, and after undergrad, I was really looking looking to extend my education into research. I got my Master's in geography at the University of Tennessee and then for my PhD I came to the University of Georgia where I've been for five and a half years now finishing up.

A lot of my interests coming in were about integrating GIS and spatial analysis with critiques of racial capitalism. That was really my interest, and GIS was kind of a secondary thing. I think what brought me to maps, really, was teaching about the legacies of racism, how they shape these geographies of segregation, and what that means for how we think about racial wealth inequality.

Maps are just such a useful tool for teaching. You can use them to link these very concrete, historical examples of forced residential segregation and state-sanctioned discrimination to contemporary racial inequalities. That was a very useful teaching strategy, and it brought me to the to the Richmond website a couple years back.

There's a ton of useful data at that website that dovetail nicely with my dissertation. What really got me on this project was seeing the description sheets and wanting to have that, use that in some of the analyses that I was starting to build up as part of my dissertation.

**IS**: It sounds like GIS started to become more than just a tool for you. What's that threshold between seeing GIS as a tool to answer a set of questions about inequality, and GIS as a conceptual topic in its own right?

**SM**: Well, this project really got me thinking about how the HOLC mapping in the 1930's was sort of like a GIS project in itself. It was a project by professional cartographers who were hired by the State Agency to map out these neighborhoods. There's debate about how much these maps were actually put into use, but certainly they were a way to visualize and conceptualize this relationship between value and race. The map was the illustration of the real estate industry's imagination of how these places were changing at the time, and how they could use that for their for their investment decisions.

**IS**: That's a great segue into sort of talking about the Home Owners Loan Corporation (HOLC) itself, and and the sort of histories of redlining and spatial racism that these maps capture. Could you describe what the HOLC is and what it did?

**SM**: These maps were referenced by savings & loans banks and other federal institutions who would steer loan activity based on social variables in a particular neighborhood. Now, there's debate among people who look into these maps about the extent to which they were actually put into into practice---but for me, the more interesting thing is that these maps really depict this way that the public-private real estate nexus viewed the relationship between value and race in neighborhood urban space. To me that's the fascinating thing about it.

Around this time, you've also got a revolution in how appraisal values in home can take place. Government agencies and the private sector were collaborating to incorporate data into how they make certain decisions. All these forces come together---contacts in the cities, people who work in the real estate and lending industries, local understandings of where money can be made and property should be purchased---these forces come together to create these elaborate maps with detailed notes all about, essentially, where they think they can guide profitable investments. You've got this visual representation tied to quantitative and qualitative information that depicts the governing ideology of the real estate industry of the time, and how they think about the temporal geographies of value.

**IS**: You're saying that we can look back on these maps from the 1930's, and get a glimpse in time, both of how these representatives of the real estate industry or the state saw space, but also how they envisioned it would be in the future.

**SM**: Yeah. That's the thing I think is missed a lot. People think of HOLC maps as this sort of spatial representation, but they're as much indicators of *space in time*. The grades themselves are informed by this idea that neighborhoods are inevitably going to deteriorate---that's sort of the dominant theory of the day---and so these maps really arrange cities by time. The D grade is "Definitely declining," so it's projecting a decline, whereas B are called "Still desirable." Redlined areas represent many older parts of the city. But there's also a racial element---if black folks are moving into a white neighborhood, it would be marked as "in decline."

**IS**: HOLC maps have been catapulted into the public consciousness in recent years, largely through the Mapping Inequality project. The most prominent linkage here is to histories of racial discrimination, but as you've alluded to, there were lots of interlocking factors impacting why a neighborhood was graded a D. Your dataset starts to help us  visualize the relationships between things like race, class, housing structure and building age. How does this perspective give us a better understanding of how those decisions were being made, and what their implications are today?

**SM**: You could, for example, run a regression to get an idea of which variables---race, nationality, building age, family income, occupational class, repair status, and so on---are contributing to the to the neighborhood grade assignment in different regions. That's one way you could think about it. Perhaps more interestingly, for me, the dataset provides an opportunity to break down the neighborhood grades. With HOLC maps and redlining, so much attention is just given to the A through D---But there's a lot of intra-grade variability.

For example, I think there might be a categorical difference between redlined areas that didn't have black residents and redlined areas that did have black residents. We know that if an area was really poor, and it was all white, it would probably get a D grade. Now, it it was not *that* poor, but had a sizable black population, it would still get a D grade. This data provides a potential for for digging into some of that variability.

**IS**: That goes back to the importance of having these descriptions indicating the temporal aspect of redlining. You can pull up a neighborhood sheet that is 100% white, but has gotten a D grade because it's low income. Maybe some of the population is foreign-born, but they also have a note that says, "Will be moved into by black residents in the next five years." And that's the kind of detail that's captured in your data set, but isn't easily navigable in other ones.

**SM**: Exactly. A lot of the time, redlining is talked about as a linear A-through-D grade. It's probably linear in class terms for white neighborhoods, but adding in black residents just made the grades categorically different.

**IS**: Could you walk me through your workflow in putting this dataset together? Perhaps in plain terms first, and then in terms that highlight technical parts like processing choices and programming languages?

**SM**: The first thing is on the Mapping Inequality website, you can download the spatial data, which are shapefiles and GeoJSON files. The latter is a little more friendly towards data processing softwares. I was surprised that they have scanned all of the area description sheets. You can see them on the website, they've been run through an OCR process so they're all machine readable. That made this possible.

So you bring that GeoJSON in to look at, but it's all glubbed up: the area descriptions are in one single cell. You can imagine bringing that into Excel and having one cell with the entire back of the area descriptive sheet inside.

But studying that, you can see patterns. You can see, for example, they have description sheet numbers: 1A, 1B, 2A, 2B, 2C, and those are associated with different variables. So you can see, when you bring it into the data processing software, that you've got those numbers, a colon, and then the text that corresponds with what's on the sheet. Really what you need is just to identify what variable those numbers represent, like, foreign-born or black population, or income, or whatever they're associated with. Then, you can actually separate those out into different columns. For the technical people, I used a data processing software called R, and relied primarily on the [stringr package](https://stringr.tidyverse.org/), which is part of Tidyverse.

That's all pretty straightforward, but the first speed bump you run into is that there's multiple different formats that HOLC did their notes on. When you see one a 1B, those are not the same in every city. What you need to do is you need to identify which cities does "1" mean one thing, and which cities does "1" mean another thing. I just went city by city and put what kind of format it is.

That was the main process. After that, it's just a matter of cleaning up the form. The the actual field agents who wrote down all the notes were kind of all over the place. They kind of did it the way they wanted to. I started off doing the easy ones that I can just convert to numbers right away. For example, if you see notes where an agent wrote "none" for population foreign-born, I can easily convert this to zero. But some others put "a few," and it's like, alright: "few" is more than "zero", but it's not that many. so you know what can you do there and then there's just sort of a building process of like art.

**IS**: Could you provide some context for what parts of the data set might be challenging for a user who opens it up in a GIS for the first time? What parts of the dataset might be challenging for them to understand at first glance? And what sorts of limitations exists in the dataset itself, both from your processing as well as from the original source material?

**SM**: I'll start with some of the limitations. If you take any of the numerical values---percent black, percent foreign born, for example---you'll notice pretty quickly that the field agents are ball-parking. There's a lot of 5%, 10%, 15%, and from what I know from the actual neighborhood appraisal process, this was not a detailed census. Some of the field agents might have looked at city records or knocked on doors, but there's not a good way to tell, as far as I know, how reliable each of them are. With this dataset, you have to kind of keep in mind that it's not a census: it's probably a guy who just worked in the real estate industry, maybe putting some effort into it, but maybe not.

When I get into some of the other variables like income and age of buildings, they're also all over the place. In some cases, the sheets asked for "average" and they'll just put a single number: "average age is 20 years old." Others will do a range: "Oh, between 1 and 100 years old." The same goes for income. Some people make $2,000 a year, some people make $10,000 a year so for what I had to do was simply just take the midpoint of these values. In the case of income, almost a quarter of field agents didn't put any income, so I've had to impute theirs using other variables.

I mean, this is the same with all data. I think a good lesson is in data processing, there's a million little decisions that I make, and if it was someone else they might make them differently. Or if I had revisited this six months after I did it and I was in a different mood, I might have made a different decision!

That said, I think overall you can still use the data to get some interesting questions---but there's always that giant grain of salt.

**IS**: Is there anything, whether during the data creation process or afterwards, that struck you as particularly surprising or unexpected?

**SM**: What's gotten my interest now is breaking up the HOLC grades by racial composition. A lot of times when you look at these neighborhoods in the 1930s, you can look forward and say, "Okay, the Black population in redlined areas is higher than yellow which is higher than blue, which is higher than green," and so on. But if you break that down, you'll see that the Black population increase it is not actually in redlined areas *as a whole*, but in red line areas that *already had black residents*. For example, a lot of people forget that these maps are drawn in northern cities before the bulk of the Great Migration. Milwaukee is one city I've looked at in particular. There were only one or two neighborhoods in the entire city that had any black population at all in 1930---almost all of the Black population in Milwaukee arrived after World War Two. So where do Black residents move when they moved to Milwaukee? Primarily not redlined areas as a whole, but redlined areas that already had black residents.

These maps are hiding a big part of the story, which is that it's primarily in redlined areas that *already had a Black population* where you'll find an increase in the Black population over time. The big way just looking at those four grades misses a big part of the story.

**IS**: Who you hope will benefit from this data, and where do you see it going in the next over its lifecycle?

**SM**: In the immediate term, this data can be used by researchers or in classrooms---anyone that's looking into the HOLC maps has an interest in them as sort of a supplement. I've talked to some classes at University of Georgia about using this data, and the Leventhal Map & Education Center workshop would be a good example of using it too.
