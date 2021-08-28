// ==UserScript==
// @name                                    斗鱼直播精简
// @namespace                           G-uang
// @author            	                     Guang
// @version           	                     2021.08.24
// @description                           提供简洁的界面，只为安心看直播。
// @match            	                    *://www.douyu.com/*
// @run-at document-body
// ==/UserScript==
//---------------------------------------------------------------------部分用户可能遇到的问题-----------------------------------------------------------------------------------------------------------------------------
//1.登录帐号：所有的参数调节都是在已经登录帐号的前提下，登录帐号后在使用本脚本会更完美，且不登录帐号网站本身也会有功能限制。
//                    如需免登录切画质功能安装运行一次v2021.08.11版本，然后手动升级最新版本即可。
//2.网页抖动：如果左侧黑色导航栏是展开状态请手动将其缩小，刷新网页后脚本会自动将其隐藏，可解决部分人的网页抖动问题。
//                    如果已隐藏左侧导航栏网页依旧抖动，请轻微调节浏览器的缩放比例即可解决。
//3.关闭弹幕：网站没有弹幕开关状态的保存功能，所以之前写了自动关弹幕功能，但有人喜欢开弹幕，有人喜欢关弹幕，众口难调，故而遵循网站默认规则显示弹幕。
//                    如果你不想开弹幕，有个小技巧，在弹幕设置里把“不透明度”设置成0%即可。
//4.特效屏蔽：在右下角弹幕输入框上方官方提供了屏蔽礼物特效的功能，如想更简洁，请手动勾选，勾选一次即可永久记住选择，因官方已提供此功能所以本脚本并未添加此部分屏蔽代码。
//5.适用人群：本脚本的理念是极度简洁，尽量只显示直播与弹幕，只适合安心看直播的用户，并不适合喜欢做任务，抽奖，领礼物，刷礼物等用户，如果你感觉精简过度了，证明你的使用习惯不适合此脚本。
//                    使用此脚本后不存在任何特权用户，各种徽章，标牌，彩色弹幕，彩色背景等等展示特权的任何行为都被屏蔽，如果你本身就是特权用户，自然就不太适合此脚本。
//6.问题反馈：如遇问题，及时反馈，我尽快解决，但不要轻易否定脚本，此脚本上线两年，几万用户，足以说明在大多数用户那里完美稳定运行，且每次更新会测试到在我这里完美显示才上线。
//                    但我几乎只在英雄联盟板块进行测试，如果其他板块发现问题请反馈。大部分用户遇到的问题都是个别问题，并非整体问题，无论是什么原因导致的什么问题都可以反馈寻求帮助。
//                    脚本免费服务于大家的同时也希望大家共同参与一起完善脚本的每个细节，如果你觉得很好用，并没有任何问题需要反馈，或者你的问题已经得到解决，请收藏或好评。
//                    这可让更多用户发现它使用它，这也是我可以持续更新与优化它的唯一动力。
//7.自动更新：如果你更改过此脚本任何内容，设置里的自动更新可能失效，请重新开启，或定期手动检查更新。
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

