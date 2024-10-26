<style type="text/css">
#content {margin-left: -50px;}
#content table {width:1450px;}

 .main-content table td {
   border: 1px solid #d14;
}
 
#sq {
  //background-color: orange; 
}
  
#content table tbody tr {
      //background-color: var(--background-primary);
        background-color: #e6e6e6;
}

#content table tbody tr:nth-child(even) {
      background-color: var(--background-secondary);
}
</style>

<script src="js/JQuery/jquery.min.js" type="text/javascript"></script>
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

# 快速拨号页  [←](https://ambroseren.github.io/test/indexes.html)  [S](search.md)    &emsp;&emsp;&emsp;&emsp;&emsp;<b><font color="#00ffff" face="楷体">作为写手,保持思考</font></b>

| __[Reader](Library/BookListsOne.md)/[BS](Library/BookSearch.md)/[N](Library/Novel.md)/[公告栏](https://ambroseren.github.io/test/sag3.html)__ | __[日常](https://ambroseren.github.io/test/navigation.html#sp)/[D](Data/DataRank.md)/[T](Data/TorrentKitty.md)/[N](Library/synthesize.md)/[A](Art/index.md)/[AI](Data/AI/index.md)/~~[S](https://shouku123.com/rensi)~~__ | [__网络公开课__](Library/LearnPlatform.md) | __算法社区__ |
|:---:|:---:|:---:|:---:|
| [MBA智库百科](https://wiki.mbalib.com/wiki/首页) | [任思的公用空间](http://rensi.ys168.com/) | [imooc](https://www.imooc.com/course/list) | [LeetCode](https://leetcode.com/problemset/all/)/[LeetCode-cn](https://leetcode-cn.com/problemset/all/) |
| [每日一文](https://meiriyiwen.com/random)/[书摘广场-书见](https://memo.bookfere.com/explore)/[名言通](https://www.mingyantong.com/) | [Feedly](https://feedly.com/) | [mooc.cn](https://www.cmooc.com/course) | []() |
| [喜马拉雅](https://www.ximalaya.com/my/subscribed/)/[清沫网](https://www.qingmo.net/)/[情感FM](https://www.qingmo.net/qingganfm)/[Mc](Art/Music/index.md) | [印象笔记](https://app.yinxiang.com/Home.action) | [实验楼](https://www.lanqiao.cn/courses/) | [Project Euler](https://projecteuler.net/archives) |
| [<strong id="sq">社区</strong>](Library/Forum.md) | [Gitee](https://gitee.com/) | []() | [Programming Praxis](https://programmingpraxis.com/) |
| [知乎](https://www.zhihu.com/people/RS101202303/following)/[书架](https://www.zhihu.com/pub/)/[圆桌](https://www.zhihu.com/roundtable)/[热榜](https://www.zhihu.com/hot) | [GitLab](https://gitlab.com/ambroserencn) | [<strong id="sp">视频</strong>](Video/video.md)/[IMDb](https://www.imdb.com/)/[Ranking](https://www.boxofficemojo.com/weekly/)/[Mv](Art/Movies/index.md) | [<strong id="tools">工具</strong>](Tools/index.md)/[coin](https://coinyep.com/zh#) | 
| [豆瓣](https://www.douban.com/people/AmbroseRen/)/[记](https://book.douban.com/people/AmbroseRen/)/[电影榜](https://movie.douban.com/)/[热剧](https://movie.douban.com/tv/#!type=tv&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0)/[实时票房榜](https://www.endata.com.cn/BoxOffice/BO/RealTime/reTimeBO.html)-[D](https://ys.endata.cn/BoxOffice/Ranking)/[猫眼榜](https://piaofang.maoyan.com/dashboard) | ~~[simplesite](http://ambroseren.simplesite.com/)/[uid.me](http://uid.me/ren_si1#)~~ | [Youtube](https://www.youtube.com/)/[媒体库](https://www.youtube.com/feed/library)/[配置](https://studio.youtube.com/video/LupojaPC1wc/livestreaming) | [epub.liumingye](https://epub.liumingye.cn/) |
| [简书](https://www.jianshu.com/subscriptions#/timeline) | __IT社区__ | [Bilibili](https://space.bilibili.com/352834482/fans/follow)/[小鱼](http://www.xysudu.com/)/[新番组](https://bgm.liumingye.cn/)/[热榜](https://www.bilibili.com/v/popular/rank/all)/[动漫库](Art/Animes/index.md)/[配置](https://link.bilibili.com/p/center/index#/my-room/start-live)/[我的b站直播](https://live.bilibili.com/22653502) | [MYFREEMP3](http://tool.liumingye.cn/music/?page=searchPage)/[旧](http://tools.liumingye.cn/music_old/?page=searchPage) |
| [微博](https://weibo.com/3626507391/follow)/[关注](https://weibo.com/u/page/follow/3626507391/followGroup)/[热搜榜](https://weibo.com/hot/search)/[超话社区](https://huati.weibo.cn/discovery/super) | [SC](https://stackexchange.com/)/[stackoverflow](https://stackoverflow.com/)/[GIS](https://gis.stackexchange.com/) | [AcFun](https://www.acfun.cn/)/[番剧](https://www.acfun.cn/bangumilist)/[收藏](https://www.acfun.cn/member/favourite) | [BookReader](https://ztftrue.github.io/BookReader/) |
| [天涯论坛](https://bbs.tianya.cn/) | [CSDN](https://blog.csdn.net/Ambrose_Ren)/[热榜](https://blog.csdn.net/rank/list)/[placard](https://bbs.csdn.net/forums/placard) | [腾讯视频](https://v.qq.com/biu/u/playlist)/[热榜](https://v.qq.com/biu/ranks/?t=hotsearch)/[体育](https://live.qq.com/match) | [Neat Reader](https://www.neat-reader.cn/webapp#/) |
| [Reddit](https://www.reddit.com/)/[Quora](https://www.quora.com/)/[Discord](https://discord.com/channels/@me) | [博客园](https://www.cnblogs.com/rensi/)/[主页](https://home.cnblogs.com/u/rensi/)/[S](https://zzk.cnblogs.com/s/blogpost) | [爱奇艺](https://www.iqiyi.com/u/fav)/[热榜](https://www.iqiyi.com/ranks/hotsearch)/[风云榜](https://www.iqiyi.com/ranks1/home)/[国际站](https://www.iq.com/)/[收藏](https://www.iq.com/personal?type=favorite) | [PDF在线阅读器](https://web.jisupdf.com/) |
| [Matters](https://matters.news/)/[Medium](https://medium.com/) | [InfoQ](https://www.infoq.cn/)/[OSCHINA](https://www.oschina.net/project)-[OSC](https://www.oschina.net/project/top_cn_2020) | [优酷网](https://user.youku.com/page/usc/fav?theme=) | [oneNote笔记本-微软](https://www.onenote.com/notebooks?auth=1&nf=1&fromAR=1) |
| [Wikipedia](https://www.wikipedia.org/)/[Wikibooks](https://www.wikibooks.org/)/[Wikileaks](https://wikileaks.org/What-is-WikiLeaks.html) | [segmentfault](https://segmentfault.com/u/ambroseren/users/following) | [芒果TV](https://i.mgtv.com/my/looklist) | [catbox](https://catbox.moe/user/login.php) |
| [百度](https://www.baidu.com/)/[文库](Library/AcademicSearch.md)/[热搜](https://top.baidu.com/board)/[贴吧](https://tieba.baidu.com/index.html)/[百科](https://baike.baidu.com/usercenter/lemmas#favorites)/[头条百科](https://www.baike.com/)/[V](https://baike.baidu.com/vbaike#gallary)/[搜狗](https://www.sogou.com/) | [掘金](https://juejin.cn/) | [搜狐](https://my.tv.sohu.com/i/bookmark)/[PPTV](https://www.pptv.com/)-[收藏](https://usercenter.pptv.com/web/user/collection) | [Google翻译](https://translate.google.com/)/[有道翻译](https://fanyi.youdao.com/) |
| [__Google__](https://www.google.com/)-[热搜趋势](https://trends.google.com/trends/?geo=US)/[Bing](https://www.bing.com/)/[虫·搜](https://search.chongbuluo.com/)/[one](https://aur.one)/[<strong id="searchs">S</strong>](Library/SearchEngine.md) | [奇客资讯](https://www.solidot.org/) | [西瓜视频](https://www.ixigua.com/my/favorite)/[咪咕体育](https://www.miguvideo.com/mgs/website/prd/personalCenter.html#/collect)-[音乐](https://music.migu.cn/v3/my/playlist):[播放](https://music.migu.cn/v3/music/player/audio)/[乐视](http://i.le.com/playrecord#favorite)/[M1905](https://www.1905.com/mdb/film/)-[V](https://vip.1905.com/)/[好看](https://sv.baidu.com/) | [刘明野](https://tool.liumingye.cn/)/[主页](https://www.liumingye.cn/)/[PD](https://tool.liumingye.cn/password/)/[WP](https://tool.liumingye.cn/wallpaper/)/[St](Art/Shoot/index.md)/[<strong id="fodder">F</strong>](Data/Fodder/index.md)/[IP](https://tool.liumingye.cn/ip/)/[麻将](https://tool.liumingye.cn/majiang/) |
| [Facebook](https://www.facebook.com/)/[Twitter](https://twitter.com/home)/[Instagram](https://www.instagram.com/ambroserencn/)/[Pinterest](https://www.pinterest.com/) | [V2EX](https://www.v2ex.com/?tab=tech) | [CCTV](https://tv.cctv.com/live/)-[收藏](https://i.cctv.com/account/collection)-[W](https://worldcup.cctv.com)/[牛视](https://www.chaojidianshi.net/)A/[电视](http://www.tvyan.com/)源/[nettv](http://nettv.live/)/[湖卫](http://www.hunanweishi.cn/) | [Cmd MD](https://www.zybuluo.com/)/[<strong id="md">MD</strong>](Data/MD/index.md) |
| [虎嗅网](https://www.huxiu.com/) |[链滴](https://ld246.com/) | [唐人街](https://www.tangrenjie.tv/)/[片库](https://www.btnull.org/)-[二](https://www.pkmp4.com/)/[努努影院](https://nnyy.in)/[G](https://gimytv.in/)/[一](https://gimy.app) | [AnywhereAnything](http://lackar.com/aa/) |
| [PM](http://www.woshipm.com/)/[运营派](https://www.yunyingpai.com/) | [吾爱破解](https://www.52pojie.cn/) | [新视觉](https://www.finebv.com/)/[策驰](https://www.zayouth.org.cn/)/[看片狂人](https://www.kpkuang.com/)-[list](https://whereiskpkuang.com/) | [Gmail](https://mail.google.com/mail/u/0/#inbox)/[QQ邮箱](https://mail.qq.com/)/[M](https://outlook.live.com/mail/0/)/[空间](https://user.qzone.qq.com/1056008502)/[万年历](https://wannianrili.bmcx.com/)/[12306](https://kyfw.12306.cn/otn/leftTicket/init) |
| [M](Library/Medicine.md)/[少数派](https://sspai.com/)/~~[小红书](https://www.xiaohongshu.com/explore)/[得物](https://www.dewu.com/community.html)~~ | [hacker_news](https://news.ycombinator.com/) | [欧乐](https://www.olevod.com/)/[淘剧影院](https://www.taojuyb.com/)/[MVCAT](https://www.mvcat.com/) | [高德地图](https://www.amap.com/)/[百度地图](https://map.baidu.com/) |
| [360doc](http://www.360doc.com/mycontacts.aspx)/[plurk](https://www.plurk.com/AmbroseRenCN) | [科学网-889891](http://blog.sciencenet.cn/home.php?mod=spacecp&ac=friend&op=find) | [美剧迷](https://www.meijumi.net/)/[韩剧网](https://www.tvn.cc/)-[kortw](https://kortw.com/)/[蛋蛋赞](https://www.dandanzan.cc/) | [阿里云盘](https://www.aliyundrive.com/drive/)/[百度网盘](https://pan.baidu.com/disk/home)/[C](Data/Clouder.md) |
| [<strong id="bk">博客</strong>](Library/Blog.md) | [<strong id="games">游戏</strong>](Art/Games/index.md) | __直播__ | [Sp](Library/shopping.md)/[Job](Library/job.md) |
| []() | []() | [斗鱼](https://www.douyu.com/directory/myFollow)/[配置](https://mp.douyu.com/live/main)/[我的斗鱼直播](https://www.douyu.com/10150268) | []() |
| []() | []() | [虎牙](https://www.huya.com/myfollow)/[配置](https://i.huya.com/index.php?m=ProfileSetting#ktylts)/[我的虎牙直播](https://www.huya.com/25541428) | [PM](https://dh.woshipm.com/)/[addog](https://www.addog.vip/) |
| []() | []() | [YY LIVE](https://www.yy.com/i/index/live) | __新手基础自学__ |
| []() | []() | [<strong id="playlet">短剧</strong>](Video/playlet.md)/[Tik Tok](https://www.tiktok.com/)/[抖音](https://www.douyin.com/recommend)-[创](https://creator.douyin.com/creator-micro/content/manage)/[快手](https://www.kuaishou.com/)-[创](https://cp.kuaishou.com/article/publish/video) | [菜鸟教程](https://www.runoob.com/) |
| []() | []() | [BIGO LIVE](https://www.bigo.tv/cn/show) | [w3school](https://www.w3school.com.cn/) |
| []() | []() | [Twitch](https://www.twitch.tv/) | [w3cschool](https://www.w3cschool.cn/) |

<p style="width:1300px;"><font color="#00ffff" face="楷体" size="4">创作是一件开心的事情，沉浸只是因为纯粹的灵感。我希望自己的生命能够时常充满灵感，而文字就是这些愉快时光曾经存在过的证明。</font></p>
