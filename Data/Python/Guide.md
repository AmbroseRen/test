# 2020年9月研究内容
### 2020-9-17 15:28:17
# Location
```
C:\Users\DELL\AppData\Local\Programs\Python\Python38-32\Scripts
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

