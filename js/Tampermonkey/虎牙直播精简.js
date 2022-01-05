// ==UserScript==
// @name                  虎牙直播精简
// @namespace         G-uang
// @author                 Guang
// @version               2021.08.21
// @description        提供简洁的界面，只为安心看直播。
// @match                *://www.huya.com/*
// ==/UserScript==
//---------------------------------------------------------------------部分用户可能遇到的问题-----------------------------------------------------------------------------------------------------------------------------
//1.登录帐号：所有的参数调节都是在已经登录帐号的前提下，登录帐号后在使用本脚本会更完美，且不登录帐号网站本身也会有功能限制。
//                    如需免登录切画质功能安装运行一次v2021.08.13版本，然后手动升级最新版本即可。
//2.网页抖动：如果左侧黑色导航栏是展开状态请手动将其缩小，刷新网页后脚本会自动将其隐藏，可解决部分人的网页抖动问题。
//                    如果已隐藏左侧导航栏网页依旧抖动，请轻微调节浏览器的缩放比例即可解决。
//3.关闭弹幕：网站没有弹幕开关状态的保存功能，所以之前写了自动关弹幕功能，但有人喜欢开弹幕，有人喜欢关弹幕，众口难调，故而遵循网站默认规则显示弹幕。
//                    如果你不想开弹幕，有个小技巧，在弹幕设置里把“不透明度”设置成0%即可。
//4.特效屏蔽：在右下角弹幕输入框上方官方提供了屏蔽礼物特效的功能，如想更简洁，请手动勾选，勾选一次即可永久记住选择，因官方已提供此功能所以本脚本并未添加此部分屏蔽代码。
//                    打开直播间偶尔会看到视频顶部显示一两条礼物特效信息是因为官方提供的屏蔽存在一定延迟。
//5.适用人群：本脚本的理念是极度简洁，尽量只显示直播与弹幕，只适合安心看直播的用户，并不适合喜欢做任务，抽奖，领礼物，刷礼物等用户，如果你感觉精简过度了，证明你的使用习惯不适合此脚本。
//                    使用此脚本后不存在任何特权用户，各种徽章，标牌，彩色弹幕，彩色背景等等展示特权的任何行为都被屏蔽，如果你本身就是特权用户，自然就不太适合此脚本。
//6.问题反馈：如遇问题，及时反馈，我尽快解决，但不要轻易否定脚本，此脚本上线两年，几万用户，足以说明在大多数用户那里完美稳定运行，且每次更新会测试到在我这里完美显示才上线。
//                    但我几乎只在英雄联盟板块进行测试，如果其他板块发现问题请反馈。大部分用户遇到的问题都是个别问题，并非整体问题，无论是什么原因导致的什么问题都可以反馈寻求帮助。
//                    脚本免费服务于大家的同时也希望大家共同参与一起完善脚本的每个细节，如果你觉得很好用，并没有任何问题需要反馈，或者你的问题已经得到解决，请收藏或好评。
//                    这可让更多用户发现它使用它，这也是我可以持续更新与优化它的唯一动力。
//7.自动更新：如果你更改过此脚本任何内容，设置里的自动更新可能失效，请重新开启，或定期手动检查更新。
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(function () {
   let css = '{display:none !important;height:0 !important}'
//全局
   css += '.special-bg,.diy-toutu{display:none !important;}';//直播页上方活动背景
   css += '.main-room{background-image:none !important;}';//直播页中间活动背景
   css += '#match-cms-content{display:none !important;}';//直播页下方活动背景
   css += '#J_roomGgTop{display:none !important;}';//顶部横条广告
   css += '.box-crumb{display:none !important;}';//顶部工具栏下方导航
   css += '.room-footer{display:none !important;}';//视频底部“主播动态”
   css += '.sidebar-hide{display:none !important;}';//左侧导航栏
   css += '.helperbar--cpOuG7OGer2wWrNst9OwG{display:none !important;}';//右侧工具栏
   css += '#main_col > div.room-backToTop.j_room-backToTop:last-child{display:none !important;}';//右下角返回顶部按钮
   css += '#chatRoom > div.room-gg-chat:last-child{display:none !important;}';//右侧悬浮广告
   css += '#player-resource-wrap{display:none !important;}';//视频全屏后右侧悬浮广告
   css += '.gameBaby--1TqB-2bKlvKiPqShbulxqk{display:none !important;}';//分区页右上角“赚取银豆”
   css += '.game--2LXZJ66LKQaXtXkfAn5l6_{display:none !important;}';//分区页右上角“赢取百万银豆”
//主页
   //css += '#banner{height: auto !important;}';//顶部播放器背景图
   css += '.ad-banner{display:none !important;}';//中间横幅广告
   //css += '.mod-index-recommend{background-image: none !important;}';//热门分类背景图
   //css += '.mod-index-recommend{background: url() !important;}';//热门分类半透明背景
//顶部工具栏
   css += '#J_tt_hd_category_ad{display:none !important;}';//顶部工具栏分类下拉栏内底部广告
   css += '#J_hyHdNavItemCloudGame{display:none !important;}';//顶部工具栏左侧"云游戏"
   css += '#J_hyHdNavItemGame{display:none !important;}';//顶部工具栏左侧"网游"
   css += '.duya-header-ad-img{display:none !important;}';//顶部工具栏中间“端午赛艇”
   css += '.duya-header-wrap{background: #00000015 !important;}';//顶部工具栏背景颜色
   css += '.hy-header-style-skr .duya-header-wrap{background:transparent !important;}';//主页的顶部工具栏透明
   css += '.duya-header-search input{background: #00000015 !important;}';//顶部工具栏中间“搜索框”背景颜色
   css += '#J_duyaHeaderRight > div.HeaderDynamic--3HooPjEhfERVcNlLZt1RkY.Logined--2q_uBGAzAihzeImbRx2Lwa > div.Nav--2HPhApT-QQWPnPIHoPgi7f:first-child > div.NavItem--1jr9x80QTPbnrDwqn834hF:last-child{display:none !important;}';//顶部工具栏右上角“任务”
   css += '#J_duyaHeaderRight > div.HeaderDynamic--3HooPjEhfERVcNlLZt1RkY.Logined--2q_uBGAzAihzeImbRx2Lwa > div.Nav--2HPhApT-QQWPnPIHoPgi7f:first-child > div.NavItem--1jr9x80QTPbnrDwqn834hF.NavDownload--14eln2LYTFMgF_MZOue4Gu:nth-child(2){display:none !important;}';//顶部工具栏右上角“下载”
   css += '#J_duyaHeaderRight > div.HeaderDynamic--3HooPjEhfERVcNlLZt1RkY.Logined--2q_uBGAzAihzeImbRx2Lwa > div.Nav--2HPhApT-QQWPnPIHoPgi7f:first-child > div.NavItem--1jr9x80QTPbnrDwqn834hF.NavKaiBo--3_pcnDZbeaycODmpgNFBtt:first-child{display:none !important;}';//顶部工具栏右上角“开播”
//视频上方标题栏
   css += '.host-pic{display:none !important;}';//主播头像
   css += '.open-souhu{display:none !important;}';//标题栏左侧“守护TA”
   css += '.tencent-identification{display:none !important;}';//标题栏左侧“腾讯认证”
   css += '.game--3vukE-yU-mjmYLSnLDfHYm img,.game--3vukE-yU-mjmYLSnLDfHYm span{display:none !important;}';//标题栏右侧广告
   css += '.jump-to-phone{display:none !important;}';//标题栏右侧“客户端看”
   css += '.room-hd{background: #00000015 !important;}';//标题栏背景颜色
   css += '.share-entrance,.illegal-report{background: #00000000 !important;}';//标题栏右侧“分享”“举报”背景颜色
//视频区
   css += '#player-recommend{display:none !important;}';//关播界面
   css += '.gift-info-btn{display:none !important;}';//视频全屏后右侧“展开礼物”
   css += '.gift-show-btn{display:none !important;}';//视频全屏后底部控制条右侧“礼物种豆”
   css += '.banner-ab-warp{display:none !important;}';//视频区左下角广告“火锅电竞”
   css += '#player-ctrl-wrap > div.player-app-qrcode:nth-child(4){display:none !important;}';//暂停上方二维码
   css += '#huya-ab > div.video-ab-warp{display:none !important;}';//主播手动播放的视频区左下角广告(声音未能屏蔽)
   css += '#videoContainer{height: 106%;width: 105% !important;}';//视频高度宽度调整（可让播放器控制条向下隐藏）
   css += '#hy-watermark{display:none !important;}';//视频区左下角“房间号水印”
   css += '.danmu-item{color:#D3D0C8 !important;}';//视频区弹幕颜色
//礼物栏
   //css += '#player-gift-wrap{background: #C8DCC8 !important;}';//视频底部礼物栏背景颜色
   css += '.player-gift-left{display:none !important;}';//视频底部礼物左
   css += '.week-star-0{display:none !important;}';//视频底部礼物周星榜
   css += '.player-face{display:none !important;}';//视频底部礼物中
   css += '.player-gift-right{display:none !important;}';//视频底部礼物右
   css += '.room-player-gift-placeholder{display:none !important;}';//视频底部礼物栏白色底衬
//右侧弹幕显示区
   css += '#wrap-income > iframe{display:none !important;}';//弹幕区顶部端午广告
   css += '#J_roomSideHd{display:none !important;}';//弹幕区顶部“公告”
   css += '#J_roomWeeklyRankList{display:none !important;}';//弹幕区顶部“周榜”
   css += '#J_communityContainer{display:none !important;}';//弹幕区右下角“虎扯”
   css += '#chatRoom{height:50% !important;}';//调整弹幕文字高度
   css += '#chatRoom > div{height:100% !important;}';//调整弹幕框体高度
   css += '.chat-room__wrap{background: #C8DCC8 !important;}';//弹幕显示区背景颜色
   css += '.diy-comp{display:none !important;}';//右侧弹幕区“扫码广告”
   css += '.lockBtn,.clearBtn{background: #C8DCC8 !important;}';//弹幕区右上角“锁屏清屏背景色”
   //css += '.room-sidebar,.room-core{background: #00000000 !important;}';//弹幕区整体白色底衬
   css += '.msg-noble{display:none !important;}';//续费消息
   css += '.inner{display:none !important;}';//弹幕区顶部悬停特权弹幕
   css += '.msg-sys{display:none !important;}';//弹幕区带盐团进场消息
   css += '.msg-onTVLottery{display:none !important;}';//弹幕区“上电视”等特殊弹幕
//右侧弹幕输入区
   css += '#J-room-chat-color{display:none !important;}';//弹幕输入框上方“彩色弹幕”
   css += '.entry--k4pVN0eWZG2KcjYy1__ug{display:none !important;}';//弹幕输入框上方“梗”
   css += '#chatHostPic{display:none !important;}';//弹幕输入框左侧“粉丝徽章”
   css += '.chat-room__input{margin-left: 0px !important;}';//弹幕输入框位置调整
   css += '.chat-room__ft,.ChatSpeaker--2lgjsxdm6dK5MZ-6kVGLtx textarea{background: #00000015 !important;}';//弹幕输入框背景颜色
   css += '.ChatSpeaker--2lgjsxdm6dK5MZ-6kVGLtx textarea{font-size: 15px !important;}';//弹幕输入框内字体大小
    //右下角弹幕输入区“发送按钮”的修改
   css += '.btn-sendMsg{top:-45px !important;}';//上下
   css += '.btn-sendMsg{right:35px !important;}';//左右
   css += '.btn-sendMsg{color: #999 !important;}';//字体颜色
   css += '.btn-sendMsg{background: #00000000 !important;}';//背景颜色
   css += '.ChatSpeaker--2lgjsxdm6dK5MZ-6kVGLtx textarea{width: 125% !important;}';//输入框加宽
//右侧弹幕区内弹幕内容元素
   css += '#chat-room__list > li.J_msg:first-child > p{display:none !important;}';//弹幕区顶部绿色系统提示消息
   css += '.msg-normal-decorationPrefix,.support-webp-1{display:none !important;}';//ID前“粉丝”徽章
   css += '.msg-normal-decorationSuffix img{display:none !important;}';//ID前“初体验”徽章
   css += '.msg-nobleSpeak-decorationSuffix img{display:none !important;}';//ID前“粉钻”徽章
   css += '.msg-nobleSpeak-decorationPrefix img{display:none !important;}';//ID前“爷+管”徽章
   css += '.box-noble-level-1,.box-noble-level-2,.box-noble-level-3,.box-noble-level-4,.box-noble-level-5{position: unset !important;}';//弹幕后缀“爵位”徽章
   css += '.box-noble-level-1,.box-noble-level-2,.box-noble-level-3,.box-noble-level-4,.box-noble-level-5{background-color: #00000000 !important;}';//爵士弹幕“彩色背景”
   css += '.msg-normal,.msg-nobleSpeak{font-size: 18px !important;}';//弹幕字体大小
   css += '.msg{color: #000000 !important;}';//彩色弹幕变黑色
   css += '.msg-normal{line-height: 25px !important;}';//弹幕行距
   css += '.name{font-size: 15px !important;}';//ID大小
   //css += '.name{display: block !important;}';//ID与弹幕分两行显示
   css += '.name{color: #888888 !important;}';//ID颜色
   css += '.name{max-width: 1em !important;}';//ID长度（设为0可隐藏ID）
   //css += '.colon{display:none !important;}';//隐藏弹幕前冒号
   css += '.msg-nobleSpeak{margin: 0 -3px !important;}';//特权弹幕与普通弹幕开头对齐
//订阅页
   css += '.list-hd .title{display:none !important;}';//订阅列表页左上“我的订阅”
   css += '.follow-ctrl{background: #fff0 !important;}';//订阅列表页右上“订阅管理”背景颜色
   css += '.subscribe-live-item{background: #00000015 !important;}';//订阅列表缩略图背景颜色
//为去掉网页全屏模式的视频区上下黑边而配合调整的区域
   css += '.room-hd{width: 105% !important;}';//标题区宽度
   css += '.room-sidebar{width: 80% !important;}';//弹幕区整体宽度
   css += '.room-core-r{right: -74px !important;}';//弹幕区整体位置左右移动（右边-74左边1710）
   css += '.chat-room__wrap{width: 80% !important;}';//弹幕文字宽度
   css += '.lockBtn{right: 130px !important;}';//弹幕区右上角“锁屏位置”
   css += '.clearBtn{right: 80px !important;}';//弹幕区右上角“清屏位置”
   css += '.player-fullpage-right-close{display:none !important;}';//隐藏弹幕区按钮
   css += '.Dashboard--1YOLiyN5b-OQbByGxmcC0g{width: 268px !important;}';//表情选择框宽度
   //css += '#videoContainer{left: 270px; !important;}';//视频区移动到右侧，配合左侧弹幕区

   loadStyle(css)
   function loadStyle(css) {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.appendChild(document.createTextNode(css))
      var head = document.getElementsByTagName('head')[0]
      head.appendChild(style);

   }
})();

