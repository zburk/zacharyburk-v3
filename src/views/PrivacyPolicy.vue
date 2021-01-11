<template>
  <div>
    <header class="flex items-center flex-col md:flex-row justify-center w-full bg-blue-900 py-16">
      <div class="pl-16 text-white  md:bg-transparent flex-1 w-full">
        <h1 class="header-text glow">ZipLog</h1>
        <h2 class="sub-text">Privacy Policy</h2>
      </div>
    </header>

    <div class="light-blue-bg py-24">
      <div class="container mx-auto py-3">
        <h1 class="font-bold text-3xl">How we treat your data</h1>
        <p>We believe your data is yours, and as such, we don't collect any information that can identify you. Any data that is collected is anonymous and is used to identify/fix bugs.</p>
      </div>

      <div class="container mx-auto py-3">
        <h1 class="font-bold text-3xl">Data we collect</h1>
        <p>Data is collected using <a href="https://support.apple.com/en-us/HT210584#">Apple's built-in system</a> tracking app usage. It does <strong>not</strong> report any data entered in via the app.</p>
      </div>

      <div class="container mx-auto py-3">
        <h1 class="font-bold text-3xl">Can I opt out?</h1>
        <p>You can opt out from sending data through Apple's systems by going to Settings > Privacy > Analytics &amp; Improvements > Share With App Developers "OFF"</p>
      </div>
    </div>

    <div class="bg-gray-800 py-6 flex justify-between">
      <span class="pl-10 text-gray-300">Designed with <a href="https://vuejs.org/" target="_blank">Vue</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a></span>
      <span class="pr-10 text-gray-300">&copy; 2021 Zachary Burk</span>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'privacyPolicy'
}
</script>

<style>
  a {
    @apply text-blue-400 !important
  }

  .header-text {
    @apply text-5xl font-bold italic
  }

  .sub-text {
    @apply text-2xl font-thin
  }

  .glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }

  .light-blue-bg {
    background-color: #EDF2F7;
  }
</style>
