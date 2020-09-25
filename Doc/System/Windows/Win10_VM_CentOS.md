# Win10用VMware创建CentOS搭建hadoop模拟集群

## 前言

此为集群模拟搭建，与实际差距有多大暂时亦不知，为学习参考之用（实际搭建成百上千集群，必不可能每个单独配置！）。

# 准备工作
- 1.1[下载虚拟机](https://pan.baidu.com/s/16_JlJ31R6wR8ja_f7o9kNw)

提取码：4c94

[安装手册](https://mp.weixin.qq.com/s?__biz=MzIwMjE1MjMyMw==&mid=502715453&idx=1&sn=f08535e26e03d71589f405b663b2ce0b&chksm=0ee174d13996fdc7523236ce503a76dd85a71cb04cfa20013bc2e1b0bdd6aa813157c2116951&scene=20&xtrack=1&key=018eb7afa591f40f9d9792f3c3acaa9be462d1443c18534efa227efac33711a5de85f78ce2cce3bcac14308be690e7ec067e277db00699a60901c476e737f6d8e754e4040c5860b72bc39215d008e05fe6f0568097b5826b6706789e5a2100ac15e4d4e893410bc3e451eb25ab1f29dbf2857e2b88105a0bbdf287b698fc7e01&ascene=1&uin=MTk5MzAzODIxOA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AQfpmd5z%2Bpke6XdwI8%2BbbMk%3D&pass_ticket=EkuvduQnd2h4xP3ayMH4iTSgAarzLoxOSslZRKKORBeePjQqksDlX5qfNk2aBIHb&wx_header=0)

本人已备份.

- 1.2[微软VMware15.5](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)

记：VMware16pro最新版无授权(据文档说16最新版不兼容有bug，且无破解)，所以用的1.1中VMware15.5有授权版本(装完16版卸载需重新启动安装程序进行卸载或修复)，可用。

- 2.1[官网CentOS](https://www.centos.org/download/)

- 2.2[CentOS-6.10-x86_64-LiveDVD.iso](http://ftp.riken.jp/Linux/centos/6.10/isos/x86_64/)

记：据说最新版CentOS8不兼容VMware，未避免不必要的麻烦，遂降级用CentOS6.

# 安装VMware

[参考一：最详细](https://juejin.im/post/6844903715846127624)

照此步骤做三遍，虚拟三台主机(当场猝死！！！)

## 每台主机配置参数

[参考一](https://blog.csdn.net/murphyZ/article/details/88570243)

[参考二](https://blog.csdn.net/xiaoyw71/article/details/53282945)

[参考三hadoop部分](https://blog.csdn.net/hliq5399/article/details/78193113)

- 1.1修改主机名
```
vi /etc/hostname
删除原内容，直接填入要修改位的主机名node1,node2,node3  三台均修改
```

- 1.2配置网卡信息
```
# 编辑网卡配置文件
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```
> 修改内容为：
```
TYPE=Ethernet
BOOTPROTO=static
IPADDR=192.168.137.128
(自己IP查询方法：ctrl+alt+T>输入命令：ip addr)
NETMASK=225.225.225.0
GETWAY=192.168.137.1
(根据IP网段定义网关)
DNS1=8.8.8.8
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTRE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FALTAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=72a0f778-de9d-44da-9261-b4486bf9ab2f
DEVICE=ens33
ONBOOI=yes
```

- 1.3修改IP映射
```
vi /etc/hosts
```
> 追加修改内容为：
```
192.168.137.128 node1
192.168.137.129 node2
192.168.137.130 node3
```

- 1.4为每台机器创建一个新的hadoop用户
```
# 添加hadoop用户
useradd hadoop 

# 给hadoop用户设置密码
passwd hadoop
```

- 1.5给每台机器的hadoop用户配置sudo权限
```
# 在root用户下修改sudoers文件的权限（修该只读为读写）
chmod -R  u+w /etc/sudoers

#在root用户下编辑sudoers文件
vi /etc/sudoers
```
> 追加内容为：
```
root  ALL=(ALL) ALL
hadoop  ALL=(ALL) ALL
```

- 1.6关闭每台机器的防火墙
```
#以centos7为基础
#关闭防火墙
systemctl stop firewalld

#关闭防火墙开机自启
systemctl disable firewalld
```

- 1.7设置免密码登录具体步骤
```
# 1、首先安装ssh客户端
yum -y install openssh*

# 2、安装完成后生成公钥,每台都作为服务器生成一遍
ssh-kengen  #首次生成需要三次回车，不是首次生成需要验证是否覆盖原公钥
# 3、拷贝公钥，每台都作为服务器将自己的公钥拷贝给其他客户端用于保存
ssh-copy-id hadoop@node01
ssh-copy-id hadoop@node02
ssh-copy-id hadoop@node03
```

- 2.1安装JDK
> 需先安装VMware Tools让宿主机<->虚拟机文件可互传，才能安装JDK和hadoop(本人CentOS6.10自带了JDK，安装VMware Tools卡了两个多小时)
>> 安装完.iso镜像，只是进入了CentOS光盘安装引导界面，需继续进行CentOS的安装，才能看到VMware文件夹下的Linux.iso即VMware Tools文件。
>> [安装VMware Tools](https://blog.csdn.net/dwj901125/article/details/11200401)
>> 宿主机共享传输文件在虚拟机上的位置：/mnt/hgfs/
>> 至此才能文件互传(2020-9-24 16:21:06 +0000).

> 查看安装情况：打开Terminal终端(ctrl+alt+T)
```
java -version
```

- 2.2安装hadoop软件（均以hadoop用户来）
- 2.2.1解压hadoop原生安装包
```
# 创建目录
mkdir  -p  /software
# 解压
tar -zxvf /packages/hadoop-2.7.2.tar.gz -C /software/
#修改环境变量
vi /etc/profile
export HADOOP_HOME=/software/hadoop-2.7.2
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
```

- 2.2.2修改hadoop-env.sh配置文件 （三台机器均配置）
```
#进入hadoop的配置文件目录
cd /software/hadoop-2.7.2/etc/hadoop
#vi hadoop-env.sh
添加jdk的环境变量
```

- 2.2.3设置core-site.xml配置文件
```
# 创建临时目录
mkdir -p /software/hadoop-2.7.2/tmp
# vi core-site.xml 

<configuration>
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://node01:8020</value>
        </property>
        <property>
                <name>hadoop.tmp.dir</name>
                <value>/software/hadoop-2.7.2/data</value>
        </property>
</configuration>
```

- 2.2.4设置hdfs-site.xml配置文件
```
# vi hdfs-site.xml
<configuration>
        <property>
                <name>dfs.replication</name>
                <value>2</value>  #副本数量
        </property>
</configuration>
```

- 2.2.5设置mapred-site.xml配置文件
```
# vi mapred-site.xml  #配置hadoop任务跑在yarn集群上

<configuration>
        <property>
                <name>mapreduce.framework.name</name>
                <value>yarn</value>
        </property>
</configuration>
```

- 2.2.6设置yarn-site.xml配置文件
```
# vi yarn-site.xml   #设置resourcemanager总资源调度器进程运行所在节点，并设置nodemanager服务

<configuration>
        <property>
                <name>yarn.resourcemanager.hostname</name>
                <value>node01</value>
        </property>
        <property>
                <name>yarn.nodemanager.aux-services</name>
                <value>mapreduce_shuffle</value>
        </property>
</configuration>
```

- 2.2.7配置slaves文件
```
vi slaves #添加以下内容
node02
node03
```

- 2.2.8使用scp命令将配置好的hadoop安装包远程分发到其他节点
```
#远程分发
scp -r /software/hadoop-2.7.2 hadoop@node02:/software
#修改环境变量 , 三台均修改
vi /etc/profile 
```

- 3.第一次启动集群
- 3.1格式化HDFS
```
hdfs dfs namenode -format   #在node01节点执行该命令
或者hadoop namenode -format 也可以
```

- 3.2启动hdfs集群 ，在node01节点上，前提是要三台要设置时间同步
```
date -s 'yyyy-mm-dd HH:MM:SS'
hwclock -h #写入硬件
```

```
start-dfs.sh
jps查看是否有namenode进程
jps查看从节点是否有datanode进程
```

- 3.3启动yarn集群
```
start-yarn.sh
同样使用jps查看进程
主节点：resourcemanager
从节点：nodemanager
```

- 4.查看集群web端口(windows下使用浏览器，推荐Google，并且修改Windows下的hosts ip映射文件)
```
# hdfs集群
node01:50070

#yarn集群
node0:8088
```

- 4.1验证

[参考一](https://www.yiibai.com/hadoop/hadoop_enviornment_setup.html)

后记：说实话，我有点怀疑其研究价值，毕竟需要去搭建如此庞大的集群仅仅只是掌握其原理，而真正生产需要去搭建的是极其少数需求。
