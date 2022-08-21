---
title: Git特定情境應用
tags: ["Git"]
date: 2019/11/08 
updated: 2019/11/08 
meta:
  - name: description
    content: Git特定情境應用
  - name: keywords
    content: Git
---
<Breadcrumb />

# Git特定情境應用


## 刪除最後幾筆commit紀錄

- 簡易瀏覽commin紀錄，找到要變動的commit id
```
git log --oneline
```

- 移動HEAD到要保留的commit，清除該commit之後的所有commit
```
git reset HEAD~2 //將HEAD移動後兩個commit
git reset <common id> //將HEAD移動到common id
git reset HEAD --hard  // 強制清除HEAD指定commit之後的所有commit
git reset <common id> --hard // —hard  將HEAD移動到指定的commit後強制清除該分支之後的commit
```

- 強制將修改的common紀錄上傳覆蓋到github（限制自己的分支）
```
git push -f origin <your-branch> 
```

## 合併連續的commit紀錄
```
git rebase -i <common id>
```
在跳出的Vim編輯視窗將想合併commit前面的pick改成squash，再按:wq儲存退出
```
pick cd12333 add main
pick cd12444 add main (改成 squash cd12444 add merge1)
pick cd12555 add merge2 (改成 squash cd12555 add merge2)
```
在跳出的Vim編輯視窗輸入合併後新commit的訊息，:wq除存退出
```
# This is a combination of 3 commits.
# This is the 1st commit message:

main (保留修改成新的commit訊息)

# This is the commit message #2: (刪除)

merge1 (刪除)

# This is the commit message #3: (刪除)

merge2 (刪除)

```

## HEAD操作錯誤想回復時，也是使用reset來處理HEAD移動的紀錄

- 查看HEAD移動的紀錄(包含reset紀錄)，如果使用reset刪除HEAD移動紀錄則會還原HEAD操作
```
git reflog 
git log -g
```

參考資料:

[【狀況題】把多個 Commit 合併成一個 Commit](https://gitbook.tw/chapters/rewrite-history/merge-multiple-commits-to-one-commit.html)

<TagLinks />