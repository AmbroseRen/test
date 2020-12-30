<!-- Html Elements for Search -->
<div id="search-container">
  
<input type="text" id="search-input" placeholder="search...">

<ul id="results-container"></ul>

</div>

[←](index.md)

<!-- Script pointing to search-script.js -->
<script src="js/search-script.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
  
SimpleJekyllSearch({

  searchInput: document.getElementById('search-input'),
  
  resultsContainer: document.getElementById('results-container'),
  
  json: 'search.json'
  
})

</script>

Build Date:  2020-10-28 17:15:07 +0000
