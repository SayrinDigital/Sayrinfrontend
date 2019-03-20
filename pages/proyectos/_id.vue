<template>
<div>
  <div class="main-content">
    <div class="uk-section">

      <nuxt-link to="/blog">Blog</nuxt-link>

      <div class="uk-container uk-container-large">
        <Navigator></Navigator>
      </div>
    </div>
    <Cover :cover="cover"></Cover>
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div class="uk-width-xlarge uk-margin-auto">

          <div class="uk-margin-large uk-text-center">
            <h1>Consejos para realizar un viaje a donde quieras.</h1>
          </div>

          <p> You need to take a look at other content in your niche. Try to figure out what is working for the leading thought leaders and come up with a game plan to create even better content.</p>
          <p> The best place to start is by conducting a keyword analysis. You can use a number of tools such as Google Keyword Planner to figure out what keywords other people in your niche are using. Start by eliminating keywords that are not relevant enough,
            have no search volume or seem far too competitive to rank for. The remaining keywords on your list are the ones that you want to target.
          </p>
          <p> Keyword research is always going to be a time-consuming process without the right tools.
          </p>
          <p> Ubersuggest can speed up the process and make large amounts of data a lot easier to consume and navigate through. Best of all, the tool is free to use and its data is actually pulled right from Google Keyword Planner and Google Suggest without
            the need to log in.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="uk-position-center uk-text-center anim-index">
    <div>
      <div class="uk-overflow-hidden uk-margin">
        <h1 class="text-appear-mask">Ajá! ¿También quieres</h1>
      </div>
      <div class="uk-overflow-hidden">
        <h1 class="text-appear-mask">ser nuestro amigo?</h1>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Cover from '~/components/Projects/Cover.vue'
import Navigator from '~/components/Projects/Navigator.vue'
import { TimelineLite, Back } from 'gsap'

export default {

  transition: {
     mode: 'out-in',
     css: false,
     appear: true,
     beforeEnter (el) {

    },
    enter (el, done) {
      const children = el.querySelectorAll('.text-appear-mask');
     var tl = new TimelineLite({ onComplete: done })

     tl.to('.transition-bg', 2.5, {
       ease: Power4.easeIn,
       transformOrigin: '50% 0%',
       startAt: {y: '0%'},
     }, 'begin')

     tl.to('.st0', .01, { fill: "#fff" })

     for(var i = 0; i<children.length; i++){
       tl.to(children[i], .8,{
         ease: Power4.easeOut,
         startAt: { y: '100%' , visibility: 'visible'},
         y: '0%',
       }, 'begin+=' + (.5 + i*0.1) )

       tl.to(children[i], 1,{
         ease: Power4.easeOut,
       }, 'begin+=' + (1 + i*0.1) )

       tl.to(children[i], .8,{
         ease: Power3.easeIn,
         startAt: { y: '0%'},
         y: '-100%',
       }, 'begin+=' + (2 + i*0.1) )

     }

     tl.to('.transition-bg', 1, {
       ease: Power4.easeIn,
       transformOrigin: '50% 0%',
       startAt: {y: '0%'},
       y: '-100%'
     }, 'begin+=2.5')

     tl.to('.main-content', 1, {
       ease: Power4.easeIn,
       startAt: { opacity: 0 },
       opacity: 1
     },'begin+=2.5')

     tl.play()
    },
    leave (el, done) {

            var tl = new TimelineLite({onComplete: done})

            tl.to('.main-content', 1, {
              ease: Power4.easeIn,
              startAt: { opacity: 1 },
              opacity: 0
            },'begin')

            tl.to('.transition-bg', 1, {
              ease: Power4.easeIn,
              transformOrigin: '50% 0%',
              startAt: {y: '-100%'},
              y: '0%'
            }, 'begin+=0.5')

            tl.play()
    }
  },

  components: {
    Cover,
    Navigator
  },

  mounted(){

  },
  data() {
    return {
      cover: {
        'url': 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      },

    }
  }

}
</script>
