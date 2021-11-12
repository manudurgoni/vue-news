<template>
  <div class="loader-container" ref="loader" v-if="show">
    <div class="loader-background" ref="loaderBackground"></div>
    <div class="loader-background-2" ref="loaderBackground2"></div>
    <div class="loader-circles">
      <div class="loader-circle" ref="loaderCircle1"></div>
      <div class="loader-circle" ref="loaderCircle2"></div>
    </div>
    <img class="loader" ref="loaderGif" src="../assets/loader.gif" alt />
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  props: {
    autoHide: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      show: true
    }
  },
  
  mounted() {
    const showLoader = window.sessionStorage.getItem('loader-seen')
    if (showLoader === 'true') {
      this.show = false
      return
    }
    this.startLoadingAnimation()
  },
  methods: {
    restartAnim() {
      this.timeline.restart()
    },
    startLoadingAnimation() {
      this.timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750,
        complete: () => {
          if (this.autoHide) {
            this.loaderCompleted()
          }

          window.sessionStorage.setItem('loader-seen', true)
        }
      });

      const distance = this.getDistance(0, 0, window.innerWidth / 2, window.innerHeight / 2);
      const d = distance * 2

      const circleWidth1 = this.$refs.loaderCircle1.offsetHeight
      const scaleCircle1 = d / circleWidth1

      const circleWidth2 = this.$refs.loaderCircle2.offsetHeight
      const scaleCircle2 = d / circleWidth2

      let offset = 100

      this.timeline
        .add({
          targets: [this.$refs.loaderBackground, this.$refs.loaderBackground2],
          delay: anime.stagger(100),
          scaleY: [0, 1]
        }, offset)

        .add({
          targets: [this.$refs.loaderCircle1, this.$refs.loaderCircle2],
          translateX: ['-50%', '-50%'],
          translateY: ['-50%', '-50%'],
          scaleX: (item, index) => {
            return index === 0 ? scaleCircle1 : scaleCircle2
          },
          scaleY: (item, index) => {
            return index === 0 ? scaleCircle1 : scaleCircle2
          },
          delay: anime.stagger(150)
        }, offset + 200)

    },

    loaderCompleted() {
      anime({
        targets: this.$refs.loader,
        opacity: 0,
        complete: () => {
        }
      })
    },


    getDistance(x1, y1, x2, y2) {

      var xs = x2 - x1,
        ys = y2 - y1;

      xs *= xs;
      ys *= ys;

      return Math.sqrt(xs + ys);
    },
  }
}
</script>