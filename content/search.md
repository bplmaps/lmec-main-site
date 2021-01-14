---
title: Search
# page title background image
backgroundImage: "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f463366g/1292,3248,8404,3417/1200,/0/default.jpg"
# about image
image: "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f4634466/2291,2158,3532,2116/1200,/0/default.jpg"
# meta description
type: singleton
---

## Search this website

Search this website for an overview of our programs, departments, and events.

<div class="input-group mt-3 mb-5">
  <input type="text" class="form-control" id="website-search-entry" placeholder="Search LMEC website" aria-label="Search LMEC website" aria-describedby="website-search-submit">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button" id="website-search-submit">Search</button>
  </div>
</div>

<script>
  function submitSiteSearch(){
    window.open('https://www.google.com/search?client=safari&source=hp&ei=QHecX82iOM_BytMP6deWiAg&q=site%3Aleventhalmap.org+' + encodeURI(document.getElementById('website-search-entry').value) );
  }
  document.getElementById("website-search-submit").addEventListener('click', submitSiteSearch );
  // Bind to enter key
  document.getElementById("website-search-entry").addEventListener('keyup', function(e){ 
    if(e.keyCode == 13 ){ submitSiteSearch(); }
  });
</script>

## Search the catalog

Search the Bibliocommons catalog for collections records. See [Searching the Collections](/collections/searching) for more detailed search options.

<div class="input-group mt-3 mb-5">
  <input type="text" class="form-control" id="bibliocommons-search-entry" placeholder="Search titles, creators, keywords" aria-label="Search keywords" aria-describedby="bibliocommons-search-submit">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button" id="bibliocommons-search-submit">Search</button>
  </div>
</div>

<script>
  function submitBibliocommonsSearch(){
    window.open('https://bpl.bibliocommons.com/v2/search?query=anywhere%3A%28' + encodeURI(document.getElementById('bibliocommons-search-entry').value) + '%29+++branch%3A%22BPL+-+Leventhal+Map+Center%22+-formatcode%3A%28AB+OR+GRAPHIC_NOVEL_DOWNLOAD+OR+VIDEO_DOWNLOAD+OR+EBOOK+OR+EJ+OR+PLAYAWAY_AUDIOBOOK+OR+MN+OR+MUSIC_ONLINE+OR+VIDEO_ONLINE+%29&searchType=bl&suppress=true' );
  }
  document.getElementById("bibliocommons-search-submit").addEventListener('click', submitBibliocommonsSearch );
  // Bind to enter key
  document.getElementById("bibliocommons-search-entry").addEventListener('keyup', function(e){ 
    if(e.keyCode == 13 ){ submitBibliocommonsSearch(); }
  });
</script>

## Search digital collections

Search the Digital Collections portal and Internet Archive for digitized material. See [Digital Collections](/collections/digital-collections) for more information and advanced search.

<script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>

<script src="https://geoservices.leventhalmap.org/lmec-union-search-webcomponent/lmec-union-search.min.js"></script>
<lmec-union-search></lmec-union-search>
## Search Cartinal

For tutorials, guides, and documentation on geospatial information, data services, and computer cartography, search the [Cartinal documentation portal](https://geoservices.leventhalmap.org/cartinal/). 

## Search Tools for Teachers

Search the [Tools For Teachers](https://collections.leventhalmap.org/educators/) site for map sets, lessons, and activities. Visit the [K-12 education](/education/k12) page for more resources and information.

<div class="input-group mt-3 mb-5">
  <input type="text" class="form-control" id="tft-search-entry" placeholder="Search keywords and locations" aria-label="Search keywords and locations" aria-describedby="tft-search-submit">
  <div class="input-group-append">
    <button class="btn btn-primary" type="button" id="tft-search-submit">Search</button>
  </div>
</div>

<script>
  function submitTFTSearch(){
    window.open('https://collections.leventhalmap.org/educators/search?utf8=✓&search%5Bkeyword%5D=' + encodeURI(document.getElementById('tft-search-entry').value) + '&search%5Bgrade_level%5D=&search%5Bsubject%5D=&search%5Bstaff%5D=0' );
  }
  document.getElementById("tft-search-submit").addEventListener('click', submitTFTSearch );
  // Bind to enter key
  document.getElementById("tft-search-entry").addEventListener('keyup', function(e){ 
    if(e.keyCode == 13 ){ submitTFTSearch(); }
  });
</script>
