<template>
<div>

  <nav class="uk-navbar-container uk-margin uk-navbar-transparent" id="blognav" uk-navbar>
    <div class="uk-navbar-center">

      <div class="uk-navbar-item">
        <a class="active" href="">Proyectos</a>
      </div>
      <div class="uk-navbar-item">
        <a href="">Aliados</a>
      </div>
      <div class="uk-navbar-item">
        <a href="">Próximamente...</a>
      </div>

    </div>
  </nav>

  <div class="uk-container tm-container-medium" uk-filter="target: .post-list">
    <div class="" uk-grid>
      <div class="uk-width-1-5@s">
          <div uk-sticky="bottom: true">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
              <div class="uk-navbar-left">
                <div class="uk-navbar-item remove-padding">
                  <a href="" class="link-nav">Etiquetas</a>
                </div>
              </div>
            </nav>
            <ul class="uk-nav uk-nav-default" id="navlist">
              <li class="uk-active"  uk-filter-control><a href="#">Todos</a></li>
              <li v-for="category in categories" :uk-filter-control="'[data-category= \'' + category.name + '\']'"><a href="">{{ category.name }}</a></li>
            </ul>
          </div>
      </div>
      <div class="uk-width-4-5@s">
        <div>
          <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">
              <div class="uk-navbar-item remove-padding">
                <p class="link-nav uk-margin-remove">{{ posts.length }} entradas en total.</p>
              </div>
            </div>
            <div class="uk-navbar-right">
              <div class="uk-navbar-item remove-padding">
                <a  class="link-nav" href="#">Más Reciente <span class="uk-icon" uk-icon="chevron-down"></span></a>
              </div>
            </div>
          </nav>

          <!-- Posts -->
             <div class="uk-child-width-1-2@s uk-grid-match post-list" uk-grid>
                   <Card v-for="(post,index) in posts" :position="index%2==0" :project="post" :key="post.id"></Card>
               </div>
             </div>
          <!-- EndPosts -->

        </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import axios from '~/plugins/axios'
import Cover from '~/components/Cover'
import {
  TimelineLite,
  Back
} from 'gsap'
import Card from '~/components/ProjectCard'

export default {

  layout: 'blog',
  head() {
    return {
      title: 'Nuestro Blog | Sayrin',
      meta: [{
          hid: 'og-title',
          property: 'og:title',
          content: 'Nuestro Blog | Sayrin '
        },
        {
          hid: 'og-sitename',
          property: 'og:site_name',
          content: 'Sayrin - Agencia Digital'
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: 'Espacio dedicado a noticias y contenido relevante a nuestra agencia e información que podría ser relevante con nuestros clientes.'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Espacio dedicado a noticias y contenido relevante a nuestra agencia e información que podría ser relevante con nuestros clientes.'
        },
        {
          hid: 'og-url',
          name: 'og:url',
          content: 'https://sayrin.cl/blog/'
        }
        // other meta
      ]
    }
  },
  async asyncData({
    params
  }) {
    // We can use async/await ES6 feature
    const posts = await axios.get(
      '/projects', {
        params: {
          '_sort': 'updatedAt:DESC'
        }
      }
    )

    const categories = await axios.get('/services')

    return {
      posts: posts.data,
      categories: categories.data
    };
  },
  data() {
    return {}
  },
  components: {
    Card,
    Cover
  },



}
</script>

<style lang="css">
</style>
