# node安装包
```
npm install cli-js -g

```

> 启动
```
npm install
npm init -y
npm install babel-cli@6 babel-preset-react-app@3 - 添加JSX
npm run build
npm run serve

npm run test
npm run lint
```

```react
npm start
npm build
npm test
npm eject
```

> 安装yarn lib M

>> 方式一：[下载官方安装包](https://classic.yarnpkg.com/zh-Hans/docs/install#windows-stable)，一定要配置环境变量。

>> 方式二：NPM安装

```
npm i yarn -g
-i：install 
-g：全局安装（global）,使用 -g 或 --global
```

>> yarn常用命令

```
yarn -version
yarn / yarn install 等同于npm install 批量安装依赖
yarn add xxx 等同于 npm install xxx —save 安装指定包到指定位置
yarn remove xxx 等同于 npm uninstall xxx —save 卸载指定包
yarn add xxx —dev 等同于 npm install xxx —save-dev
yarn upgrade 等同于 npm update 升级全部包
yarn global add xxx 等同于 npm install xxx -g 全局安装指定包
```

> 配置Nodejs镜像

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

