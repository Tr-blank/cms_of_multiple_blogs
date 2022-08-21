---
title: Git平時常見情境應用筆記
tags: ["Git"]
date: 2019/02/15 
updated: 2019/02/22 
meta:
  - name: description
    content: Git平時常見情境應用筆記
  - name: keywords
    content: Git
---
<Breadcrumb />

# git平時常見情境應用筆記

## 初始化建立git版控

- 在目前所在的目錄初始化,建立儲存區，開始進行git版控

```
git init 
```

## 將GitHub儲存庫複製一份到本機
```
git clone xxx.git
```

## 建立版本變更紀錄

將打算留下版本紀錄的異動加入暫存區，如果有新增的檔案則一定要先add該檔案到暫存區
```
git add <任合異動的檔案>

# 如果專案內異動的檔案很多，可直接使用--all
git add --all

#將當下所在目錄以下的所有異動加入暫存區，如果當下是在專案根目錄，則與--all相同作用
git add .
```

將暫存區的內容存到儲存庫版控記錄內，一定要寫描述讓未來的自己或同事知道這次變動了什麼
```
git commit -m "<描述變動的內容>"
```

縮短add和commit兩個流程的指令，單純的修改檔案可直接將異動存到儲存區，但如果有新增的檔案仍然要先add，不然就會略過該新增的檔案異動
```
git commit -a -m "<描述變動的內容>"
```

## 分支操作

- 忘記分之名稱或查看當前所在分支
```
git branch -a
```

- 同時有多個功能開發分支及bug修正分支在實作時，常在不同分支切換
```
git checkout <branch name>
```

- 新增分支（要先切換到之後要合併的分支去新增）
```
git checkout <branch name>
git branch <new branch name>
```

- 刪除分支（要先切換到其他分支）
```
git checkout <other branch name>
git branch -d <delete branch name>
git branch -D <delete branch name> //如果該分支未合併到其他分支，則會要求再輸入一次指令(d改大寫D)
```

- 合併分支，切換到其中一支分支，再對要把內容合併過來的分支下指令
```
git fetch origin <merge branch name> // 如果要合併得分支是在遠端，則要先取得連線
git merge origin/<merge branch name> // 合併分支
```

## 同時執行多個分支開發時，暫存變動狀態

- 查看目前尚未commit的目錄變動狀態，如果有變動紀錄則無法直接切換分支，要先將變動紀錄暫存起來
```
git status
```

- 將變動部分加到暫存區內，就可暫時清空尚未commit的變動紀錄而切換到其他分支開發
```
git stash //存到暫存區
git stash list //看看有幾筆暫存的工作
git stash show //看看暫存的檔案
```

- 開發完其他分支要切換回原本分支繼續開發時，可將存在暫存的變動還原到尚未commit的記錄狀態順便也刪掉紀錄，繼續開發
```
git stash pop //還原最近的一筆暫存紀錄
git stash pop stash@{2} 回到指定的暫存紀錄
```

## 上傳到遠端github版控

- 建立遠端github連線

```
git remote add origin git@github.com:<github帳戶>/<專案名>.git
//git remote add origin https://github.com/<github帳戶>/<專案名>.git //沒有SSH用HTTPS
```

- 檢查目前連線的遠端口

```
git remote -v
```

- 解除遠端連線

```
git remote rm origin
```

- 將專案變更新增到遠端紀錄

```
git push -u origin master
```

<TagLinks />