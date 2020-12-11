# hosts method

编辑C:\WINDOWS\system32\drivers\etc\hosts文件,增加如下站点

72.14.219.190 xxx.blogspot.com

## 参考

墙妈妈域名虽然在国内被墙，但你仍可通过手动修改电脑Host的方法访问，下面是各电脑操作系统上Host文件的位置[参考](https://www.moerats.com/archives/114/)：

Windows：c:\windows\System32\drivers\etc\hosts

MacOS & Linux：/etc/hosts

以系统管理员身份打开hosts文件，在文件后加入下面这行并保存：

104.26.5.36 www.wallmama.com wallmama.com

在浏览器地址栏输入wallmama.com就可以不翻墙也能访问墙妈妈了。

刷新DNS的DOS命令

ipconfig /flushdns

（3）使用谷歌浏览器随意登陆Google、Gmail、维基百科、Twitter、Facebook等，

!!!但必须使用https加密方式打开

谷歌香港：https://www.google.com.hk

谷歌：https://www.google.com/ncr

配合 DNS：我们推荐您使用 8.8.8.8 , 8.8.4.4, 168.95.1.1, 114.114.114.114, 2001:470:20::2 、 2001:638:902:1::10 、 2001:4860:4860::8888 、 2001:4860:4860::8844 这些 DNS。

刷新 DNS 缓存：在更改了 hosts 后，建议立即刷新 DNS 缓存来应用更改。

Windows: 按下 Windows+R 键，运行 cmd ，在命令提示符运行命令 ipconfig /flushdns

OS X 10.10: 在［应用程序］［实用工具］［终端］运行命令 sudo discoveryutil udnsflushcaches

OS X 10.9: 在［应用程序］［实用工具］［终端］运行命令 dscacheutil -flushcache; sudo killall -HUP mDNSResponder

OS X 10.7 ~ 10.8: 在［应用程序］［实用工具］［终端］运行命令 sudo killall -HUP mDNSResponder

