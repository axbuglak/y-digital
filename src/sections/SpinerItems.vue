<template>
  <section class="my-[120px] md:my-[60px] container relative">
    <img
      src="../images/spiner.svg"
      class="spiner absolute bg"
      alt="spiner"
      ref="spiner"
    />
    <img
      src="../images/spinerLine.svg"
      class="hidden sm:inline-block absolute -z-10 top-[9%] left-7"
    />
    <div
      class="flex justify-between gap-x-[30px] md:flex-col md:ml-24"
      ref="spinerComponent"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="py-2"
        style="opacity: 0.3"
      >
        <h2 class="text-darkblue font-bold text-2xl transition">
          {{ item.title }}
        </h2>
        <p class="text-darkblue mt-4 transition">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '7 years of experience',
          text: 'Ми молоді спеціалісти з суттєвим досвідом та успішними проектами і розробками на майбутнє',
          time: [10, 1500],
        },
        {
          title: '5 star rating',
          text: 'Нема посилання щоб підтвердити, тому вам доведеться повірити на слово, що ми класні, серйозно. Змінити текст',
          time: [500, 1000],
        },
        {
          title: 'Ukrainian IT company',
          text: 'Наш головний офіс знаходиться в Києві, Україна. А інженерний центр в ЄС',
          time: [1000, 500],
        },
        {
          title: '20+ completed projects',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
          time: [1500, 10],
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
      Object.entries(this.$refs.spinerComponent.children).forEach((el) => {
        const elHeight = el[1].offsetHeight
        const elOffset = this.offset(el[1])
        const scrollPos = window.pageYOffset + window.innerHeight
        if (elHeight + elOffset < scrollPos) {
          el[1].style.opacity = 1
          this.$refs.spiner.classList.add('spin')
        } else {
          el[1].style.opacity = 0.3
          this.$refs.spiner.classList.remove('spin')
        }
      })
    },
    offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return rect.top + scrollTop
    },
  },
  watch: {
    spinerPosition() {
      Object.entries(this.$refs.spinerComponent.children).forEach((el) => {
        if (this.spinerPosition.left >= el[1].getBoundingClientRect().left) {
          el[1].style.opacity = 1
        } else {
          el[1].style.opacity = 0.3
        }
      })
    },
  },
}
</script>
