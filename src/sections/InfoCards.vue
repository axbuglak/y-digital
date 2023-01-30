<template>
  <section ref="cards">
    <div
      v-for="(c, idx) in cards"
      :key="idx"
      class="flex relative h-[50vh] sm:h-[500px]"
      :class="{
        'flex-row-reverse': c.reverse,
      }"
    >
      <div
        class="card ease-in-out duration-150 md:py-2 relative h-full sm:pt-48 sm:px-4 "
      >
        <h2
          class="xxlR:text-lg md:text-xs sm:text-white sm:font-bold text-deepblue uppercase bold text-sm"
        >
          {{ c.name }}
        </h2>
        <h1
          class="xxlR:text-5xl md:text-xl sm:text-white sm:font-bold sm:mb-10 bold text-darkblue mt-3 mb-4 md:mt-2 md:mb-1 text-3xl"
        >
          {{ c.title }}
        </h1>
        <p class="xxlR:text-xl md:text-sm text-darkblue opacity-80 text-lg">
          {{ c.text }}
        </p>
        <div
          class="sm:hidden absolute top-0 border-solid border-y-transparent border-y-[25vh] xxlR:border-y-[25vh]"
          :class="
            c.reverse
              ? 'left-[-9.9vw] border-l-0 border-r-[10.1vw] border-whiteCustom'
              : 'right-[-9.9vw] border-r-0 border-l-[10.1vw] border-whiteCustom'
          "
        ></div>
      </div>
      <img
        :src="c.img"
        class="sm:brightness-50 min-w-[50%] xxlR:h-[50vh] md:h-[50vh] sm:absolute -z-10"
        :class="c.reverse ? 'mr-auto' : 'ml-auto'"
      />
    </div>
  </section>
</template>

<script>
import digitalizationImg from '../images/digitalization.png'
import solutionImg from '../images/solution.png'
import headlineImg from '../images/headline.png'

export default {
  data() {
    return {
      cards: [
        {
          name: 'solutions',
          title: 'Modern Architecture of our digital products',
          img: solutionImg,
          text: 'Текст про сучасну складну архітектуру діджитал продуктів та інструменти реалізації. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          name: 'digitalization',
          title: 'Big Data & work with highly loaded web portals',
          img: digitalizationImg,
          text: 'Текст про роботу з високонавантаженими веб ресурсами, срм системами, дашбордами, сайтами-агрегаторами, пошуковиками. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          reverse: true,
        },
        {
          name: 'headline here',
          title: 'Our areas of competence of digital transformation',
          img: headlineImg,
          text: 'Текст про додаткові напрямки діяльності Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
      ],
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
      Object.entries(this.$refs.cards.children).forEach((el) => {
        const elHeight = el[1].offsetHeight
        const elOffset = this.offset(el[1])
        const scrollPos = window.pageYOffset + window.innerHeight
        if (elHeight + elOffset < scrollPos) {
          el[1].children[0].classList.add('card__active')
        } else {
          el[1].children[0].classList.remove('card__active')
        }
      })
    },
    offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return rect.top + scrollTop
    },
  },
}
</script>
