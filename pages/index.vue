<template>
<div>

    <div class="top-header bg-default uk-position-relative uk-overflow-hidden">
      <img class="uk-hidden" src="/img/header-hd.png" @load="imgcoverloaded" alt="">
      <div class="uk-position-cover  uk-background-cover cover-header" uk-parallax="bgy: -50"   uk-img data-src="/img/header-hd.png"></div>
    <div class="uk-container tm-container-medium">
      <div uk-grid class="uk-flex uk-flex-middle min-height-viewport">
        <div class="uk-text-left@m" uk-parallax="opacity: 1,0">
          <div class="">
            <div class="uk-overflow-hidden uk-position-relative">
              <h1 class="main-title uk-text-uppercase red text-mask">Somos Sayrin, Agencia Digital</h1>
            </div>
            <div class="uk-overflow-hidden uk-position-relative">
              <h5 class="main-header text-mask">La mezcla perfecta para</h5>
              </div>
              <div class="uk-overflow-hidden uk-position-relative">
                <h5 class="main-header text-mask">innovar tu marca.</h5>
              </div>

            <p class="white uk-width-large@m text-chars">La mezcla perfecta para hacer de tu marca algo increíble e innovador, trabajando con nuestras herramientas para impulsarte y diferenciarte de tu competencia.</p>
            <div class="uk-margin-large-top">
              <a class="say-link-a anim-link" href="#intro" uk-scroll>Conocer Más <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right;"></span> </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>

    <section id="intro" class="uk-background-default">

    <div class="uk-section uk-section-xlarge">
      <div class="uk-container tm-container-medium">

        <div class="uk-text-left@m" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
          <div class="uk-grid-medium" uk-grid>
            <div class="uk-width-3-5@m">
              <div>
                <h1 class="main-title uk-text-uppercase red">¿Cómo te podemos ayudar?</h1>
                <h5 class="main-header">Llevándote a la era digital.</h5>
              </div>
            </div>
            <div class="uk-width-2-5@m  uk-flex uk-flex-bottom">
              <div>
                <p class="small-desc">Nos importa expresar tu identidad corporativa frente a tus clientes y público en general sin perder ese toque que te hizo genial.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

   <Img inview="right-to-left" source="https://images.unsplash.com/photo-1544006658-5ed4d689eb5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></Img>

    <div class="uk-section uk-section-large">
      <div class="uk-container tm-container-medium">
        <div class="uk-text-left@m">
          <div>
            <div class="uk-width-2-5@m">
              <div uk-scrollspy="cls:uk-animation-slide-bottom-medium">
                <h2 class="normal-header">Elevamos tu marca hasta el último nivel.</h2>
              </div>
            </div>
          </div>

          <div class="uk-section uk-section-large">
            <div class="" uk-grid>
              <div class="uk-width-2-5@m"></div>
              <div class="uk-width-3-5@m">
                <div>
                  <div uk-scrollspy="cls: uk-animation-fade; target: p; delay: 100" class="uk-child-width-1-2@m" uk-grid>
                    <div>
                      <div class="say-list">
                        <div><p>Diseño de Sitios Web  <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Diseño UI/UX <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Desarrollo Web <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Redacción de Contenido <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Adminitración de Contenido <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>

                      </div>
                    </div>
                    <div>
                      <div class="say-list">
                        <div><p>Diseño Web Responsivo <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Identidad Corporativa <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Estrategia de Contenido <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Servicios SEO <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                        <div><p>Analíticas <span class="uk-icon uk-margin-small-left icon-red" uk-icon="hashtag"></span> </p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    </section>


    <section class="bg-secondary">

     <div class="uk-section uk-section-xlarge">

       <div class="uk-container tm-container-medium">
         <div class="uk-text-center" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
           <h2 class="normal-header uk-margin-auto uk-width-xlarge@m">Algunos amigos que hicimos en el camino.</h2>
         </div>
         <div class="uk-section uk-section-large">

           <div class="uk-child-width-1-2@m uk-grid-large proyects-list" uk-grid>
             <div>
               <div>
                 <Img inview="bottom-to-top" source="/img/a.jpg"></Img>
                 <div class="uk-margin uk-text-right">
                   <h2>Asesorías CGV</h2>
                   <p class="uk-margin-remove small-desc">Sitio Web Corporativo</p>
                 </div>
               </div>
             </div>
             <div>
               <div>
                 <Img inview="bottom-to-top" source="/img/d.jpg"></Img>
                 <div class="uk-margin uk-text-right">
                   <h2>Arte Impreso</h2>
                   <p class="uk-margin-remove small-desc">Plataforma Ecommerce, Fotografía de Productos</p>
                 </div>
               </div>
             </div>
             <div>
               <div>
                 <Img inview="bottom-to-top" source="/img/c.jpg"></Img>
                 <div class="uk-margin uk-text-right">
                   <h2>TooPlay</h2>
                   <p class="uk-margin-remove small-desc">Plataforma Ecommerce</p>
                 </div>
               </div>
             </div>
             <div>
               <div>
                 <Img inview="bottom-to-top" source="/img/b.jpg"></Img>
                 <div class="uk-margin uk-text-right">
                   <h2>EM Comunicaciones</h2>
                   <p class="uk-margin-remove small-desc">Fotografía Corporativa</p>
                 </div>
               </div>
             </div>
           </div>

         </div>


          <div class="uk-text-center">
            <a class="say-link-b" href="#">Ver Más Proyectos <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right;"></span> </a>
          </div>

       </div>

     </div>

    </section>


      <section class="bg-default">

        <div class="uk-section uk-section-xlarge">
          <div class="uk-container tm-container-medium">
            <div class="uk-text-left@m" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
              <div class="uk-grid-medium" uk-grid>
                <div class="uk-width-3-5@m">
                  <div>
                    <h1 class="main-title uk-text-uppercase red">Nuestro Gestor de Contenido</h1>
                    <h5 class="normal-header uk-width-large@m">Administra toda la información de tu sitio web.</h5>
                  </div>
                </div>
                <div class="uk-width-2-5@m  uk-flex uk-flex-bottom">
                  <div>
                    <p class="small-desc white">Nos podemos dar el lujo de no depender de un gestor de contenido externo. Con nuestro gestor de contenido podrás almacenar, editar y publicar información dentro de tu sitio web en cualquier momento.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Img inview="right-to-left" source="/img/cms.jpeg"></Img>

        <div class="uk-section uk-section-xlarge">

          <div class="uk-container tm-container-medium">
            <div class="uk-child-width-1-2@m" uk-grid>

              <div></div>
              <div>
                <div uk-scrollspy="cls: uk-animation-fade; target:> div; delay: 100">

                  <div class="uk-width-large@m uk-margin-xlarge">
                    <div class="icon-red uk-margin">
                      <span uk-icon="icon: check; ratio: 2"></span>
                    </div>
                    <h1 class="cms-header">01. Objetivo</h1>
                    <p class="white">Nos gusta mantener un mismo ecosistema de productos en los cuales nuestros clientes no tengan que buscar herramientas externas para la administración de su sitio web.</p>
                  </div>

                  <div class="uk-width-large@m uk-margin-xlarge">
                    <div class="icon-red uk-margin">
                      <span uk-icon="icon: heart; ratio: 2"></span>
                    </div>
                    <h1 class="cms-header">02. Conectados</h1>
                    <p class="white">En el panel de administración te mostramos noticias e información con respecto a que sucede internamente en nuestro equipo y de la misma manera sentirnos en constante conexión con usted.</p>
                  </div>

                  <div class="uk-width-large@m uk-margin-xlarge">
                    <div class="icon-red uk-margin">
                      <span uk-icon="icon: paint-bucket; ratio: 2"></span>
                    </div>
                    <h1 class="cms-header">03. Adaptable</h1>
                    <p class="white">Cada panel de administración viene adaptado con el contenido ajustado a tus necesidades. Olvídemonos de opciones que ni sabemos para que están ahí.</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>



      </section>

    <section class="bg-sayrin">

     <div class="uk-section uk-section-xlarge">
        <div class="uk-container tm-container-medium">
          <h1 class="main-title uk-text-uppercase white">Somos Sayrin, Agencia Digital</h1>
          <p class="large uk-width-4-5@m">Somos una agencia digital dedicada al diseño de productos digitales pensada en innovar el mercado chileno. Nos importa expresar tu identidad corporativa frente a tus clientes y público en general sin perder ese toque que te hizo genial.</p>
        </div>
     </div>

    </section>


     <section class="uk-background-default">
       <div class="uk-section uk-section-xlarge">
         <div class="uk-container tm-container-medium">
           <div class="uk-flex uk-flex-middle uk-grid-large" uk-grid>
             <div class="uk-width-3-5@m">
               <div>
                 <Img inview="right-to-left" source="/img/section-a.jpg"></Img>
               </div>
             </div>
             <div class="uk-width-2-5@m">
               <div>
                  <h1 class="end-header">Seguimos creciendo</h1>
                  <p class="uk-width-large">Sayrin nació un día entre la conversación de dos amigos que necesitaban innovar en la actualidad, crear nuevos productos, nuevas ideas y plasmarlas.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>



    <div class="uk-position-fixed uk-height-viewport main-loader"></div>

    <!--<div class="uk-position-center anim-index">
      <img width="600" class="image-a" src="https://images.unsplash.com/photo-1521436503723-b40e48c64e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80" alt="">
      <div class="uk-position-cover cover-black"></div>
      <div class="uk-position-cover image-a-cover"></div>
    </div>-->

    <div class="uk-position-center anim-index">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
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
import LatestEntries from '~/components/Blog/LatestEntries'
import Img from '~/components/Image'


