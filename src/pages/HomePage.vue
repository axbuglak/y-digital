<template>
  <section>
    <div class="bg-fixed xxlR:bg-contain bg-no-repeat sm:bg-cover sm:bg-[url('../images/heroSmall.png')] bg-[url('../images/hero.png')] ">
      <div class="py-[80px] sm:py-[64px]  max-w-[800px] m-auto sm:text-left sm:px-[16px] text-center text-white">
        <h1 class="font-bold text-[36px]">Connecting people with technology</h1>
        <p class="text-[18px mt-25px] font-bold">
          We can help you maximize the efficiency of your work by using the
          latest technology. By implementing our Technology Solutions, you can
          quickly and easily increase your key performance indicators.
        </p>
        <button-blue class="mt-[50px] sm:block sm:mx-auto" :text="'View proposal'" />
      </div>
    </div>
  </section>
  <spiner-items />
  <slider-dopple :direction="'horizontal'" />
</template>

<script>
import ButtonBlue from '@/components/ButtonBlue.vue';

import SpinerItems from '@/components/SpinerItems.vue';
import SliderDopple from '@/components/SliderDopple.vue';

export default {
  components: {
    ButtonBlue,
    SpinerItems,
    SliderDopple
  },
}
</script>

