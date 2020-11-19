# urllib对cookie的处理
import urllib
import http.cookiejar as cookielib
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
