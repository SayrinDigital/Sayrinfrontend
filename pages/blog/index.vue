<template>

<div>

<div class="main-content">

    <div class="toppy uk-background-default uk-position-relative">
      <section class="margin-top">
        <div class="uk-container">
           <div class="uk-section uk-section-large" uk-grid>

             <div class="fix-position">

                 <div class="uk-section uk-section-large">
                   <div class="section-header">
                     <div class="uk-text-center">
                       <div class="uk-width-4-5@m uk-margin-auto">
                         <h1 class="main-title uk-text-uppercase">Nuestro Blog</h1>
                         <h5 class="main-header">También nos gusta escribir en nuestro tiempo libre.</h5>
                       </div>
                     </div>
                   </div>
                 </div>

             </div>
           </div>

        </div>
      </section>

      <section>

       <div class="uk-section">
         <div class="uk-container tm-container-medium">
           <div v-if="posts" class="uk-child-width-1-2@m uk-grid-large" uk-grid="masonry: true">
             <Card v-for="(post,index) in posts" :position="index%2==0" :entry="post" :key="post.id"></Card>
           </div>
         </div>
       </div>

      </section>

    </div>
</div>

  <div class="uk-position-center uk-text-center anim-index">
    <div>
      <div class="uk-overflow-hidden uk-margin">
        <h1 class="text-appear-mask">Si! También escribimos</h1>
      </div>
      <div class="uk-overflow-hidden">
        <h1 class="text-appear-mask">cosas interesantes.</h1>
      </div>
    </div>
  </div>

</div>


</template>

<script>

import axios from '~/plugins/axios'
import { TimelineLite, Back } from 'gsap'
import Card from '~/components/Blog/Card'

export default {

  async asyncData({
    params
  }) {
    // We can use async/await ES6 feature
    const posts = await axios.get(
      '/posts', {
        params: {
          '_sort': 'updatedAt:DESC'
        }
      }
    );

    return {
      posts: posts.data,
    };
  },
  data(){
    return{
    }
  },
  components: {
    Card
  },
  mounted(){
    const children = this.$el.querySelectorAll('.st0');
    console.log(children)
    for(var i=0; i<children.length; i++){
      children[i].setAttribute("style","fill: #212121;")
    }
  },

  transition: {
     mode: 'out-in',
     css: false,
     appear: true,
     beforeEnter (el) {


    },
    enter (el, done) {
      const children = el.querySelectorAll('.text-appear-mask');
      var tl = new TimelineLite({ onComplete: done })

      tl.to('.transition-bg', 2.5, {
       ease: Power4.easeIn,
       transformOrigin: '50% 0%',
       startAt: {y: '0%'},
      }, 'begin')

      tl.to('.st0', .01, { fill: "#333" });

      for(var i = 0; i<children.length; i++){
       tl.to(children[i], .8,{
         ease: Power4.easeOut,
         startAt: { y: '100%' , visibility: 'visible'},
         y: '0%',
       }, 'begin+=' + (.5 + i*0.1) )

       tl.to(children[i], 1,{
         ease: Power4.easeOut,
       }, 'begin+=' + (1 + i*0.1) )

       tl.to(children[i], .8,{
         ease: Power3.easeIn,
         startAt: { y: '0%'},
         y: '-100%',
       }, 'begin+=' + (2 + i*0.1) )

      }

      tl.to('.transition-bg', 1, {
       ease: Power4.easeIn,
       transformOrigin: '50% 0%',
       startAt: {y: '0%'},
       y: '-100%'
      }, 'begin+=2.5')

      tl.to('.main-content', 1, {
       ease: Power4.easeIn,
       startAt: { opacity: 0 },
       opacity: 1
      },'begin+=2.5')

      tl.play()
    },
    leave (el, done) {
      var tl = new TimelineLite({onComplete: done})

      tl.to('.main-content', 1, {
        ease: Power4.easeIn,
        startAt: { opacity: 1 },
        opacity: 0
      },'begin')

      tl.to('.transition-bg', 1, {
        ease: Power4.easeIn,
        transformOrigin: '50% 0%',
        startAt: {y: '-100%'},
        y: '0%'
      }, 'begin+=0.5')

      tl.play()
    }
  },

}
</script>

<style lang="css">
</style>
