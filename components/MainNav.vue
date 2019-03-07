<template>
<div>

  <div class="uk-container uk-container-large" id="mainnav">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item">
          <nuxt-link to="/"><img width="130" src="/img/mainlogo.svg" alt=""></nuxt-link>
        </div>
      </div>
      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <a href="" class="uk-button contact-button">Contáctanos</a>
        </div>
        <div class="uk-navbar-item">
          <a class="menu-navbar" @click="openMenu()"><span class="uk-icon" uk-icon="icon: menu"></span></a>
        </div>
      </div>
    </nav>
  </div>

  <div class="menu-navbar-left">
  </div>

  <div class="menu-navbar-container">
    <div>
      <div class="uk-position-relative">

        <div class="uk-flex uk-flex-middle uk-grid-large" uk-grid>
           <div class="uk-width-2-5 uk-background-cover uk-overflow-hidden uk-position-relative uk-height-viewport panel-left-side" uk-img data-src="/img/bg.jpg">
              <div class="uk-background-default uk-position-cover inner-panel"></div>
           </div>
           <div class="uk-width-3-5  uk-position-relative">
             <div class="uk-container">

                 <div class="uk-section uk-section-small">
                   <div class="uk-flex uk-flex-middle uk-grid-large" uk-grid>
                     <div>

                       <div>

                         <!--<div class="bottom-margin-large">
                           <div >
                             <h1 class="nav-item title-main">Servicios</h1>
                           </div>
                           <div class="uk-child-width-auto@s uk-grid-large" uk-grid>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Digital</li>
                                   <li class="nav-item"><a href="#">Desarrollo Web</a></li>
                                   <li class="nav-item"><a href="#">Diseño Web</a></li>
                                   <li class="nav-item"><a href="#">Branding</a></li>
                                   <li class="nav-item"><a href="#">Marketing</a></li>
                                 </ul>
                               </div>
                             </div>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Físico</li>
                                   <li class="nav-item"><a href="#">Serígrafia & Estampado</a></li>
                                   <li class="nav-item"><a href="#">Papelería</a></li>
                                 </ul>
                               </div>
                             </div>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Arte</li>
                                   <li class="nav-item"><a href="#">Ilustración</a></li>
                                   <li class="nav-item"><a href="#">Fotografía</a></li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>-->

                         <!--<div>
                           <div class="uk-margin">
                             <h1 class="nav-item title-main">Nosotros</h1>
                           </div>
                           <div class="uk-child-width-auto@s uk-grid-large" uk-grid>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Áreas</li>
                                   <li class="nav-item"><a href="#">Desarrollo Web</a></li>
                                   <li class="nav-item"><a href="#">Ilustración</a></li>
                                   <li class="nav-item"><a href="#">Branding</a></li>
                                 </ul>
                               </div>
                             </div>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Áreas</li>
                                   <li class="nav-item"><a href="#">Desarrollo Web</a></li>
                                   <li class="nav-item"><a href="#">Ilustración</a></li>
                                   <li class="nav-item"><a href="#">Branding</a></li>
                                 </ul>
                               </div>
                             </div>
                             <div>
                               <div>
                                 <ul class="uk-nav uk-nav-default">
                                   <li class="uk-nav-header nav-item">Áreas</li>
                                   <li class="nav-item"><a href="#">Desarrollo Web</a></li>
                                   <li class="nav-item"><a href="#">Ilustración</a></li>
                                   <li class="nav-item"><a href="#">Branding</a></li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>-->

                       </div>
                     </div>
                     <div>
                       <div >
                         <div class="uk-margin">
                           <ul class="uk-list menu-nav-main">
                             <li class="nav-item"><nuxt-link class="uk-button uk-button-text" to="/">Inicio</nuxt-link></li>
                             <li class="nav-item"><nuxt-link class="uk-button uk-button-text"  to="/proyectos">Proyectos</a></nuxt-link>
                             <li class="nav-item"><a class="uk-button uk-button-text"  href="#">Acerca de Nosotros</a></li>
                             <li class="nav-item"><a class="uk-button uk-button-text"  href="#">Blog</a></li>
                             <li class="nav-item"><a class="uk-button uk-button-text"  href="#">Contacto</a></li>
                           </ul>
                         </div>

                           <!--<div class="uk-section">
                             <div class="uk-child-width-1-2" uk-grid>
                               <div>
                                 <div class="address">
                                   <h4>Santiago</h4>
                                   <p class="uk-margin-remove">Villagra 70, Providencia</p>
                                   <p class="uk-margin-remove">+569 4044 4172</p>
                                   <p class="uk-margin-remove">Chile</p>
                                 </div>
                               </div>
                               <div>
                                 <div class="address">
                                   <h4>Arequipa</h4>
                                   <p class="uk-margin-remove"></p>
                                   <p class="uk-margin-remove">+561 4044 4172</p>
                                   <p class="uk-margin-remove">Perú</p>
                                 </div>
                               </div>
                             </div>
                           </div>-->

                       </div>
                     </div>
                   </div>
                 </div>
             </div>
           </div>
        </div>

        <div class="uk-position-top-right">
          <div class="uk-overlay">
            <a class="uk-icon-button " uk-icon="icon: close" @click="openMenu()"></a>
          </div>
        </div>



                               <div class="uk-position-center-right">
                                 <div class="uk-overlay">
                                    <ul class="uk-iconnav uk-iconnav-vertical">
                                      <li class="nav-item"><a href="https://www.instagram.com/sayrin_digital/" uk-icon="instagram" class="uk-icon"></a></li>
                                      <li class="nav-item"><a href="https://www.instagram.com/sayrin_digital/" uk-icon="facebook" class="uk-icon"></a></li>
                                      <li class="nav-item"><a href="https://www.instagram.com/sayrin_digital/" uk-icon="dribbble" class="uk-icon"></a></li>
                                      <li class="nav-item"><a href="https://www.instagram.com/sayrin_digital/" uk-icon="youtube" class="uk-icon"></a></li>
                                    </ul>
                                 </div>
                               </div>

      </div>
    </div>
  </div>

