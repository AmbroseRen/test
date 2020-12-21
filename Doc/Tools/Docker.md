# Docker tutorial  [←](index.md)
Publish Date: 2020-10-20 11:09:26 +0000

  <div style="left:60%;">

  <div style="position：relative;float:left;width:25%;height:35px;"><a href="#kubernete">kubernete</a></div>

  <div style="position：relative;float:left;width:25%;height:35px;"><a href="#helm">helm</a></div>

  <div style="position：relative;float:left;width:25%;height:35px;"><a href="#pdf"></a></div>
  
  <div style="position：relative;float:left;width:25%;height:35px;"><a href="#jupyterextension"></a></div>

  </div>

- 1.[下载](https://docs.docker.com/engine/install/)

> Install FAQ

>> [Start hyper-V](https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization)

>> [更新 WSL 2 Linux 内核](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-kernel)

- 1.1[云镜像托管社区](https://hub.docker.com/)
- 1.1.2[公有社区映像](https://hub.docker.com/search?q=&type=image)

- 1.2[官方文档](https://docs.docker.com/engine/)

- 2.Common commands

```
docker -v  --查看版本
docker-compose -v
docker-machine -v
docker version
docker info
docker run hello-world --example

docker image ls --查看镜像
docker search nginx --搜索镜像

docker login --username=<USERNAME> --email=youremail@company.com --登录账号

WARNING: login credentials saved in /home/username/.docker/config.json
Login Succeeded

docker login --username=arnieswap> --替换用户名

docker pull xxx --从docker Hub下拉镜像(需登录账号)
docker pull bitnami/nginx --拉取他人镜像

docker push xxx --从本地push镜像到docker Hub库(需登录账号)

docker tag e7083fd898c7 arnieswap/my_repo:testing --标记镜像：IMAGE ID
docker push arnieswap/my_repo --push镜像

docker run -it xxx --运行本地镜像
docker run arnieswap/my_repo --运行他人docker Hub镜像

docker ps --查看当前正在运行容器
docker start aa97ba3292ce
docker stop aa97ba3292ce
docker restart aa97ba3292ce
docker attach aa97ba3292ce --进入当前容器

docker save verse_gapminder > verse_gapminder.tar --存档映像
docker load --input verse_gapminder.tar --读取存档映像

exit --退出
```

- 2.1进入映像Linux内壳

```
docker ps -a
docker exec -it 5add71172a46 /bin/bash
```

+ [参考](https://www.linux.com/training-tutorials/how-use-dockerhub/)

- 3.[加载测试](https://hub.docker.com/_/registry)
```
docker pull nginx
docker run --name nginx -p 80:80 -d nginx --必须映射80端口
```

```
docker pull registry

docker run -d -p 5000:5000 --restart always --name registry registry:2

docker pull ubuntu
docker run -it ubuntu bash
exit

docker tag ubuntu localhost:5000/ubuntu
docker push localhost:5000/ubuntu
```

## kubernete



## helm

[helm辅助k8s部署](https://www.cnblogs.com/zhanglianghhh/p/14165995.html)
