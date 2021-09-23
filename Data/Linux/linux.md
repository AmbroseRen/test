# Linux Terminal CMD [←](index.md)

- [X] 目录操作

```
mkdir  //创建文件夹
rmdir  //删除空文件夹
\rm -rf dirname //删除文件夹
```

- [X] 列出文件清单命令

```
ls -a
```

- [X] 统计当前文件夹(目录)大小：

```
du -sh *
```

- [X] 查看文件系统占磁盘大小

```
df -h
du -h --max-depth=1 your_dest_dir
du -h --max-depth=0 your_dest_dir/*
```

- [X] 查看日志：tail、cat、tac、head、echo等

```
tail -f 1000 test.log     滚动查询最后1000行
tail  -n  10   test.log   查询日志尾部最后10行的日志;
tail  -n +10   test.log   查询10行之后的所有日志;
tail  -fn 10   test.log   循环实时查看最后1000行记录(最常用的)
```

```
tail -fn 1000 test.log | grep '关键字'
```

- [X] 如果一次性查询的数据量太大,可以进行翻页查看，例如:

```
tail -n 4700  aa.log |more -1000 可以进行多屏显示(ctrl + f 或者 空格键可以快捷键)
```

- [X] head：跟tail是相反的head是看前多少行日志

```
head -n  10  test.log   查询日志文件中的头10行日志;
head -n -10  test.log   查询日志文件除了最后10行的其他所有日志;
```

- [X] sed

```
sed -n '5,10p' test.log 这样你就可以只查看文件的第5行到第10行。
```

- [X] cat查看文件内容

```
cat filename
cat > filename   //创建一个文件
cat file1 file2 > file  //合并文件
lsb_release -a  //查看Linux版本信息
cat /proc/version  //查看Linux版本信息
uname -a  //查看Linux版本信息
```

- [X] tac反向查看文件内容

- [X] History

```
history // 所有的历史记录

history | grep XXX  // 历史记录中包含某些指令的记录

history | more // 分页查看记录

history -c // 清空所有的历史记录

!! 重复执行上一个命令

查询出来记录后选中 :　!323
```

- [X] 删除文件内容

```
#> access.log
```

- [X] 查看端口占用情况

```
lsof -i        //输出端口列表
lsof -i:端口号 //查询端口号

netstat -anp|grep 80
netstat -tunlp | grep 端口号  //查看端口占用
netstat -ntlp   //查看当前所有tcp端口
netstat -ntulp | grep 80   //查看所有80端口使用情况
netstat -ntulp | grep 3306   //查看所有3306端口使用情况

kill -9 PID

lsof abc.txt：显示开启文件abc.txt的进程
lsof -c abc：显示abc进程现在打开的文件
lsof -c -p 1234：列出进程号为1234的进程所打开的文件
lsof -g gid：显示归属gid的进程情况
lsof +d /usr/local/：显示目录下被进程开启的文件
lsof +D /usr/local/：同上，但是会搜索目录下的目录，时间较长
lsof -d 4：显示使用fd为4的进程
lsof -i -U：显示所有打开的端口和UNIX domain文件
```
 
 [参考](https://cloud.tencent.com/developer/article/1579977)
 
## Linux上传下载文件
 
## Linux - shell上传下载文件
 
- [X] sendZip下载文件

```
sz fileName
```

- [X] RequestZip上传文件

```
rz
rz -y  //覆盖文件上传
```

- [X] 上传下载文件夹

```
tar -zcvf /home/xahot.tar.gz /xahot

tar -zcvf 打包后生成的文件名全路径 要打包的目录
例子：把/xahot文件夹打包后生成一个/home/xahot.tar.gz的文件

解压：
tar zxvf pythontab.tar.gz
解压文件到指定文件夹： 
tar  -zxvf  fenci.py.tar.gz  -C  pythontab/

zip压缩命令
zip -r filename.zip filesdir
zip解压缩命令
unzip filename.zip
zip -r filename.zip file1 file2 file3 /usr/work/school 
上面的命令把 file1、file2、 file3、以及 /usr/work/school 目录的内容（假设这个目录存在）压缩起来，然后放入 filename.zip 文件中
```

 - [X] 
