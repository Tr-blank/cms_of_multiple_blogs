<template lang="html">
  <div class="aboutBlog">
    <section class="aboutBlog-wrapper">
      <p>嗨！我是提亞，正行常帶經地走在前端道路上。</p>
      <p>俯而讀，仰而思，時時繞室以旋後恍然大悟，記錄在 <a href="/ITblog/">Tiya's IT Notes</a>。</p>

    </section>
  </div>
</template>
<script>
export default {

  computed: {
    data () {
      return this.$page.frontmatter
    },

  }
}
</script>
<style lang="stylus">
.aboutBlog-wrapper
  max-width 1400px
  background-color rgba(0,0,0,.3)
  text-align center
  font-size 20px
  color #fff
  margin 0 auto
  padding 100px 10px
  position: relative;
  z-index 10
.aboutBlog
  background-color #000
  position: relative;
  &::after
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background url("http://tr-blank.github.io/images/1930571.jpg")
    // background-attachment fixed
    background-position: center 70%;
    background-size: cover;
    opacity .8
    z-index 5
    // background-attachment: fixed;


</style>