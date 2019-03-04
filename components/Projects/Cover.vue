<template>
<div>
  <div class="uk-position-relative uk-overflow-hidden uk-cover-container">
        <div ref="cover" class="cover-project cover uk-background-cover"  :data-src="cover.url" uk-img ></div>
          <div ref="inner" class="inner-cover inner uk-position-cover"></div>
    </div>
    <img class="uk-hidden" :src="cover.url" alt="">
  </div>
</template>

<script>


export default {
  props: ['cover'],
  data() {
    return {

    }
  },

}
</script>
