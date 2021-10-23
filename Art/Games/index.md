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

# Games Lists  [←](../index.md)

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [qq游戏导航](https://game.qzone.qq.com/?from=gameapp) | O_O | [新游戏放号](https://igame.qq.com/games/grantaccount.php) |
| [ratel](https://github.com/ainilili/ratel) | pkp | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| smallGame | 小游戏 | Y |
| [4399](http://www.4399.com/) | O_O | Y |
| [7k7k](http://www.7k7k.com/) | O_O | Y |
| [17yy](http://www.17yy.com/) | O_O | Y |
| [2345](https://xiaoyouxi.2345.com/) | O_O | Y |
| [hao123](http://xyx.hao123.com/) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |
