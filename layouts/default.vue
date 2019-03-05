<template>
  <div class="main" ref="main">
    <MainNav></MainNav>
    <nuxt />
  </div>
</template>

<script>

  import { TimelineLite, Back } from 'gsap'
  import MainNav from '~/components/MainNav.vue'

  export default{
    data(){
      return{
        timeline: null,
      }
    },
    components: {
      MainNav
    },
    beforeMount(){
      var vm = this;
      if (process.browser) {
        vm.timeline = new TimelineLite({paused: true});
      }
    },
    mounted(){

    },
    methods: {

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


</style>
