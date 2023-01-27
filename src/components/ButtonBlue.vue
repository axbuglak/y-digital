<template>
  <button class="hover:scale-105 ease-in-out duration-300 rounded-[4px] gradient__blue  px-[32px] py-[12px] font-bold text-white">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {type: String, required: true}
  }
}
</script>
