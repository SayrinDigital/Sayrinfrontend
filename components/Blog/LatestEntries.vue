<template>


    <div>
      <div class="uk-section">
        <div class="section-header">
          <div class="uk-section uk-section-large">
            <div class="uk-text-center">
              <div class="uk-width-4-5@m uk-margin-auto">
                <h5 class="main-header white">También nos gusta escribir en nuestro tiempo libre.</h5>
              </div>
            </div>
          </div>

                    <div class="uk-grid-medium uk-child-width-1-2" uk-grid>
                      <Card v-for="card in cards" :entry="card" :key="card.id"></Card>
                    </div>

        </div>
      </div>
    </div>

  <!--<div>
    <p class="white uk-margin-remove uk-text-uppercase">Blog</p>
    <h2  class="white">Últimas Entradas</h2>
    <div class="uk-section uk-section-small">
      <div class="uk-grid-medium uk-child-width-1-2@l" uk-grid>
        <Card v-for="card in cards" :entry="card" :key="card.id"></Card>
      </div>
    </div>
    <div class="uk-section uk-section-small">
      <div class="uk-text-right">
        <a href="" class="uk-button">Leer Blog <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right"></span> </a>
      </div>
    </div>
  </div>-->

</template>

<script>

import Card from '~/components/Blog/Card'

export default {
  data(){
    return{
      cards: [
        {
            id: 1,
            cover : "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "¿Cómo crear mi primer blog con Say?",
            header: "Blog",
            linkref: "https://www.google.cl"
        },
        {
            id: 2,
            cover : "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
            title: "Celebramos nuestro primer año.",
            header: "Blog",
            linkref: "https://www.google.cl"
        },
        {
            id: 4,
            cover : "https://images.unsplash.com/photo-1531618548726-b21ac4df8121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            title: "So that's how an agency is already working here.",
            header: "Blog",
            linkref: "https://www.google.cl"
        },
        {
            id: 5,
            cover : "https://images.unsplash.com/photo-1547679904-ac76451d1594?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "So that's how an agency is already working here.",
            header: "Blog",
            linkref: "https://www.google.cl"
        },
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="css">
</style>
