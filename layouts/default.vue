<template>
  <div class="main" ref="main">
            <div>
              <MainNav></MainNav>
                <nuxt />
              <Footer></Footer>
            </div>
            <div class="uk-position-fixed uk-height-viewport transition-bg"></div>
      </div>
  </div>
</template>

<script>

  import { TimelineLite, Back } from 'gsap'
  import MainNav from '~/components/Navigator.vue'
  import Footer from '~/components/Footer'

  export default{
    data(){
      return{
        timeline: null,
      }
    },
    components: {
      MainNav,
      Footer
    },
    mounted(){
    },
    methods: {

    }
  }

</script>
