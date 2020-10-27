<div class="container">
	<div class="columns">
		<div class="column col-6">
		<form class="searchform" action="/sok" method="get">
		<input type="text" class="form-input searchfield" placeholder="Sök album, musiker, skivbolag, taggar..." autofocus>
		<input type="submit" class="invisible">
		</form>
		</div>
		<div class="column col-6">
			<p class="searchcount"></p>
		</div>
	</div>
</div>

<script src="js/search-script.js" type="text/javascript"></script>
<script>
{% raw %}
window.store = [
	 {
		"title": "post.title",
		"artist": "",
		"link": "",
		"label": "",
		"image": "",
		"date": "",
		"excerpt": ""
	},
    {
      "title"    : "timeTrack",
      "url"      : "Data/MD/2020/09/200915.html",
      "category" : "{{post.categories | join: ', '}}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "date"     : "{{ timeTrack }}",
      "discription" : "{{timeTrack }}"
    }		
	
	
]
{% endraw %}
	
const searchform = document.querySelector('.searchform')
const searchfield = document.querySelector('.searchfield')
const resultdiv = document.querySelector('.searchcontainer')
const searchcount = document.querySelector('.searchcount')

const getTerm = function() {
  searchfield.addEventListener('keyup', function(event) {
    event.preventDefault()
    const query = this.value    
    doSearch(query)
  })
}

const doSearch = query => {
  const result = index.search(query)
  resultdiv.innerHTML = ''
  searchcount.innerHTML = 'Found ${result.length} records'
  updateUrlParameter(query)
  showResults(result)

}

const showResults = (result) => {

    for (let item of result) {
      const ref = item.ref
      const searchitem = document.createElement('div')
      searchitem.className = 'searchitem'
	  searchitem.innerHTML = "
	  <div class="card">
	   <a class="card-link" href="${window.store[ref].link}">
		<div class="card-image">
		 <div class="loading">
		  <img class="b-lazy img-responsive" src="${window.store[ref].image}" data-src="${window.store[ref].image}" alt="${window.store[ref].title}" />
		 </div>
		</div>
		<div class="card-header">
		 <h4 class="card-title">${window.store[ref].artist} - ${window.store[ref].title}</h4>
		 <h6 class="card-meta">${window.store[ref].label}</h6>
		</div></a>
	  </div>"      

      resultdiv.appendChild(searchitem)

      setTimeout(() => {
        bLazy.revalidate()
      }, 300)
}
	
let index = lunr(function() {
  this.ref('id')
  this.field('title', {boost: 10})
  this.field('artist')
  this.field('link')
  this.field('image')
  this.field('content')
  this.field('label')
  this.field('tags')
})

for (let key in window.store) {
  index.add({
    'id': key,
    'title': window.store[key].title,
    'artist': window.store[key].artist,
    'link': window.store[key].link,
    'image': window.store[key].image,
    'content': window.store[key].content,
    'label': window.store[key].label,
    'tags': window.store[key].tags,
  })
}
</script>

