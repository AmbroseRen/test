# urllib对cookie的处理
import urllib
import http.cookiejar as cookielib
cookie = cookielib.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookie))
response = opener.open('http://www.baidu.com')
for item in cookie:
    print('Name = '+item.name)
    print('Value = '+item.value)
