<template>

<div>

  <section class="uk-section">
    <div class="uk-position-relative uk-overflow-hidden">
      <!--<div class="uk-position-cover  uk-background-cover cover-header" uk-parallax="bgy: -50"   uk-img data-src="/img/header-hd.png"></div>-->
    <div class="uk-container tm-container-medium">
      <div uk-grid class="uk-flex uk-flex-middle">
        <div class="uk-text-center uk-margin-auto" uk-parallax="opacity: 1,0">
          <div class="">
            <div class="uk-overflow-hidden uk-position-relative">
              <h1 class="main-title uk-text-capitalize">Conversemos Un poco</h1>
            </div>
              <h5 class="main-header uk-margin-auto uk-width-xlarge@m uk-text-capitalize">Cuéntanos todo sobre tu futuro proyecto</h5>

          </div>

        </div>
      </div>
    </div>
    </div>
  </section>

  <section class="uk-margin-bottom">
    <div class="uk-container uk-container-small">
      <div class="uk-width-large@m uk-margin-auto">
        <form  v-on:submit.prevent="sendcontactmessage">
          <div class="uk-margin">
            <input v-model="name" type="text" placeholder="Nombre" class="uk-input">
          </div>
          <div class="uk-margin">
            <input v-model="mail" type="text" placeholder="Correo" class="uk-input">
          </div>
          <div class="uk-margin">
            <input v-model="phone" type="text" placeholder="Teléfono" class="uk-input">
          </div>
          <div class="uk-margin">
            <textarea v-model="message" type="text" rows="4" placeholder="Sobre Tu Proyecto" class="uk-textarea"></textarea>
          </div>
          <div class="uk-margin uk-text-center">
            <button type="submit" class="sendmail uk-button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </section>


</div>


</template>

<script>

import axios from '~/plugins/axios'
import { TimelineLite, Back } from 'gsap'


export default {

  head () {
    return {
      title: 'Conversemos Un Momento | Sayrin',
      meta: [
        { hid: 'og-title', property: 'og:title', content: 'Conversemos Un Momento | Sayrin ' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'Sayrin - Agencia Digital' },
        { hid: 'og-description', property: 'og:description', content: 'Cuéntanos un poco sobre ti y como te podemos ayudar en la era digital.' },
        { hid: 'description', name: 'description', content: 'Cuéntanos un poco sobre ti y como te podemos ayudar en la era digital.' },
        { hid: 'og-url', name: 'og:url', content: 'https://sayrin.cl/contacto/' }
        // other meta
      ]
    }
  },
  data(){
    return{
      name: "",
      mail: "",
      phone: "",
      message: ""
    }
  },
  mounted(){

  },
  methods: {
    sendcontactmessage(){
      axios.post('https://sayrin.cl/api/notifyregister',{
              email: 'hey@sayrin.cl',
              message: this.message,
              name: this.name,
              mail: 'josepuma@sayrin.cl'
              phone: this.phone
            })
            .then(response => {
                console.log('sent')
            })
            .catch(error => {
                console.log('error')
            })
    }
  }

}
</script>
