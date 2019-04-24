<template>
<div>

  <div class="uk-container tm-container-medium"  id="mainnav">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item remove-padding">
          <nuxt-link to="/">
            <p class="mainlogo">sayrin!</p>
          </nuxt-link>
        </div>
      </div>
      <div class="uk-navbar-right">
        <div class="uk-navbar-item uk-visible@m">
          <nuxt-link to="/contacto" class="uk-button contact-button">Contáctanos</nuxt-link>
        </div>
        <div class="uk-navbar-item">
          <a class="menu-navbar" @click="openMenu()">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="menu">
              <style type="text/css">
                .st0{fill:#333;}
              </style>
                <rect class="st0" x="2" y="4" width="16" height="1"></rect>
                <rect class="st0" x="2" y="9" width="16" height="1"></rect>
                <rect class="st0" x="2" y="14" width="16" height="1"></rect>
              </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>


  <div class="menu-navbar-container">

    <div class="uk-position-top-right">
      <div class="uk-overlay">
        <button type="button" @click="openMenu()" uk-close></button>
      </div>
    </div>

    <div class="uk-flex uk-flex-middle uk-flex-center" uk-height-viewport>
      <ul class="main-nav uk-list">
        <li class="nav-item"><nuxt-link to="/">Inicio</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/proyectos">Servicios</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/">Proyectos</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contacto">Contacto</nuxt-link></li>
      </ul>
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
  props: ['accent'],
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

      this.timeline.to('.menu-navbar-container', .8, {
        ease: Power4.easeOut,
        startAt: { x: '-105%', visibility: 'hidden' },
        x: '0%',
        visibility: 'visible'
      }, 'begin')


      for(var i=0; i<children.length; i++){
        this.timeline.to(children[i], .8, {
          ease: Power4.easeOut,
          startAt: { x: '-20%', opacity:0 },
          x: '0%',
          opacity: 1,
        }, 'begin+=' + (.5  + i*0.1 ))
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
    },
    handleFocusOut() {
            //this.openMenu()
            console.log('focus out')
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
  width: 60%;
  z-index: 11;
  visibility: hidden;
  opacity: 1;
  background: #fff;
  transform: translateX(-100%);
}

.inner-panel{
   transform: scaleX(1);
}

.bottom-margin-large{
  margin-bottom: 40px;
}

</style>
