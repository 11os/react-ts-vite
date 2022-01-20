# react-ts-vite

当前为实验性质，待多项指标稳定后再进行下一步规划

```
pnpm + vite + react + antd-mobile-v5
```

## install

```sh
$ npm i -g pnpm # 强制使用pnpm作为包管理工具
$ pnpm i # 安装依赖
```

## 实用性检查项

- [x] sass&module 支持
- [x] px2vw 引入移动端适配
- [x] react-router 引入
- [x] url 多级路由支持 // 需挂载在 http://localhost:3000/test/sub/h5/ 下
- [x] antd-mobile-v5 基础使用 // 用于测试三方 UI 库，考虑后续部分 UI 自写
- [x] antd-mobile-v5 按需引入并检测打包大小
- [x] react动态组件支持 // suspense + lazy
- [ ] build 加入 [babel](https://github.com/vitejs/vite/issues/779#issuecomment-706469733) 并检测兼容性
- [ ] 同上，[浏览器支持](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)
- [x] 加载优化[Multi-Page App](https://vitejs.dev/guide/build.html#multi-page-app)
- [x] 研究组件独立打包，mpa 可算作一种潜在方式
- [x] eslint
- [ ] commitlint
- [ ] stylelint
- [x] 微信开发者工具dev环境运行报错

## 核心业务接入

- [ ] 登录注册页 
- [ ] 微信相关功能 
- [ ] jsbridge 协议
- [ ] deeplink 协议
- [ ] 核心功能单元测试接入
- [ ] 浏览器端单元测试接入
- [ ] 状态管理选型

## mpa dir

./index.html -> http://localhost:3000/test/sub/index.html
./h5/index.html -> http://localhost:3000/test/sub/h5/index.html

