---
id: configuration
title: 可配置项
sidebar_label: 可配置项
---

## open

* Type: `boolean | string`
* Default: `true`

启动本地服务时是否自动打开浏览器，当值为 `string` 类型时，则为要打开的域名。

比如值为 `your-app.test` 时，会自动打开 `http://your-app.test:8000`。域名和 IP 的映射需要自行处理。

## port

* Type: `number`
* Default: `8000`

启动本地服务时的端口号。

## dist

* Type: `string`
* Default: `./dist`

编译后静态文件的输出路径，必须为相对于项目根目录的相对路径。

## publicPath

* Type: `string`
* Default: `/`

部署应用时的基本 URL。

比如你的应用部署在 `http://your-app.com/dashboard` 下，需要将 `publicPath` 配置为 `/dashboard`。

## proxy

* Type: `object | function`
* Default: `{}`

本地开发时的代理，该值会直接传递给 webpack-dev-server 的 proxy 配置，具体请参考 [webpack 配置](https://webpack.js.org/configuration/dev-server/#devserverproxy)。

## webpack

* Type: `function`
* Default: 无

通过 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 修改 webpack 配置，值为一个函数，无需返回值，参数如下：

* config: webpack-chain 的 Config 实例
* options
  * mode: 当前 webpack 的 mode，只读，值为 `'development' | 'production'`
  * sourcemap: 当前是否需要生成 sourcemap，只读，值为布尔值
  * applyStyleLoaders：扩展 CSS 的支持，可用于添加对 Less 的支持等，暂不建议使用，具体用法可参考 [react-go/preset-antd](https://github.com/react-go/preset-antd)

比如添加 webpack 的 alias：

```javascript
const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));
  },
};
```

## babel

* Type: `object`
* Default: 无

扩展 Babel 的配置。目前支持 `presets` 和 `plugins` 两个字段，配置格式和 Babel 配置一致，React Go 会将传入的值追加到内置的 Babel 配置中。

比如添加一个 Babel 插件：

```javascript
module.exports = {
  babel: {
    plugins: ['@babel/plugin-proposal-decorators']
  }
};
```

## postcss

* Type: `object`
* Default: 无

扩展 PostCSS 的配置。目前仅支持 `plugins` 字段，配置格式和 PostCSS 配置一致，React Go 会将传入的值追加到内置的 PostCSS 配置中。

比如添加一个 Babel 插件：

```javascript
module.exports = {
  postcss: {
    plugins: [require('autoprefixer')]
  }
};
```

## presets

* Type: `array`
* Default: 无

preset 是用于复用自定义配置的方式。比如你的多个项目都需要在 React Go 的基础上添加一些自定义配置，你就可以把这些通用的配置拆分出去，发布到 npm 等，以便于在多个项目中复用。

每个 preset 都是一个 React Go 的配置对象，但是仅支持 `webpack`、`babel`、`postcss`、`presets` 这几个字段。目前提供一个 `@react-go/preset-antd` 用于添加对 Ant Design 的支持，配置如下：

```javascript
module.exports = {
  presets: [require('@react-go/preset-antd')()]
};
```

preset 里面可以使用 preset，一个项目中可以同时使用多个 preset，`react-go.config.js` 中的配置优先级高于 preset 中的配置。
