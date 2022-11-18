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

# VPN Guide

由简单到复杂依次为：[插件端](#插件版安装)(轻量、只浏览器代理)、[桌面端](#桌面端)(全局代理)、[手机端](#手机端)

## 插件版安装

1.安装[Chrome](https://wwe.lanzoui.com/iVrShp58wbg)即谷歌浏览器(如已安装请忽略)

2.下载[iGuGe](https://wwe.lanzoui.com/i8IVCwd7tja)插件，记住文件位置

3.Chrome浏览器地址栏输入：`chrome://extensions/`

4.将刚下载的.crx的文件选中，拖入3打开的浏览器界面，确认安装

5.按![如图](https://cdn.jsdelivr.net/gh/AmbroseRen/Picture@master/img/default/01.jpg)打开此插件

注：默认是免费版本(只能访问Google服务)，付费3个月(15/月)达到3级会员，可开通手机版功能

6.按其注册流程完成注册(注意使用海外邮箱，验证码可能会在垃圾箱),付费完成，选择线路测试(打开海外网站，切换线路并刷新网页测试线路速度，
依据个人地理位置选择线路)

扩展：[Chrome其他生态插件](https://ambroseren.github.io/test/Doc/Tools/Chrome.html)

## 桌面端

1.下载[Clash](https://github.com/Fndroid/clash_for_windows_pkg/releases/download/0.18.4/Clash.for.Windows.Setup.0.18.4.exe)软件([软件介绍](https://docs.cfw.lbyczf.com/contents/quickstart.html))

[Windows端▪使用手册](https://igghelper.com/helper/?p=413) - [一链](https://docs.cfw.lbyczf.com/contents/ui/profiles/rules.html)

注：电脑端填入URL时，订阅地址可能被墙了而下载失败。解决：打开插件过墙，访问订阅地址，复制加载的全部内容存入新建的`igg.yaml`文件中，如图手动导入加载

![手动加载](https://cdn.jsdelivr.net/gh/AmbroseRen/Picture@master/img/default/05.jpg)

## 手机端

1.下载[Clash for Android APK](https://github.com/Kr328/ClashForAndroid/releases/download/v2.4.14/cfa-2.4.14-foss-arm64-v8a-release.apk)

2.依次点击：配置→新配置→从URL导入→(名称：igg，URL：依次点击![一](https://cdn.jsdelivr.net/gh/AmbroseRen/Picture@master/img/default/02.jpg)，![二](https://cdn.jsdelivr.net/gh/AmbroseRen/Picture@master/img/default/03.jpg)，![三](https://cdn.jsdelivr.net/gh/AmbroseRen/Picture@master/img/default/04.jpg))获取`订阅地址`，传输到手机`剪切板`上，放入此处,点击右上角保存

3.返回主界面：点击`启动`(会自动选择节点线路；点击`代理`可修改线路节点)

## 备用供应商

[glados](https://glados.rocks/)



