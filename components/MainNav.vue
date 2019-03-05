<template>

<div>
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <div class="uk-navbar-item"></div>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <a @click="openMenu"><span class="uk-icon" uk-icon="icon: menu"></span></a>
      </div>
    </div>
  </nav>

  <div ref="menu" class="menu-navbar-left">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item"></div>
      </div>
      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <a @click="openMenu"><span class="uk-icon" uk-icon="icon: menu"></span></a>
        </div>
      </div>
    </nav>
  </div>
</div>

</template>

<script>

import { TimelineLite, Back } from 'gsap'

export default {

 data(){
   return{
     timeline: null,
     isopen: false
   }
 },
 beforeMount(){
   var vm = this;
   if (process.browser) {
     vm.timeline = new TimelineLite({ paused: true });
   }
 },
 mounted(){
   this.loadAnimation()
 },
 methods: {
   loadAnimation(){

     this.timeline.to('.menu-navbar-left', 0.5,{
       ease: Power3.easeOut,
    startAt: { height: '0%' },
    height: '90%',
     })

   },
   openMenu(){
     if (!this.isopen) {
        this.timeline.play();
        this.isopen = true
    } else {
      this.timeline.reverse();
     this.isopen = false

    }
   }
 }

}
</script>

<style type="scss">

 .menu-navbar-left{
   position: fixed;
   top: 0;
   left: 0;
   background: #fff;
   height: 0;
   width: 100vw;
   z-index: 99999;
 }

</style>
