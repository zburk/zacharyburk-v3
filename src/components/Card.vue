<template>
  <div class="shadow-lg max-w-sm w-full lg:max-w-full lg:flex bg-white border-gray-400 rounded card h-full">
    <div class="h-48 lg:h-auto lg:w-48 flex flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-white relative" title="Woman holding a mug">
      <img :src="require(`@/assets/svg/${imgName}.svg`)" class="p-4 color">
      <img :src="require(`@/assets/svg/${imgName}_grayscale.svg`)" class="p-4 grayscale">
    </div>
    <div class="p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base font-light">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'description', 'imgName']
}
</script>

<style scoped>
  .card {
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  @media (min-width: 1024px) {
    img.color {
      position: absolute;
      top: 15%;
      -webkit-transition: all 0.35s ease-out;
      -moz-transition: all 0.35s ease-out;
      -o-transition: all 0.35s ease-out;
      -ms-transition: all 0.35s ease-out;
      transition: all 0.35s ease-out;
      opacity: 0;
      z-index: 10;
    }

    img.grayscale {
      opacity: 1;
      position: absolute;
      left: 0;
      top: 15%;
    }

    .card:hover {
      transform: translateY(-5px);
      @apply shadow-xl cursor-pointer
    }

    .card:hover img.color {
      -webkit-transition: all 0.35s ease-in;
      -moz-transition: all 0.35s ease-in;
      -o-transition: all 0.35s ease-in;
      -ms-transition: all 0.35s ease-in;
      transition: all 0.35s ease-in;
      display: block;
      opacity: 1;
    }
  }

</style>
