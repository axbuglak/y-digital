<template>
  <section class="h-100vh md:pb-0 text-center pt-10 pb-20 container" ref="dreamR">
    <h1 class="font-bold text-darkblue mb-4 text-4xl">Dream, Design & Develop. 3 “D” of digital transformation </h1>
    <div class="relative min-h-[100vh] sm:flex-col flex justify-center items-end md:items-center">
      <img src="../images/threeD.svg" alt="logo" class="w-[40%] sm:w-[50%] sm:mx-auto">

      <h1 class="text-darkblue sm:text-base font-bold text-3xl absolute right-1/2 translate-x-1/2 top-0">1. Dream</h1>
      <p class="absolute top-[4vh] right-1/2 translate-x-1/2 sm:relative sm:right-0 sm:translate-x-0 max-w-[350px] text-darkblue mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
      <h1 class="text-darkblue sm:text-base font-bold text-3xl absolute bottom-[15vh] md:bottom-[30vh] md:right-[20vh] right-[35vh] sm:top-[50vw] sm:right-[1vw]">2. Design</h1>
      <p class="absolute bottom-0 right-[5vw] sm:relative max-w-[350px] text-darkblue mt-4 md:bottom-[10vh] md:right-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
      <h1 class="text-darkblue sm:text-base font-bold text-3xl absolute bottom-[15vh] md:bottom-[30vh] left-[15vw] sm:top-[50vw] sm:left-[1vw]">3. Develop</h1>
      <p class="absolute bottom-0 left-[5vw] sm:relative max-w-[350px] text-darkblue mt-4 md:bottom-[10vh] md:left-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
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
