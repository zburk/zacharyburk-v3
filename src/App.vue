<template>
  <div id="app" class="font-sans">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
  a:hover {
    @apply underline
  }

  p {
    @apply text-gray-700
  }

  body {
    @apply m-0
  }
</style>
