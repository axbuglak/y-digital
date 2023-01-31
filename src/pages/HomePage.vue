<template>
  <main>
    <section>
      <div
        class="bg-fixed xxlR:bg-contain bg-no-repeat sm:bg-cover sm:bg-[url('../images/heroSmall.png')] bg-[url('../images/hero.png')]"
      >
        <div
          class="py-[80px] sm:py-[64px] max-w-[800px] m-auto sm:text-left sm:px-[16px] text-center text-white"
        >
          <h1 class="font-bold text-[36px]">
            Connecting people with technology
          </h1>
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
      <h1 class="font-bold text-darkblue text-4xl">Our Products</h1>
      <slider :direction="'horizontal'" :slides="sliderOne">
        <template #slide="{ slide: slide }">
          <div class="flex sm:flex-col gap-x-8 justify-center">
            <img :src="slide.img" alt="img" class="h-[90%] w-[50%] sm:w-full" />
            <div>
              <div class="flex gap-x-4 items-center sm:mt-6">
                <img :src="slide.authorLogo" :alt="slide.author" />
                <p class="font-semibold lg:text-lg text-xl">
                  {{ slide.author }}
                </p>
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
        <h1 class="font-bold text-darkblue text-4xl">
          Interesting in our blog
        </h1>
        <slider
          :slidesView="maxSliderElements"
          :direction="'horizontal'"
          :slides="sliderTwo"
        >
          <template #slide="{ slide: slide }">
            <div class="mx-4">
              <img :src="slide.img" alt="img" class="w-full" />
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
    <section class="container py-28 sm:py-10">
      <h1 class="font-bold text-darkblue text-4xl">Our Team</h1>
      <slider
        :isSlider="isSlider"
        :direction="'horizontal'"
        :slides="sliderTeam"
      >
        <template #slide="{ slide: slide }">
          <img :src="slide.img" alt="his photo" class="w-full" />
          <h1 class="font-bold text-darkblue text-2xl mt-6 mb-2">
            {{ slide.name }}
          </h1>
          <h2 class="opacity-75 text-darkblue mb-10">{{ slide.prof }}</h2>
        </template>
      </slider>
      <div class="flex justify-center mt-14">
        <button-blue>Хочу в команду</button-blue>
      </div>
    </section>
    <section class="container">
      <h1 class="font-bold text-darkblue mb-10 text-4xl">Our Locations</h1>
      <div class="flex justify-between gap-x-3 sm:flex-col sm:gap-y-4">
        <img class="w-[50%] sm:w-full" src="../images/kyiv.svg" alt="kyiv" />
        <img
          class="w-[50%] sm:w-full"
          src="../images/tallinn.svg"
          alt="taillinn"
        />
      </div>
    </section>
    <section
      class="bg-bottom bg-fixed text-center py-28 xxlR:bg-contain bg-no-repeat sm:bg-cover sm:bg-white bg-[url('../images/formBg.png')]"
    >
      <h1 class="font-bold text-darkblue mb-4 text-4xl">Get in touch</h1>
      <p class="text-[#B4BED0] font-bold text-lg max-w-[450px] mx-auto sm:px-5 sm:text-xs">
        Contact us by phone: <span class="text-darkblue">+38 (050) 777 55 75</span> or email: <span class="text-darkblue">info@y-digital.team</span>
        or by using the form below
      </p>
      <form class="bg-white p-8 rounded-[4px] shadow-md max-w-[440px] mx-auto">
        <input type="email" v-model="email" placeholder="Email" class="bg-[#F6F7F9] w-full rounded-t-[4px] border-b-[1px] border-b-[#F6F7F9] px-4 py-3 outline-none focus:border-b-deepblue text-[#93A1AE] font-bold" />
        <form class="relative">
          <div @click="isActiveContry = !isActiveContry" class="absolute top-1/2 bottom-1/2 left-2"><img :src="country.img" /></div>
          <Transition name="footer">
            <ul v-if="isActiveContry" class="absolute top-[100%] px-2 bg-[#F6F7F9]">
              <li v-for="c in countries" class="flex items-center bg-white p-1 my-2 rounded" :key="c.name" @click="() => {
                country = c
                isActiveContry = false
              }">
                <img :src="c.img" />
                {{ c.num }}
              </li>
            </ul>
          </Transition>
          <input type="tel" placeholder="Phone" v-model="phone" class=" bg-[#F6F7F9] mt-4 w-full rounded-t-[4px] border-b-[1px] border-b-[#F6F7F9] pr-4 py-3 pl-14 outline-none focus:border-b-deepblue text-[#93A1AE] font-bold" />
        </form>
        
        <textarea type="text" placeholder="Enter your message regarding cooperation, investment or to discuss your project. We will provide a prompt response." class="bg-[#F6F7F9] resize-none h-[100px] mt-4 w-full rounded-t-[4px] border-b-[1px] border-b-[#F6F7F9] px-4 py-3 outline-none focus:border-b-deepblue text-[#93A1AE] font-bold" />
        <button class="text-darkblue font-bold flex gap-x-2 mt-6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_134_152)">
