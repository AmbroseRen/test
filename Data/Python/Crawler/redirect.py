# urllib.request类
import urllib.request
my_url = 'https://www.baidu.com'
response = urllib.request.urlopen(my_url)
redirected = response.geturl() == my_url
print(redirected)

my_url = 'http://rrurl.cn/b1UZuP'
response = urllib.request.urlopen(my_url)
redirected = response.geturl() == my_url
print(redirected)
