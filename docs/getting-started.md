---
id: getting-started
title: 快速开始
sidebar_label: 快速开始
---

React Go 是一套用于开发 React 项目的工具和库，其核心 `@react-go/scripts` 是用于开发和打包的脚手架工具。

`@react-go/scripts` 封装了 webpack、Babel、ESLint 等配置，大部分配置内容参考自 [Create React App](https://github.com/facebook/create-react-app)。webpack 配置通过 `webpack-chain` 来生成，并对外暴露接口以便用户修改 webpack 配置项。

## 安装

```bash
# npm
npm install @react-go/scripts

# yarn
yarn add @react-go/scripts
```

## 使用

在 `package.json` 的 `scriprs` 字段中添加如下内容：

```json
{
  "scripts": {
    "start": "react-go start",
    "build": "react-go build"
  }
}
```

* `npm start` 启动本地开发服务
* `npm run build` 构建项目
