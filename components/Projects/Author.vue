<template>

  <div>
    <div class="uk-flex uk-flex-middle uk-grid-medium" grid>
      <div class="uk-width-auto">
        <img ref="avatar"   :src="author.avatar" width="80" height="80" class="uk-border-circle avatar" alt="">
      </div>
      <div class="uk-width-expand">
        <div>
          <h5 ref="name" class="name">{{ author.name }}</h5>
          <h5 ref="title" class="gray title">{{ author.title }}</h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  props: ['author'],
  data() {
    return {

    }
  },

}
</script>
