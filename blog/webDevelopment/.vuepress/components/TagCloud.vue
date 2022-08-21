<template>
  <div id="app">
      <TagCloud
      :data="tagsTest"
      nameKey="name"
      valueKey="value"
      :rotate = "wordRotate"
      :fontSize = "[30,80]"
      :font = "wordFont"
      :showTooltip="false"
      :wordClick="wordClickHandler">
      </TagCloud>
  </div> 
</template>

<script>
import TagCloud from 'vue-wordcloud'

export default {
  name: 'app', 
  computed: {
    tagsTest() {
      let tags = {}
      let nowtags = []
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (tag in tags) {//判斷是否是新標籤
            for(let i in nowtags){//否，將文章累計到該標籤內
              if(nowtags[i].name == tag){
                nowtags[i].value ++
              }
            }
          } else {
            tags[tag] = true//是，新增標籤及文章
            nowtags.push({'name':tag,"value":1})
          }
        }
      }
     return nowtags
    }
  },
  components: {
	  TagCloud
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
      window.location.href = '/ITblog/tags.html#'+ name;
      // window.location.reload('/ITbolg/tags.html#'+ name)
      // /ITbolg/tags.html#vuepress
    }
  },
    data() {
    return {
      wordRotate : {from: 0, to: 0, numOfOrientation: 0 },
      wordFont : "Roboto,Microsoft JhengHei",
      // showTooltip: false,
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],//:color="myColors"
    };
  }
}
</script>

<style lang="stylus">
.wordCloud
  background-color #fbfbfb
.text:hover
  opacity .6 
  cursor pointer
  transition 0.2s opacity ease
</style>