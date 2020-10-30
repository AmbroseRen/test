/* global instantsearch */

const search = instantsearch({
  appId: '45FAXPQVEG',
  apiKey: '7d0c43617ef2a76ef50343c43900245b',
  indexName: 'test_index',
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    autofocus: false,
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{{_highlightResult.name.value}}}</h1>
  <p>{{{_highlightResult.description.value}}}</p>
</article>
`,
    },
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attributeName: 'brand',
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
