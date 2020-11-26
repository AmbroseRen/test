# web请求库
import requests
# 数据信息过滤库
from bs4 import BeautifulSoup
# Excel操纵库
from openpyxl import Workbook

# 正文
excel_name = "书籍.xlsx"
wb = Workbook()
ws1 = wb.active
ws1.title='书籍'

# 获取网页
def get_html(url):
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}
    html = requests.get(url, headers=header).content
    return html

# 提取所需信息
def get_con(html):
    soup = BeautifulSoup(html,'html.parser')
    book_list = soup.find('div', attrs={'class': 'article'})
    page = soup.find('div', attrs={'class': 'paginator'})
    next_page = page.find('span', attrs={'class': 'next'}).find('a')
    name = []
    for i in book_list.find_all('table'):
        book_name = i.find('div', attrs={'class': 'pl2'})
        m = list(book_name.find('a').stripped_strings)
        if len(m)>1:
            x = m[0]+m[1]
        else:
            x = m[0]
        #print(x)
        name.append(x)
    if next_page:
        return name, next_page.get('href')
    else:
        return name, None

# 方法函数
def main():
    url = 'https://book.douban.com/top250'
    name_list=[]
    while url:
        # 方法体一
        html = get_html(url)
        # 方法体二
        name, url = get_con(html)
        name_list = name_list + name
        print(name_list)
    for i in name_list:
        location = 'A%s'%(name_list.index(i)+1)
        print(i)
        print(location)
        ws1[location]=i
    wb.save(filename=excel_name)

# 主方法
if __name__ == '__main__':
    main()
