<template>
  <div class="shadow-lg max-w-sm w-full lg:max-w-full lg:flex bg-white border-gray-400 rounded card h-full">
    <div class="h-48 lg:h-auto lg:w-48 flex flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-white" title="Woman holding a mug">
      <img :src="require(`@/assets/svg/${imgName}`)" class="p-4">
    </div>
    <div class="p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'imgName']
}
</script>

<style scoped>
  .card {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .card:hover {
    @apply -mt-3 shadow-xl cursor-pointer
  }
</style>
