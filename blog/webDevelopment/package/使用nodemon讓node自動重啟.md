---
title: 使用nodemon讓node自動重啟
tags: ["nodemon"]
date: 2015/06/07 
updated: 2015/06/07 
meta:
  - name: description
    content: 使用nodemon讓node自動重啟
  - name: keywords
    content: nodemon
---
<Breadcrumb />
# 使用nodemon讓node自動重啟

每次修改node專案裡的後端js檔都需要手動重啟node來觀看執行結果，剛開始踏入Node世界就覺得這一點真不方便，以前用的PHP+apache就方便多了。但因為只是麻煩了點，當時比較想快點做出基本的網站功能，就直接去研究比較重要的網站功能實現。

現在急迫的功能都有雛形，差不多該回頭解決一下這點小麻煩，不然每次修改後都要手動關閉node.exe再執行app.js開啟伺服器，真的挺笨的。

於是google了一下查到了nodemon(相同功能的工具還有supervisor)。

## 安裝nodemon

透過npm指令全局安裝nodemon:

```
npm install -g nodemon
```

每次啟動伺服器的node指令換成nodemon:

```
nodemon app.js
```

就可以讓node有自動重啟的功能了。

## 修改Sublime text 3的build設定

但其實我一直覺得打指令很麻煩，所以都是用Sublime text 3去build app.js來開啟伺服器。確認自動重啟功能沒問題後，下一步就是修改Sublime text 3的build設定了。

打開Sublime text 3上方的Preferences選項，選擇第一個項目Browse Packages...，從開啟的資料夾裡點擊進Nodejs套件資料夾，找到Nodejs.sublime-build檔案拉進Sublime text 3來修改:

```json
{
  "cmd": ["node", "$file"],
  "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
  "selector": "source.js",
  "shell":true,
  "encoding": "utf8",
  "windows":
    {
        "cmd": ["nodemon", "$file"],
    },
  "linux":
    {
        "cmd": ["killall node; node", "$file"]
    }
}
```

存檔後就可以用Sublime text 3來執行nodemon app.js指令來開啟伺服器了。

相關資料:
- [nodemon官網](http://nodemon.io/)
- [nodemon github](https://github.com/remy/nodemon)
- [在 Express 开发中使用 nodemon | bubkoo](http://bubkoo.com/2014/12/02/use-nodemon-with-node-applications/)


<TagLinks /> 