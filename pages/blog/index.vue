<template>

  <div>
    <nuxt-link to="/proyectos">Proyectos</nuxt-link>
    <img ref="image" class="image" src="https://d2kbkpwf98wmwo.cloudfront.net/images/typography/d-guide.jpg" alt="">
  </div>

</template>

<script>

import { TimelineLite, Back } from 'gsap'

export default {

  mounted(){

  },

  transition: {
     mode: 'out-in',
     css: false,
     beforeEnter (el) {


    },
    enter (el, done) {

      done()
    },
    leave (el, done) {
        done()
    }
  },

}
</script>

<style lang="css">
</style>
