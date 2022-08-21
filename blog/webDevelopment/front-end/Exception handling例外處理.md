---
title: Exception handling 例外處理
tags: ["JavaScript"]
date: 2019/02/22
updated: 2019/02/22
meta:
  - name: description
    content: Exception handling 例外處理
  - name: keywords
    content: Exception handling,JavaScript
---
<Breadcrumb />
# Exception handling 例外處理 

## JavaScript的錯誤類型

- Error - 一般的錯誤情況
- InternalErro - JavaScript引擎内部的错误
- RangeError - 超出有效範圍值
- ReferenceError - 參考錯誤，當試圖存取一個不存在的變數
- SyntaxError - JavaScript語法錯誤
- TypeError - 變數的型別錯誤
- URIError - 無效URI

## try...catch...finally

```js
try {
    // 自己認為可能會有例外錯誤發生的程式碼
    // 或是一些程式加上if判斷
    // if(一些判斷式) throw 判斷成立的話就拋出指定的內容 
} catch (exception) {
    // 如果try區塊沒有發生例外錯誤，則不會跑catch區塊
    // 錯誤的資訊或用throw拋出的內容會放在exception參數裡，只能在catch區塊內引用。
    // 此處為處理該錯誤的程式碼區塊。
    // 如果此區塊有使用return，會直接跳到finally區塊執行finally區塊的程式碼，而不是整個跳離。
　  if (exception instanceof TypeError) {//使用instanceof可以判斷該錯誤是屬於哪種錯誤
      // 如果是TypeError型別錯誤，則執行此區塊程式
    } else if (exception instanceof ReferenceError) {
      // 如果是ReferenceError參考錯誤，則執行此區塊程式
    } else {
      // 其他錯誤跑這區的程式
    }
} finally {
    // 不管try區塊有沒有例外錯誤都會執行finally區塊的程式碼，
    // 有時可省略
    // 如果此區塊有使用return，就算catch區塊也有return，最後都會以finally裡的return內容為主。
}
```

## 自訂錯誤

```js

//自訂錯誤的名稱和內容
function DivisionByZeroError(message) {
  this.name = 'DivisionByZeroError';
  this.message = message;
}

// 繼承 Error 物件
DivisionByZeroError.prototype = new Error();
DivisionByZeroError.prototype.constructor = DivisionByZeroError;

// 建立 showError 的方法
DivisionByZeroError.prototype.showError = function() {
  return this.name + ': "' + this.message + '"';
}

//使用自訂錯誤
try {
    throw new DivisionByZeroError("Attempted division by zero!");
}
catch (exception) {
  console.log(exception.showError())  // DivisionByZeroError: "Attempted division by zero!"
}

```


<TagLinks />