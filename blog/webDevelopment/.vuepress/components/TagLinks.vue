<template lang="html">
  <div class="tagLinks">
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>

<style lang="stylus">
.tagLinks
  margin-top 30px
</style>