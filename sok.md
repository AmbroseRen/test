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

var idx = lunr(function () {
  this.field('title')
  this.field('body')

  this.add({
    "title": "Twelfth-Night",
    "body": "If music be the food of love, play on: Give me excess of it…",
    "author": "William Shakespeare",
    "id": "1"
  })
})

idx.search("love")
