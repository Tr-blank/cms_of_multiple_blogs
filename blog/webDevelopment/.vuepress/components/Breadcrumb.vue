<template>
  <div id="breadcrumb">
    <router-link class="breadcrumb" 
      v-for="crumb in bread" 
      :key="crumb.path"
      :to="crumb.path"
    >
      {{crumb.title}}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb",
    computed: {
      bread() {
        const parts = this.$page.path.split("/");
        // console.log('this.$site', this.$site)
        if (!parts[parts.length - 1].length) { parts.pop(); }
        let link = "";
        const crumbs = [];
        for (let i = 0; i < parts.length-1; i++) {
          link += parts[i];
          const page = this.$site.pages.find((el) => el.path === link || el.path === link + "/");
          link += "/";
          if (page != null) {
            crumbs.push({path: page.path, title: page.frontmatter.title});
          }
        }
        return crumbs;
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .breadcrumb
    font-size 14px
    color #333
    &:hover
      color #555
    &::after
      content ">"
      font-family inherit
      font-size inherit
      margin 0 5px

    &:last-child
      cursor default
</style>
