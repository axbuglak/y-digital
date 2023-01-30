<template>
  <div>
    <div class="flex">
      <div v-for="s, ind in slides" :key="ind">{{ s.title }}</div>
    </div>
    <div class="flex">
      <div class="next-array"></div>
      <div class="prev-array"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{ 
    direction: {type: String, required: true},
    slides: {type: Array, required: true},
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    slideNow() {
      return this.slides.slice(this.page, this.page+1)
    }
  }

}
</script>