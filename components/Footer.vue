<template>

  <section>

         <section v-if="this.$route.path!= '/contacto'" class="bg-red">
           <div class="uk-section uk-section-xlarge">
             <div class="uk-container tm-container-medium">
               <div class="uk-width-3-5@m" uk-scrollspy="cls:uk-animation-slide-bottom-medium">
                 <div>
                   <p class="main-title uk-text-capitalize white">¿Te interesa conversar eh?</p>
                   <h5 class="main-header white uk-width-large@m">Construyamos juntos algo genial</h5>
                   <div class="uk-margin-large-top">
                     <nuxt-link class="say-link-a " to="/contacto">Conversemos <span class="uk-icon uk-margin-small-left" uk-icon="icon: arrow-right;"></span> </nuxt-link>
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
                  <div class="uk-width-1-5@m"><div>
                    <nuxt-link to="/">
                      <p class="mainlogo white">sayrin!</p>
                    </nuxt-link>
                     <div class="uk-margin-medium-top icon-list">
                       <a class="uk-icon-link" uk-icon="instagram" href="https://www.instagram.com/sayrin_digital/"></a>
                       <a class="uk-icon-link" uk-icon="facebook" href="https://www.facebook.com/sayrin.cl/"></a>
                       <a class="uk-icon-link" uk-icon="dribbble" href="https://dribbble.com/josepuma"></a>
                     </div>
                  </div></div>
                  <div class="uk-width-3-5@m"><div>
                     <div class="uk-child-width-expand@m" uk-grid>
                       <div>
                         <div class="footer-nav">
                           <h5>Agencia</h5>
                           <ul class="uk-nav uk-nav-default">
                             <li><nuxt-link to="/inicio">Inicio</nuxt-link></li>
                             <li><nuxt-link to="/blog">Proyectos</nuxt-link></li>
                             <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                             <li><nuxt-link to="/contacto">Contáctanos</nuxt-link></li>
                           </ul>
                         </div>
                       </div>
                       <div>
                         <div class="footer-nav">
                           <h5>Links de Interés</h5>
                           <ul class="uk-nav uk-nav-default">
                             <li><a href="https://getuikit.com" target="_blank">UI Kit</a></li>
                             <li><a href="https://nuxtjs.org" target="_blank">Nuxt.js</a></li>
                           </ul>
                         </div>
                       </div>
                       <div>
                         <div class="footer-nav">
                           <h5>Contacto</h5>
                           <ul class="uk-nav uk-nav-default">
                             <li><a href="https://getuikit.com" target="_blank"><span class="uk-icon uk-margin-small-right" uk-icon="whatsapp"></span> +569 4044 44172</a></li>
                             <li><a href="https://nuxtjs.org" target="_blank"><span class="uk-icon uk-margin-small-right" uk-icon="mail"></span> hey@sayrin.cl</a></li>
                           </ul>
                         </div>
                       </div>
                     </div>

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
