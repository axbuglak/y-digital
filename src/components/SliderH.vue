<template>
  <swiper
    :class="{ 'h-[80vh] sm:h-[150vh] xxlR:h-[50vh]': direction === 'vertical' }"
    :slides-per-view="slidesView"
    :loop="true"
    :pagination="{ clickable: true, verticalClass: 'left-[0px]' }"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :direction="direction"
  >
    <swiper-slide
      :class="{ 'pt-28': direction === 'horizontal' }"
      class="pb-2 sm:pt-20"
      v-for="(slide, idx) in slides"
      :key="idx"
    >
      <slot name="slide" :slide="slide"></slot>
    </swiper-slide>
  </swiper>
  
</template>

<script>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    direction: { type: String, required: true },
    slides: { type: Array, required: true },
    slidesView: { type: Number, default: 1 },
    
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {},
  },
}
</script>

<style>
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
.swiper-button-next {
  background: url('../images/nextArray.svg');
  right: 0;
}
.swiper-button-prev {
  background: url('../images/backArray.svg');
  left: 90%;
}
.swiper-button-next,
.swiper-button-prev {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 30;
  height: 40px;
  width: 40px;
  top: 40px;
  transition: 0.2s ease-in-out;
}

@media screen and (min-width: 1200px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 45px;
    height: 45px;
  }
  .swiper-button-prev {
    left: 92.5%;
  }
}

@media screen and (max-width: 768px) {
  .swiper-button-prev {
    left: 88%;
  }
}

@media screen and (max-width: 480px) {
  .swiper-button-prev {
    left: 75.5%;
  }
}

@media screen and (max-width: 321px) {
  .swiper-button-prev {
    left: 70%;
  }
}

.swiper-button-next:hover {
  background: url('../images/nextArrayHover.svg');
}
.swiper-button-prev:hover {
  background: url('../images/backArrayActive.svg');
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;

  background: #e0e8f2;
  border-radius: 2px;
}
.swiper-pagination-bullet-active {
  background: #016cea;
  box-shadow: 0px 3px 4px rgba(90, 166, 255, 0.39);
}
</style>
