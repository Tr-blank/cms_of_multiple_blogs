---
title: RWD響應式網站的三種圖片處理方式
tags: ["HTML","CSS","RWD"]
date: 2019/11/07 
updated: 2019/11/07 
meta:
  - name: description
    content: RWD響應式網站的三種圖片處理方式
  - name: keywords
    content: RWD,HTML,CSS
---
<Breadcrumb />

# RWD響應式網站的三種圖片處理方式

## HTML img标签的srcset和sizes屬性

#### 使用時機：在不同裝置尺寸看起來都一樣的圖片

只依照設備像素比(DPR)去替換相對應的圖片

```html
<img 
  alt="SEO產品圖片描述"
  src="productImage-1280.jpg"
  srcset="
    productImage-768.jpg 1x,
    productImage-768@2x.jpg 2x"
>
```

依照設備像素比(DPR)及可視區域(Viewport)去替換合適的圖片

```html
<img
  alt="SEO產品圖片描述" 
  src="productImage-1280.jpg"
  sizes="
    (max-width: 480px) 50vw,
    (max-width: 768px) 100vw,
    (max-width: 1280px) 1280px,
    1440px"
  srcset="
    productImage-375.jpg 375w,
    productImage-768.jpg 768w,
    productImage-1024.jpg 1024w,
    productImage-1280.jpg 1280w,
    productImage-768@2x.jpg 1536w,
    productImage-1024@2x.jpg 2048w"
>
```

## HTML picture标签

#### 使用時機：在不同裝置尺寸影像會有些許調整的圖片

只依照可視區域(Viewport)去替換相對應的圖片

```html
<picture>
  <source media="(min-width: 1024px)" srcset="productImage_pc.jpg">
  <source media="(min-width: 768px)" srcset="productImage_pad.jpg">
  <source media="(min-width: 480px)" srcset="productImage_mobile.jpg">
  <img alt="SEO產品圖片描述" src="productImage-1280.jpg">
</picture>
```

依照設備像素比(DPR)及可視區域(Viewport)去替換合適的圖片

```html
<picture>
  <source
    media="(min-width: 769px)"
    srcset="
      productImage_pc.jpg 1x,
      productImage_pc@2x.jpg 2x,
      productImage_pc@3x.jpg 3x
    " 
  >
  <source
    media="(min-width: 768px)"
    srcset="
      productImage_pad.jpg 1x,
      productImage_pad@2x.jpg 2x,
      productImage_pad@3x.jpg 3x
    " 
  >
  <source
    media="(min-width: 480px)"
    srcset="
      productImage_mobile.jpg 1x,
      productImage_mobile@2x.jpg 2x,
      productImage_mobile@3x.jpg 3x
    " 
  >
  <img
    alt="SEO產品圖片描述"
    src="productImage-1280.jpg"
  >
</picture>
```

## CSS Media Queries的min-device-pixel-ratio條件

#### 使用時機：在不同裝置尺寸替換合適的背景圖

```css
.bg{
  background-image: url('bg_pc.jpg');
}
@media screen and (-webkit-min-device-pixel-ratio: 2),
screen and ( min--moz-device-pixel-ratio: 2),
screen and ( -o-min-device-pixel-ratio: 2/1),
screen and ( min-device-pixel-ratio: 2){
  .bg{
    background-image: url('bg_pc@2x.jpg');
  }
}
@media screen and (max-width: 768px){
  .bg{
    background-image: url('bg_pad.jpg');
  } 
}
@media screen and (max-width: 768px),
screen and (-webkit-min-device-pixel-ratio: 2),
screen and ( min--moz-device-pixel-ratio: 2),
screen and ( -o-min-device-pixel-ratio: 2/1),
screen and ( min-device-pixel-ratio: 2){
  .bg{
    background-image: url('bg_pad@2x.jpg');
  }
}
@media screen and (max-width: 480px){
  .bg{
    background-image: url('bg_mobile.jpg');
  } 
}
@media screen and (max-width: 480px),
screen and (-webkit-min-device-pixel-ratio: 2),
screen and ( min--moz-device-pixel-ratio: 2),
screen and ( -o-min-device-pixel-ratio: 2/1),
screen and ( min-device-pixel-ratio: 2){
  .bg{
    background-image: url('bg_mobile@2x.jpg');
  }
}
```

參考資料:

[響應式圖片（Responsive Images）](https://cythilya.github.io/2018/08/24/responsive-images/)

[Retina Display Media Query](https://css-tricks.com/snippets/css/retina-display-media-query/)

[HD & Retina Display Media Queries](https://coderwall.com/p/jlrerg/hd-retina-display-media-queries)

<TagLinks />