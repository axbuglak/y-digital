<template>
  <swiper
    :slides-per-view="slidesView"
    :space-between="50"
    :loop="true"
    :pagination="isPagination"
    :navigation="isNavigation"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :direction="direction"
    :class="{
        'sliderHideLastElem': isLastNotVis
    }"
  >
    <swiper-slide
      class="pb-10 pt-20 text-center"
      
      v-for="(slide, idx) in slides"
      :key="idx"
    >
      <slot name="slide"  :slide="slide"></slot>
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
    isNavigation: { type: Boolean, default: true },
    isPagination: { type: Boolean, default: true },
    isLastNotVis: {type: Boolean, default: false}
  },
  methods: {
    onSwiper() {},
    onSlideChange(e) {
      console.log(e.el);
    },
  },
}
</script>

<style>
.sliderHideLastElem:nth-last-child() {
  opacity: 0.8;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
.swiper-button-next {
  background: url('../images/nextArray.svg');
  right: 2%;
}
.swiper-button-prev {
  background: url('../images/backArray.svg');
  left: 89%;
  /* right: 5%; */
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

@media screen and (max-width: 900px) {
  .swiper-button-prev {
    left: 87%;
  }
  .swiper-button-next {
    right: 0%;
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

  background: #adb8c6;
  border-radius: 2px;
}
.swiper-pagination-bullet-active {
  background: #016cea;
  box-shadow: 0px 3px 4px rgba(90, 166, 255, 0.39);
}
</style>
