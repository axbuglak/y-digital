<template>
  <section class="h-100vh text-center py-28 container" ref="dreamR">
    <h1 class="font-bold text-darkblue mb-4 text-4xl">Dream, Design & Develop. 3 “D” of digital transformation </h1>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      showDream: true,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.animOnScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animOnScroll)
  },

  methods: {
    animOnScroll() {
      const elHeight = this.$refs.dreamR.offsetHeight
      const elOffset = this.offset(this.$refs.dreamR)
      const scrollPos = window.pageYOffset + window.innerHeight
      if (elHeight + elOffset < scrollPos) {
        this.showDream = true
      } else {
        this.showDream = false
      }
    },
    offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return rect.top + scrollTop
    },
  },
}
</script>

<style>
.dream-enter-active {
  animation: dream-in 3s;
}
.dream-leave-active {
  animation: dream-in 3s reverse;
}
@keyframes dream-in {
  0% {
    background-image: url('../images/oneD.svg');
  }
  25% {
    background-image: url('../images/oneD.svg');
  }
  50% {
    background-image: url('../images/twoDsvg.svg');
  }
  100% {
    background-image: url('../images/threeD.svg');
  }
}
</style>
