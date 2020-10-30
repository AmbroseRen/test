// 1. Instantiate the search
const search = instantsearch({
  indexName: 'test_de',
  searchClient: algoliasearch('45FAXPQVEG', '7d0c43617ef2a76ef50343c43900245b'),
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
