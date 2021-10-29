<style type="text/css">
#content {margin-left: 5%;}
</style>

<script src="../../js/JQuery/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" charset="utf-8">
  // Creating custom :external selector
  $.expr[':'].external = function(obj){
      return !obj.href.match(/^mailto\:/)
              && (obj.hostname != location.hostname);
  };    
  
  $(function(){
    // Add 'external' CSS class to all external links
    $('a:external').addClass('external');

    // turn target into target=_blank for elements w external class
    $(".external").attr('target','_blank');

  })
</script>

# Painting Lists  [←](../index.md)

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [google艺术与文化](https://artsandculture.google.com/entity/%2Fm%2F04lg6?hl=zh-CN) | O_O | Y |
| [wikiart](https://www.wikiart.org/zh/lie-ao-na-duo-da-fen-qi) | 维基-艺术 | Y |
| [油画图库](http://www.youhuaaa.com/page/painter/index.php) | O_O | Y |
| [视觉艺术百科全书](https://www.wikiart.org/zh/artists-by-art-movement) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |
