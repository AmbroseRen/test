#Create a new post
$ hexo new "My New Post"

#Run server
$ hexo server
URL:
http://localhost:4000/

#Generate static files
$ hexo generate

#Deploy to remote sites--部署到远程站点
$ hexo deploy

#nodeJs flies
D:\0Tools\nodejs
#npm flies
C:\Users\DELL\AppData\Roaming\npm
#blog files
C:\Windows\System32\blog
_config.yml URL:C:\Windows\System32\blog

#files issue
C:\Windows\System32\blog\source

#themes add
blog/__config.yml --文件中添加
# yilia主题所需新增内容
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: false
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: false
    tags: true

