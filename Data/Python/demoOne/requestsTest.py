import requests
r = requests.get('https://www.qiushibaike.com/text/') # 打开网址，一般我们会设置 请求头，来更逼真的模拟浏览器，下文有介绍
r.text
print(r.text)
