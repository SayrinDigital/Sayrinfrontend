<template>
<div>
  <div class="uk-section">

    <nuxt-link to="/blog">Blog</nuxt-link>

    <div class="uk-container">
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
</template>

<script>
import Cover from '~/components/Projects/Cover.vue'
import Navigator from '~/components/Projects/Navigator.vue'
import { TimelineLite, Back } from 'gsap'

export default {

  transition: {
     mode: 'out-in',
     css: false,
     beforeEnter (el) {
    },
    enter (el, done) {
      done()
      var tl = new TimelineLite()
      tl.to('.avatar', 3,{
        ease: Expo.easeOut,
                startAt: {scale: 1.5, opacity: 0, rotation: -20},
                scale: 1,
                rotation: 0,
                opacity: 1
      }, 'begin')

     tl.to('.name', 1,{
       ease: Expo.easeOut,
               startAt: {x: '0%', y: '10px', opacity: 0},
               y: 0,
               opacity: 1
     }, 'begin+=0.2')

     tl.to('.title', 1,{
       ease: Expo.easeOut,
               startAt: {x: '0%', y: '10px', opacity: 0},
               y: 0,
               opacity: 1
     }, 'begin+=0.4')

     tl.to('.inner', 6, {
       ease: Expo.easeOut,
       startAt: {x: '0%', y: '0%'},
               x: '-150%',
               y: '0%',

     },'begin+=0.6')

     tl.to('.cover', 3, {
       ease: Expo.easeOut,
               startAt: {x: '0%', y: '0%'},
               x: '0%',
               y: '0%',
               scale: 1,
               opacity: 1,

     },'begin+=0.6')

     tl.to('.cover', 3, {
       ease: Expo.easeOut,
               startAt: {scale: 2},
               scale: 1,
     }, 'begin+=0.6')

    },
    leave (el, done) {

            var timeline = new TimelineLite({onComplete: done})
            timeline.to('.avatar', 1,{
              ease: Expo.easeOut,
                      startAt: {scale: 1, opacity: 1, rotation: 0},
                      scale: 1.5,
                      rotation: -20,
                      opacity: 0
            }, 'begin')

           timeline.to('.name', 1,{
             ease: Expo.easeOut,
                     startAt: {x: '0%', y: '0%', opacity: 1},
                     y: '10px',
                     opacity: 0
           }, 'begin+=0.2')

           timeline.to('.title', 1,{
             ease: Expo.easeOut,
                     startAt: {x: '0%', y: '0%', opacity: 1},
                     y: '10px',
                     opacity: 0
           }, 'begin+=0.4')

           timeline.to('.inner', 1, {
             ease: Expo.easeOut,
             startAt: {x: '-150%', y: '0%'},
                     x: '0%',
                     y: '0%',

           },'begin+=0.6')

           timeline.to('.cover', 1.5, {
             ease: Expo.easeOut,
                     startAt: {x: '0%', y: '0%'},
                     x: '0%',
                     y: '0%',
                     scale: 1,
                     opacity: 1,

           },'begin+=0.6')

           timeline.to('.cover', 1.5, {
             ease: Expo.easeOut,
                     startAt: {scale: 1},
                     scale: 1.2,
           }, 'begin+=0.6')
    }
  },

  components: {
    Cover,
    Navigator
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
