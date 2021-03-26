---
title: Publications
backgroundImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:ms35v1452/1914,1360,2509,1346/,800/0/default.jpg
cardImage: https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:ms35v1452/1914,1360,2509,1346/,300/0/default.jpg
description: Exhibition catalogs and other texts that have been published by the Center
weight: "2"
aliases:
- "/about/publications"

---
### America Transformed

During the 19th century, the United States expanded dramatically westward. Immigrant settlers rapidly spread across the continent and transformed it, often through violent or deceptive means, from ancestral Native lands and borderlands teeming with diverse communities to landscapes that fueled the rise of industrialized cities. Historical maps, images and related objects tell the story of the sweeping changes made to the physical, cultural, and political landscape. Moving beyond the mythologized American frontier, this map exhibition explores the complexity of factors that shaped our country over the century.

![Catalog cover for America Transformed](https://www.leventhalmap.org/wp-content/uploads/2020/01/at-cover.jpg)

<div id="smart-button-container"> <div style="text-align: center;"> <div style="margin-bottom: 1.25rem;"> <p>America Transformed Exhibition Catalog</p> <select id="item-options"><option value="Hard Cover Catalog" price="40.00">Hard Cover Catalog - 40.00 USD</option><option value="Soft Cover Catalog" price="30.00">Soft Cover Catalog - 30.00 USD</option></select> <select style="visibility: hidden" id="quantitySelect"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select> </div> <div id="paypal-button-container"></div> </div> </div> <script src="[https://www.paypal.com/sdk/js?client-id=sb&currency=USD](https://www.paypal.com/sdk/js?client-id=sb&currency=USD "Buy a catalog here.")" data-sdk-integration-source="button-factory"></script> <script> function initPayPalButton() { var shipping = 9.00; var itemOptions = document.querySelector("#smart-button-container #item-options"); var quantity = parseInt(3); var quantitySelect = document.querySelector("#smart-button-container #quantitySelect"); if (!isNaN(quantity)) { quantitySelect.style.visibility = "visible"; } var orderDescription = 'America Transformed Exhibition Catalog'; if(orderDescription === '') { orderDescription = 'Item'; } paypal.Buttons({ style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'buynow', }, createOrder: function(data, actions) { var selectedItemDescription = itemOptions.options\[itemOptions.selectedIndex\].value; var selectedItemPrice = parseFloat(itemOptions.options\[itemOptions.selectedIndex\].getAttribute("price")); var tax = (6.25 === 0) ? 0 : (selectedItemPrice * (parseFloat(6.25)/100)); if(quantitySelect.options.length > 0) { quantity = parseInt(quantitySelect.options\[quantitySelect.selectedIndex\].value); } else { quantity = 1; } tax *= quantity; tax = Math.round(tax * 100) / 100; var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax; priceTotal = Math.round(priceTotal * 100) / 100; var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100; return actions.order.create({ purchase_units: \[{ description: orderDescription, amount: { currency_code: 'USD', value: priceTotal, breakdown: { item_total: { currency_code: 'USD', value: itemTotalValue, }, shipping: { currency_code: 'USD', value: shipping, }, tax_total: { currency_code: 'USD', value: tax, } } }, items: \[{ name: selectedItemDescription, unit_amount: { currency_code: 'USD', value: selectedItemPrice, }, quantity: quantity }\] }\] }); }, onApprove: function(data, actions) { return actions.order.capture().then(function(details) { alert('Transaction completed by ' + details.payer.name.given_name + '!'); }); }, onError: function(err) { console.log(err); }, }).render('#paypal-button-container'); } initPayPalButton(); </script>

### We Are One

We Are One maps the American road to independence. It explores the tumultuous events that led thirteen colonies to join to forge a new nation. The exhibition takes its title from Benjamin Franklin’s early design for a note of American currency containing the phrase “We Are One.” This presaged the words “E Pluribus Unum” found on the seal of the United States (adopted in 1782) and on all U.S. coins.

Catalog, 50pp. (2015). [Browse the LMEC copy](https://bpl.bibliocommons.com/v2/record/S75C7585128) or [find it in your own library](http://www.worldcat.org/oclc/918876662).

![Catalog cover for We Are One](https://www.leventhalmap.org/wp-content/uploads/2017/03/we_are_one_sm.jpg)

### Torn In Two

Torn in Two: 150th Anniversary of the Civil War, the fourth gallery exhibition of the Norman B. Leventhal Map Center at the Boston Public Library, commemorates one of the major events in America’s history.

Catalog, 152pp. (2011). [Browse the LMEC copy](https://bpl.bibliocommons.com/v2/record/S75C1714992) or [find in your own library](http://www.worldcat.org/oclc/726743324).![Catalog cover for Torn in Two](https://www.leventhalmap.org/wp-content/uploads/2017/03/torn_in_two_sm.jpg)

### Mapping Boston

To the attentive user even the simplest map can reveal not only where things are but how people perceive and imagine the spaces they occupy. Mapping Boston is an exemplar of such creative attentiveness–bringing the history of one of America’s oldest and most beautiful cities alive through the maps that have depicted it over the centuries.

Alex Krieger, David Cobb, eds., with Amy Turner; foreword by Norman B. Leventhal. 292pp. (MIT Press: 1999). [Purchase from MIT Press](https://mitpress.mit.edu/books/mapping-boston), [browse the LMEC copy](https://bpl.bibliocommons.com/v2/record/S75C5157593), or [find in your own library](http://www.worldcat.org/oclc/316379126).

![Catalog cover for Mapping Boston](https://www.leventhalmap.org/wp-content/uploads/2017/03/mapping_boston_sm.jpg)

### Journeys of the Imagination

Journeys of the Imagination is an exhibition designed to explore the various ways that mapmakers from the 15th century until today have created and translated their real and imagined world views. They recorded these diverse and ever changing images on various media including paper, globes, and computer screens.

Catalog, 115pp. (2006). [Browse the LMEC copy](https://bpl.bibliocommons.com/v2/record/S75C1087094), [borrow from Internet Archive](https://archive.org/details/journeysofimagin00grim/), or [find in your own library](https://www.worldcat.org/oclc/1035924035).

![Catalog cover for Journeys of the Imagination](https://www.leventhalmap.org/wp-content/uploads/2017/03/journeys_sm.jpg)

### Boston and Beyond

Boston and Beyond, the third gallery exhibit of the Norman B. Leventhal Map Center at the Boston Public Library, marks the public debut of one of the world’s pre-eminent collections of urban bird’s eye views and celebrates its preservation through a Save America’s Treasures award.

Catalog, 167pp. (2008). [Browse the LMEC copy](https://bpl.bibliocommons.com/v2/record/S75C1328673), or [find in your own library](http://www.worldcat.org/oclc/225862926).

![Catalog cover for Boston and Beyond](https://www.leventhalmap.org/wp-content/uploads/2017/03/boston_beyond_sm.jpg)