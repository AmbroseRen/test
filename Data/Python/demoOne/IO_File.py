#!/usr/bin/python
# -*- coding: UTF-8 -*-

# 打开一个文件
fo = open("D:/workspace/Git/samplemod/src/demoOne/foo.txt", "r+")
str = fo.read(100)
print("读取的字符串是 : ", str)
fo.write("456*")
fo.close()
