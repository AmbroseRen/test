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

# Fodder Lists  [←](../index.md)

| [传送门](../../navigation.md#fodder) | 描述 | 摘要 |
|:---:|:---:|:---:|
| [优设导航](https://hao.uisdc.com/)/[PS](../../Doc/Web/Photoshop.md) | 素材站导航 | [Seeseed](https://www.seeseed.com/)/[创造狮](http://chuangzaoshi.com/index) |
| [smartresize](https://www.smartresize.com/) | 线上图片剪裁工具 | Y |
| [bigbigwork](https://www.bigbigwork.com/) | 素材设计网站 | Y |
| [优品PPT](http://www.ypppt.com/) | PPT设计网站 | Y |
| [站长素材-JQuery素材](http://sc.chinaz.com/tag_jiaoben/tupianlunbo.html) |  | Y |
| [JQuery素材](https://www.jq22.com/) |  | Y |
| []() |  | Y |
| 在线设计网站 | [设计软件库](https://www.fxxkmakeding.xyz/) | Y |
| [yeelogo](http://yeelogo.com/#/) | LOGO设计 | Y |
| [秀米](https://xiumi.us/#/) | 图文排版 | Y |
| [创客帖](https://www.chuangkit.com/designtools/startdesign) | 海报设计 | Y |
| [图片背景消除](https://www.remove.bg/zh) |  | Y |
| [GIF剪裁](https://www.tutieshi.com/cut/) |  | Y |
| []() |  | Y |
| []() |  | Y |
| 图片设计素材网站 |  | Y |
| [千图网](https://www.58pic.com/) |  | Y |
| [千库网](https://588ku.com/) |  | Y |
| [pexels](https://www.pexels.com/) | 图库 | Y |
| [花瓣网](https://huaban.com/) | 优质 | Y |
| [100font](https://www.100font.com/) | 字体设计 | Y |
| []() |  | Y |
| []() |  | Y |
| [icon](icon.md) | favicon.icon | Y |
| [LOGO](LOGO.md) | LOGO设计 | Y |
| [3D Model](3D_model.md) | 3D 模型素材 | Y |
| []() |  | Y |
| []() |  | Y |
| lucy | 25 | X |
