import random
# 导入自己定义的useragents.py中的ua_list
from useragent import ua_list
import requests

#随机获取User-Agent
headers = {'User-Agent':random.choice(ua_list)}
url='https://www.baidu.com'
req = requests.get(url, headers=headers)
# req = request.Request(url,headers=headers) # 旧版已失效
print(req)
