---
id: getting-started
title: 快速开始
sidebar_label: 快速开始
---

React Go 是一套用于开发 React 项目的工具和库，其核心 `@react-go/scripts` 是用于开发和打包的脚手架工具。

`@react-go/scripts` 封装了 webpack、Babel、ESLint 等配置，大部分配置内容参考自 [Create React App](https://github.com/facebook/create-react-app)。webpack 配置通过 `webpack-chain` 来生成，并对外暴露接口以便用户修改 webpack 配置项。

## 使用模板

目前提供一个简单的模板项目 [template-default](https://github.com/react-go/template-default)，可以将本项目 clone 到本地后使用，或者在该项目的 GitHub 页面点击 “Use this template” 按钮创建新项目。

## 手动配置

### 安装

使用 npm 或 yarn 安装 `@react-go/scripts`：

```bash
# npm
npm install @react-go/scripts

# yarn
yarn add @react-go/scripts
```

### 使用

在 `package.json` 的 `scripts` 字段中添加如下内容：

```json
{
  "scripts": {
    "start": "react-go start",
    "build": "react-go build"
  }
}
```

然后按照目录要求中的[目录结构](/docs/folder-structure)新建必需的目录和文件，使用以下命令启动本地服务或构件项目：

* `npm run start` 启动本地开发服务
* `npm run build` 构建项目
