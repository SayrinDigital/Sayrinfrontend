<template>

  <div :data-category="project.service.name">
        <div class="post-card">
          <!--<nuxt-link :to="{name: 'blog-id', params: { id: project.id } }" class="uk-display-block">-->
          <Img v-if="project.cover" showinview inview="bottom-to-top" :source="baseUrl + project.cover.url"></Img>
        <!--</nuxt-link>-->
          <div class="uk-margin">
           <div  uk-grid>
             <div class="uk-width-expand">
               <div><h4 class="ptitle">{{ project.name }}</h4></div>
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
  props: ['project', 'position']
}
</script>

<style lang="css">
</style>