export default {

  data(){
    return{
      waypointed: false,
      tl: null,
      alreadyshown: false,
      iscoverloaded: false
    }
  },

   mounted(){


    //this.introAnimation()



   },

   methods: {

     imgcoverloaded(){
       this.iscoverloaded = true
        this.introAnimation()
     },

      introAnimation(){
        this.tl = new TimelineLite()
        const chars = this.$el.querySelectorAll('.text-chars')

        for(var i = 0; i< chars.length; i++){

          var content = chars[i].innerHTML.split('')
          var newContent = ""

          for( var e = 0; e < content.length; e++){
            newContent += ('<span class="uk-overflow-hidden uk-position-relative"><span class="text-char">' + content[e] + '</span></span>' )
          }

          chars[i].innerHTML = newContent

        }

        const children = this.$el.querySelectorAll('.text-appear-mask');
        const rings = this.$el.querySelectorAll('.ring');



         this.tl.to('.main-loader', 4, {
           ease: Power2.easeIn,
           transformOrigin: '50% 0%',
         }, 'begin')


         /*this.tl.to('.image-a-cover', .5, {
           ease: Power2.easeIn,
           transformOrigin: '50% 100%',
           startAt: {scaleY: 0},
           scaleY: 1,
         }, 'begin+=0.5')

         this.tl.to('.image-a', .5, {
           ease: Power2.easeIn,
           transformOrigin: '50% 100%',
           visibility: 'visible'
         }, 'begin+=1')*/



         for(var i = 0; i<children.length; i++){
           this.tl.to(children[i], 1,{
             ease: Power4.easeOut,
             startAt: { y: '100%' , visibility: 'visible'},
             y: '0%',
           }, 'begin+=' + (.5 + i*0.1) )

           this.tl.to(children[i], 2,{
             ease: Power4.easeOut,
           }, 'begin+=' + (1.5 + i*0.1) )

         }

         for(var i = 0; i<rings.length; i++){
           this.tl.to(rings[i], 5, {
             ease: Power4.easeOut,
             startAt: { opacity: 1, scale: 0, visibility: 'visible' },
             scale: 3,
             opacity: 0,

           }, 'begin+=' + (2 + i*0.1 ))

           this.tl.to(rings[i], .0001, {
             ease: Power4.easeOut,
             display: 'none'

           }, 'begin+=' + (6.9 + i*0.1 ))

         }



         /*this.tl.to('.image-a-cover', .5, {
           ease: Power2.easeIn,
           transformOrigin: '50% 0%',
           startAt: {scaleY: 1},
           scaleY: 0,
         }, 'begin+=1')


         this.tl.to('.image-a', 1, {
           ease: Power4.easeIn,
           transformOrigin: '50% 100%',
           startAt: {y: '0%'},
           y: '-150%',
         }, 'begin+=2')

         this.tl.to('.image-a', 1, {
           ease: Power4.easeIn,
           transformOrigin: '50% 100%',
           display: 'none',
         }, 'begin+=3')*/

         for(var i = 0; i<children.length; i++){
           this.tl.to(children[i], 1,{
             ease: Power3.easeIn,
             startAt: { y: '0%'},
             y: '-100%',
           }, 'begin+=' + (2 + i*0.1) )
         }

         this.tl.to('.main-loader', 1, {
           ease: Power4.easeIn,
           transformOrigin: '50% 0%',
           startAt: {y: '0%'},
           y: '-150%'
         }, 'begin+=2.5')

         /*this.tl.to('.main-loader', 1, {
           ease: Power2.easeIn,
           transformOrigin: '50% 0%',
           startAt: {},
           scaleY: 0,
         }, 'begin')*/

         this.tl.to('.section-header', 4, {
           ease: Expo.easeOut,
           transformOrigin: '50% 0%',
           startAt: {y: '20%'},
           y: '0%',
         }, 'begin+=2.5')

         this.tl.to('.image-header', 2,{
           ease: Expo.easeOut,
                   startAt: {scale: 1.5, opacity: 1, rotation: -20},
                   scale: 1,
                   rotation: 0,
                   opacity: 1
         }, 'begin+=3.5')

         this.tl.to('.hover-image-header', 1,{
           ease: Expo.easeOut,
           transformOrigin: '0% 100%',
                   startAt: {scaleX: 1},
                   scaleX: 0,
                   display: 'none',
         }, 'begin+=3.5')

         /*this.tl.to('.main-content', 1, {
           ease: Power4.easeIn,
           startAt: { opacity: 0 },
           opacity: 1
         },'begin+=4')*/

         const titlechild = this.$el.querySelectorAll('.text-mask');

         for(var i = 0; i< titlechild.length; i++){
           this.tl.to(titlechild[i], 1,{
             ease: Expo.easeOut,
             startAt: { y: '100%' },
             transformOrigin: '0% 100%',
             y: '0%',
           }, 'begin+=' + (4 + i*0.3) )
         }

         this.tl.to('.cover-header', 3, {
           ease: Expo.easeOut,
                   startAt: {x: '0%', y: '0%'},
                   x: '0%',
                   y: '0%',
                   scale: 1,
                   opacity: 1,

         },'begin+=3.7')

         this.tl.to('.cover-header', 3, {
           ease: Expo.easeOut,
                   startAt: {scale: 1.3, rotation: 50},
                   scale: 1,
                   rotation: 0,
         }, 'begin+=3.7')

         const charchild = this.$el.querySelectorAll('.text-char');

         for(var i = 0; i< charchild.length; i++){

           this.tl.to(charchild[i], 1,{
             ease: Expo.easeOut,
             startAt: { y: '100%', opacity: 0 },
             transformOrigin: '0% 100%',
             opacity: 1,
             y: '0%',
           }, 'begin+=' + (4.3 + i*0.01) )

         }

         this.tl.to('.anim-link', 5, {
           ease: Expo.easeOut,
                   startAt: {opacity: 0},
                   opacity: 1,
                   rotation: 0,
         }, 'begin+=4.6')

         /*this.tl.to('#mainnav', 2, {
           ease: Expo.easeOut,
                   startAt: {y: '-100%'},
                   y: '0%'
         }, 'begin+=5')*/

         this.alreadyshown = true

      }

   },

  components: {
    LatestEntries,
    Img,

  },

  transition: {
     mode: 'out-in',
     css: false,
     beforeEnter (el) {


    },
    enter (el, done) {

      var tl = new TimelineLite({ onComplete: done })

      tl.to('.transition-bg', 1, {
        ease: Power4.easeIn,
        transformOrigin: '50% 0%',
        startAt: {y: '0%'},
        y: '-100%'
      }, 'begin')

      tl.to('.st0', .01, { fill: "#fff" });

      tl.play()

    },
    leave (el, done) {
      var tl = new TimelineLite({ onComplete: done })

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

<style>


.cover-header, .text-char{
  opacity: 0;
}

.anim-link{
  opacity: 0;
}

.ring{
  visibility: hidden;
}



</style>
