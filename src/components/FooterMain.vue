<template>
  <footer class="bg-darkblue text-white pt-16">
    <div
      class="container flex sm:flex-col sm:justify-center sm:text-center sm:items-center justify-between gap-x-5"
    >
      <div class="max-w-[230px] sm:max-w-full sm:text-left">
        <img
          src="../images/logoBig.svg"
          alt="logo"
          class="w-full sm:w-[60%] sm:mx-auto"
        />
        <p class="mt-8 sm:mb-4 md:text-xs sm:text-base sm:opacity-75">
          Business analyst of the production process. Implementation of crm and
          erp systems in the production process for medium and small businesses.
        </p>
      </div>
      <div class="flex gap-x-8 sm:flex-col">
        <div>
          <h1
            class="md:text-base opacity-40 uppercase font-bold text-lg lett tracking-[0.16em] mb-8"
            @click="
              () => {
                if (this.isSmall) {
                  this.solution = !this.solution
                }
              }
            "
          >
            Solutions
            <svg
              v-if="isSmall"
              class="inline-block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_179_610)">
                <path d="M7 10L12 15L17 10H7Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_179_610">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </h1>
          <Transition name="footer">
            <div v-if="solution">
              <p class="md:text-xs font-bold mb-6">Products</p>
              <p class="md:text-xs font-bold mb-6">Solutions</p>
              <p class="md:text-xs font-bold mb-6">Proposal</p>
            </div>
          </Transition>
        </div>
        <div>
          <h1
            @click="
              () => {
                if (this.isSmall) {
                  this.company = !this.company
                }
              }
            "
            class="md:text-base opacity-40 uppercase font-bold text-lg lett tracking-[0.16em] mb-8"
          >
            Company <svg
              v-if="isSmall"
              class="inline-block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_179_610)">
                <path d="M7 10L12 15L17 10H7Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_179_610">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </h1>
          <Transition name="footer">
            <div v-if="company">
              <p class="md:text-xs font-bold mb-6">Our Team</p>
              <p class="md:text-xs font-bold mb-6">Blog</p>
              <p class="md:text-xs font-bold mb-6">Vacancies</p>
            </div>
          </Transition>
        </div>
      </div>
      <div class="flex md:flex-col-reverse md: gap-x-5 lg:gap-x-1">
        <language-change class="md:mt-auto sm:mt-10 md:ml-auto sm:mr-auto" />
        <div>
          <router-link
            to="/"
            class="hover:border-darkblue sm:bg-gradient-to-r sm:from-[#1276EC] sm:to-[#00A3FF] sm:border-none sm:px-8 sm:py-3 ease-in-out duration-300 text-white py-2 lg:px-2 px-8 border-[#00A3FF] border-2 rounded"
            >Get in touch</router-link
          >
          <p class="md:text-xs font-bold mt-8">+38 (050) 757 77 57</p>
          <p class="md:text-xs font-bold">info@y-digital.team</p>
        </div>
      </div>
    </div>
    <div
      class="border-[1px] w-full border-[rgba(255,255,255,0.3)] mt-16 sm:mt-6"
    ></div>
    <p class="py-5 text-center">
      © 2022 Y-Digital.Team - All Rights Reserved. Stand with Ukraine 💛💙
    </p>
  </footer>
</template>

<script>
import LanguageChange from './LanguageChange.vue'

export default {
  components: {
    LanguageChange,
  },

  props: {
    isSmall: { type: Boolean, required: true },
  },

  mounted() {
    window.addEventListener('resize', this.calculateCloseMenu)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.calculateCloseMenu)
  },

  data() {
    return {
      solution: true ,
      company: true,
    }
  },

  created() {
    if(this.isSmall) {
        this.company = false 
        this.solution = false 
      } else {
        this.company = true 
        this.solution = true 
      }
  },

  methods: {
    calculateCloseMenu() {
      if(this.isSmall) {
        this.company = false 
        this.solution = false 
      } else {
        this.company = true 
        this.solution = true 
      }
    }
  },
}
</script>

<style>
.footer-enter-active {
  animation: footer-in 0.5s;
}
.footer-leave-active {
  animation: footer-in 0.5s reverse;
}
@keyframes footer-in {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.25);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
