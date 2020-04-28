---
id: available-scripts
title: 可用命令
sidebar_label: 可用命令
---

在项目根目录下，可以通过运行 `npx react-go --help` 查看所有可用的命令和简略的帮助信息。

## start

`react-go start`

启动一个本地开发服务。

Options:

* `-e --app-env [env]` 设置 `process.env.APP_ENV` 变量，默认为 `development`

## build

`react-go build`

构建项目。

Options:

* `-e --app-env [env]` 设置 `process.env.APP_ENV` 变量，默认为 `development`
* `--analyze` 可视化地展示打包输出文件的大小