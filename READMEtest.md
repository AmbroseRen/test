# 父标题

简介

## 声明

声明内容

## 目录

* [介绍](#介绍)
  * [凡例](#凡例)
  * [项目结构](#项目结构)
* [如何贡献](#如何贡献)
* [工具](#工具)
* [联系](#联系)
* [传媒报道与非虚构写作](<#传媒报道与非虚构写作>)
  * [硕俊家书](<#硕俊家书>)
  * [访他者](<#访他者>)

## 介绍

此处收集内地各类传媒和公众号发布（原创或转载）的有关新型冠状病毒感染的肺炎(2019-nCoV)的深度报道、非虚构作品及亲历者个人叙述，并将持续更新。

希望这一选编有助于理解疫情及其影响下的每一个人，并帮助相关研究者做初步的资料收集。

### 凡例

* 分类及收录标准：

  * 报道和非虚构写作：详尽细致或角度新颖，且来自较可信赖的媒体或公众号，尤其是对一线、基层（不只是最受关注的，而是包括各地、各群体、各行业）的非虚构写作和描述性报道。有少量摄影报道。作者不是文中的叙述者或受访者。

  * 亲历者个人叙述：疫情影响下的个体记录其见闻和思考的文章。文中的叙述者是作者本人。主要来自微信公众号。（豆瓣上的叙述可参见[友情站点](#友情站点)中列出的一些。）

  * 本站不收录评论、分析、科普等类别的作品。

### 项目结构

```
├─archive                          文章的存档，目前提供jpg格式
│  └─jpg
│    ├─1.jpg
│    └─...
├─data                             csv格式的文章数据
│  └─data.csv
├─docs                             一个用于展示README的 Github Page
├─gh-page
├─template                         README模板
│  └─README.handlebars
├─utils                            构建README的工具
│  ├─generateReadmeFromCsv.js
│  └─...
└─README.md                        主文档
```

## 如何贡献

欢迎网友参与贡献，为本站更新、补充、推荐文章，成为贡献者。贡献的方式是通过 **[issue](https://github.com/2019ncovmemory/nCovMemory/issues)** 提交原文链接和 archive。一些工具请参见[工具](#工具)。

为了方便整理与阅读，请贡献者在提交新文章时，遵循以下的指南。我们将会优先考虑收录符合 **指南标准** 的贡献。

* 收录文章：请参看[凡例](#凡例)中说明的选文标准。亦请确保文章是免费并对所有互联网使用者开放的，我们不会收录任何需要付费才可以阅读的文章。

* 一个完整的条目需包括：*日期，原始链接，archive*  三个要素。

  * 日期：需要标注 **原始文章** 发表日期。

  * 原始链接：请尽量寻找 **原始链接**，并将链接简化，去除会包含个人隐私的内容，详情请见 [issue #13](https://github.com/2019ncovmemory/nCovMemory/issues/13)。若原始链接已失效，请注明并提供一个转载链接。

  * archive：产生 archive 时请确保文章内图片已完整加载。不同的 archive [工具](#工具)在不同的网站上效果可能不同。

* 今后 **无需** 再提供截图。我们会用工具自动生成。唯一的例外是，如原始链接当时已失效，而您存有原文截图，则请提供此截图。

* 如有多个条目希望贡献，请在一个issue内列出。

* 我们创建了4个Labels来标记不同种类的issue。请贡献者在创建issue时按需标记。正确标记的issue会更容易得到关注。

  * ![#098728](https://placehold.it/15/098728/000000?text=+) 建议：对此站的建议。

  * ![#e99695](https://placehold.it/15/e99695/000000?text=+) 新文章：新文章条目。

  * ![#f490ea](https://placehold.it/15/f490ea/000000?text=+) 更新链接：更新已有但错误或不可使用的链接。

  * ![#fef2c0](https://placehold.it/15/fef2c0/000000?text=+) 讨论：讨论其他事宜。

本站将不再大规模增收媒体、公众号，也不收录评论、分析、科普等作品，希望理解。欢迎网友自行整理，并告知地址，以补本站之不足，我们将列入[友情站点](#友情站点)内。

## 工具

我们使用[这个程序](https://gist.github.com/2019ncovmemory/1e4225aa73011cb0d6e544aad1468541)以及[这个插件](https://gofullpage.com/)产生截图。

我们使用[这个网站](https://www.iloveimg.com/crop-image)编辑截图大小。

我们使用[archive.is](https://archive.is/), [archive.org](https://archive.org)等产生archive。前者用于微信公众号，后者用于一般网页。

## 联系

如发现链接失效，或有其他问题、建议，请发送email至2019ncovmemory@gmail.com。

## 传媒报道与非虚构写作

### 硕俊家书

| 日期 | 标题 | 原始链接 | 截图 | 存档 | 翻译
|---|:----------|:---|:---:|:---:|:---:|
|03-31|疫情下的在美中国人 \| 口述之一： 谁能拯救我的疯狂室友|[link](http://shuojunjiashu.blog.caixin.com/archives/225135)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/4793.jpg)|[link](http://archive.vn/qX3MA)|/|

### 访他者

| 日期 | 标题 | 原始链接 | 截图 | 存档 | 翻译
|---|:----------|:---|:---:|:---:|:---:|
|03-31|养蜂人 \| 一路都逢花盛开|[link](https://mp.weixin.qq.com/s/ylBDxhIYy2AVih7NUbn_Xg)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/4701.jpg)|[link](http://archive.ph/vwNsD)|/|
|03-27|新冠疫情实录 \| 再见了，我生活8年的上海|[link](https://mp.weixin.qq.com/s/LmSWTZLTdPsunhf7iObmoA)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/4511.jpg)|[link](http://archive.ph/O3s0q)|/|
|03-24|新冠疫情实录 \| “15天，我总算回家了”|[link](https://mp.weixin.qq.com/s/Lpsb4_tzR_F2i-Dk5q6bIA)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/4298.jpg)|[link](http://archive.ph/ak6Jg)|/|
|03-12|意大利疫情日记\|恐惧与希望并存|[link](https://mp.weixin.qq.com/s/EF4kHUU1TnS7rTkHHkeF2A)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/3672.jpg)|[link](http://archive.ph/12Gv9)|/|
|03-11|疫中人丨一个武汉人的「隔离33天」|[link](https://mp.weixin.qq.com/s/J_zVZrcyYT5K-3tocx9ubw)|[link](https://github.com/2019ncovmemory/nCovMemory/blob/master/archive/jpg/3671.jpg)|[link](http://archive.ph/yUc7I)|/|

* 此文用于生成`README.md `导航目录格式参考,[原链](https://github.com/invishantom/nCovMemory)参考.
