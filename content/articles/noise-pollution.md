---
title: The two ways to make something louder
author: Ian Spangler
description: How noise pollutes even when nobody's listening
date: 2022-12-10T01:30:00.000+00:00
image: "/uploads/noisepop-boston.png"
backgroundImage: "uploads/noisepop.png"
tags: [more or less in common, noise, airport, bivariate, pollution]

---
>*[More or Less in Common: Environment and Justice in the Human Landscape](https://www.leventhalmap.org/digital-exhibitions/more-or-less-in-common/)* is open through December 28, 2023.
## Noisy data

The term ["noisy data"](https://en.wikipedia.org/wiki/Noisy_data) usually refers to unwanted, irrelevant, or otherwise corrupt information in a dataset. For mapmakers, separating the signal from the noise is a fundamental part of the analytic and cartographic process. However, when trying to map something like noise pollution---or unwanted and excessively loud sounds in a particular environment---"noisy data" takes on an entirely different meaning.

{{< figure src="/uploads/noise-map-small.png" caption="[Our reproduction](https://www.leventhalmap.org/digital-exhibitions/more-or-less-in-common/topics/social-eco-boundaries/) of the DOT's [transportation noise map](https://maps.dot.gov/BTS/NationalTransportationNoiseMap/), focused on the Greater Boston region." class="figure-left">}}

"The Sound of Mass Transit," featured in our exhibition *[More or Less in Common](https://www.leventhalmap.org/digital-exhibitions/more-or-less-in-common/)*, is a reproduction of the [Department of Transportation's National Transportation Noise Map](https://maps.dot.gov/BTS/NationalTransportationNoiseMap/). Boston is a particularly noisy place, as [WGBH reported in 2019](https://www.wgbh.org/news/local-news/2019/09/17/boston-is-noisy-how-is-that-affecting-our-health), and sometimes the "symphony of the city" can become unearable. To combat noise pollution, the [City of Boston's Municipal Code](https://www.boston.gov/departments/environment/air-pollution-control-commission/noise-boston) sets rules against "unreasonable" levels of noise, prohibiting anything louder than 50 decibels from 11pm to 7am, or anything louder than 70 decibels at any time, except for permitted construction.

Created by estimating noise levels based on factors like road type or airport proximity---rather than, for example, standing on the every sidewalk in America with a decibel reader---the noise map helps visualize which areas in the Greater Boston region suffer from noise pollution. However, as we considered the [DOT's methodology](https://www.bts.gov/sites/bts.dot.gov/files/docs/explore-topics-and-geography/geography/203606/btsnoisemappingtooldocumentationmarch2016.pdf) in creating the dataset, we also started to wonder what kinds of context we could add.
<br>
<br>

## If a tree falls in the forest...

{{< figure src="/uploads/noisepop.png" caption="[Our bivariate noise map for Massachussetts](/uploads/noisepop.png), taking population into account." class="figure-center">}}

There are two ways to make something louder: increase the number of decibels, or increase the number of ears. Across the towns of Massachusetts, how many places exist where there's a good deal of noise pollution and fewer people to hear it? In order to determine where the noisiest noise intersects with the most people (and vice versa), our [bivariate map](https://www.axismaps.com/guide/bivariate-choropleth) overlays the noise data with population data at the Census tract level from 2020.

{{< figure src="/uploads/noisepop-boston-crop.png" caption="" class="figure-right">}}

{{< figure src="/uploads/noisepop-springfield-crop.png" caption="" class="figure-right">}}

Some notes on interpreting the map: only areas that rank 45 decibels or higher appear in color. Pink indicates loud places with very few people, while turquoise represents dense populations and quieter environments. Places in dark purple have high values of noise *and* people.

One thing the map highlights is that not all highways are created equally noisy. There's no doubt that {{<popup src="/uploads/noisepop-mass.png" target="blank">}}across the commonwealth,{{</popup>}} highways are loud---but their volume has different impacts depending on their location. Notice that in the DOT's noise map, most highways are categorized into {{<popup src="/uploads/noise-map-hway-crop.png" target="blank">}}roughly the same class:{{</popup>}}a dark purple that matches the starburst of Logan Airport. When overlaid with population data, however, you can actually separate highways into many distinct classes. It's particularly easy to see this in the zoomed in view of Boston, where {{<popup src="/uploads/noisepop-boston-hway-crop.png" target="blank">}}various classes of violet highways{{</popup>}}emerge depending on how many people are affected by their presence.

Panning over to Westfield, Chicopee, and Springfield, we find numerous aviation infrastructures, including the Westfield-Barnes Regional Airport, the Westover Airport, and the Baystate Medical Center Heliport. These burst from the map in bright pinks, while the [much larger Logan Airport](http://leventhalmap.org/articles/olmsted-to-airport-east-boston-and-urban-development/) simply fades into the densely-populated hustle and bustle of Greater Boston. What we take away from this depends on our perspective: we could make an argument that the airfields of western Mass are less invasive because they impact fewer people, just as easily as we could argue that Logan Airport is less invasive since it already exists within the loud urban core. As [critical cartographers](http://beu.extension.unicen.edu.ar/xmlui/bitstream/handle/123456789/359/CramptonyKrygier_AnintroductiontoCriticalCarography.pdf?sequence=1) have long argued, maps don't just represent the world as it is---they help create it, too.

## The forest for the trees

Combining noise data with population density lets us assess volume not only in decibels, but by how many people those decibels impact. These kinds of cartographic exercises can be useful for visualizing data in different ways, but maybe they miss the bigger issues, mistaking the forest for the trees. In essence, our map is a spatial version of the old thought experiment, "If a tree falls in the forest, does it make any sound?"---but this experiment ignores that the tree still falls, whether anyone is around to hear it or not. As we point out in *[More or Less in Common](https://www.leventhalmap.org/digital-exhibitions/more-or-less-in-common/topics/social-eco-boundaries/)*:

>Transportation noise is closely linked to transportation exhaust, meaning these communities aren’t just loud---they can also be polluted. Yet these local communities usually have little say over how these national and international pieces of infrastructure are regulated. Meanwhile, affluent suburban communities outside of the urban core tend to be much more insulated from noise pollution.

If there's one thing that *both* noise maps unambiguously show, it's that the environmental costs of how our built world is designed are high. In *More or Less in Common*, we use historic and contemporary cartographic objects to show how those costs are not borne equally by its inhabitants. Noise pollutes even when nobody's listening. 