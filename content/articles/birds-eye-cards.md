---
date: 2022-05-26T15:00:52.000-05:00
title: Landscapes of visual repetition in "Bird's Eye Cards"
description: A new map visualization invites you to look at patterns in the landscape
  as seen from above
image: "/uploads/2022-05-25/birds_eye_cards_screenshot.jpg"
author: Garrett Dash Nelson
tags:
- visualization
- interactive
- aerial imagery
- landscape
backgroundImage: "/uploads/2022-05-25/birds_eye_cards_screenshot.jpg"
draft: true

---
The allure of seeing the world from above is so closely associated with the discipline of geography that [some  degree programs](https://ceoas.oregonstate.edu/how-do-i-know-if-i-want-be-geographer) even suggest that students who “prefer the window seats on airplanes” might be potential future geographers. And while there are many reasons to be [cautious about the totalizing perspective](https://journals.sagepub.com/doi/abs/10.1068/d100199) of the “God’s-eye view,” aerial images still nevertheless invite us to observe spatial structures both grand and intimate, and to interrogate how the [patterned ground](http://www.worldcat.org/oclc/718608208) on which we live came to take on its visual form.

Some of the most interesting aerial observations emerge from repetition in the landscape—both built and natural forms that occur time and time again. When I was working on developing our [Insizeor](https://insizeor.netlify.app) tool, I tried a few different processing techniques for clipping out sections from an aerial image layer. Using one of these techniques that I didn’t eventually need for Insizeor, I started to experiment with what it would look like if I created [rapid animations](https://twitter.com/en_dash/status/1479893349515599874) based on repetitive features.

Animations are eye-catching, but I quickly realized that it would be more interesting to array these aerial cut-outs next to one another, in order to create a visual pattern system that also allows the viewer to identify and explore each one of the images. And so _Bird’s Eye Cards,_ the latest [@bplmaps Glitch visualization](https://glitch.com/@bplmaps), was born:

<div class="glitch-embed-wrap" style="height: 486px; width: 100%; margin-top: 15px; margin-bottom: 40px;">
<iframe
allow="geolocation; microphone; camera; midi; encrypted-media"
src="https://glitch.com/embed/#!/embed/birds-eye-cards?previewSize=100&previewFirst=true&sidebarCollapsed=true"
alt="birds-eye-cards on Glitch"
style="height: 100%; width: 100%; border: 0;">
</iframe>
</div>

I started out by working with [statewide data on Massachusetts](https://www.mass.gov/info-details/massgis-data-building-structures-2-d), zooming in on the state's largest buildings (The largest of all is the [MWRA wastewater plant](https://www.mwra.com/03sewer/html/DeerIslandWindow.htm) on Deer Island). Some interesting patterns already begin to emerge here: we see malls, surrounded by enormous moats of parking; warehouses, with semi trucks lined up at their sides; and, in a few cases, solar panels that have been installed to make use of what would otherwise be wasted empty roof space.

{{< figure src="/uploads/2022-05-25/birds_eye_cards_screenshot.jpg" >}}

The built environment is full of similar large features with recognizable land use patterns. Here's every controlled-access highway interchange in Massachusetts:

{{< figure src="" >}}

Then I began to wonder about natural features. While many elements of physical geography, like soil types or topographic features like eskers, are more easily visualized on a drawn map than in aerial imagery, I was curious about one kind of glacial landscape that should be fairly recognizable from the air: [glacial kettle lakes](https://en.wikipedia.org/wiki/Kettle_(landform)). I couldn't find a GIS data set specifically identifying kettles, so instead I tried a bit of geospatial computation by calculating the "roundness" of every inland waterbody in the state. That produced this set of images, in which many kettles are represented:

{{< figure src="/uploads/2022-05-25/birds_eye_cards_ponds.jpg" >}}

Our current exhibition, [_More or Less in Common_](https://www.leventhalmap.org/digital-exhibitions/more-or-less-in-common/), is all about the interplay between the "natural" environment and social systems. In the exhibition, we talk about how environmental degradation and social marginalization often occur simultaneously, to the extent that [neighborhood income is one predictor](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0122051) of how many trees are in a neighborhood. Therefore, I was curious to look at what we'd see from the air when looking at the richest 100 and poorest 100 (by median income) Census block groups in Massachusetts:

{{< carousel >}}
{{< carousel-figure src="/uploads/2022-05-25/birds_eye_cards_richest_100.jpg" >}}100 highest income blocks{{< /carousel-figure >}}
{{< carousel-figure src="/uploads/2022-05-25/birds_eye_cards_poorest_100.jpg" >}}100 lowest income blocks{{< /carousel-figure >}}
{{</ carousel >}}

Perhaps unsurprisingly to anyone who's visited _More or Less in Common_, you can easily pick out some common types that align with the spatial structure of social inequality. Amongst the high-income blocks, we see a lot of leafy, single-family medium-density neighborhoods in places like Arlington and Brookline, along with deep green-and-blue recreational and resort areas along the coastline. Interestingly, inner urban neighborhoods are also well represented here, especially historic districts like Boston's Back Bay.

By contrast, the lowest income blocks are almost entirely institutional land uses. That includes colleges, which are a bit of a statistical outlier (Harvard Yard and Wellesley College are both amongst the "poorest" blocks in Massachusetts, due to the low individual incomes of most undergraduate students.) But it also includes the places like prisons and public housing blocks. What remains of the low income blocks not dominated by institutional building types are older neighborhoods in working-class cities, places like Chelsea, Worcester, Springfield, and Roxbury where worker housing from the nineteenth century has been repurposed into rental homes.

Want to explore more yourself? Try out the full [_Bird's Eye Cards_](https://glitch.com/@bplmaps) visualization or remix the code on Glitch! Have an idea for a feature that you'd like to see us add to the visualization? [Drop us a note](/about/contact-connect/) or tag us on social media @bplmaps.

<div class="glitch-embed-wrap" style="height: 486px; width: 100%; margin-top: 15px; margin-bottom: 40px;">
<iframe
allow="geolocation; microphone; camera; midi; encrypted-media"
src="https://glitch.com/embed/#!/embed/birds-eye-cards?previewSize=100&previewFirst=true&sidebarCollapsed=true"
alt="birds-eye-cards on Glitch"
style="height: 100%; width: 100%; border: 0;">
</iframe>
</div>