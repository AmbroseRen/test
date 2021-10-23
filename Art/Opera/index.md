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

# Oprea Lists  [←](../index.md)

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [听戏园](http://www.tingxiyuan.com/index.html) | 在线看 | [戏曲老电影](http://www.tingxiyuan.com/xiqulaodianying/) |
| [戏曲迷](http://www.xiqu.me/) | 介绍、下载 | Y |
| [戏曲在线](http://www.exiqu.com/) | 介绍、下载 | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |
