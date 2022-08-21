---
title: VuePress增加標籤雲功能
tags: ["VuePress", "Vue.js"]
date: 2019/02/15 
updated: 2019/02/15 
meta:
  - name: description
    content: VuePress增加標籤雲功能
  - name: keywords
    content: vue,Vuepress,筆記
---
<Breadcrumb />
# VuePress增加標籤雲功能

在components目錄底下新增TagLinks.vue組件

``` vue
<template lang="html">
<div>
    Tags:
    <router-link
    v-for="tag in $page.frontmatter.tags"
    :key="tag"
    :to="{ path: `/tags.html#${tag}`}">
    {{tag}}
    </router-link>
</div>
</template>
```

在文章頂加上標籤設定及引入標籤連結組件

```md
---
tags: ["vuepress", "vuejs"]
---
<!--文章內容-->
<TagLinks />
```

在新增TagList.vue組件，用於瀏覽網站全部標籤


``` vue
<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
      <h2 :id="tag">
        <router-link
          :to="{ path: `/tags.html#${tag}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag}} {{tags[tag].length}}
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {}
      console.log(this.$site.pages);
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (tag in tags) {
            tags[tag].push(page)
          } else {
            tags[tag] = [page]
          }
        }
      }
      console.log(tags);
      return tags
    }
  }
}
</script>

```

在更目錄新增標籤頁面tags.md，引入標籤清單組件

```md
<ClientOnly>
  <TagCloud />
</ClientOnly>
```

<!-- 參考網站 -->
<!-- https://code.roygreenfeld.com/cookbook/adding-tags-to-vuepress.html -->

<TagLinks />