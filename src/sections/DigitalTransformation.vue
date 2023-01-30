<template>
  <section class="h-100vh text-center py-28 container">
    <h1 ref="dreamR">
      Dream, Design & Develop. 3 “D” of digital transformation
    </h1>
    <Transition name="dream">
      <div
        v-if="showDream"
        class="bg-[url('../images/threeD.svg')] bg-contain bg-no-repeat bg-center w-full h-[100vh]"
      ></div>
    </Transition>
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
