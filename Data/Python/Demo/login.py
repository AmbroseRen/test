# 登录+爬取网页
import requests
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    }
data = {
    'identity':'1056008502@qq.com',
    'password':'jz_A@632148459',
}
#url ='https://www.itjuzi.com/user/login?redirect=&flag=&radar_coupon='
url ='https://www.itjuzi.com/user-center/account'
session = requests.Session()
session.post(url,headers = headers,data = data)
# 登录后，我们需要获取另一个网页中的内容
response = session.get('http://radar.itjuzi.com/investevent',headers = headers)
print(response.status_code)
print(response.text)
