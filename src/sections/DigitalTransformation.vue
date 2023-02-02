<template>
  <section class="h-100vh md:pb-0  pt-10 pb-20 container">
    <h1 class="font-bold text-darkblue text-center sm:text-start mb-10 sm:text-2xl text-4xl" ref="dreamS">Dream, Design & Develop. 3 “D” of digital transformation </h1>
    <div class="relative min-h-[100vh] sm:min-h-[50vh] md:pt-0 pt-10 sm:flex-col sm:justify-start flex justify-center items-center">
      <img src="../images/nullD.svg" alt="logo" class="ease-in-out sm:mt-14 transition delay-300 w-[40%] sm:w-[50%] sm:mx-auto" ref="dreamR">

      <h1 style="opacity: 0.3;" ref="dreamI1H" class="text-darkblue sm:text-base font-bold text-3xl absolute right-1/2 translate-x-1/2 top-0">1. Dream</h1>
      <p style="opacity: 0.3;" ref="dreamI1P" class="absolute top-[4vh] right-1/2 translate-x-1/2 sm:relative sm:top-0 sm:right-0 sm:translate-x-0 max-w-[350px] text-darkblue mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
      <h1 style="opacity: 0.3;" ref="dreamI2H" class="text-darkblue sm:text-base font-bold text-3xl absolute bottom-[15vh] md:bottom-[30vh] md:right-[20vh] right-[35vh] sm:top-[50vw] sm:right-[1vw]">2. Design</h1>
      <p style="opacity: 0.3;" ref="dreamI2P" class="absolute bottom-0 right-[5vw] sm:relative max-w-[350px] text-darkblue mt-4 md:bottom-[10vh] sm:bottom-0 md:right-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      
      <h1 style="opacity: 0.3;" ref="dreamI3H" class="text-darkblue sm:text-base font-bold text-3xl absolute bottom-[15vh] md:bottom-[30vh] left-[15vw] sm:top-[50vw] sm:left-[1vw]">3. Develop</h1>
      <p style="opacity: 0.3;" ref="dreamI3P" class="sm:mb-10 absolute bottom-0 left-[5vw] sm:relative max-w-[350px] text-darkblue mt-4 md:bottom-[10vh] sm:bottom-0 md:left-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  </section>
</template>

<script>
export default {

  mounted() {
    window.addEventListener('scroll', this.animOnScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animOnScroll)
  },

  methods: {
    animOnScroll() {
      const elHeight = this.$refs.dreamS.offsetHeight
      const elOffset = this.offset(this.$refs.dreamS)
      const scrollPos = window.pageYOffset + window.innerHeight
      if (elHeight + elOffset < scrollPos) {
        this.$refs.dreamR.classList.add('dream-enter-active')
        // setTimeout(() => {
          this.$refs.dreamI1H.style.opacity = 1
          this.$refs.dreamI1P.style.opacity = 1
        // }, 000);
        setTimeout(() => {
          this.$refs.dreamI2H.style.opacity = 1
          this.$refs.dreamI2P.style.opacity = 1
        }, 1000);
        
        setTimeout(() => {
          this.$refs.dreamI3H.style.opacity = 1
          this.$refs.dreamI3P.style.opacity = 1
        }, 2000);
        
      } else {
        this.$refs.dreamR.classList.remove('dream-enter-active')
        this.$refs.dreamI2H.style.opacity = 0.3
        this.$refs.dreamI2P.style.opacity = 0.3
        this.$refs.dreamI3H.style.opacity = 0.3
        this.$refs.dreamI3P.style.opacity = 0.3
        this.$refs.dreamI1H.style.opacity = 0.3
        this.$refs.dreamI1P.style.opacity = 0.3
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
  animation: dream-in 3s ease-in-out;
  content: url('../images/threeD.svg'); 

}

@keyframes dream-in {
  0% {
    content: url('../images/nullD.svg');
  }
  25% {
    content: url('../images/oneD.svg');
  }
  50% {
    content: url('../images/twoDsvg.svg');
  }
  100% {
    content: url('../images/threeD.svg');
  }
}
</style>
