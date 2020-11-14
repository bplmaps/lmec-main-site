---
title: Searching the Collections
# page title background image
cardImage: "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:qb98n782n/416,1060,6719,3000/1800,/0/default.jpg"
backgroundImage: "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:qb98n782n/416,1060,6719,2819/1800,/0/default.jpg"
# about image
# meta description
description : "How to find what we have using our catalogs and digital repositories"
weight: 2
quicklinks:
  - text: "Search the catalog for objects in the Map Center collections"
    link: "#bibliocommons-search-entry"
    linkType: jump
  - text: "Search the digital collections for objects available online"
    link: "#search-digital-collections"
    linkType: jump
  - text: "Get help finding objects by contacting a reference librarian"
    link: "research/appointments"
    linkType: onsite
  - text: "Browse finding aids and other guides to the collections"
    link: "research/guides"
    linkType: onsite
---

## Catalogs

All of our physical items are cataloged in the BPL's online search portal, Bibliocommons. You can enter an advanced search in the [Bibliocommons search interface](https://bpl.bibliocommons.com/search), but your result may return many non-LMEC objects such as downloadable audiobooks. 

Use the search below to begin a custom query that will search only for LMEC items, by filtering out many of the most common non-cartographic materials that may appear in the search results.

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

#### Alternative catalog

Some users may prefer to use the alternative [MBLN catalog](http://catalog.mbln.org/polaris/) for searching, which in some cases offers access to more detailed record information.

#### Caveats about online catalog searches

While we make every effort to ensure that our online catalog matches our holdings, there may be cases in which the catalog records including missing or insufficient detail. Some catalog records have been produced by batch conversion processes which may have introduced error into the records. Some objects, especially large series and archival material, are not fully cataloged at the item level. We retain legacy copies of card catalogs and other finding aids to help locate material which is not discoverable in the online catalogs. For more assistance, and to find material which does not appear in the online catalogs, [make an appointment with a reference librarian](research/appointments).

## Searching digital collections {#search-digital-collections}

Our digital collections are found on several different repositories; see the [Digital Collections](collections/digital-collections) section for more information.

#### Quick search 

To make a quick search of our two largest digital repositories, use the quick search tool. <a href="https://geoservices.leventhalmap.org/union-search" target="_blank" class="btn btn-outline-primary btn-xs mr-2"><i class="fas fa-external-link-square-alt"></i> Open quick search in a new window</a>

<iframe src="https://geoservices.leventhalmap.org/union-search" style="width:100%;height:500px;border:1px solid black;"></iframe>

#### Advanced searches

To make searches filtered by years, creators, subject types, and format, try the following:

- **[Digital Collections portal advanced search](https://collections.leventhalmap.org/advanced)**
- **[Internet Archive advanced search](https://archive.org/advancedsearch.php)**. You must enter `normanbleventhalmapcenter` in to the Collection field in order to filter for results in our collections.