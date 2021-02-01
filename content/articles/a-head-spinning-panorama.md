+++
author = "Garrett Dash Nelson"
backgroundImage = "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f4632383/4556,1101,3066,1380/,1200/0/default.jpg"
date = 2021-01-29T11:58:53Z
description = ""
draft = true
image = "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f4632383/4556,1101,3066,1380/,1200/0/default.jpg"
tags = []
title = "A head-spinning panorama"

+++
[Mount Vernon post](https://www.mountvernon.org/library/research-library/special-collections-and-archives/richard-h-brown-revolutionary-war-map-collection/an-18th-century-view-from-beacon-hill/)

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>

<div id="mt-washington-pano" style="width: 100%; height: 500px;"></div>

<script>
pannellum.viewer('mt-washington-pano', {
    "type": "equirectangular",
    "panorama": "https://geoservices.leventhalmap.org/files/panoramas/mt-washington-pano.jpg"
});
</script>