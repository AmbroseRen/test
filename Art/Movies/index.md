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

# Movies Website [←](../index.md)

| [传送门](../../navigation.md#sp) | 描述 | 摘要 |
|:---:|:---:|:---:|
| __Navication__ | 导航 | Y |
| [电影网站导航·一](http://www.ziyuangou.com/tag/zaixiandianying/) | O_O | Y |
| [电影网站导航·二](http://www.staycu.com/archives/237) | O_O | Y |
| __website__ | 网站 | Y |
| [mvcat](http://www.mvcat.com) | O_O | Y |
| [片库](https://www.pianku.me/tv/wNiNWarFDM.html) | O_O | Y |
| [新视觉影院](https://www.ixinshijue.com/) | O_O | Y |
| [草民电影院](https://www.cmdy2020.com/kongbupian.html) | O_O | Y |
| __[KB](http://www.5kb000.com/)[片](http://wap.5kb000.com/)__ | 限制级 | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| __IMDB__ | 评分 | Y |
| [IMDb](https://www.imdb.com/) | 影评·导航 | Y |
| __Tools__ | 工具 | Y |
| [potplayer](https://potplayer.daum.net/?lang=zh_CN) | 高渲染播放器 | Y |
| [videolan](https://www.videolan.org/index.zh.html) | 播放器 | Y |
| [XBMC](https://kodi.tv/download/) | 播放器 | Y |
| [kmplayer](https://www.kmplayer.com/home) | 跨平台播放器 | Y |
| [gomlab](https://www.gomlab.com/download/) | 产品群 | Y |
| lucy | 25 | X |

> [电影-知乎](https://zhuanlan.zhihu.com/p/34028598)
