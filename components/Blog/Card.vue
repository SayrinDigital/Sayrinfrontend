<template>

  <div>
        <div class="blog-card">
          <div class="uk-grid-small writer uk-flex uk-flex-middle uk-margin" uk-grid>
            <div class="uk-width-auto">
              <div >

                <img v-if="entry.user.avatar"  class="uk-border-circle" width="40" :src="baseUrl + entry.user.avatar.url" alt="">

              </div>
            </div>
            <div class="uk-width-expand">
              <div v-if="entry.user">
                  <h4 class="uk-margin-remove name">{{ entry.user.name }}</h4>
                  <p class="uk-margin-remove subtitle">{{ entry.user.businessrole }}</p>
              </div>
            </div>
          </div>
        <nuxt-link :to="{name: 'blog-id', params: { id: entry.id } }" class="uk-display-block">
          <Img v-if="entry.cover" :source="baseUrl + entry.cover.url "inview="bottom-to-top" alt=""></Img>
       </nuxt-link>
          <div class="uk-margin">
            <h5 v-if="entry.blogcategory" class="category">{{ entry.blogcategory.name }}</h5>
            <h3 class="title">{{ entry.title }}</h3>
            <!--<p>{{ entry.updatedAt }}</p>-->
          </div>
        </div>
  </div>

</template>

<script>

import Img from '~/components/Image'

export default {
  data(){
    return{
      baseUrl: 'https://api.sayrin.cl'
    }
  },
  components: {
    Img
  },
  props: ['entry', 'position']
}
</script>

<style lang="css">
</style>
