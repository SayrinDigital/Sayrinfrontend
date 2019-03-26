<template>

  <section>

         <section v-if="this.$route.path!= '/contacto'" class="bg-sayrin">
           <div class="uk-section uk-section-xlarge">
             <div class="uk-container tm-container-medium">
               <div class="uk-width-3-5@m" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
                 <div>
                   <h1 class="main-title uk-text-uppercase white">¿Te interesa conversar eh?</h1>
                   <h5 class="main-header">Construyamos juntos algo genial.</h5>
                   <div class="uk-margin-large-top">
                     <a class="say-link-a " href="#">Conversemos <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right;"></span> </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>

         <section class="bg-default">
           <div class="uk-section uk-section-large">
             <div class="uk-container tm-container-medium">
                <div class="uk-grid-large" uk-grid>
                  <div class="uk-width-2-5@m"><div>
                     <img width="130" src="/img/mainlogo-white.svg" alt="">
                     <div class="uk-margin-medium-top icon-list">
                       <a class="uk-icon-link" uk-icon="instagram" href="https://www.instagram.com/sayrin_digital/"></a>
                       <a class="uk-icon-link" uk-icon="facebook" href="https://www.facebook.com/sayrin.cl/"></a>
                       <a class="uk-icon-link" uk-icon="dribbble" href="https://dribbble.com/josepuma"></a>
                     </div>
                  </div></div>
                  <div class="uk-width-3-5@m"><div>
                     <h2 class="footer-header">MANTENGÁMONOS CONECTADOS</h2>
                     <p class="red uk-margin-remove small-desc">+569 4044 4172</p>
                     <p class="red uk-margin-remove small-desc">hey@sayrin.cl</p>
                  </div></div>
                </div>
             </div>
           </div>
         </section>
  </section>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
