<template>
  <div class="main" ref="main">
    <div class="background-lines uk-child-width-1-3 uk-grid-collapse" uk-grid="uk-grid">
      <div ref="line" class="line-a"></div>
      <div class="line-b"></div>
      <div ref="lineb" class="line-c"></div>
    </div>
    <nuxt />
  </div>
</template>

<script>

  import { TimelineLite, Back } from 'gsap'

  export default{
    data(){
      return{
        timeline: null,
      }
    },
    beforeMount(){
      var vm = this;
      if (process.browser) {
        vm.timeline = new TimelineLite({paused: true});
      }
    },
    mounted(){
      this.loadAnimation()
    },
    methods: {
      loadAnimation(){

        const { main } = this.$refs
        const { line } = this.$refs
        const { lineb } = this.$refs

        this.timeline.to(main, 3, {
          ease: Expo.easeOut,
                  startAt: {opacity: 0},
                  opacity: 1,
                  transformOrigin: '0% 100%'
        }, 'begin')

      this.timeline.to(line, 3, {
        ease: Expo.easeOut,
                startAt: {scaleY: 0},
                scaleY: 1,
                opacity: 1,
                transformOrigin: '0% 100%'
      }, 'begin+=0.2')

      this.timeline.to(lineb, 3, {
        ease: Expo.easeOut,
                startAt: {scaleY: 0},
                scaleY: 1,
                opacity: 1,
                transformOrigin: '0% 100%'
      }, 'begin+=0.4')


      this.timeline.play()

      }
    }
  }

</script>

<style type="scss">
.background-lines {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -10;
}

.background-lines .line-a {
  border-right: 1px solid rgba(112, 112, 112, 0.15);
}

.background-lines .line-c {
  border-left: 1px solid rgba(112, 112, 112, 0.15);
}

.main{
  opacity: 0;
}

</style>
