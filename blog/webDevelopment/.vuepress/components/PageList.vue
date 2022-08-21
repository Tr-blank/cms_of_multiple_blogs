<template>
  <div id="PageList">
    <h3>文章列表:</h3>
    <ul class="">
      <li class="pageItem" v-for="page in pageList">
        <a class="pageLink" :href="page.path" >{{page.title}}</a>
        <span class="pageDate">{{page.updated}}</span>
      </li>
    </ul>
  </div> 
</template>

<script>
  export default {
    name: "PageList",
    computed: { 
      pageList() {
        const parts = this.$page.path.split("/");
        const pathNum =  parts.length == 4 ? 2 : 1;
        const pages = [];
        for (let page of this.$site.pages) {
          let pathArray = page.path.split("/");
          if(pathArray[pathNum] == parts[pathNum] && pathArray[pathArray.length-1] != ''){
              // console.log(page.path);
            // console.log(page.title);
            pages.push({path: '/ITblog'+page.path, title: page.title, updated: page.frontmatter.updated});
          }
        }
        console.log(pages);
        return pages;
        // return this.$site.pages;
      },
    },
  };
</script>

<style lang="stylus" scoped>
.pageLink
  display inline-block
  line-height 25px
  color #5d686f
  vertical-align middle
.pageItem
  padding 5px 0
.pageDate
  display inline-block
  font-size 14px
  color #9eabb3
  vertical-align middle
  &::before
    content '-'
    padding 0 5px

</style>
