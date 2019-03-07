<template>
<div>
  <div class="top-header uk-position-relative">
    <section>
      <div class="">

         <div class="uk-flex uk-flex-middle" uk-grid>

           <div class="uk-width-1-2@m">
             <div class="uk-height-1-1">
               <div class="uk-section say-panel">
                 <div class="uk-container section-header">
                   <div class=" uk-text-left@s uk-text-center">
                     <!--<p class="uk-margin-remove">Solo quisimos contar chistes...</p>-->
                     <div>
                       <h1 class="res-text">Sayrin, Agencia Digital</h1>
                       <h2 class="gray res-text">Imagina, Expresa & Crea</h2>
                     </div>
                     <p class="uk-width-large">La mezcla perfecta para hacer de tu marca algo increíble e innovador, trabajando con nuestras herramientas para impulsarte y diferenciarte de tu competencia.</p>

                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div class="uk-width-1-2@m">
             <div class="uk-overflow-hidden uk-position-relative">
               <div class=" uk-background-cover image-header" uk-img data-src="https://images.unsplash.com/photo-1544890712-d464ae76e9be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></div>
               <!--<img class="image-header  uk-width-1-1" src="https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">-->
               <div class="hover-image-header bg-default uk-position-cover"></div>
             </div>
           </div>
         </div>

      </div>
    </section>


      <div class="uk-position-bottom-center">
        <div class="uk-container">
          <div class="uk-overlay">
            <div class=" news-header  uk-background-default">
              <div class="uk-grid-small uk-grid-match" uk-grid>
                <div  class="uk-background-cover uk-width-small" data-src="https://cdn.dribbble.com/users/230091/screenshots/5276880/enrich_-_dribbble_-_shoot_2x.png" uk-img>

                </div>
                <div class="uk-width-expand">
                  <div class="uk-padding-small">
                       <h4 class="uk-margin-remove">Nuestro Primer Aniversario</h4>
                       <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>


  <section class="uk-section">
    <div class="uk-container uk-container-large">
      <h3>Nice, this is how I live</h3>
    </div>
  </section>

  <div class="uk-position-fixed uk-height-viewport main-loader"></div>

  <div class="uk-position-center anim-index">
    <img width="600" class="image-a" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/88736a72405477.5be5f10b8502c.jpg" alt="">
    <div class="uk-position-cover cover-black"></div>
    <div class="uk-position-cover image-a-cover"></div>
  </div>

  <div class="uk-position-center uk-text-center anim-index">
    <div>
      <div class="uk-overflow-hidden uk-margin">
        <h1 class="text-appear-mask">Quisimos contar chistes</h1>
      </div>
      <div class="uk-overflow-hidden">
        <h1 class="text-appear-mask">pero lo nuestro fue diseñar.</h1>
      </div>
    </div>
  </div>
</div>

</template>

<script>

import { TimelineLite, Back } from 'gsap'

export default {

   mounted(){
     const children = this.$el.querySelectorAll('.text-appear-mask');
     console.log(children)

      var tl = new TimelineLite()

      tl.to('.main-loader', 5, {
        ease: Power2.easeIn,
        transformOrigin: '50% 0%',
      }, 'begin')

      tl.to('.image-a-cover', .5, {
        ease: Power2.easeIn,
        transformOrigin: '50% 100%',
        startAt: {scaleY: 0},
        scaleY: 1,
      }, 'begin+=0.5')

      tl.to('.image-a', .5, {
        ease: Power2.easeIn,
        transformOrigin: '50% 100%',
        visibility: 'visible'
      }, 'begin+=1')

      for(var i = 0; i<children.length; i++){
        tl.to(children[i], 1,{
          ease: Power4.easeOut,
          startAt: { y: '100%' , visibility: 'visible'},
          y: '0%',
        }, 'begin+=' + (1.5 + i*0.1) )

        tl.to(children[i], 2,{
          ease: Power4.easeOut,
        }, 'begin+=' + (2.5 + i*0.1) )

      }

      tl.to('.image-a-cover', .5, {
        ease: Power2.easeIn,
        transformOrigin: '50% 0%',
        startAt: {scaleY: 1},
        scaleY: 0,
      }, 'begin+=1')


      tl.to('.image-a', 1, {
        ease: Power4.easeIn,
        transformOrigin: '50% 100%',
        startAt: {y: '0%'},
        y: '-150%',
      }, 'begin+=2')

      tl.to('.image-a', 1, {
        ease: Power4.easeIn,
        transformOrigin: '50% 100%',
        display: 'none',
      }, 'begin+=3')

      for(var i = 0; i<children.length; i++){
        tl.to(children[i], 1,{
          ease: Power3.easeIn,
          startAt: { y: '0%'},
          y: '-100%',
        }, 'begin+=' + (2 + i*0.1) )
      }

      tl.to('.main-loader', 1, {
        ease: Power4.easeIn,
        transformOrigin: '50% 0%',
        startAt: {y: '0%'},
        y: '-150%'
      }, 'begin+=2.5')

      /*tl.to('.main-loader', 1, {
        ease: Power2.easeIn,
        transformOrigin: '50% 0%',
        startAt: {},
        scaleY: 0,
      }, 'begin')*/

      tl.to('.section-header', 4, {
        ease: Expo.easeOut,
        transformOrigin: '50% 0%',
        startAt: {y: '20%'},
        y: '0%',
      }, 'begin+=2.5')

      tl.to('.image-header', 2,{
        ease: Expo.easeOut,
                startAt: {scale: 1.5, opacity: 1, rotation: -20},
                scale: 1,
                rotation: 0,
                opacity: 1
      }, 'begin+=3.5')

      tl.to('.hover-image-header', 1,{
        ease: Expo.easeOut,
        transformOrigin: '0% 100%',
                startAt: {scaleX: 1},
                scaleX: 0,
                display: 'none',
      }, 'begin+=3.5')
   },

  components: {

  }
}
</script>
