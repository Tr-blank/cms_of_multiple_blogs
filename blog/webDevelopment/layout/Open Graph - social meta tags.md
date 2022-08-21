---
title: Open Graph - social meta tags
tags: ["HTML"]
date: 2019/02/22 
updated: 2019/02/24 
meta:
  - name: description
    content: Open Graph - social meta tags
  - name: keywords
    content: Open Graph,social meta tags,html
---
<Breadcrumb />

# Open Graph - social meta tags

在文章頁面加上社群分享按鈕後，發現在社群網站上看分享的貼文內容有些怪異，於是去查了查社群抓取分享貼文內容的規則是什麼。

於是找到了Open Graph，原來社群有專門的標籤來自訂分享內容的標題、圖片和說明文字。

參考網站:[如何使用 Open Graph, Twitter Card 自訂網頁在 Facebook, Google, Twitter… 的顯示內容](http://blog.shihshih.com/social-meta-tag/)

```html
<meta charset="utf-8">
<title>網頁標題. Maximum length 60-70 characters</title>
<meta name="description" content="網頁簡介. No longer than 155 characters." />
<meta name="keywords" content="關鍵字,META,SEO">
<meta name="author" content="作者" >
<meta name="copyright" content="xxx版權所有" >

<!-- Google Authorship and Publisher Markup -->
<link rel="author" href=" https://plus.google.com/[Google+_Profile]/posts"/>
<link rel="publisher" href="https://plus.google.com/[Google+_Page_Profile]"/>

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@publisher_handle ,Twitter 的帳號">
<meta name="twitter:creator" content="@author_handle 作者">

<!--Open Graph data -->
<meta property="og:title" content="網頁標題" />
<meta property="og:type" content="website" />
<meta property="og:url" content="網址" />
<meta property="og:image" content=" http://example.com/image.jpg" />
<meta property="og:description" content="網頁簡介" />
<meta property="og:site_name" content="Site Name, i.e. Moz" />
<meta property="article:tag" content="Article Tag" />
```

<TagLinks />