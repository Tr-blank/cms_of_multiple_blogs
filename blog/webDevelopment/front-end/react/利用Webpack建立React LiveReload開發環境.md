---
title: 利用Webpack建立React LiveReload開發環境
tags: ["React","Webpack"]
date: 2019/02/22
updated: 2019/02/22
meta:
  - name: description
    content: 利用Webpack建立React LiveReload開發環境
  - name: keywords
    content: React,Webpack
---
<Breadcrumb />
# 利用Webpack建立React LiveReload開發環境

由於React是把html也塞到js裡，網站畫面複雜一點的話js檔看起來會很長一串，所以習慣開發時把程式碼分成一個一個小一點的js檔(模組)用require來關聯需要使用的檔案(模組)，但這樣的作法會讓網頁發送一堆請求感覺也不太好，所以決定使用看看打包套件。

在決定使用Webpack來做把關聯的檔案(模組)打包的工作後，發現Webpack好像可以做到一些原本用gulp做的事情，於是好奇的嘗試了一番。

此篇文章便是紀錄用Webpack來實作LiveReload功能的過程。
## 前置動作

確認node.js、npm、webpack、webpack-dev-server已全局安裝完成。

在命令提示字元裡輸入

```
node -v 
```

如有出現版本編號即是node已安裝。輸入：

```
npm list -g --depth=0
```

將會出現已安裝的全局套件清單，如果裡頭有npm、webpack、webpack-dev-server即是該套件已安裝在全局。

(安裝套件指令"npm install -g 套件名稱")

## 建立步驟

### 1. 創建專案資料夾，開啟命令提示字元(cmd)移動(cd)到專案資料夾目錄
### 2. 輸入npm init指令建立package.json(專案設定檔)

修改初始package.json內容：

```json
{
  "name": "專案名稱",
  "version": "1.0.0",   //專案版本
  "description": "",    //專案簡介
  "main": "server.js",  //入口檔(app.js)
  "author": "Tiya",     //製作者
  "dependencies": {},   //生產環境套件清單
  "devDependencies": {} //開發環境套件清單
 }
 ```
### 3. 安裝套件到專案


- react - 用於創建前端用戶介面的前端框架。
- webpack - 強大的打包套件，類似於Browserify。
- webpack-dev-server - 小型server(使用node.js+express)。
- react-hot-loader - 實作LiveReload功能的主要套件。
- babel-loader - 用於編譯jsx與ES6語法。

安裝指令如下：

```
npm install react webpack webpack-dev-server react-hot-loader babel-loader --save-dev
```

註.--save-dev指令：安裝套件同時記錄到package.json中的devDependencies。

### 4. 新增檔案及資料夾到專案目錄。

目前專案目錄：

```
  - 專案資料夾
    + node_modules資料夾 //裡頭是剛剛安裝的套件
    package.json 
```

新增修改後的專案目錄(可調整)：

```
  - 專案資料夾
    + node_modules
    - app             //放置react原檔資料夾
      main.js         //打包入口檔
      ...             //其他react檔案
    - public          //放置前端資源的資料夾
      + img
      + js            //webpack打包完成的bundle.js檔案放置資料夾
      + css
    index.html        //專案網站首頁
    package.json
    server.js         //專案入口檔、伺服器設定檔(app.js)
    webpack.config.js //webpack打包設定檔
```
### 5. 修改各個檔案程式碼

server.js - 專案入口檔、伺服器設定檔

```js
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config'); //依目錄結構不同而有所調整

var compiler = webpack(config);

var bundler = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath, //抓取webpack.config.js內的設定
    hot: true, //LiveReload重要設定
    noInfo: false,
    historyApiFallback: true
});

bundler.listen(8080, 'localhost', function() { 
    console.log('Webpack-dev-server is live on port 8080');
});
```

webpack.config.js - webpack打包設定檔

```js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',//使用webpack-dev-server
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/main.js') //打包入口檔位置
  ],
  output: {
    path: path.resolve(__dirname, 'public/js/'), //打包檔案的存放位置
    publicPath: '/public/js/', //網站訪問打包檔案的路徑
    filename: 'bundle.js' //打包檔案的名稱
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],//針對js檔使用热替换和編譯jsx與ES6語法的套件
      include: path.join(__dirname, 'app')//只需追蹤app裡的js檔(需打包的檔案)，節省時間。
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//使用webpack-dev-server的Hot Module Replacement Plugin套件
    new webpack.NoErrorsPlugin()//程式碼沒有錯誤時再更新頁面。
  ]
};
```

index.html - 專案首頁

加入兩個script標籤載入"//localhost:8080/webpack-dev-server.js"和"js/bundle.js"。

### 6. 打包react檔案到public/js資料夾下

命令提示字元移動到webpack.config.js所在目錄，執行打包指令：

```
webpack
```
完成後public/js目錄下就會出現打包完成的bundle.js檔案。

### 7. 執行server.js入口檔，在瀏覽器網址列輸入//localhost:8080/便可看見react建置的網頁介面。

### 8. 之後每修改app資料夾底下的react原檔後存檔，網頁介面就會自動更新不用重新整理。

記得LiveReload的網頁介面是方便開發的bundle虛擬檔所產生，實際的js/bundle.js依然是舊有的程式碼，所以在修改最後需要在打包一次(重複步驟6)來更新js/bundle.js。

或者也可直接用webpack --watch指令。

<TagLinks />