# webpack使用说明

#### 1.如无node，安装node
#### 2.进入目录，安装package.json中的依赖包
`npm install -S`
`npm install -D`
#### 3.根据需要构建项目
build（生产，打包目录dist）
`npm run build`

dev（开发，打包目录dev）
`npm run dev`

hot（开发-热模块替换，打包目录dev）
`npm run hot`


##### 访问路径：
>http://localhost:8080/webpack-dev-server/
>或者
>http://localhost:8080

#### 4.mock 模拟

##### 开发模式
>自动引入config.dev.js

```
const Config = {
    //http请求时，进行url地址拼接，如 Config.apiUrl+Config.urlsEnum.rank
    //如果是本地服务器切开启了热模块替换，修改/data为/api，webpack的dev服务器自动重写路由
    apiUrl: "/data",
    urlsEnum: {
        rank: '/rank.json'
    }
};
module.exports = Config;
```

##### 生产模式
>自动引入config.js

```
const Config = {
    //http请求时，进行url地址拼接，如 Config.apiUrl+Config.urlsEnum.rank
    apiUrl: "//www.github.com",
    urlsEnum: {
        rank: '/webfront/rank'
    }
};
module.exports = Config;
```
#### 5.替换antd的iconfont到本地(一般不建议替换，直接引用antd的线上iconfont库)
##### 5.1.复制app下的iconfont-2.8.x到node-modules/antd/dist下
##### 5.2.在index.less中加入以下代码，注意顺序
```
   @import "~antd/dist/antd.less";
   @icon-url:'~antd/dist/iconfont-2.8.x/iconfont';
```
##### 5.3.在babel-plugin-import中按需引入antd，设置如下代码

```
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd"
        //使用此方式，style不能按需引入，即style不设置
      }
    ]
  ]
 ```