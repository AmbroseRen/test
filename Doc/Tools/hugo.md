# gitlab推送
```
git add .gitlab-ci.yml
git commit -m "Add .gitlab-ci.yml"
git push origin master
```

# hugo手册

- [参考文档](https://gohugo.io/getting-started/installing/)
- Windows配置系统全局变量
- 检测安装
```
hugo help
```

- 生成主站
```
cd C:\Hugo\Sites
hugo new site example.com
```

- blog init
+ gitlab托管配置
> root/.gitlab-ci.yml
```
# This file is a template, and might need editing before it works on your project.
---
# All available Hugo versions are listed here:
# https://gitlab.com/pages/hugo/container_registry
image: registry.gitlab.com/pages/hugo:latest

variables:
  GIT_SUBMODULE_STRATEGY: recursive

test:
  script:
    - hugo
  except:
    - master

pages:
  script:
    - hugo
  artifacts:
    paths:
      - public
  only:
    - master

```

> root/config.toml
```
baseURL                    = "https://ambroserencn.gitlab.io/ambroserencn"
builddrafts                = false
languageCode               = "zh-Hans"
canonifyurls               = true
contentdir                 = "content"
layoutdir                  = "layouts"
publishdir                 = "public"
enableEmoji                = true
hasCJKLanguage             = true
summaryLength              = 200
Paginate                   = 5

theme                      = "AllinOne"
title                      = "AmbroseRen"

pygmentsuseclasses         = true


[permalinks]
  sci-tech                 = "sci-tech/:year-:month/:slug/"
  project                  = "project/:slug/"
  blog                     = "blog/:year-:month/:slug/"
  profile                  = "profile/:slug/"
  

[taxonomies]
  tag                      = "tags"
  series                   = "series"
  category                 = "categories"


[menu]
  [[menu.main]]
    name                   = "Sci-Tech"
    weight                 = 1
    identifier             = "sci-tech"
    url                    = "sci-tech/"

  # [[menu.main]]
  #   name                   = "Project"
  #   weight                 = 2
  #   identifier             = "project"
  #   url                    = "project/"

  [[menu.main]]
    name                   = "Blog"
    weight                 = 3
    identifier             = "blog"
    url                    = "blog/"

  # [[menu.main]]
  #   name                   = "Profile"
  #   weight                 = 5
  #   identifier             = "profile"
  #   url                    = "profile/"

  [[menu.main]]
    name                   = "About"
    weight                 = 9
    identifier             = "about"
    url                    = "about/"


[params]
  faviconfile              = "img/zheng.png"
  avatar                   = "img/profile.jpg"             # path to image in static dir e.g img/avatar.png (do not use in the same time as gravatar)
  author                   = "AmbroseRen"
  description              = ["Be myself.", "Love the wonderful world.", "Do the right things and be a better man."]           # appears in the site header when set to a non-empty string
  welcome_head             = "Hello, World!"
  welcome_word             = "~ No Day But Today ~"

  latestpostscount         = 5                             # how many posts to display on the home page
  bloggroupby              = 'month'
  dateform                 = "Jan 2, 2006"
  dateformfull             = "2006-01-02  Monday  15:04:05"
  noshowreadtime           = false       

  # slides
  slidesDirPath            = "static/img/header-slides"    # path to image in local dir (for hugo)
  slidesDirPathURL         = "img/header-slides"    # path to image in static dir (for static pages)

  

  # highlighting 
  highlightjs              = true
  

  # links
  email                    = "ambroserencn@gmail.com"
  github                   = "//github.com/AmbroseRen"
  #linkedin                 = "//linkedin.com/in/ziouzheng"
  facebook                 = "https://www.facebook.com/ambroserencn/"
  # googleplus               = "//plus.google.com/u/0/114708482192918964838"
  twitter                  = "//twitter.com/cn_ambrose"
  # px500                    = "//px500"
  #instagram                = "//instagram.com/seagulldreamer/"
  include_rss              = false                         # include RSS <link> tag in <head> and show RSS icon


  # analytics
  googleAnalytics          = "UA-90057853-1"

  # counter
  busuanzi                 = true
```

- 配套主题
```
git clone https://github.com/orianna-zzo/AllinOne.git themes/AllinOne
```
[pull AllinOne theme into themes directory](https://github.com/orianna-zzo/blog-hugo),thanks his demo and toturial.

即：root/themes/AllinOne

- Other theme install,[Doc+Demo](https://themes.gohugo.io/hugo-theme-learn/)
```
cd themes/
git clone https://github.com/matcornic/hugo-theme-learn.git
git clone https://github.com/kakawait/hugo-tranquilpeak-theme.git
```

- 发布文章
- [模板示例](https://github.com/orianna-zzo/blog-hugo/edit/master/content/sci-tech/2018-01/blog%E5%85%BB%E6%88%90%E8%AE%B04-hugo%E4%B8%AD%E5%A2%9E%E5%8A%A0tags%E7%AD%89%E5%88%86%E7%B1%BB.md)
```
hugo new post/new-post.md
```

- 启动
```
hugo
hugo server
```

- 访问
```
http://localhost:1313/yourSiteURL
```

- [git commit](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/)
```gitlab
# initialize new git repository
git init

# add /public directory to our .gitignore file
echo "/public" >> .gitignore

# commit and push code to master branch
git add .
git commit -m "Initial commit"
git remote add origin https://gitlab.com/YourUsername/your-hugo-site.git
git push -u origin master
```

Wait for Your Page to Build 
That’s it! You can now follow the CI agent building your page at
```
https://gitlab.com/<YourUsername>/<your-hugo-site>/pipelines.
```
After the build has passed, your new website is available at 
```
https://<YourUsername>.gitlab.io/<your-hugo-site>/.
```
> Make sure your baseURL key-value in your site configuration reflects the full URL of your GitLab pages repository if you’re using the default GitLab Pages URL 
```
(e.g.,https://<YourUsername>.gitlab.io/<your-hugo-site>/) 
```
> and not a custom domain.

- [gitlab构建分支管道参考](https://docs.gitlab.com/ee/ci/pipelines/pipeline_architectures.html)
