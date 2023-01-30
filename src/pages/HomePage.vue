<template>
  <section>
    <div
      class="bg-fixed xxlR:bg-contain bg-no-repeat sm:bg-cover sm:bg-[url('../images/heroSmall.png')] bg-[url('../images/hero.png')]"
    >
      <div
        class="py-[80px] sm:py-[64px] max-w-[800px] m-auto sm:text-left sm:px-[16px] text-center text-white"
      >
        <h1 class="font-bold text-[36px]">Connecting people with technology</h1>
        <p class="text-[18px mt-25px] font-bold">
          We can help you maximize the efficiency of your work by using the
          latest technology. By implementing our Technology Solutions, you can
          quickly and easily increase your key performance indicators.
        </p>
        <button-blue class="mt-[50px] sm:block sm:mx-auto">
          View proposal</button-blue
        >
      </div>
    </div>
  </section>
  <spiner-items />
  <section class="container">
    <h1 class="font-bold text-darkblue text-4xl mb-10">Our Products</h1>
    <slider :direction="'vertical'" :slides="sliderOne">
      <template #slide="{ slide: slide }">
        <div class="flex sm:flex-col pl-4 gap-x-8 justify-center">
          <img :src="slide.img" alt="img" class="h-[90%] w-[50%] sm:w-full" />
          <div>
            <div class="flex gap-x-4 items-center sm:mt-6">
              <img :src="slide.authorLogo" :alt="slide.author" />
              <p class="font-semibold lg:text-lg text-xl">{{ slide.author }}</p>
            </div>
            <h1
              class="font-bold lg:2text-xl text-3xl text-darkblue mb-6 mt-10 sm:my-4"
            >
              {{ slide.title }}
            </h1>
            <p class="text-lg lg:text-sm text-darkblue opacity-80">
              {{ slide.text }}
            </p>
            <div class="flex mt-10 gap-x-8 items-center">
              <button-blue
                >View in the web
                <svg
                  width="24"
                  class="inline-block"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_137_50)">
                    <path
                      d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_137_50">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button-blue>
              <button class="text-deepblue font-bold">
                Read more
                <svg
                  width="24"
                  class="inline-block"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_137_47)">
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="#016CEA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_137_47">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </template>
    </slider>
  </section>
  <info-cards />
  <digital-transformation />
  <section class="bg-[#F4F9FF] py-10">
    <div class="container">
      <h1 class="font-bold text-darkblue text-4xl mb-10">
        Interesting in our blog
      </h1>
      <slider :slidesView="maxSliderElements" :direction="'horizontal'" :slides="sliderTwo">
        <template #slide="{ slide: slide }">
          <div class="mx-4">
            <img :src="slide.img" alt="img" />
            <h1 class="font-bold text-darkblue md:text-xl text-2xl my-4">
              {{ slide.title }}
            </h1>
            <p class="text-darkblue opacity-80 md:text-sm text-lg mb-4">
              {{ slide.text }}
            </p>
            <div class="flex gap-x-1">
              <div
                v-for="(c, idx) in slide.category"
                :key="idx"
                class="bg-[#E9F0F9] md:text-xs md:px-2 md:py-1 rounded-[28px] py-[5px] px-3 text-[#96AAC9] font-bold"
              >
                {{ c }}
              </div>
            </div>
            <button class="text-deepblue font-bold my-11">
              Read more
              <svg
                width="24"
                class="inline-block"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_137_47)">
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="#016CEA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_137_47">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </template>
      </slider>
      <div class="flex justify-center">
        <button-blue class="mt-14">More articles</button-blue>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBlue from '@/components/ButtonBlue.vue'
import Slider from '@/components/SliderH.vue'
import sliderOneImg from '../images/slide1.png'
import sliderOneAuthor from '../images/slide1Author.svg'
import SliderTwoImgOne from '../images/slider2i1.png'
import SliderTwoImgTwo from '../images/slider2i2.png'
import SliderTwoImgThree from '../images/slider2i3.png'

import SpinerItems from '@/sections/SpinerItems.vue'
// import SliderDopple from '@/components/SliderDopple.vue';
import InfoCards from '@/sections/InfoCards.vue'
import DigitalTransformation from '@/sections/DigitalTransformation.vue'

export default {
  components: {
    Slider,
    ButtonBlue,
    SpinerItems,
    // SliderDopple,
    InfoCards,
    DigitalTransformation,
  },
  mounted() {
    window.addEventListener('resize', this.calculateMaxSliderElements)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.calculateMaxSliderElements)
  },
  data() {
    return {
      sliderOne: [
        {
          img: sliderOneImg,
          authorLogo: sliderOneAuthor,
          author: 'Yobuxxo',
          title: 'A simple crm for small business',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...',
        },
        {
          img: sliderOneImg,
          authorLogo: sliderOneAuthor,
          author: 'Yobuxxo',
          title: '2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...',
        },
      ],
      sliderTwo: [
        {
          img: SliderTwoImgOne,
          title: 'Building an IoT Platform in GCP: A Starter Kit',
          text: 'Over the past decade, the complexity of manufacturing processes and assembly lines have significantly increased. Whereas in...',
          category: ['Design', 'Technology', 'Business'],
        },
        {
          img: SliderTwoImgTwo,
          title: 'Redefining the customer experience in consumer banking',
          text: 'Over the past decade, the complexity of manufacturing processes and assembly lines have significantly increased. Whereas in...',
          category: ['Development'],
        },
        {
          img: SliderTwoImgThree,
          title: 'Into the future: embracing the metaverse',
          text: 'Over the past decade, the complexity of manufacturing processes and assembly lines have significantly increased. Whereas in...',
          category: ['Solutions', 'CRM'],
        },
      ],
      maxSliderElements: 0
    }
  },
  created() {
    this.maxSliderElements = (window. innerWidth < 480 ? 1 : 3);
  },
  methods: {
    calculateMaxSliderElements() {
      this.maxSliderElements = (window. innerWidth < 480 ? 1 : 3);
    }
  },
}
</script>
