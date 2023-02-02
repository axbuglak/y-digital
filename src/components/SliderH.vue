<template>
  <template v-if="isSlider">
    <swiper
      :slides-per-view="slidesView"
      :space-between="50"
      :loop="true"
      :pagination="{ clickable: true, verticalClass: 'left-[0px]' }"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :direction="direction"
    
    >
      <swiper-slide
        class="pb-10 pt-20 text-center"
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <slot name="slide" :slide="slide"></slot>
      </swiper-slide>
    </swiper>
  </template>
  <template v-if="!isSlider">
    <div class="flex justify-between gap-x-8">
      <div v-for="(slide, idx) in slides" :key="idx">
        <slot name="slide" :slide="slide"></slot>
      </div>
    </div>
  </template>
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
    isSlider: { type: Boolean, default: true },
  },
  methods: {
    onSwiper() {
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