<path d="M20 6H12L10 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.11 6 20 6ZM19 14H16V17H14V14H11V12H14V9H16V12H19V14Z" fill="#001F56"/>
</g>
<defs>
<clipPath id="clip0_134_152">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
          </svg>Add File
        </button>
        <button-blue class="mt-8">Send message</button-blue>
      </form>
    </section>
    <footer-main :isSmall="isSmallFooter" />
  </main>
</template>

<script>
import ButtonBlue from '@/components/ButtonBlue.vue'
import Slider from '@/components/SliderH.vue'
import sliderOneImg from '../images/slide1.png'
import sliderOneAuthor from '../images/slide1Author.svg'
import FooterMain from '@/components/FooterMain.vue'

import SliderTwoImgOne from '../images/slider2i1.png'
import SliderTwoImgTwo from '../images/slider2i2.png'
import SliderTwoImgThree from '../images/slider2i3.png'

import ukraineFlag from '../images/ukraineLogo.svg'

import SliderTeamOne from '../images/team1.png'
import SliderTeamTwo from '../images/team2.png'
import SliderTeamThree from '../images/team3.png'
import SliderTeamFour from '../images/team4.png'

import SpinerItems from '@/sections/SpinerItems.vue'
import InfoCards from '@/sections/InfoCards.vue'
import DigitalTransformation from '@/sections/DigitalTransformation.vue'


export default {
//******** ACHTUNG *********//

// sliderOne слайды первого слайдера(Our Products)
// sliderTwo слайды второго слайдера(Interesting in our blog)
// sliderTeam слайды 3 слайдера(Our Team)
// countries - менять страны для менюшки, готовий номер телефона с кодом странны в phoneNumber

//******** ACHTUNG *********//


  components: {
    Slider,
    ButtonBlue,
    SpinerItems,
    InfoCards,
    DigitalTransformation,
    FooterMain,
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
      sliderTeam: [
        {
          img: SliderTeamOne,
          name: 'Lewis Lucas',
          prof: 'IT Manager',
        },
        {
          img: SliderTeamTwo,
          name: 'Lewis Lucas',
          prof: 'IT Manager',
        },
        {
          img: SliderTeamThree,
          name: 'Lewis Lucas',
          prof: 'IT Manager',
        },
        {
          img: SliderTeamFour,
          name: 'Lewis Lucas',
          prof: 'IT Manager',
        },
      ],
      countries: [
        {
          num: '+380',
          img: ukraineFlag
        },
        {
          num: '+49',
          img: ukraineFlag
        },
      ],
      country: {
          num: '+380',
          img: ukraineFlag
        },
      maxSliderElements: 0,
      isSlider: false,
      isSmallFooter: false,
      email: '',
      phone: '',
      isActiveContry: false,
    }
  },
  created() {
    if (window.innerWidth < 480) {
      this.maxSliderElements = 1
      this.isSlider = true
      this.isSmallFooter = true
    } else {
      this.isSlider = false
      this.maxSliderElements = 1
      this.isSmallFooter = false
    }
  },
  computed: {
    phoneNumber() {
      return this.country.num + this.phone
    }
  },
  methods: {
    calculateMaxSliderElements() {
      if (window.innerWidth < 480) {
        this.maxSliderElements = 1
        this.isSlider = true
        this.isSmallFooter = true
      } else {
        this.isSlider = false
        this.maxSliderElements = 1
        this.isSmallFooter = false
      }
    },
  },
}
</script>
