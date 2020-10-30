// 1. Instantiate the search
const search = instantsearch({
  indexName: 'instant_search',
  searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
});

search.addWidgets([
  // 2. Create an interactive search box
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for products',
  }),

  // 3. Plug the search results into the product container
  instantsearch.widgets.hits({
    container: '#products',
    templates: {
      item: '{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}',
    },
  }),

  // 4. Make the brands refinable
  instantsearch.widgets.refinementList({
    container: '#brand',
    attribute: 'brand',
  }),
]);

// 5. Start the search!
search.start();
