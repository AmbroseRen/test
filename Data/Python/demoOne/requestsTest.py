import re
import requests

# s = '<a class=gb_yb href=[^>]+>'
#s = '<link href=[\'"]?([^\'" >]+>'
s = '<link href=[^>]+>'
#s = '<link title=[RSS]+>'
#r = requests.get('https://www.google.com/?q=python')
#r = requests.get('https://www.baidu.com/s?wd=python')
r = requests.get('https://cn.bing.com/search?q=python')
#print(r.text)
#result = re.search(s, r.text)
result = re.findall(s, r.text)

for i in result:
    print(i)
