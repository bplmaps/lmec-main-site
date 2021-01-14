---
title: Digital Collections
cardImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:wd376655v/540,7397,17681,9000/1800,/0/default.jpg
backgroundImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:wd376655v/540,7397,17681,7127/1800,/0/default.jpg
description: Thousands of maps and images available for free digital access
weight: "1"
quicklinks:
- text: Quick search across the digital collections
  link: "#quick-search"
  linkType: jump
- text: Go directly to the Digital Collections portal
  link: https://collections.leventhalmap.org
  linkType: offsite
- text: Go directly to the Map Center collections on Internet Archive
  link: https://archive.org/details/normanbleventhalmapcenter
  linkType: offsite
- text: Go directly to the Atlascope portal for urban atlases
  link: https://atlascope.leventhalmap.org

---
## Using the digital collections

The Leventhal Map & Education Center has one of the most significant digital collections of any North American map library. We encourage all kinds of research and exploration into our collections through digital access, and seek to make digital material available on the most permissive licenses possible.

### Digital repositories

Our materials are mainly available on two online repositories, both of which are free to access without registration.

* **Digital Collections portal.** Nearly 10,000 objects, primarily flat maps but also including some bound atlases, ephemera, and series, are available on our [Digital Collections portal](https://collections.leventhalmap.org). The Digital Collections portal features an [advanced search](https://collections.leventhalmap.org/advanced) for filtering material by date and theme, as well as many maps that have been [georeferenced](https://collections.leventhalmap.org/search?f%5Bgeoreferenced_bsi%5D%5B%5D=yes) for display on top of a modern map layer. <a href="https://collections.leventhalmap.org/" class="btn btn-outline-primary btn-xs mr-2"><i class="fas fa-eye"></i> Go to the Digital Collections portal</a>
* **Internet Archive.** Over 300 atlases and books, consisting of bound format, non-oversize materials, are scanned and uploaded to the [Internet Archive](https://archive.org/details/normanbleventhalmapcenter). <a href="https://archive.org/details/normanbleventhalmapcenter" class="btn btn-outline-primary btn-xs mr-2"><i class="fas fa-eye"></i> Go to the Internet Archive collection</a>

{{< figure src="https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:wd3761139/672,648,9487,3411/1000,/0/default.jpg" alt="Map of libraries in Massachusetts" caption="This [early twentieth century map of the libraries of Massachusetts](https://collections.leventhalmap.org/search/commonwealth:wd3761121) celebrated the statewide circulation of nine million volumes of library material." >}}

### Other digital discovery tools

* **Atlascope.** The [Atlascope project](/projects/digital-projects/#atlascope) involves the digital transformation of over a hundred fire insurance and real estate atlases of Boston and its inner suburbs, showing detail down to the parcel and building level for a period from 1860–1940. <a href="https://atlascope.leventhalmap.org/" class="btn btn-outline-primary btn-xs mr-2"><i class="fas fa-eye"></i> Go to the Atlascope web app</a>
* **Digital Commonwealth.** Our Digital Collections portal is part of [Digital Commonwealth](https://www.digitalcommonwealth.org), a consortium of more than 180 cultural heritage organizations across Massachusetts. From the Digital Commonwealth repository, you can search Map Center collections together with maps, images, texts, sound records, and millions of other objects from other institutions. <a href="https://digitalcommonwealth.org" class="btn btn-outline-primary btn-xs mr-2"><i class="fas fa-eye"></i> Go to the Digital Commonwealth portal</a>
* **Flickr.** Before the development of our Digital Collections portal, we uploaded full-resolution images to the photo-sharing site Flickr. You can [browser our images here](https://secure.flickr.com/photos/normanbleventhalmapcenter/). We are no longer actively adding new material to our Flickr collections.

## Searching the digital collections {#quick-search}

This quick search tool will allow you to run a keyword search across the Digital Collections portal and Internet Archive. For more information on advanced searches of the full scope of our collections, see the [Searching the Collections](/collections/searching) page.

<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

<script src="https://geoservices.leventhalmap.org/lmec-union-search-webcomponent/lmec-union-search.min.js"></script>
<lmec-union-search></lmec-union-search>

## Advanced access to digital objects

### IIIF Manifests and Images

All objects in the [Digital Collections portal](https://collections.leventhalmap.org) are available for access through the International Image Interoperability Format ([IIIF](https://iiif.io)). To access the IIIF Manifest for an object, add the suffix `/manifest.json` to the end of the `collections.leventhalmap.org` URL. For example, the Manifest of the Bonner map of Boston can be found [here](https://collections.leventhalmap.org/search/commonwealth:9s161f21f/manifest.json).

### Search API

JSON search results of the Digital Collections portal are available at the endpoint `https://collections.leventhalmap.org/search.json`, which takes the same query parameters as the search portal. For example, a search returning results for the keyword "Boston neck" can be found [here](https://collections.leventhalmap.org/search.json?utf8=✓&q=boston+neck).