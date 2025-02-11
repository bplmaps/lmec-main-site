---
title: Georeferencing
backgroundImage: /images/blog/allmapsViewer.png
cardImage: /images/blog/allmapsViewer.png
description: Transform images of historic maps into layers that match onto modern web maps
tags: ["collections","GIS","interactive"]
type: "digital-project"
weight: 2
---
### What is georeferencing? 

**Georeferencing** refers to the process of matching images of historical maps with the geography of the real world. This allows us to treat historic maps as geospatial information, which in turn enables possibilities such as:

- Layering a historic map on top of a modern web map
- Layering one historic map on top of another
- Superimposing modern data on top of a historic map
- Transcribing geospatial data from historic maps, such as labels, features, or outlines 

Georeferencing is sometimes known as *georectifying*, *geotransforming*, or *warping*. As a user, you will most commonly encounter georeferenced maps when you see a historic map displayed on top of a modern map base layer in an interactive web map viewer.

### Finding georeferenced maps

{{< figure src="/images/blog/georef.png" alt="The filter for viewing only georeferenced maps in LMEC digital collections" caption="The filter for viewing only maps that have been georeferenced in LMEC digital collections." class="figure-right" >}}

You can view hundreds of georeferenced maps in the [LMEC digital collections portal](https://collections.leventhalmap.org).

The portal provides a filter for viewing only maps that have been georeferenced. After searching for a term in our portal---for example, ["Back Bay"](https://collections.leventhalmap.org/search?utf8=✓&q=%22Back+Bay%22)---scroll down the page until you see a facet option titled "**Georeferenced**." Clicking "**Yes**" or "**No**" will adjust the search, filtering for only maps that have (or have not) been georeferenced.

You can also filter for georeferenced maps using the [advanced search](https://collections.leventhalmap.org/advanced) in the collections portal. 

To view a georeferenced map as an overlay in an online map viewer, find the "Georeferencing" panel beneath the map image and click "**View this georeferenced map in Allmaps Viewer**".

In addition to georeferenced maps in the digital collections portal, the [Atlascope](https://www.atlascope.org) portal for urban atlases also consists exclusively of map layers which have been georeferenced. 

### Contributing to our georeferencing data

Georeferencing requires matching points on a map image to points on a modern map (these are called _ground control points_ or simply _control points_.) While we have already created georeferencing control points for hundreds of our maps, you can help us by georeferencing new maps, or by improving the georeferencing for a map which has already been georeferenced.

From any record in the digital collections portal---let's use this [1934 map of townships in eastern Massachusetts](https://collections.leventhalmap.org/search/commonwealth:q524n357v) as an example---find the "Georeferencing" panel beneath the map image.

If the map you're examining has been georeferenced already, you'll be prompted to {{<popup img-src="/images/blog/georef-existing-map.png" img-bib="/images/blog/georef-existing-map.png" class=popupTooltip target="blank">}}view the georeferenced map, improve it, or access its metadata.{{</popup>}} By contrast, if the map you're examining has not yet been georeferenced, you'll be prompted to begin {{<popup img-src="/images/blog/georef-new-map.png" bib-src="/images/blog/georef-new-map.png" class=popupTooltip target="blank">}}georeferencing the map in Allmaps Editor.{{</popup>}}

To get started georeferencing, click on "Improve georeferencing" or "Georeference the map in Allmaps Editor." This will open the map directly in [Allmaps](https://editor.allmaps.org), a cross-institutional-platform for finding, creating, and sharing georeferencing maps.

You can read our [tutorial on using Allmaps](https://cartinal.leventhalmap.org/guides/georeference.html) to learn more about the best practices for georeferencing.

{{< carousel >}}
    {{< carousel-figure src="/images/blog/allmapsEditor.png" >}} **Georeferencing the [1934 map of Massachusetts](https://collections.leventhalmap.org/search/commonwealth:q524n357v) townships in Allmaps Editor** {{< /carousel-figure >}}
    {{< carousel-figure src="/images/blog/allmapsViewer.png" >}} **Viewing the [1934 map of Massachusetts townships](https://collections.leventhalmap.org/search/commonwealth:q524n357v) in Allmaps Viewer** {{< /carousel-figure >}}
{{</ carousel >}}

### Georeferencing and Allmaps

The Leventhal Map & Education Center is a leading sponsor of the **Allmaps** platform. Allmaps makes the georeferencing process easier for users, more interoperable for institutional collections, and simpler to process. Unlike traditional georeferencing software---which can often be complicated to use, and typically requires downloading and uploading very large image files---Allmaps functions are handled almost entirely by a user's web browser. This lowers the barrier significantly for anybody who wants to create and view georeferenced maps, and reduces the need for institutions to maintain expensive and brittle server infrastructure.

##### The IIIF protocol

In order to warp scanned maps in the web browser, Allmaps relies on the [international image interoperability framework (IIIF)](https://iiif.io/get-started/how-iiif-works/). IIIF is an open standard for storing and displaying high-resolution images and information about them. It's widely used by libraries across the world, many of which [contain maps](https://github.com/allmaps/iiif-map-collections/tree/main).

##### Georeference any IIIF-compliant map

You can georeference any map in LMEC collections with Allmaps, but you can also georeference *any IIIF-compliant map*. All you need is a **IIIF manifest**, or a unique identifier---much like the manifest of a flight or a ship---that contains all of the information associated with the digital image for a given object. You can find instructions on accessing IIIF manifests for a particular institution at the [IIIF Consortium's resource page](https://iiif.io/guides/finding_resources/).

##### Supported by the National Endowment for the Humanities

LMEC's use of Allmaps is part of an ongoing grant project, funded by the National Endowment for the Humanities and the Institute of Museum and Library Services' Digital Humanities Advancement Grant program. If you'd like to learn more about the project, please contact [Ian Spangler](https://www.leventhalmap.org/about/people/ian-spangler/).
