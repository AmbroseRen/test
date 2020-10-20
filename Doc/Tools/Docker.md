# Docker tutorial
Publish Date: 2020-10-20 11:09:26 +0000

- 1.[下载](https://docs.docker.com/engine/install/)

- 1.1[云镜像托管社区](https://hub.docker.com/)

- 1.2[官方文档](https://docs.docker.com/engine/)

- 2.Common commands

```
docker -v  --查看版本

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

exit --退出
```

+ [参考](https://www.linux.com/training-tutorials/how-use-dockerhub/)

