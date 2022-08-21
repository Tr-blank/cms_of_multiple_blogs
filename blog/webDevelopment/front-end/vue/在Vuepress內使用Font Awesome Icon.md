---
title: 在Vuepress內使用Font Awesome Icon
tags: ["VuePress", "Vue.js"]
date: 2019/02/15 
updated: 2019/02/15 
meta:
  - name: description
    content: 在Vuepress內使用Font Awesome Icon
  - name: keywords
    content: vue,Vuepress,筆記
---
<Breadcrumb />
# 在Vuepress內使用Font Awesome Icon

- 先在專案內安裝font awesome相關套件
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/fontawesome-free-solid
<!-- npm i --save @fortawesome/fontawesome-free-regular -->
npm i --save @fortawesome/vue-fontawesome
```

- 在.vuepress目錄下新增enhanceApp.js檔案，引入font awesome相關套件。
```js
//enhanceApp.js
import { library } from '@fortawesome/fontawesome-svg-core'
import solid from '@fortawesome/fontawesome-free-solid'
// import regular from '@fortawesome/fontawesome-free-regular'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  library.add(solid)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
} 
```

- 在需要使用font awesome icon的地方加上icon標籤

```
<font-awesome-icon icon="coffee" />
```
<TagLinks />