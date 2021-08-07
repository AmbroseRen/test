# Linux Terminal CMD [←](index.md)

- 列出文件清单命令
```
ls -a
```

- [X] 统计当前文件夹(目录)大小：
```
du -sh *
```

- [X] 查看日志：tail、cat、tac、head、echo等
```
tail  -n  10   test.log   查询日志尾部最后10行的日志;
tail  -n +10   test.log   查询10行之后的所有日志;
tail  -fn 10   test.log   循环实时查看最后1000行记录(最常用的)
```

```
tail -fn 1000 test.log | grep '关键字'
```

- 如果一次性查询的数据量太大,可以进行翻页查看，例如:
```
tail -n 4700  aa.log |more -1000 可以进行多屏显示(ctrl + f 或者 空格键可以快捷键)
```

- head：跟tail是相反的head是看前多少行日志
```
head -n  10  test.log   查询日志文件中的头10行日志;
head -n -10  test.log   查询日志文件除了最后10行的其他所有日志;
```

- cat查看文件内容
```
cat filename
```

- History
 ```
 history // 所有的历史记录

history | grep XXX  // 历史记录中包含某些指令的记录

history | more // 分页查看记录

history -c // 清空所有的历史记录

!! 重复执行上一个命令

查询出来记录后选中 :　!323
 ```
 
 [参考](https://cloud.tencent.com/developer/article/1579977)
