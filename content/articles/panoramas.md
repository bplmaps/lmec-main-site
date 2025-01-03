+++
author = "Garrett Dash Nelson"
backgroundImage = "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:wd3763158/1778,456,4269,2313/,1200/0/default.jpg"
date = 2021-01-29T11:58:53Z
description = "Transforming our panoramic views into virtual reality offers an opportunity to jump inside the map's perspective"
image = "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:wd3763158/1778,456,4269,2313/,1200/0/default.jpg"
tags = ["collections", "interactive"]
title = "Maps that will make your head spin"

+++
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
<style>
    .pnlm-load-button > p, .pnlm-load-box > p { color: white !important; }
</style>

Last February, our friends at the [Fred W. Smith National Library](https://www.mountvernon.org/library) for the Study of George Washington showed off a [striking digital transformation](https://www.mountvernon.org/library/research-library/special-collections-and-archives/richard-h-brown-revolutionary-war-map-collection/an-18th-century-view-from-beacon-hill/) they'd made of a set of illustrations originally created by the British lieutenant [Richard Williams](https://collections.leventhalmap.org/search?f%5Bname_facet_ssim%5D%5B%5D=Williams%2C+Richard%2C+active+1750-1776) while stationed in Boston in 1775. (Williams's watercolors are part of the Richard H. Brown Revolutionary War Collection, [digitized at LMEC for our Revolutionary War portal](https://collections.leventhalmap.org/collections/commonwealth:z603vr25h), and now in the permanent collections of the Washington Library.) Using Facebook's 360 viewer, the Washington Library pieced the five Williams watercolors together to create an immersive panorama showing what Boston would have looked like near the beginning of the American Revolution. Panning around the [virtual reality Williams panorama](https://www.facebook.com/HistoricMountVernon/photos/a.260311453821/10157474018228822/?type=3), you can almost feel as though you're looking out at Boston during the British occupation.

Panoramas are fascinating cartographic objects, since they attempt to put the viewer back *into* the perspective of experiencing the world in three dimensions. Inspired by the transformation of the Williams panoramas, we created three more virtual reality experiences from panoramic materials in our collections.

#### Boston from Bunker Hill in 1848

<div id="bunker-hill-pano" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>

The construction of the Bunker Hill Monument was completed in 1842, and the 221-foot obelisk was dedicated the following year. Less than a decade later, [this engraving](https://collections.leventhalmap.org/search/commonwealth:3f463237t) was published, reproducing the view from the top of the monument, which at the time would have been the closest approximation to an aerial survey of the city. 

Like the Williams watercolors, the original of this 1848 engraving is an *equirectangular* panorama: it flattens the 360 degrees of a panoramic view into an elongated rectangle. The Bunker Hill Monument, of course, still exists, and the Boston National Historic Park offers a [live 360 webcam](https://www.youtube.com/watch?v=MmvSS4Cvu-I&fbclid=IwAR1bD65gd_DmwBXLkHB7Sckwr_zgc8yGGyqHmIQNRrd5iD9DRtip6EPwzAY) showing this very same view today. 

#### The Battle of Gettysburg in the round

<div id="gettysburg-pano" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>


Commemorating the violent, deadly Battle of Gettysburg became a favorite national pastime for Americans after the Civil War. The South End was home to a [Gettysburg Cyclorama](https://atlascope.leventhalmap.org/#view:share$base:001$overlay:39999085945721$zoom:19.60$center:-7911632.471615617,5212749.569454899$mode:glass$pos:336) that offered visitors an opportunity to immerse themselves in a larger-than life rendering of the battlefield—a circular series of paintings that were eventually [moved to the battlefield itself](https://historicaldigression.com/2013/08/08/the-bostongettysburg-cyclorama-painting/), housed in a Modernist building designed by Richard Neutra. (As it happens, a [competing Cyclorama](https://books.google.com/books?id=wNFAAAAAIAAJ&pg=PA118#v=onepage&q&f=false) showing the Battle of Bunker Hill was located just [two blocks down the street](https://atlascope.leventhalmap.org/#view:share$base:001$overlay:39999059011104$zoom:19.06$center:-7911397.089176168,5213126.123911884$mode:glass$pos:336).)

This [panoramic illustration](https://collections.leventhalmap.org/search/commonwealth:xg94j201t), probably from the late 1860s, represented an earlier attempt at creating a 360° view of the infamous battle. Unlike the Bunker Hill panorama, this diagram is projected as a *fisheye* in its original format—somewhat similar to the [*polar projection*](https://www.leventhalmap.org/digital-exhibitions/bending-lines/how-to-bend/4.1.1/) that became a popular method for projecting the entire globe in the 1940s.

#### The top view in New England

<div id="mt-washington-pano" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>

This [striking panoramic view](https://collections.leventhalmap.org/search/commonwealth:wd3763140) from summit of Mount Washington, created in the early twentieth century by the George H. Walker firm for the Boston & Maine Railroad, is one of my favorite objects in our entire collections. It's a dizzying image in the original, and seeing in transformed into virtual reality makes the experience of looking at this map even more incredible. Created a time when [tourism in the White Mountains was exploding](http://www.worldcat.org/oclc/1155061670), this beautifully-illustrated map centers on the cluster of buildings that had been built on the summit of Mount Washington following the construction of the stage road and cog railway.

A ring of clouds reminds the viewer that Mount Washington stands head and shoulders above the rest of the northern Appalachians. More than a hundred numbered peaks in the foreground and distance show the dozens of landmarks that a visitor might see on a clear day, stretching as far away as Mount Marcy in New York, Mount Orford in Canada, and the Isles of Shoals in the ocean off of Portsmouth.

Notice in this 360° presentation what's happened to the folds on the map: the vertical and horizontal creases from the scanned image have been bent outwards to reproject the fish-eye map into a panoramic view.



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>

<script>
pannellum.viewer('mt-washington-pano', {
    "type": "equirectangular",
    "panorama": "https://geoservices.leventhalmap.org/files/panoramas/mt-washington-pano.jpg"
});

pannellum.viewer('gettysburg-pano', {
    "type": "equirectangular",
    "panorama": "https://geoservices.leventhalmap.org/files/panoramas/gettysburg-pano.jpg"
});

pannellum.viewer('bunker-hill-pano', {
    "type": "equirectangular",
    "panorama": "https://geoservices.leventhalmap.org/files/panoramas/bunker-hill-pano.jpg"
});
</script>
