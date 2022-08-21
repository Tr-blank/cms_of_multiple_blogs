---
title: VuePress靜態網站搭建紀錄
tags: ["VuePress", "Vue.js"]
date: 2019/02/15 
updated: 2019/02/15 
meta:
  - name: description
    content: Vuepress默認樣式修改紀錄
  - name: keywords
    content: vue,Vuepress,筆記
---
<Breadcrumb />

# VuePress靜態網站搭建紀錄

## 全局安裝Vuepress
```
    npm install -g vuepress
```
## 依照官方目錄結構創建對應的資料夾及檔案
```
    project
        ├─── docs
        │   ├── README.md
        │   └── .vuepress
        │       ├── public
        │       └── config.js
        └── package.json
```

## 在package.json裡添加兩個命令:

```
"scripts": {
    "start": "vuepress dev docs",
    "build": "vuepress build docs"
},
```

## 啟動Vuepress
```
npm run start
```
便可以在 http://localhost:8080/ 本機端瀏覽套用了默認樣式的vuepress網站(預設就跟vuepress官網一模一樣)


## 設定及檢查ga

安裝 @vuepress/plugin-google-analytics
```
yarn add -D @vuepress/plugin-google-analytics
# OR npm install -D @vuepress/plugin-google-analytics
```
在vuepress設定檔加上GA ID
``` js
//.vuepress/comfig.js
module.exports = {
    plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '填入你的GA ID'
      }
    ]
  ],
}
```
發佈到線上後，可以在Google Chrome安裝[Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=zh-TW)工具來檢查是否成功安裝GA。

## 手動發布

儲存新文章後，輸出靜態頁面到dist資料夾

``` 
npm run build
cd dist
git init
git add -A
git commit -m 'new'
git remote add origin git@github.com:<github帳戶>/<專案名>.git
//git remote add origin https://github.com/<github帳戶>/<專案名>.git //沒有SSH用HTTPS
git push -f origin master
```

確認文章真的更新到github上

## 自動發布 windows批次檔作法

在跟目錄新增deploy.bat檔案，裡面輸入以下內容

```
cd dist
REM 臨時附加git.exe到path环境变量，來執行git指令
set path=%path%;C:\Program Files\Git\cmd
git init
git add -A
git commit -m "deploy"
git remote add origin https://github.com/<github帳戶>/<github專案名>.git
git push -f origin master
cd ../
```

之後要發布新文章，打以下指令即可

```
npm run build
deploy.bat
```


<TagLinks />