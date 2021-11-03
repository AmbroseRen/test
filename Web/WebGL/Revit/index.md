<script src="../../../js/JQuery/jquery.min.js" type="text/javascript"></script>
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

# Revit API  [←](../index.md)

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [Revit文档](http://help.autodesk.com/view/RVT/2016/CHS/) | O_O | Y |
| [Revit API](https://www.revitapidocs.com/2017/a5b90c0c-2aca-f98a-5e18-1f2abc34135e.htm) | O_O | Y |
| [revit模型转3D3S模型工具](http://www.civilcn.com/jiegou/3D3S/1306890368126950.html) | O_O | Y |
| [Autodesk View and Data API二次开发学习指南](https://www.cnblogs.com/junqilian/p/4377704.html) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |
