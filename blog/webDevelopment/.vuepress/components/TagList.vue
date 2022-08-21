<template lang="html">
  <div>
    <div class="tagBlock" :id="tag" v-for="tag in Object.keys(tags)">
      <h2 class="tagtitle" >
        <router-link
          :to="{ path: `/tags.html#${tag}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag}} <span class="tagNum">- {{tags[tag].length}}</span>
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{ path: page.path}">{{page.frontmatter.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {}
      // console.log(this.$site.pages);
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
      // console.log(this.$site);
      console.log(tags);
      return tags
    }
  }
}
</script>

<style lang="stylus">

.tagNum
  color #a0a0a0
  font-size 16px
  display inline-block
  vertical-align middle
.tagtitle
  margin 0
.tagBlock
    padding-top: 60px;
    margin-top: -50px;
    
</style>