<template>
  <div class="uk-position-relative animate-spy uk-overflow-hidden" @mouseover="mouseOver" @mouseleave="mouseLeave" v-view="viewHandler">

    <transition>
      <img v-show="isloaded" ref="image" class="uk-width-1-1" :src="source" alt="" @load="imgloaded">
    </transition>
    <div class="uk-position-cover uk-background-default" ref="cover"></div>
    <img v-show="!isloaded" class="img-placeholder" src="/img/img-placeholder.png"></img>
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
     waypointed: false,
     isloaded: false,
     canhover: false
   }
 },
 props: {source: String, inview: String, showinview: Boolean},
 mounted(){

 },
 methods: {

   imgloaded(){
     this.isloaded = true
     if(!this.showinview){
       this.setAnimation(this.inview)
       this.waypointed = true
     }
     this.setHoverAnimation()

   },

   mouseOver(){
     if(this.canhover){

       this.hovertl.play()
     }
   },

   mouseLeave(){
     if(this.canhover){
      this.hovertl.reverse()
    }
   },

   viewHandler(e){
     if(e.percentInView>0.2 && this.isloaded && this.showinview){
       this.setAnimation(this.inview)
       this.waypointed = true
     }
     //console.log(e.percentInView)

   },

   setHoverAnimation(){
      const { image } = this.$refs

       this.hovertl = new TimelineLite({ paused: true })

       this.hovertl.to(image, .2, {
         ease: Power2.easeOut,
                 startAt: {x: '0%', y: '0%', scale: 1, rotation: 0},
                 x: '0%',
                 y: '0%',
                 scale: 1.1,
                 rotation: 2,
                 opacity: 1,

       })

   },

    setAnimation(inviewstyle){

      const { image } = this.$refs
      const { cover } = this.$refs
      if(!this.waypointed){
       var tl = new TimelineLite({ paused: true, onComplete: this.enableHover })

       if(inviewstyle == 'right-to-left'){
         tl.to(cover, 4, {
           ease: Expo.easeOut,
           startAt: {x: '0%', y: '0%'},
                   x: '-150%',
                   y: '0%',

         },'begin')
       }

       if(inviewstyle == 'bottom-to-top' ){
         tl.to(cover, 4, {
           ease: Expo.easeOut,
           startAt: {x: '0%', y: '0%'},
                   x: '0%',
                   y: '150%',

         },'begin')
       }

       tl.to(image, 2, {
         ease: Expo.easeOut,
                 startAt: {x: '0%', y: '0%'},
                 x: '0%',
                 y: '0%',
                 scale: 1,
                 opacity: 1,

       },'begin')

       tl.to(image, 2, {
         ease: Expo.easeOut,
                 startAt: {scale: 2},
                 scale: 1,
       }, 'begin')


         tl.play()
       }


    },

    enableHover(){
      this.waypointed = true
      this.canhover = true
    }

 },

}
</script>

<style lang="css">
</style>
