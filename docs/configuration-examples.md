---
id: configuration-examples
title: 配置示例
sidebar_label: 配置示例
---

以下提供一些扩展配置的示例，所有配置均在项目根目录的 `react-go.config.js` 文件中。

## 配置 webpack 别名

通过 `import` 或 `require` 导入文件时，经常会出现 `../../` 这样的代码，可以通过配置别名更方便地导入文件。例如将 `@` 指向项目的 `./src` 目录：

```javascript
const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias.set('@', path.resolve(__dirname, './src'));
  },
};
```

导入 `./src/components/MyButton.jsx` 组件时，可以这么写：

```javascript
import MyButton from '@/components/MyButton';
```

执行多次 `config.resolve.alias.set` 方法，可以设置多个别名。

## 支持 Ant Design

为了实现 Ant Design 的按需导入和自定义主题，我们提供了 `@react-go/preset-antd`，只需要安装 [@react-go/preset-antd](https://www.npmjs.com/package/@react-go/preset-antd) 这个包，然后在配置文件中引入即可：

```javascript
const path = require('path');

module.exports = {
  presets: [
    require('@react-go/preset-antd')(),
  ],
};
```

## 添加 Babel 插件

一些第三方库在使用时需要配置 Babel 插件，或者想要支持更多 ECMAScript 语法需要添加对应的 Babel 插件。以添加 `babel-plugin-styled-components` 插件为例，先安装好插件，然后添加如下配置：

```javascript
module.exports = {
  babel: {
    plugins: [
      ['babel-plugin-styled-components', { ssr: false }],
    ],
  }
};
```

`babel` 字段内可包含 `plugins` 和 `presets` 字段，格式与 Babel 配置文件相同。
