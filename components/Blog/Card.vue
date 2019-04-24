<template>

  <div :data-category="entry.blogcategory.name">
        <!--<div class="blog-card">
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
          <Img   "inview="bottom-to-top" alt=""></Img>
       </nuxt-link>
          <div class="uk-margin">
            <h5 v-if="entry.blogcategory" class="category"></h5>
            <h3 class="title">{{ entry.title }}</h3>
            <p>{{ entry.updatedAt }}</p>
          </div>
        </div>-->
        <div class="post-card">
          <nuxt-link :to="{name: 'blog-id', params: { id: entry.id } }" class="uk-display-block">
          <Img v-if="entry.cover" showinview inview="bottom-to-top" :source="baseUrl + entry.cover.url"></Img>
        </nuxt-link>
          <div class="uk-margin">
           <div  uk-grid>
             <div class="uk-width-expand">
               <div><h4 class="ptitle">{{ entry.title }}</h4></div>
             </div>
             <div  class="uk-width-auto">
               <div class="details uk-text-right">
                 <p class="uk-display-inline-block uk-margin-small-right">18<span class="uk-icon uk-margin-small-left" uk-icon="heart"></span></p>
                 <p class="uk-display-inline-block">260<span class="uk-icon uk-margin-small-left" uk-icon="happy"></span></p>
               </div>
             </div>
           </div>
          </div>
        </div>
  </div>

</template>

<script>

import Img from '~/components/Cover'

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
