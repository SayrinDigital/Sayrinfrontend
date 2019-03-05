<template>

  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <div class="uk-navbar-item">
        <Author :author="author"></Author>
      </div>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <button class="uk-button share-button"><span class="uk-icon" uk-icon="social"></span> <span class="uk-visible@s  uk-margin-small-left">Compartir</span></button>
      </div>
      <div class="uk-navbar-item">
        <button class="uk-button button-like"><span class="uk-icon heart-icon" uk-icon="heart"></span> <span class="uk-visible@s  uk-margin-small-left">Me Gusta</span></button>
      </div>
    </div>
  </nav>


</template>

<script>

import Author from '~/components/Projects/Author.vue'

  export default{
    components: {
      Author
    },
    data(){
      return{
        author: {
          'avatar': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          'name': "José Puma",
          'title': 'Full Stack Developer'
        }
      }
    }
  }

</script>