//m开关弹幕
'use strict';
var selector = {
   "www.huya.com": {
      "on": "div[class='danmu-show-btn'][title='关闭弹幕']",
      "off": "div[class='danmu-show-btn danmu-hide-btn'][title='开启弹幕']"},};
var live_site = document.domain;
function danmaku_switcher(player) {
   if (document.querySelector(player.on) != null) {
      document.querySelector(player.on).click();}
   else if (document.querySelector(player.off) != null) {
      document.querySelector(player.off).click();}};
$(document).keypress(function(key) {
   if (key.which === 77 || key.which === 109) {
      danmaku_switcher(selector[live_site]);
   }
});

//自动切换最高画质
$(function() {
     var t1 = setInterval(function(){
          if($(".player-videotype-cur").html()!=$(".player-videotype-list li:first").html()){
               $(".player-videotype-list li:first").click();
          }else{
               clearInterval(t1);
          }
     },2000);
})

//自动网页全屏，自动关闭弹幕
var 网页全屏=document.getElementsByClassName('player-fullpage-btn');
//var 关闭弹幕=document.getElementsByClassName('danmu-btn-quan');
window.onload =(function() {
    'use strict';
      var 网页全屏_t=setInterval(function () {
         网页全屏[0].click();
         clearInterval(网页全屏_t );
                                   },3000);

          var 关闭弹幕_t=setInterval(function () {
         关闭弹幕[0].click();
         clearInterval(关闭弹幕_t );
                                   },5000);
  }
)();
