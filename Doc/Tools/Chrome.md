# Google云端硬盘不能访问解决备忘

[参考](hosts.md)：修改C:\windows\system32\drivers\etc\hosts文件，最未尾加入

74.125.71.94 drive.google.com

# Config
## chrome://flags/
>Tab Hover Cards：Disabled

>Omnibox UI Reveal Steady-State URL Path, Query, and Ref On Hover:

# URL

Windows.Bookmarks.URL:C:\Users\DELL\AppData\Local\Google\Chrome\User Data\Default

Chrome.Extensions:C:\Users\DELL\AppData\Local\Google\Chrome\User Data\Default\Extensions

# Plugins

| Plugins | Description | Abstract |
|:---:|:---:|:---:|
| [总览](https://zhaoolee.com/ChromeAppHeroes/chrome_extended_resources_site.html)/[Chrome插件扩展网站](https://chrome.zzzmh.cn/index#ext)/[crx4chrome](https://www.crx4chrome.com/)/[chajian5](https://www.chajian5.com/tags)/[画夹](https://huajiakeji.com/) | [Chrome使用指南](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/chrome-tutorial.md) | X |
| [Chrome插件英雄榜](https://www.v2fy.com/p/readme-chromeappheroes/)/[源码](https://github.com/zhaoolee/ChromeAppHeroes) | [Chrome&MacOS](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/tools-tutorial.md#mac) | [在线工具](https://github.com/zhaoolee/OnlineToolsBook) |
| [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | onload any js for every websites | Y |
| [stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) | onload any css for every websites | X |
| [货币转换器 for Google Chrome™](https://chrome.google.com/webstore/detail/currency-converter/dkpedpjjafnceedhomeijlphmjbblmdj) | tools | X |
| [Similar sites](https://chrome.google.com/webstore/detail/similar-sites-discover-re/necpbmbhhdiplmfhmjicabdeighkndkn) | find similar websites | X |
| [keep](https://chrome.google.com/webstore/detail/google-keep-chrome-extens/lpcaedmchfhocbbapmcbpinfpgnhiddi) | notes | X |
| [Checker Plus for Gmail™](https://chrome.google.com/webstore/detail/checker-plus-for-gmail/oeopbcgkkoapgobdbedcemjljbihmemj) | gmail/[作者主页](https://jasonsavard.com/zh-CN/?ref=homepage_url&ext=calendar) | X |
| VPN | [GFW](https://zh.wikipedia.org/wiki/%E9%98%B2%E7%81%AB%E9%95%BF%E5%9F%8E) - [GFW White List](https://github.com/R0uter/gfw_domain_whitelist) - [gfwlist.txt](https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt)PAC文件/[主站](https://github.com/gfwlist/gfwlist) | 为过这堵墙，浪费我多少时间！- [GFW自白](https://dmesg.app/pixiv-gfw.html) |
| [Proxy SwitchyOmega](https://eliyar.biz/AutoProxy-By-Shadowsocks-and-SwitchyOmega/) | [自建SS](https://github.com/TwoWater/Python/blob/master/Res/%E8%87%AA%E5%B7%B1%E6%90%AD%E5%BB%BAss%3Assr%E6%9C%8D%E5%8A%A1%E5%99%A8.md) & [SSR](https://cangshui.net/1260.html) - [VPS之搬瓦工搭建](https://www.jiongjun.cc/banwagong/15.html) | [费劲](https://github.com/shadowsocks/shadowsocks-windows/issues/1007) - [GFW分析报告](https://sites.google.com/site/wsydcz/home/fx) - [被cn封锁网站列表(2020更新)](https://www.waiping.net/gfw-list/)/[Wiki](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E8%A2%AB%E5%B0%81%E9%94%81%E7%BD%91%E7%AB%99%E5%88%97%E8%A1%A8)/[审查列表](https://zh.unionpedia.org/i/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E8%A2%AB%E5%B0%81%E9%94%81%E7%BD%91%E7%AB%99%E5%88%97%E8%A1%A8) |
| [V2Ray指南](https://toutyrater.github.io/)/[来历](https://zh.wikipedia.org/wiki/V2Ray#:~:text=V2Ray%EF%BC%8C%E7%AE%80%E7%A7%B0V2%EF%BC%8C%E6%98%AF%E4%B8%80,%E4%BB%A5%E5%AF%B9%E6%AD%A4%E8%A1%A8%E7%A4%BA%E6%8A%97%E8%AE%AE%E3%80%82)/[geosite.dat for V2Ray](https://github.com/v2fly/domain-list-community) | 初代 | 代替[shadowsocks](https://github.com/shadowsocks/shadowsocks-windows) |
| 优质DNS |  | [国内外免费公共DNS](http://www.deadnine.com/anything/2018/0903/1411.html) - [参考](https://www.sordum.org/7952/dns-jumper-v2-2/) |
| [谷歌访问助手](https://chrome.zzzmh.cn/info?token=gocklaboggjfkolaknpbhddbaopcepfp) | 一代 | [Google Hosts](https://www.moerats.com/archives/114/) - [googlehosts](https://git.qvq.network/googlehosts/hosts/src/master/hosts-files/hosts) |
| [Windscribe](https://chrome.google.com/webstore/detail/windscribe-free-proxy-and/hnmpcagpplmpfojmgmnngilcnanddlhb) | 二代 | [插件介绍](https://blog.windscribe.com/new-browser-extensions-v3-73d518f0fad9) |
| [ZenMate Free VPN](https://chrome.google.com/webstore/detail/zenmate-free-vpn%E2%80%93best-vpn/fdcgdnkidjaadafnichfpabhfomcebme) | 二代 | X |
| [SetupVPN](https://chrome.google.com/webstore/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp) | 三代 | [PDF手册](https://files.catbox.moe/pacr7n.pdf) |
|  | 四代 | 最新技术(传播就被针对，自己找)
| []() |  | X |
| Github Plugins | Github优化体验插件 | X |
| [octotree](https://chrome.google.com/webstore/search/octotree?utm_source=chrome-ntp-icon) | 树目录视图插件 | X |
| [github file icons](https://chrome.google.com/webstore/search/github%20file%20icon?utm_source=chrome-ntp-icon) | 文件图标美化 | X |
| [gitzip for github](https://chrome.google.com/webstore/search/gitzip%20for%20github?utm_source=chrome-ntp-icon) | 分拆文件下载 | X |
| [Enhanced GitHub](https://chrome.google.com/webstore/detail/enhanced-github/anlikcnbgdeidpacdbdljnabclhahhmd?hl=en) | 分拆文件下载·未测 | X |
| [github加速](https://chrome.google.com/webstore/detail/github%E5%8A%A0%E9%80%9F/mfnkflidjnladnkldfonnaicljppahpg) | 文件下载加速器 | X |
| [GitHub Isometric Contributions](https://chrome.google.com/webstore/detail/github-isometric-contribu/mjoedlfflcchnleknnceiplgaeoegien) | 立体显示提交图 | X |
| [Sourcegraph](https://chrome.google.com/webstore/detail/sourcegraph/dgjhfomjieaadpoljlnidmbgkdffpack) | 将 github 变成 IDE | X |
| [GayHub](https://chrome.google.com/webstore/detail/gayhub/mdcffelghikdiafnfodjlgllenhlnejl)/[Refined GitHub](https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf)/[GitHub Hovercard](https://chrome.google.com/webstore/detail/github-hovercard/mmoahbbnojgkclgceahhakhnccimnplk) | github增强扩展 | X |
| []() |  | X |
| [LockPW](https://chrome.google.com/webstore/detail/lockpw/kjcloihghgncbdkaafgkckbokjnehfmo) | 浏览器锁 | X |
| [timer](https://chrome.google.com/webstore/detail/timer/hepmlgghomccjinhcnkkikjpgkjibglj)/[RescueTime](https://chrome.google.com/webstore/detail/rescuetime-for-chrome-and/bdakmnplckeopfghnlpocafcepegjeap) | 时间段管理▪访问网站时间数据视图统计 | X |
| [Gismeteo](https://chrome.google.com/webstore/detail/gismeteo/bfegaehidkkcfaikpaijcdahnpikhobf) | 优质天气 | X |
| [Adblock](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb) | AD屏蔽 | X |
| [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) | AD屏蔽 | X |
| [Avast Online Security](https://chrome.google.com/webstore/detail/avast-online-security/gomekmidlodglbbmalcneegieacbdmki) | 网络安全 | X |
| [Export to Markdown](https://github.com/madneal/export-to-markdown) | Medium export article | X |
| [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg) | 内存管理 | X |
| [Vimium C](https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/hfjbmagddngcpeloejdejnfgbamkjaeg) | 全键盘操作浏览器 - 提高每个网页50%浏览速度 |  |
| [Word Counter](https://chrome.google.com/webstore/detail/word-counter/adgmgllmfhgppfnkmgikgbaniemjdikk) | 字数统计(需选中右键可用) | X |
| [search2](https://chrome.google.com/webstore/detail/search2/godjlopkhiadfppdjhbekbppchinkmpi) | 多搜索引擎插件|  |
| [SEOquake](https://chrome.google.com/webstore/detail/seoquake/akdgnmcogleenhbclghghlkkdndkjdjc) | SEO | X |
| [二维码生成器 (Quick QR)](https://chrome.google.com/webstore/detail/qr-code-generator/afpbjjgbdimpioenaedcjgkaigggcdpp) |  | X |
| [官方文档](http://ksria.com/simpread/)/[源码](https://github.com/Kenshin/simpread) | 简阅·阅读器 | X |
| [Screenity](https://chrome.google.com/webstore/detail/screenity-screen-recorder/kbbdabhdfibnancpjfhlkhafgdilcnji)/[源码](https://github.com/alyssaxuu/screenity) | 录屏插件 | X |
| [awesome_Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj?hl=zh-CN) | 录屏截屏插件（未测） | X |
| [Lastpass](https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?hl=zh-CN) | 密码管理填充插件(执行斟酌使用) | X |
| [一叶](https://chrome.google.com/webstore/detail/same-page/bldcellajihanglphncgjmceklbibjkk) | 同网页弹幕化 | X |
| [Search to Play the Song](https://chrome.google.com/webstore/detail/search-to-play-the-song/anfmgjkkbagjfdejhbjdiapgkbhpigpm) - [离线安装包](https://raw.githubusercontent.com/zhaoolee/ChromeAppHeroes/master/backup/093-search-to-play-the-song.zip) | 聚合VIP音乐播放器 | X |
| [Listen1](https://chrome.google.com/webstore/detail/listen-1/indecfegkejajpaipjipfkkbedgaodbp/related) | 聚合VIP音乐播放器 | X |
| [Emoji](https://chrome.google.com/webstore/detail/emoji-keyboard-by-joypixe/ipdjnhgkpapgippgcgkfcbpdpcgifncb) | 表情库 | X |
| [oneTab](https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall) | 书签任务聚合 | X |
| [RSS Fead Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) | RSS订阅器 | X |
| [Feedly](https://feedly.com/) | RSS订阅器优化版 | X |
| [imageassistant](https://chrome.google.com/webstore/detail/imageassistant-batch-imag/dbjbempljhcmhlfpfacalomonjpalpko) | 图片批量下载器 | X |
| [鼠标点击特效](https://chrome.google.com/webstore/detail/mouse-click-effects-%E0%B9%91%E2%80%A2%CC%81-%E2%88%80/ljoolhajdkmjfneghpfiofogllcninii) |  | X |
| [Custom Cursor for Chrome™ ](https://chrome.google.com/webstore/detail/custom-cursor-for-chrome/ogdlpmhglpejoiomcodnpjnfgcpmgale) | 自定义光标 | X |
| [Google Results Previewer](https://chrome.google.com/webstore/detail/google-results-previewer/mkmjdljkedjpedbceoaaghdmcnipdcjf) | 谷歌结果预览 | X |
| [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)/[手册](https://www.v2fy.com/p/049_web_server_for_chrome/) | 局域网文件分享 | X |
| [Extension Manager](https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco) | 分组扩展管理器 | 权限太大，保留使用 |
| [一键管理扩展](https://chrome.google.com/webstore/detail/%E4%B8%80%E9%94%AE%E7%AE%A1%E7%90%86%E6%89%A9%E5%B1%95/lboblnfejcmcaplhnbkkfcienhlhpnni) | 随禁随启 | 权限太大，保留使用 |
| [MEGA](https://chrome.google.com/webstore/detail/mega/bigefpfhnfcobdlfbedofhhaibnlghod?hl=zh-CN)/[文档](https://www.v2fy.com/p/019_mega/) | 网盘 | [客户端·国内下](https://pan.baidu.com/s/1yaUTRHpfAnpFKgd55BPIHg ),提取码：mjx8 |
| []() |  | X |
| [Super Simple Highlighter](https://chrome.google.com/webstore/detail/super-simple-highlighter/hhlhjgianpocpoppaiihmlpgcoehlhio) | 网页标注高亮（关闭亦能恢复） | 淘汰 |
| [LINER - 网页 / PDF荧光笔](https://chrome.google.com/webstore/detail/1-web-pdf-highlighter-lin/bmhcbmnbenmcecpmpepghooflbehcack/related?hl=zh-CN)+[Evernote Web Clipper](https://chrome.google.com/webstore/detail/evernote-web-clipper/pioclpoplcdbaefihamjohnefbikjilc/related?hl=zh-CN) | 网页标注+剪切收藏 | 良好 |
| [Diigo Web Collector-捕获和注释](https://chrome.google.com/webstore/detail/diigo-web-collector-captu/pnhplgjpclknigjpccbcnmicgcieojbh/related?utm_source=chrome-ntp-icon) | 网页标注+注释 | 过于复杂 |
| [Chrome Better History](https://chrome.google.com/webstore/detail/view-chrome-history/oiginoblioefjckppeefcofmkkhgbdfc)/[Tools备份](http://rensi.ys168.com/)/[History Manager](https://chrome.google.com/webstore/detail/history-manager/ifekbbngjjcachfekcpeejphmkeckged?utm_source=chrome-ntp-icon)对比参考 | chrome历史记录浏览增强 | X |
| [Note Anywhere](https://chrome.google.com/webstore/detail/note-anywhere/bohahkiiknkelflnjjlipnaeapefmjbh/related?hl=zh-CN) | 网页便签 | X |
| [Free Download Manager](https://chrome.google.com/webstore/detail/free-download-manager/ahmpjcflkgiildlgicmcieglgoilbfdp?hl=en) | 多线程下载器 | X |
| []() |  | X |
| []() |  | X |
| 公众号编辑工具 |  | X |
| [壹伴](https://yiban.io/?utm=chajian) |  | X |
| [新媒体管家](https://chrome.google.com/webstore/detail/%E6%96%B0%E5%AA%92%E4%BD%93%E7%AE%A1%E5%AE%B6/jicmnjcngcnfhgfggbdhlbjpcbadimaj?utm_source=chrome-ntp-icon) | plus服务已停止2020.10.19 | X |
| []() |  | X |
| []() |  | X |
| [lucky](https://chrome.zzzmh.cn/info?token=ncldcbhpeplkfijdhnoepdgdnmjkckij) | 25 | X |

# Chrome插件开发

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [chrome-plugin-demo](https://github.com/sxei/chrome-plugin-demo) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |

[stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?utm_source=chrome-ntp-icon)/[样式](https://userstyles.org/styles/browse/github)

> google

>> https://userstyles.org/styles/123499/dishonored-google-theme

>> https://userstyles.org/styles/166972/animation-google

>> https://userstyles.org/styles/138645/broken-valentine-google-skin

>> https://userstyles.org/styles/114437/matrix-en-windows-10-google

>> 

> github
>> https://userstyles.org/styles/126131/github-dark-wide-transparent

>> https://userstyles.org/styles/120866/github-dark-blues-wide

>> https://userstyles.org/styles/168511/github-ice-dark-updated

>> 

> baidu

>> https://userstyles.org/styles/186353/baidu

>> https://userstyles.org/styles/185164/theme

>> 
