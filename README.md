## Autodesk Forge的简单demo
> 该项目为基于vue-cli@2.0的、使用Autodesk Forge引擎加载3D文件的简单demo。
[Autodesk API官网](https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/)

> V7版本无需再引入Three.js

> svf文件为轻量化后的文件，[轻量化地址](https://models.autodesk.io/)（应该是这个，需要Key和secret才能进去，也就是说需要官网注册）


项目架构Vue-cli@2.0 + vue-router + scss

配置文件
webpack.base.conf.js
```
const webpack = require('webpack')
module.exports = {
  externals: {
    'three': 'THREE',
    'forge-viewer': 'Autodesk'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.ProvidePlugin({
      THREE: 'three',
      Autodesk: 'forge-viewer'
    })
  ]
}
```

index.html 引入scripe和css
```
    <link rel="stylesheet" href="./static/forgeV7/style.min.css">
    <script src="./static/forgeV7/viewer3D.min.js"></script>
```

#### 首先安装依赖
```
npm install
```

#### 启动项目
```
npm run dev
```