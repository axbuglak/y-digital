<template>
  <nav
    class="z-50 px-6 ease-in-out duration-300 py-[20px] lg:block mx-auto flex justify-between items-center fixed w-full bg-[rgba(0,0,0,0.75)] border-b-[1px solid rgba(255, 255, 255, 0.3)]"
    :class="showNavbar ? 'top-[-1px]' : 'top-[-100px]'"
  >
    <div class="flex items-center justify-between">
      <router-link to="/"
        ><img src="../images/logo.svg" alt="Logo" />
      </router-link>
      <!------ Mobile menu button ------>
      <div @click="toggleNav" class="lg:flex hidden">
        <button
          type="button"
          class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!----- Mobile Menu open: "block", Menu closed: "hidden" ------>
    <Transition name="bounce">
      <ul
        v-if="showMenu"
        class="flex-col space-x-0 mt-8 space-y-4 items-center flex lgR:hidden absolute p-3 rounded-md bg-[rgba(0,0,0,0.9)]"
      >
        <router-link
          to="/"
          class="text-[rgb(255,255,255,0.7)] hover:text-white transition"
          >Products</router-link
        >
        <router-link
          to="/"
          class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
          >Solutions</router-link
        >
        <router-link
          to="/"
          class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
          >Proposal</router-link
        >
        <router-link
          to="/"
          class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
          >Blog</router-link
        >
        <router-link
          to="/"
          class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
          >Vacancies</router-link
        >
        <language-change />
        <router-link
          to="/"
          class="text-white py-[8px] px-[32px] border-[#00A3FF] border-2 rounded"
          >Get in touch</router-link
        >
      </ul>
    </Transition>

    <!------- MENU 2 FOR LAPTOPS ------->
    <ul class="lg:hidden items-center flex flex-row space-x-4 mt-0">
      <router-link
        to="/"
        class="text-[rgb(255,255,255,0.7)] hover:text-white transition"
        >Products</router-link
      >
      <router-link
        to="/"
        class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
        >Solutions</router-link
      >
      <router-link
        to="/"
        class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
        >Proposal</router-link
      >
      <router-link
        to="/"
        class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
        >Blog</router-link
      >
      <router-link
        to="/"
        class="text-[rgba(255,255,255,0.7)] hover:text-white transition"
        >Vacancies</router-link
      >
      <language-change />
      <router-link
        to="/"
        class="hover:border-darkblue ease-in-out duration-300 text-white py-[8px] px-[32px] border-[#00A3FF] border-2 rounded"
        >Get in touch</router-link
      >
    </ul>
  </nav>
</template>

<script>
import LanguageChange from './LanguageChange.vue'

export default {
  components: {
    LanguageChange
  },

  data() {
    return {
      showMenu: false,
      showNavbar: false,
      lastScrollPosition: 0,
    }
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.updateScrollDirection) 
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScrollDirection) 
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu
    },
    updateScrollDirection() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },
}
</script>

<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>