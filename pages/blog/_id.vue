<template>

  <div>

  <div class="main-content">

      <div class="toppy uk-background-default uk-position-relative">
        <article v-if="post" class="margin-top">
          <div class="uk-container tm-container-medium">
             <div class="uk-section uk-section-large" uk-grid>

               <div class="fix-position">

                   <div class="uk-section uk-section-large">
                     <div class="section-header">
                       <div class="uk-text-left@m" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
                         <div class="uk-grid-medium" uk-grid>
                           <div class="uk-width-3-5@m">
                             <div>
                               <h1 v-if="post.blogcategory" class="main-title uk-text-uppercase red appear-text">{{ post.blogcategory.name }}</h1>
                               <h5 class="normal-header appear-text">{{ post.title }}</h5>
                               <div class="uk-margin blog-card appear-text">
                                 <div class="uk-grid-small writer uk-flex uk-flex-middle uk-margin" uk-grid>
                                   <div class="uk-width-auto">
                                     <div >
                                       <img v-if="post.user.avatar"  class="uk-border-circle" width="40" :src="baseUrl + post.user.avatar.url" alt="">
                                     </div>
                                   </div>
                                   <div class="uk-width-expand">
                                     <div v-if="post.user">
                                         <h4 class="uk-margin-remove name">{{ post.user.name }}</h4>
                                         <p class="uk-margin-remove subtitle">{{ post.user.businessrole }}</p>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div class="uk-width-2-5@m  uk-flex uk-flex-bottom">
                             <div>
                               <p class="small-desc appear-text">{{ post.intro }}</p>
                             </div>
                           </div>
                         </div>

                       </div>

                    <!--  -->

                    <!-- -->

                     </div>
                   </div>

               </div>
             </div>

          </div>
          <div class="uk-position-relative uk-overflow-hidden">
            <div v-if="post.cover" class="uk-width-1-1 uk-padding-large blog-image uk-background-cover" uk-img :data-src="baseUrl + post.cover.url"  alt=""></div>
            <div class="uk-position-cover uk-background-default blog-cover"></div>
          </div>

          <section class="uk-section uk-section-large">



            <div class="uk-container uk-container-small">

              <VueMarkdown class=" blog-content">{{ post.content }}</VueMarkdown>
            </div>

          </section>

        </article>
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

import Img from '~/components/Image'
import axios from '~/plugins/axios'
import VueMarkdown from 'vue-markdown'

export default {
 data(){
   return{
     baseUrl: 'https://api.sayrin.cl',
     structuredData: {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": this.post.title,
      "image": this.baseUrl + this.post.cover.url,
      "editor": this.post.user.name ,
      "genre": "digital agency design",
      "keywords": "diseño agencia chile peru paginas web",
      "publisher": "Sayrin",
      "url": "https://sayrin.cl/blog/" + this.post.id,
      "description": "Amamos escribir cosas interesantes",
      "datePublished": "2019-03-20",
      "articleBody": this.post.intro,
      "publisher": {
   "@type": "Organization",
   "name": "Sayrin",
   "logo": {
     "@type": "ImageObject",
     "url": "https://google.com/logo.jpg"
   }
   },
       "author": {
          "@type": "Person",
          "name": this.post.user.name
      }
    },
   }
 },
  async asyncData({
    params
  }) {
    // We can use async/await ES6 feature
    const post = await axios.get(
      '/posts/' + params.id , {
      }
    );

    return {
      post: post.data,
    };
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
     script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
      title: this.post.title +' | Sayrin',
      meta: [
        { hid: 'og-title', property: 'og:title', content: this.post.title +' | Sayrin ' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'Sayrin - Agencia Digital' },
        { hid: 'og-description', property: 'og:description', content: this.post.intro },
        { hid: 'description', name: 'description', content: this.post.intro },
        { hid: 'og-image', name: 'og:image', content: this.baseUrl + this.post.cover.url },
        { hid: 'og-url', name: 'og:url', content: 'https://sayrin.cl/blog/' + this.post.id },
        // other meta
      ]
    }
  },
  components: {
     Img,
     VueMarkdown
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
      const chappear = el.querySelectorAll('.appear-text');
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

      for(var i = 0; i<chappear.length; i++){

        tl.to(chappear[i], 1,{
          ease: Power4.easeOut,
          startAt: { y: '50%' , opacity: 0},
          opacity: 1,
          y: '0%',
        }, 'begin+=' + (3.5  + i*0.3))

      }

      tl.to('.blog-cover', 6, {
        ease: Expo.easeOut,
        startAt: {x: '0%', y: '0%'},
                x: '-150%',
                y: '0%',

      },'begin+=4')

      tl.to('.blog-image', 3, {
        ease: Expo.easeOut,
                startAt: {x: '0%', y: '0%'},
                x: '0%',
                y: '0%',
                scale: 1,
                opacity: 1,

      },'begin+=4')

      tl.to('.blog-image', 3, {
        ease: Expo.easeOut,
                startAt: {scale: 2},
                scale: 1,
      }, 'begin+=4')

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

<style lang="scss" scoped>
 .appear-text{
   opacity: 0;
   transform: translateY(50%);
 }

 .blog-image{
   padding: 30%;
 }


</style>
