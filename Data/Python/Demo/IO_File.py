#!/usr/bin/python
# -*- coding: UTF-8 -*-

# input无法进行输入的函数运算
'''
str = input("请输入：")
print("你输入的内容是: ", str)
'''

# 打开一个文件
fo = open("D:/workspace/Git/samplemod/src/demoOne/foo.txt", "r+")
str = fo.read(100)
print("读取的字符串是 : ", str)
fo.write("456*")
fo.close()
'''
print("文件名: ", fo.name)
print("是否已关闭 : ", fo.closed)
print("访问模式 : ", fo.mode)
# print("末尾是否强制加空格 : ", fo.softspace)
'''