(function() {
    var css = '{display:none !important;height:0 !important}';
//全局
   css += '.layout-Bottom{display:none !important;}';//视频底部“鱼吧/友邻”
   css += '.layout-Aside{display:none !important;}';//左侧导航栏
   css += '#js-room-activity{display:none !important;}';//右侧悬浮广告
//顶部工具栏
   css += '.Header-wrap{background: #00000015 !important}';//顶部工具栏背景颜色
   css += '.Header-download-wrap{display:none !important;}';//顶部工具栏右侧“客户端下载”
   css += '.Header-broadcast-wrap{display:none !important;}';//顶部工具栏右侧“开播”
   css += '#js-header > div > div > div.Header-left > div > ul > li:nth-child(5){display:none !important;}';//顶部工具栏左侧“游戏”
   css += '.DropPane-ad,.DropMenuList-ad{display:none !important}';//顶部工具栏“分类”“历史”“关注”菜单内底部广告
   css += '.Promotion-nobleRights{display:none !important;}';//顶部工具栏账户头像弹出菜单“开通贵族条幅”
   css += '.Task{display:none !important;}';//顶部工具栏账户头像弹出菜单“我的任务”
   css += '.HeaderNav{display:none !important;}';//顶部工具栏中间广告
   css += '.HeaderGif-left{display:none !important;}';//顶部工具栏左广告动画
   css += '.HeaderGif-right{display:none !important;}';//顶部工具栏右广告动画
   css += '.Search-ad{display:none !important;}';//顶部工具栏搜索框弹出菜单“底部广告”
   css += '.Search-hot{display:none !important;}';//顶部工具栏搜索框弹出菜单“中间热门搜索”
   css += '.Search-default{display:none !important;}';//顶部工具栏搜索框弹出菜单“顶部推荐搜索”
   css += '.CloudGameLink-text{display:none !important;}';//顶部工具栏右侧用户头像弹出菜单“顶部广告”
   css += '.Search{background-color: #00000015 !important;}';//顶部工具栏右侧"搜索框"背景颜色
   css += '.Header-menu-link > a,.public-DropMenu-link,.public-DropMenu-link ~ svg{color: #000000 !important;}';//顶部工具栏字体颜色
//视频上方标题栏
   css += '.Title-anchorPic{display:none !important;}';//主播头像
   css += '.Title-category{display:none !important;}';//标题栏第一排“直播间路径”
   css += '.Title-anchorHot{display:none !important;}';//标题栏第二排“福星得分”
   css += '.Title-official-wrap{display:none !important;}';//标题栏第二排“腾讯认证”
   css += '.Title-txAuthentication{display:none !important;}';//标题栏第二排“官方认证”
   css += '.Title-col.is-normal{display:block !important;}';//标题栏第二排“后半部分”
   css += '.Title-row:nth-child(3){display:none !important;}';//标题栏第三排
   css += '.Title{background: #00000015 !important;}';//标题栏背景颜色
   css += '.Title{padding: 28px 10px 0px 10px !important;}';//标题栏“标题位置调整”
//视频区
   css += '.layout-Player-video{bottom:0px !important}';//网页全屏时视频高度修正
   css += '.adPic_4kxGCX .adPicRoot_4kxGCX,.closeBtn_4kxGCX{display:none !important;}';//视频区左侧广告
   css += '.GuessGameMiniPanelB-wrapper.is-show{display:none !important;}';//视频区下方横幅“鱼丸预测”
   css += '.shark-webp .LiveRoomDianzan-thumb{display:none !important;}';//视频区右下角“点赞”
   css += '.RedEnvelopAd-content{display:none !important;}';//视频区右下角弹出读秒广告
   css += '.adPicRoot_4kxGCX{display:none !important;}';//视频区左侧“火锅电竞”
   css += '.PcDiversion{display:none !important;}';//视频区画面卡顿提示弹窗
   css += '.FirstRechargePayPanel{display:none !important;}';//视频区弹出“首充礼包”
   css += '.layout-Player-toolbar{visibility:hidden !important;}';//视频底部“礼物栏”
   css += '.ChargeTask-normalDiv{display:none !important;}';//视频区左侧“亲密互动”样式一
   css += '.ChargeTask-closeBg{display:none !important;}';//视频区左侧“亲密互动”样式二
   css += '.InteractPlayWithPendant{display:none !important;}';//视频区左下角广告“滴滴上车”
   css += '.XinghaiAd-card{display:none !important;}';////视频区左下角游戏广告“影与剑”
   css += '.watermark-442a18{display:none !important;}';//视频区左下角“房间号水印”
   css += '.LiveRoomLoopVideo-thumb{display:none !important;}';//视频区右下角“播单”
   css += '.DiamondsFansPromptPop{display:none !important;}';//视频区中间“钻石会员”弹窗
   css += '#RandomPKBar-container > div.RandomPKBar-panel{display:none !important;}';//一起看板块视频下方“PK横条”
   css += '#js-player-video > div.XinghaiAd:last-child > div.PicCard{display:none !important;}';//视频区左下角定时弹出的三秒展示“广告”
   css += '.FirstPurchasePanel{display:none !important;}';//视频区中间弹出“幸运大乐购”
   css += '.scroll-209d08{color: #E6E6E6 !important;}';//视频区弹幕颜色
   css += '.afterDiv-4a4e04,.afterpic-8a2e13,.aftertext-0862a5{display:none !important;}';//视频区弹幕“火”后缀图标
   css += '.headpic-dda332,.vipIcon-6d2668{display:none !important;}';//视频区弹幕“盛典”前缀图标
   css += '.wm-universal-pendant{display:none !important;}';//王者荣耀直播间视频区左上角“峡谷FUN肆玩”
//视频区未开播界面
   css += '#__h5player > div.recommendApp-0e23eb:nth-child(3){display:none !important;}';//未开播界面客户端推广二维码
   css += '#__h5player > div.recommendView-3e8b62:first-child > div:last-child > div.recommendView-1c2131{display:none !important;}';//未开播界面视频与其他主播推荐
   css += '#__h5player > div.recommendView-3e8b62:first-child > div:first-child > div{display:none !important;}';//未开播界面最后一帧模糊背景
   css += '.RecommendADClose-a0b35a,.ad-corner-3d7692,.recommendADdev-2f3a5a{display:none !important;}';//未开播界面左下角广告
//右侧弹幕显示区
   css += '.layout-Player-announce{background-color: #00000015 !important;}';//弹幕区顶部“主播投稿”“直播回看”背景颜色
   css += '.VideoEntry-icon-anchor,.VideoEntry-icon-replay,.VideoEntry-icon-match{display:none !important;}';//弹幕区顶部“主播投稿”“直播回看”"赛事录像"前图标
   css += '.layout-Player-rank{display:none !important}';//弹幕区顶部“周榜”
   css += '.layout-Player-barrage{top:39px !important;}';//弹幕区高度修正
   css += '.layout-Player-barrage{background: #C8DCC8 !important;}';//弹幕区背景颜色
   css += '.SignBaseComponent-sign-ad,.BarrageSuspendedBallAd-chat-ad-cls{display:none !important}';//弹幕区悬浮广告
   css += '.layout-Player-effect,.FollowGuide-FadeIn{display:none !important;}';//弹幕区右下角倒计时宝箱，底部弹出“关注提示”
   css += '.SysSign-Ad{display:none !important;}';//弹幕区右下角弹出广告
   css += '.FirePowerChatModal-Notice{display:none !important;}';//弹幕区火力全开弹窗
   css += '.Barrage-toolbarClear,.Barrage-toolbarLock{background: #C8DCC8 !important;}';//弹幕区右上角“锁屏清屏”背景颜色
   css += '.YBCommunity-iconBox{display:none !important;}';//弹幕区“斗嘴”
//右侧弹幕输入区
   css += '.ChatNobleBarrage{display:none !important;}';//弹幕输入框上方“贵族弹幕”
   css += '.ChatFansBarrage{display:none !important;}';//弹幕输入框上方“粉丝弹幕”
   css += '.Horn4Category{display:none !important;}';//弹幕输入框上方“分区喇叭”
   css += '.FansMedalPanel-enter{display:none !important;}';//弹幕输入框左侧“粉丝徽章”
   css += '.FansMedalPanel-container{display:none !important;}';//弹幕输入框左侧“粉丝徽章框体”
   css += '.MatchSystemMedalPanel-enter{display:none !important;}';//<英雄联盟赛事直播间>弹幕输入框左侧“粉丝徽章”
   css += '.MatchSystemMedalPanel-container{display:none !important;}';//<英雄联盟赛事直播间>弹幕输入框左侧“粉丝徽章框体”
   css += '.ChatSend-txt{padding: 5px 13px 5px 5px !important;}';//弹幕输入框位置调整
   css += '.ChatSend-txt{width: 258px !important;}';//弹幕输入框宽度调整
   css += '.ChatSend-txt,.Chat{background: #00000015 !important;}';//弹幕输入框背景颜色
   css += '.ShieldTool-checkText{color: #888 !important;}';//弹幕输入框“屏蔽特效”文字颜色
   css += '.ChatSend-txt{font-size: 15px !important;}';//弹幕输入框内字体大小
   css += '.ChatSend-txt{border: 1px solid #00000025 !important;}';//弹幕输入框边框
    //收藏的弹幕
   css += '.ChatBarrageCollect-tip{background: #00000000 !important;}';//弹幕输入框“收藏的弹幕”背景色
   css += '.ChatBarrageCollect-tip{color: #888888 !important;}';//弹幕输入框“收藏的弹幕”文字颜色
   css += '.ChatBarrageCollect-tip{right: 80px !important;}';//弹幕输入框“收藏的弹幕”左右移动
   css += '.ChatBarrageCollect-tip{bottom: 65px !important;}';//弹幕输入框“收藏的弹幕”上下移动
    //右下角弹幕输入区“发送按钮”的修改
   css += '.ChatSend-button{color: #888888 !important;}';//发送按钮字体颜色
   css += '.ChatSend-button{background: #00000025 !important;}';//发送按钮背景颜色
   css += '.ChatSend-button{width: 39px !important;}';//发送按钮左右移动
//右侧弹幕区内弹幕内容元素
   css += '.UserLevel{display:none !important;}';//ID前“用户等级”徽章
   css += '.Medal-image{display:none !important;}';//ID前“金鲨鱼”徽章
   css += '.Barrage-honor{display:none !important;}';//ID前“贡献日榜”徽章
   css += '.MRight-icon{display:none !important;}';//ID前“意中人”徽章
   css += '.Barrage-icon{display:none !important;}';// ID前“贵族”徽章
   css += '.FansMedal{display:none !important;}';//ID前“粉丝”徽章
   css += '.Motor{display:none !important;}';//ID前“单字”徽章
   css += '.ChatAchievement-image{display:none !important;}';//ID前“鱼塘海王”徽章
   css += '.MatchSystemTeamMedal{display:none !important;}';//ID前“比赛队伍”徽章
   css += '.FirePowerIcon{display:none !important;}';//火力全开弹幕后缀“火”徽章
   css += '.Barrage-roomVipIcon{display:none !important;}';//弹幕后缀“黄色心型”徽章
   css += '.Barrage-nickName{color: #888 !important;}';//ID颜色
   css += '.Barrage-nickName{font-size: 15px !important;}';//ID大小
   css += '.Barrage-content{display: block !important;}';//ID与弹幕分两行显示
   //css += '.Barrage-nickName{display:none !important;}';//隐藏ID
   css += '.Barrage-listItem{font-size: 18px !important;}';//弹幕大小
   css += '.Barrage-listItem{line-height: 20px !important;}';//弹幕行距
   css += '.Barrage-notice{display:none !important;}';//系统消息“主播开播提示”（可能会屏蔽所有系统消息，比如禁言消息）
   css += '.Barrage-topFloaterList{display:none !important;}';//弹幕区特权弹幕顶部悬停
   css += '.Barrage-roomVip--super,.Barrage-notice--noble{background-color: #00000000 !important;}';//背景黄色和橙色弹幕背景色
   css += '.Barrage-roomVip--super,.Barrage-notice--noble{border-top: 0px !important;}';//背景黄色和橙色弹幕上边框
   css += '.Barrage-roomVip--super,.Barrage-notice--noble{border-bottom: 0px !important;}';//背景黄色和橙色弹幕下边框
   css += '.Barrage--paddedBarrage,.Barrage-roomVip--super,.Barrage-notice--noble{padding: 0px 10px !important;}';//特权弹幕底衬高度
   css += '.Barrage-content{color: #000000 !important;}';//普通弹幕变黑色
   css += 'body .Barrage-content--color0, body .Barrage-content--color1, body .Barrage-content--color2, body .Barrage-content--color3, body .Barrage-content--color4, body .Barrage-content--color5 {color: #000000 !important;}';//;彩色弹幕显示为黑色
//关注页
   css += '.layout-Banner-item{display:none !important;}';//关注列表页上方两条横幅广告
   css += '.layout-Module-extra{display:none !important;}';//关注列表页右上“主播视频/免费领取”
   css += '.ScrollTabFrame-title.active-tab{display:none !important;}';//关注列表页左上“我的关注”
   css += '.is-fixed{display:none !important;}';//关注页下拉后“顶部弹出工具栏”
   css += '.DyLiveCover-content,.DyLiveRecord-content{background-color: #c8dcc8a8 !important;}';//关注列表缩略图背景颜色
   css += '.layout-Module-label{background-color: #00000015 !important;}';//关注列表顶部分类群组背景色
   css += '.AthenaBoothPanel-wrapper{background-color: #00000015 !important;}';//关注列表页右上角“可能感兴趣”背景色
   css += '.layout-Cover-card,.AthenaBoothPanel-item{background: #00000000 !important;}';//关注列表页右上角“可能感兴趣”底衬颜色
//已知问题
//修改视频区弹幕颜色导致回放视频的直播间历史弹幕至灰功能失效。

   loadStyle(css)
   function loadStyle(css) {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.appendChild(document.createTextNode(css));
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(style);

   }
})();

//自动切换最高画质，自动网页全屏
(function() {
    'use strict';
    let intID1 = setInterval(() => {
                if (document.getElementsByClassName("wfs-2a8e83").length > 0) {
                    clearInterval(intID1);
                    document.querySelector('div.wfs-2a8e83').click();//自动网页全屏
	                document.querySelectorAll(".tip-e3420a > ul > li")[0].click();//自动切换最高画质
                }
            }, 1000);

})();
