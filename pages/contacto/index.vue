<template>

<div>

<div class="main-content">

    <div class="toppy uk-background-default uk-position-relative">
      <section class="margin-top">
        <div class="uk-container">
           <div class="uk-section" uk-grid>

             <div class="fix-position">

                 <div class="uk-section">
                   <div class="section-header">
                     <div class="">
                       <div class="uk-width-4-5@m uk-margin-auto">
                         <h1 class="main-title uk-text-uppercase">Somos todo oídos</h1>
                         <h5 class="main-header">Conversemos sobre tu futuro proyecto.</h5>
                       </div>
                     </div>
                   </div>
                 </div>

             </div>
           </div>

        </div>
      </section>

      <section class="">

      <div class="uk-container">
        <div class="uk-width-4-5@m uk-margin-auto">
          <form id="contact-form">

            <div class="uk-margin">
              <input class="uk-input uk-form-large" type="text" placeholder="¿Cuál es tu nombre?">
            </div>

            <div class="uk-margin">
              <input class="uk-input uk-form-large" type="text" placeholder="¿Cuál es tu correo?">
            </div>

            <div class="uk-margin">
              <textarea class="uk-textarea uk-form-large" rows="4" type="text" placeholder="Cuéntanos acerca de tu futuro proyecto."></textarea>
            </div>

            <div class="uk-margin">
              <div class="uk-text-right">
                <a class="say-link-b" href="#">Enviar <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right;"></span> </a>
              </div>
            </div>

          </form>
        </div>
      </div>

      </section>

      <section>



      </section>

    </div>
</div>

  <div class="uk-position-center uk-text-center anim-index">
    <div>
      <div class="uk-overflow-hidden uk-margin">
        <h1 class="text-appear-mask">Nos encantaría saber que</h1>
      </div>
      <div class="uk-overflow-hidden">
        <h1 class="text-appear-mask">tienes en mente.</h1>
      </div>
    </div>
  </div>

</div>


</template>

<script>

import axios from '~/plugins/axios'
import { TimelineLite, Back } from 'gsap'


export default {

  head () {
    return {
      title: 'Conversemos Un Momento | Sayrin',
      meta: [
        { hid: 'og-title', property: 'og:title', content: 'Conversemos Un Momento | Sayrin ' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'Sayrin - Agencia Digital' },
        { hid: 'og-description', property: 'og:description', content: 'Cuéntanos un poco sobre ti y como te podemos ayudar en la era digital.' },
        { hid: 'description', name: 'description', content: 'Cuéntanos un poco sobre ti y como te podemos ayudar en la era digital.' },
        { hid: 'og-url', name: 'og:url', content: 'https://sayrin.cl/contacto/' }
        // other meta
      ]
    }
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
