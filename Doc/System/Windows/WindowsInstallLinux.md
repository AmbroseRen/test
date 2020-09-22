# Windows不用U盘引导，用easyBCD引导工具安装Linux双系统

## 准备工作
- 1.win + R : compmgmt.msc

找到：存储-磁盘管理，找到空闲磁盘空间，选中后，右键点击压缩卷，输入要压缩使用的磁盘空间（以MB为单位，本人分割了75G）

查看磁盘卷标，例：C盘卷标为(hd0,0)，最好引导文件放C盘，直接用(hd0,0),若有改变需自行查找。

- 2.下载[easyBCD](https://www.techspot.com/downloads/3112-easybcd.html)和[Linux-ubuntu](https://ubuntu.com/download/desktop)

## 配置文件
- 1.打开：easyBCD》点击：添加新条目》点击：NeoGrub》点击：安装》点击：配置
- 2.解压ubuntu.iso镜像文件到空文件夹(配置要用)
- 3.找到生成文件：C:NST/menu.lst，配置如下

```
title Install Ubuntu 
root (hd0,0)
kernel (hd0,0)/vmlinuz.efi boot=casper iso-scan/filename=/ubuntu-14.04-desktop-amd64.iso locale=zh_CN.UTF-8
initrd (hd0,0)/initrd.lz
title reboot
reboot
title halt
halt
```

- 4.找到解压文件夹：casper，并复制到C盘根目录；复制：casper/vmlinuz.efi(有的文件没有后缀格式，配置就不要后缀格式，如这样：casper/vmlinuz.efi)到C盘根目录；
复制：casper/initrd.lz到C盘根目录；将已下载镜像如：ubuntu-14.04-desktop-amd64.iso复制到C盘根目录(配置文件需与自己文件名一致)。引导配置准备就绪。

## 引导安装Ubuntu
- 1.重启电脑，选择：NeoGrub引导加载器
- 2.选择：Install Ubuntu
- 3.进入ubuntu引导安装图形界面后：使用Linux快捷键(ctrl + alt + T)调出terminal终端，输入如下命令(sudo umount -l /isodevice)进行命令安装(本人安装命令未生效，用的鼠标点击桌面安装引导图标)。
- 4.点击安装》安装类型：其他选项(不要选择2，清除磁盘安装！！！)
- 5.磁盘分区:__*划重点*__，本人做了两次，在此步骤卡的时间最长，本人配置数据如下

<table style="width:100%">
  <tr>
    <th>/.</th>
    <th>/boot</th> 
    <th>/tmp</th>
    <th>/user</th>
    <th>/var</th>
    <th>swap</th>
    <th>/srv</th>
    <th>/opt</th>
    <th>/hoom</th>
  </tr>
  <tr>
    <td>20G</td>
    <td>1G</td>
    <td>1G</td>
    <td>20G</td>
    <td>2G</td>
    <td>4G</td>
    <td>2G</td>
    <td>2G</td>
    <td>20G</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
