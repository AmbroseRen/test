<style type="text/css">
#content {margin-left: 5%;}
#content table {width:1200px;}
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

# Playlet List [←](../index.md)

| [<font color="#ff0000">传送门</font>](../navigation.md#playlet) | 描述 | 摘要 |
|:---:|:---:|:---:|
| [短剧网](https://www.duanju2.com/) | O_O | Y |
| [影视村](http://www.yingshicun.com/) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |
