<template>

  <div>

    <div class="blog">

   <div class="uk-flex uk-flex-middle" uk-grid>
     <div class="uk-width-3-5@m">
       <div>
         <Img v-if="post.cover"
          inview="bottom-to-top" :source="baseUrl + post.cover.url"></Img>
       </div>
     </div>
     <div class="uk-width-2-5@m">
       <div>
         <div class="uk-container tm-container-medium">
           <div class="uk-margin">
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
           <div>
             <h1>{{ post.title }}</h1>
             <p class="intro">{{ post.intro }}</p>
           </div>
         </div>
       </div>
     </div>
   </div>

   <section class="uk-section">
     <div class="uk-container uk-container-small">
       <div class="" uk-grid>
         <div class="uk-width-1-5@s">
           <div  uk-sticky="bottom: true; media: @s">
             <div>
               <section class="uk-margin-top">
                 <div class="uk-margin-auto">
                    <ul class="uk-nav uk-nav-default left-icons">
                      <li class=""><span uk-icon="icon:heart" class="uk-margin-small-right"></span>10</li>
                      <li class=""><span uk-icon="icon:happy" class="uk-margin-small-right"></span>290</li>
                      <li v-if="post.blogcategory" class=""><span uk-icon="icon:info" class="uk-margin-small-right"></span>{{ post.blogcategory.name }}</li>
                    </ul>
                 </div>
               </section>
             </div>
           </div>
         </div>
         <div class="uk-width-4-5@s">
           <div>
             <article>
               <VueMarkdown class="blog-content">{{ post.content }}</VueMarkdown>
             </article>
           </div>
         </div>
       </div>
     </div>
   </section>

   <div class="uk-container tm-container-medium">
            <hr class="uk-hr">
   </div>


    </div>

</div>

</template>

<script>

import Img from '~/components/Cover'
import axios from '~/plugins/axios'
import VueMarkdown from 'vue-markdown'

export default {
 data(){
   return{
     baseUrl: 'https://api.sayrin.cl',
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

    const structuredData = {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "headline": post.data.title,
          "image": 'https://api.sayrin.cl' + post.data.cover.url,
          "editor": post.data.user.name ,
          "genre": "digital agency design",
          "keywords": "diseño agencia chile peru paginas web",
          "publisher": "Sayrin",
          "url": "https://sayrin.cl/blog/" + post.data.id,
          "description": "Amamos escribir cosas interesantes",
          "datePublished": post.data.updatedAt,
          "articleBody": post.data.intro,
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
              "name": post.data.user.name
          }
        }

    return {
      post: post.data,
      structuredData
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


}
</script>