</div>
</template>

<script>
import {
  TimelineLite,
  Back
} from 'gsap'

export default {
  watch: {
    '$route.path': function() {
      if(this.isopen){
        this.openMenu()
      }
    }
  },
  data() {
    return {
      timeline: null,
      isopen: false,
      navlist: [
        {
          title: 'Áreas',
          links: [
            {
               name: 'Desarrollo Web'
            },
            {
              name: 'Ilustración'
            },
            {
              name: 'Branding'
            },
            {
              name: 'Fotografía'
            }
          ]
        }
      ]
    }
  },
  beforeMount() {
    var vm = this;
    if (process.browser) {
      vm.timeline = new TimelineLite({
        paused: true
      });
    }
  },
  mounted() {
    this.loadAnimation()
  },
  methods: {
    loadAnimation() {

      const children = this.$el.querySelectorAll('.nav-item');

      console.log(children)

      this.timeline.to('.menu-navbar-left', .9, {
        ease: Power3.easeOut,
        startAt: {
          height: '0%'
        },
        height: '100%',
      }, 'begin')

      this.timeline.to('.menu-navbar-container', .5, {
        ease: Power3.easeOut,
        startAt: {
          opacity: 0
        },
        opacity: 1,
        visibility: 'visible'
      }, 'begin+=0.5')

      this.timeline.to('.inner-panel', .8, {
        ease: Expo.easeOut,
        transformOrigin: '100% 50%',
        scaleX: 0,
      },'begin+=0.8')

      for(var i = 0; i<children.length; i++){

        if(children[i].className == "nav-item title-main"){
          this.timeline.to(children[i], 1.1, {
            transformOrigin: '0% 50%',
            startAt: {y: '-30px', x: '', scale: '1.2'},
            ease: Circ.easeOut,
            scale: 1,
            y: '0',
            x: '0',
            opacity: 1,
            visibility: 'visible'
          }, 'begin+=' + (1.3 + i*0.05))
        }

        else{
          this.timeline.to(children[i], .8, {
            startAt: {y: '30px'},
            ease: Power3.easeOut,
            y: '0',
            opacity: 1,
            visibility: 'visible'
          }, 'begin+=' + (1.3 + i*0.05))
        }
      }


    },
    openMenu() {
      if (!this.isopen) {
        this.timeline.play().timeScale(1);
        this.isopen = true
      } else {
        this.timeline.reverse().timeScale(2);
        this.isopen = false

      }
    }
  }

}
</script>

<style type="scss">
.menu-navbar-left {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 0;
  width: 100vw;
  z-index: 10;
}

.menu-navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 11;
  visibility: hidden;
  opacity: 0;
}

.nav-item{
  opacity: 0;
}

.inner-panel{
   transform: scaleX(1);
}

.bottom-margin-large{
  margin-bottom: 40px;
}

</style>
