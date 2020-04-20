---
id: build-in-configuration
title: 内建配置
sidebar_label: 内建配置
---

`@react-go/scripts` 基于 webpack、ESLint、Babel、postcss 等，并已配置了大量、具有通用性的配置项。你可以先了解已内置的配置有哪些，以便于针对自身需求进行配置扩展。

## 入口文件

默认入口文件为 `./src/index.js`，默认模板文件为 `./public/index.html`。

## 输出目录

打包编译时，默认输出目录为 `./dist`，并且会将 `./public` 目录下的文件原样复制到 `./dist` 目录下，`index.html` 文件除外。

## JavaScript

默认仅编译 `./src` 目录下的 JavaScript 文件，Babel 配置使用 `@babel/preset-env` 和 `@babel/preset-react`，并使用 `@babel/plugin-proposal-class-properties` 插件以支持新的类属性语法。

## ESLint

内置 [@react-go/eslint-config](https://github.com/react-go/eslint-config)，本地开发和编译时均有效，无需单独安装，不支持自定义。你可以在 `package.json` 中添加如下配置，使编辑器能够读取到此配置：

```json
"eslintConfig": {
  "extends": "@react-go/eslint-config"
}
```

`@react-go/eslint-config` 仅包含一些能帮你避免一些 Bug 的 ESLint 规则，代码样式（是否加分号等）的格式化建议使用 [Prettier](https://prettier.io) 完成。


## CSS

默认支持 `.css`、`.scss`、`.sass` 文件，同时支持 CSS Modules，并且 `./src` 下的样式文件会经过 PostCSS 处理，PostCSS 配置了 `postcss-flexbugs-fixes` 和 `postcss-preset-env`，支持 Stage 3+ 的 CSS 语法。

> 通常导入 CSS 的方式为 `import './styles.css'` 直接导入，当使用 `import styles from './styles.css'` 方式导入时会自动启用 CSS Modules。

## 环境变量

默认会读取 `.env` 和 `.env.[NODE_ENV]` 环境变量文件，并使用 webpack 的 DefinePlugin 将以 `REACT_GO_` 为前缀的环境变量注入的项目中，你可以在项目代码中通过 `process.env.REACT_GO_xx` 读取到。其中 `NODE_ENV` 在本地开发时为 `development`，在打包编译时为 `production`。

除了上述的 `process.env.REACT_GO_xx` 环境变量，还可以读取到 `process.env.NODE_ENV` 和 `process.env.APP_ENV`。其中 `APP_ENV` 可用于区分你的项目运行环境，如开发环境、测试环境、线上环境等，默认值为 `development`，`start` 和 `build` 命令均可通过 `--app-env xx` 方式传入任意值。

使用 `APP_ENV` 区分多种环境时，在 package.json 中配置示例如下：

```json
"scripts": {
  "start": "react-go start",
  "build:dev": "react-go build --app-env development",
  "build:test": "react-go build --app-env test",
  "build:beta": "react-go build --app-env beta",
  "build:production": "react-go build --app-env production"
}
```
