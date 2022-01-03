+++
backgroundImage = "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:3f462x269/2271,2790,4595,2280/,1200/0/default.jpg"
description = "Developer teams sought for digital collections project"
draft = false
title = "RFP: Frontend developer to design American Revolutionary Geographies Online (ARGO) portal"
type = "singleton"
weight = ""

+++

A joint project of the **Fred W. Smith National Library for the Study of George Washington at Mount Vernon** and the **Leventhal Map & Education Center at the Boston Public Library**, the ARGO team is creating a web portal consisting of primary source materials on the historical geography of the American Revolutionary War era, coupled with rich interpretive essays, galleries, and interactives aimed at both scholarly and general public audiences. Building on the Leventhal Center’s existing [American Revolution Portal](https://collections.leventhalmap.org/collections/commonwealth:dn39z222j), the expanded project will entail a unified digital interface and catalog that enables convenient open access to high-resolution scans of relevant historic objects, an extensible architecture permitting new institutions to contribute additional primary material, and an editorial section where scholars can publish material related to the collections. The project is supported by a grant from the National Historic Publications & Records Commission at the United States National Archives.

The ARGO team seeks a frontend web developer/designer to build v1.0 of the ARGO portal. We seek a team whose capabilities include both strong visual design as well as frontend code development. The successful bid will demonstrate a team’s ability to work with and take inspiration from a rich visual display of both historic and contemporary materials, while designing a performant, stable frontend site with both long-term maintenance and modular architecture as primary goals.

 

#### Project technical specifications

* The project will be designed as a frontend web app to be hosted in a serverless/JAMStack ecosystem. The project team has already created a functional mockup site using the Gridsome framework ([preview site](https://www.argomaps.org); [source code](https://github.com/bplmaps/argo-wireframe)). The final selection for a framework need not be Gridsome specifically, but it must be a framework which creates static site builds and allows for dynamic routing. The project team has a preference for Vue over other frontend frameworks, but we will consider proposals that make a compelling case for using other tech stacks.
* Access to primary source materials is provided via existing API endpoints from the Leventhal Map & Education Center’s digital collections portal. Collections search and object metadata retrieval are both completed through simple HTTP GET APIs that return JSON, based on the [Blacklight framework](https://projectblacklight.org). Image delivery is served over the International Image [Interoperability Framework (IIIF)](https://iiif.io/api/index.html) Presentation API.
* The ability to embed deep zoomable images, using a IIIF viewer such as Mirador, TIFY, OpenLayers, or another componentized IIIF viewer is a required feature.
* The search feature must provide for simple faceting of digital collections objects, using the results returned by the Search API.
* In addition to customized search access into the digital collection resources, the portal should feature the ability to gather selected sets of digital collections objects into groupings such as galleries, carousels, and slideshows.
* Several different types of editorial pages, such as essays with embedded images, curricular pages, and pages with basic YouTube and audio embeds are required.
* The ARGO project team prefers a headless CMS system for managing editorial content, such as Forestry, Netlify CMS, Contentful, Sanity, or an equivalent.
* To the extent possible, the project should comply with Web Accessibility standards; proposals may include subcontracts for accessibility consultants.
* The ARGO project team will manage all build, integration, and hosting needs for the final site.

 

#### Budget and phasing

The project will proceed in three yearly phases. Phase 1, to be carried out in calendar year 2022, will involve a full build of the ARGO site, at an expected cost of $25,000–$35,000. In Phase 2, carried out in calendar year 2023, we expect to add new editorial features and complete bug fixes on v1.0, at an expected cost of $10,000–$15,000. Phase 3, carried out in calendar year 2024, will involve further refinements and bug fixes at an expected cost of $8,000–$10,000. We prefer proposals that can commit to a three-year contract across all phases.

#### Project timeline for Phase 1

* Please submit proposals for review by **February 18, 2022**. 
* Initial design sketchups should be completed by the **mid-April 2022**
* Primary design will take place **April–June 2022**
* Refinements with the project team will take place **May–June 2022**
* Final delivery of v1.0 should be completed by **July 1, 2022**

#### To submit a proposal

Submit the following materials [using this form](https://airtable.com/shrjCyKyufR3tdtQV) by **February 18, 2022**.

* Project team
* Proposed tech stack
* Cost estimate
* Portfolio examples
* If available, client references

<a href="https://airtable.com/shrjCyKyufR3tdtQV" class="btn btn-primary-outline">Submit a proposal online</a>