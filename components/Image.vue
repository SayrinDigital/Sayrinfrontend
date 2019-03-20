<template>
  <div class="uk-position-relative animate-spy uk-overflow-hidden" @mouseover="mouseOver" @mouseleave="mouseLeave" v-view="viewHandler">
    <img ref="image" class="uk-width-1-1" :src="source" alt="">
    <div class="uk-position-cover uk-background-default" ref="cover"></div>
  </div>
</template>

<script>

import { TimelineLite, Back } from 'gsap'
let UIkit
const hovertl = null

if(process.browser){
  UIkit = require('uikit')
}

export default {
 data(){
   return{
     waypointed: false
   }
 },
 props: ['source', 'inview'],
 mounted(){
   this.setHoverAnimation()
 },
 methods: {

   mouseOver(){

   },

   mouseLeave(){

   },

   viewHandler(e){
     if(e.percentInView>0.2){
       this.setAnimation(this.inview)
       this.waypointed = true
     }
     //console.log(e.percentInView)

   },

   setHoverAnimation(){
      const { image } = this.$refs

       this.hovertl = new TimelineLite({ paused: true })

       this.hovertl.to(image, .5, {
         ease: Expo.easeOut,
                 startAt: {x: '0%', y: '0%', scale: 1.2},
                 x: '0%',
                 y: '0%',
                 scale: 1,
                 opacity: 1,

       })

   },

    setAnimation(inviewstyle){

      const { image } = this.$refs
      const { cover } = this.$refs
      if(!this.waypointed){
       var tl = new TimelineLite({ paused: true, onComplete: this.enableHover })

       if(inviewstyle == 'right-to-left'){
         tl.to(cover, 6, {
           ease: Expo.easeOut,
           startAt: {x: '0%', y: '0%'},
                   x: '-150%',
                   y: '0%',

         },'begin')
       }

       if(inviewstyle == 'bottom-to-top' ){
         tl.to(cover, 6, {
           ease: Expo.easeOut,
           startAt: {x: '0%', y: '0%'},
                   x: '0%',
                   y: '150%',

         },'begin')
       }

       tl.to(image, 3, {
         ease: Expo.easeOut,
                 startAt: {x: '0%', y: '0%'},
                 x: '0%',
                 y: '0%',
                 scale: 1,
                 opacity: 1,

       },'begin')

       tl.to(image, 3, {
         ease: Expo.easeOut,
                 startAt: {scale: 2},
                 scale: 1,
       }, 'begin')


         tl.play()
       }


    },

    enableHover(){
      this.waypointed = true
    }

 },

}
</script>

<style lang="css">
</style>
