# python自带库
import time
import sys
import re
import json
# 一.HTTP请求
import requests
# 二.urllib库
import urllib
import http.cookiejar as cookielib

# .....................................................requests请求部分....................................................................
resp = requests.get('http://xlzd.me')
# 编码
resp.encoding
print(resp.encoding) # utf-8
# 请求头
resp.headers
print(resp.headers) # {'Connection': 'keep-alive', 'Content-Length': '27621', 'Server': 'GitHub.com', 'Content-Type': 'text/html; charset=utf-8', 'Last-Modified': 'Mon, 10 Jun 2019 04:30:35 GMT', 'ETag': 'W/"5cfddceb-1eb24"', 'Access-Control-Allow-Origin': '*', 'Expires': 'Thu, 26 Nov 2020 02:02:10 GMT', 'Cache-Control': 'max-age=600', 'Content-Encoding': 'gzip', 'X-Proxy-Cache': 'MISS', 'X-GitHub-Request-Id': '5A30:55F1:317697:3BE488:5FBF0A4A', 'Accept-Ranges': 'bytes', 'Date': 'Thu, 26 Nov 2020 02:06:39 GMT', 'Via': '1.1 varnish', 'Age': '546', 'X-Served-By': 'cache-tyo19933-TYO', 'X-Cache': 'HIT', 'X-Cache-Hits': '1', 'X-Timer': 'S1606356400.863720,VS0,VE1', 'Vary': 'Accept-Encoding', 'X-Fastly-Request-ID': 'fc7f7d36a5172813fad135e6df5f63279fdeaa57'}
# 返回状态
resp.status_code
print(resp.status_code) # 200
# cookie............s
resp.cookies
print(resp.cookies)  # <RequestsCookieJar[]>
# HTML响应文本--解析
resp.text # 取文本
# resp.content # 取图片
# resp.json # 取json
# print(resp.text) # 打印文本

# HTTP请求 有问题
'''
r = requests.post("http://xlzd.me/login", data = {"user":"xlzd", "pass": "mypassword"})
r = requests.put("http://xlzd.me/post", data = {"title":"article"})
r = requests.delete("http://xlzd.me/foo")
r = requests.head("http://xlzd.me/bar")
r = requests.options("http://xlzd.me/abc")
print(r)
'''

# 解析URL中的参数
# allow_redirects=False --表示不会主动重定向
# timeout＝3 --限定响应时长 参数错误

# 代理池IP
proxies = {
  "http": "http://192.168.31.1:3128",
  "https": "http://10.10.1.10:1080",
}
# proxies=proxies

r = requests.get("http://xlzd.me/query", params={"name":"xlzd", "lang": "python"}, allow_redirects=False)
# 打印URL
print(r)  # <Response [404]>
print(r.url) # https://xlzd.me/query?name=xlzd&lang=python

# 自定义Headers
url = 'http://xlzd.me'
headers = {'User-Agent': 'my custom user agent', 'Cookie': 'haha'}
requests.get(url, headers=headers)

# Session
session = requests.Session()
# print(session.put('http://xlzd.me/new', data={'title': 'title of article', 'data': 'content'})) # <Response [405]>
session.post('http://xlzd.me/login', data={'user': 'xlzd', 'pass': 'mypassword'})
session.put('http://xlzd.me/new', data={'title': 'title of article', 'data': 'content'})

# ..............................urllib定向部分.........................................................
print('.........................................................................................')
# 已弃用
'''
response = urllib.urlopen('https://www.baidu.com')
response.code
print(response.code)
'''
# 新python3.8
# 重定向成功
'''
requests = urllib.request.urlopen('http://www.baidu.com/')
requests.add_header('User-Agent', 'fake-client')
response = urllib2.urlopen(requests)
print(response.read())
'''
my_url = 'https://www.baidu.com'
response = urllib.request.urlopen(my_url)
redirected = response.geturl() == my_url
print(redirected)
# 重定向失败
'''
my_url = 'http://rrurl.cn/b1UZuP'
response = urllib.request.urlopen(my_url)
redirected = response.geturl() == my_url
print(redirected)
'''

# Cookies
# req = urllib.request.Request("'http://www.baidu.com/'",headers = {'User-Agent', 'fake-client'}, origin_req_host=None, unverifiable=False, method=None) # items{}参数缺失
# print(req)

cookie = cookielib.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookie))
response = opener.open('http://www.baidu.com')
for item in cookie:
    print('Name = '+item.name)
    print('Value = '+item.value)

'''
import urllib3
http = urllib3.PoolManager()
r = http.request('GET', 'http://httpbin.org/robots.txt')
r.status
print(r.status)
r.data
print(r.data)
'''
