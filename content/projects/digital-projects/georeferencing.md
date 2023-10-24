---
title: Georeferencing
backgroundImage: /images/blog/allmapsViewer.png
cardImage: /images/blog/allmapsViewer.png
description: Transform images of historic maps into layers that match onto modern web maps
tags: ["collections","GIS","interactive"]
type: "digital-project"
weight: 6
---
### What is georeferencing? 
**Georeferencing** is the process of attaching coordinate data (latitude and longitude) to scanned images of maps. At the Leventhal Center, we use georeferencing to create new [Atlascope](https://atlascope.org) layers.

Our workflow depends on [Allmaps](#learn-more-about-allmaps), a free, open-source, and easy-to-use georeferencing software. Find answers to **frequently asked questions** about georeferencing below:

- [How do I find georeferenced maps?](#finding-georeferenced-maps)
- [How can I georeference a map?](#how-to-georeference-a-map)
- [What's Allmaps?](#learn-more-about-allmaps)

### Finding georeferenced maps

<!-- ##### In LMEC collections -->

{{< figure src="/images/blog/georef.png" alt="The filter for viewing only georeferenced maps in LMEC digital collections" caption="The filter for viewing only maps that have been georeferenced in LMEC digital collections." class="figure-right" >}}

You can view hundreds of georeferenced maps in the [LMEC digital collections portal](https://collections.leventhalmap.org).

The portal provides a filter for viewing only maps that have been georeferenced. After searching for a term in our portal---for example, ["boston" AND "aerial view"](https://collections.leventhalmap.org/search?utf8=%E2%9C%93&q=%22boston%22+AND+%22aerial+view%22)---scroll down the page until you see a box titled "Georeferenced." 

Clicking "Yes" or "No" will adjust the search, filtering for only maps that have (or have not) been georeferenced.

<!-- ##### In other collections

Many libraries, museums, and digital map collections offer services for viewing georeferenced maps. Here are just a few:
* [David Rumsey Map Collection](https://www.davidrumsey.com/view/georeferenced-maps)---the DRMC hosts tens of thousands of georeferenced maps as part of their collection.
* [OldInsuranceMaps](https://oldinsurancemaps.net/)---a platform for georeferencing and viewing Sanborn maps from the Library of Congress
* [Mapping Inequality](https://dsl.richmond.edu/panorama/redlining/#loc=5/39.113/-94.57)---this project from the University of Richmond's Digital Scholarship Lab provides access to georeferenced HOLC maps that show  -->


### How to georeference a map

The easiest way to get started georeferencing is to simply visit the [LMEC's digital collections portal](https://collections.leventhalmap.org/) and identify the map that you want to georeference.

After selecting a map---let's use this [1934 map of townships in eastern Massachusetts](https://collections.leventhalmap.org/search/commonwealth:q524n357v) as an example---scroll down until you see the "Georeferencing" tab.

If the map you're examining has been georeferenced already, you'll be prompted to {{<popup img-src="/images/blog/georef-existing-map.png" img-bib="/images/blog/georef-existing-map.png" class=popupTooltip target="blank">}}view the georeferenced map, improve it, or access its metadata.{{</popup>}} Alternatively, if the map you're examining has not yet been georeferenced, you'll be prompted to {{<popup img-src="/images/blog/georef-new-map.png" bib-src="/images/blog/georef-new-map.png" class=popupTooltip target="blank">}}georeference the map in Allmaps Editor.{{</popup>}}

To get started georeferencing, click on "Improve georeferencing" or "Georeference the map in Allmaps Editor." This will open the map directly in [Allmaps](https://editor.allmaps.org), an ecosystem for finding, creating, and sharing georeferencing maps.

You can read our [tutorial on using Allmaps](https://cartinal.leventhalmap.org/guides/georeference.html) to learn more about the best practices for georeferencing.

{{< carousel >}}
    {{< carousel-figure src="/images/blog/allmapsEditor.png" >}} **Georeferencing the [1934 map of Massachusetts](https://collections.leventhalmap.org/search/commonwealth:q524n357v) townships in Allmaps Editor** {{< /carousel-figure >}}
    {{< carousel-figure src="/images/blog/allmapsViewer.png" >}} **Viewing the [1934 map of Massachusetts townships](https://collections.leventhalmap.org/search/commonwealth:q524n357v) in Allmaps Viewer** {{< /carousel-figure >}}
{{</ carousel >}}

### Learn more about Allmaps

Allmaps makes it easier and more inspiring to curate, georeference, and explore collections of digitized maps. Unlike traditional georeferencing software---which can often be complicated to use, and typically requires downloading and uploading very large image files---**Allmaps warps scanned maps entirely in the browser**. This lowers the barrier significantly for anybody who wants to create and view georeferenced maps.

##### The IIIF protocol

In order to warp scanned maps in the web browser, Allmaps relies on the [international image interoperability framework (IIIF)](https://iiif.io/get-started/how-iiif-works/). IIIF is an open standard for storing and displaying high-resolution images and information about them. It's widely used by libraries across the world, many of which [contain maps](https://github.com/allmaps/iiif-map-collections/tree/main).

##### Constraints make better data

**Allmaps is only compatible with IIIF-compliant maps.** While this limits the number of maps that can be georeferenced using Allmaps, it also ensures that all maps georeferenced with Allmaps are rigorously described according to the prevailing metadata standards.

##### Georeference any IIIF-compliant map

You can georeference any map in LMEC collections with Allmaps, but you can also georeference *any IIIF-compliant map*. All you need is a **IIIF manifest**, or a unique identifier---much like the manifest of a flight or a ship---that contains all of the information associated with a given object. You can find instructions on accessing IIIF manifests for a particular institution at the [IIIF Consortium's resource page](https://iiif.io/guides/finding_resources/).

##### Supported by the National Endowment for the Humanities

LMEC's use of Allmaps is part of an ongoing grant project, funded by the National Endowment for the Humanities and the Institute of Museum and Library Services' Digital Humanities Advancement Grant program. If you'd like to learn more about the project, please contact [Ian Spangler](https://www.leventhalmap.org/about/people/ian-spangler/).