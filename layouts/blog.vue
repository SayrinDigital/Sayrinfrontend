<template>

  <div>
    <Navigator></Navigator>
    <nuxt />
  </div>

</template>

<script>

import { TimelineLite, Back } from 'gsap'
import Navigator from '~/components/Navigator.vue'

export default {
  components:{
    Navigator
  }
}
</script>

<style lang="css">

html, body{
  background: #fff;
}


</style>
