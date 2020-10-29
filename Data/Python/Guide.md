# 2020年9月研究内容
### 2020-9-17 15:28:17
# Location
```
C:\Users\DELL\AppData\Local\Programs\Python\Python38-32\Scripts
```

# python基础文档

- [语法](https://www.runoob.com/python/python-tutorial.html)
- [标准库](https://docs.python.org/zh-cn/3/library/) 
- [依赖库搜索](https://pypi.org/project/lxml/)

# pip安装python依赖库 - 常用列表
```
安装                      引用
pip install matplotlib  - from matplotlib import pyplot as plt

```

# pip update 
[^1]:升级pip

- Linux or macOS

```
pip install -U pip
```

- Windows
```
python -m pip install -U pip
```

# Libs

__web请求库__

import requests

import re

+ 文档链接：
- https://requests.readthedocs.io/en/master/
```
pip install requests
```

- - -

__Python web MVC__

__*数据库交互部分*__

```
from django.db import models

class Reporter(models.Model):
    full_name = models.CharField(max_length=70)

    def __str__(self):
        return self.full_name

class Article(models.Model):
    pub_date = models.DateField()
    headline = models.CharField(max_length=200)
    content = models.TextField()
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)

    def __str__(self):
        return self.headline
```

+ 文档链接
- https://www.djangoproject.com/start/
- https://docs.djangoproject.com/en/3.1/intro/overview/

```
pip install django
```

- - -

__数据分析和科学计算__

```
from pandas import *
import numpy as np

# examples
randn = np.random.randn

```

+ 文档链接：
- https://pandas.pydata.org/pandas-docs/version/0.15.2/install.html
- https://pandas.pydata.org/pandas-docs/stable/getting_started/install.html
```
pip pip install pandas
```

- - -

__支持任意文件的全速上传与下载__

+ 文档链接：
- https://pypi.org/project/CDNDrive/
+ 功能测试
- https://ld246.com/tag/bilidrive
- http://it-ebooks.flygon.net/covid-2019/
- http://it-ebooks.flygon.net/pua-books/#more
```
pip install CDNDrive
```

- - -

__从HTML和XML文件中提取数据__

from bs4 import BeautifulSoup

+ 文档链接：
- https://www.crummy.com/software/BeautifulSoup/bs4/doc/
```
pip install beautifulsoup4
```

- - -

__Excel操作__

from openpyxl import Workbook

+ 文档链接：
- https://openpyxl.readthedocs.io/en/stable/
+ 手册
- https://pypi.org/project/openpyxl/
+ 案例
- http://zetcode.com/python/openpyxl/
```
pip install openpyxl
```

- - -

__模拟登录__

from DecryptLogin import login

+ 文档链接：
- https://httpsgithubcomcharlespikachudecryptlogin.readthedocs.io/zh/latest/LOGIN.html
- https://mp.weixin.qq.com/s/_82U7luG6jmV-xb8-Qkiew
```
pip install DecryptLogin --upgrade
```

- - -

__Python Web框架和异步网络库__

```
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
```
+ 文档链接：
- https://www.tornadoweb.org/en/stable/
```
pip install tornado
```

- - -

WSGI Web

```
from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'
```

+ 文档链接：
- https://flask.palletsprojects.com/en/1.1.x/
```
pip install Flask
```

- - -

WSGI Web

```
from bottle import route, run, template

@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)

run(host='localhost', port=8080)

```

+ 文档：
- https://bottlepy.org/docs/dev/
```
pip install bottle
```

- - -

__事件驱动的网络引擎__

```
from twisted.internet import protocol, reactor, endpoints

class Echo(protocol.Protocol):
    def dataReceived(self, data):
        self.transport.write(data)

class EchoFactory(protocol.Factory):
    def buildProtocol(self, addr):
        return Echo()

endpoints.serverFromString(reactor, "tcp:1234").listen(EchoFactory())
reactor.run()
```


+ 文档：
- https://twistedmatrix.com/trac/
- https://twisted.readthedocs.io/en/twisted-18.4.0/core/howto/tutorial/index.html

```
pip install Twisted
```
- - -

__Python处理XML和HTML__

```
from lxml import etree
```

+ 文档：
- https://lxml.de/build.html

```
pip install lxml
```

- - -

_安装 PyMongo组件连接MongoDB数据池_

- 需pip升级到20.2.4 [1]

```
python -m pip install pymongo [ snappy，gssapi，srv，tls ]
```

- - -

# 示例

- [douban_book](https://raw.githubusercontent.com/AmbroseRen/test/master/Data/Python/douban_book.py)

- - -

# 离线安装步骤

e.g
```
git clone https://github.com/CharlesPikachu/DecryptLogin.git

cd DecryptLogin

python setup.py install
```

- - -

2020-9-21 18:38:35 +0000

无实际应用的python研究，暂时就告一段落了（话说python是简单，但是由无尽的依赖库支撑起来的，环境构建和文档阅读占了大部分时间，所以才有臭屁的优雅代码...）.

将zookeeper整个生态系统模拟构建出来。

