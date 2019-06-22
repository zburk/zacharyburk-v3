<template>
  <div>
    <header class="flex h-screen items-center flex-col md:flex-row justify-center bg-slant w-full">
      <div class="mt-16 md:-mt-16 mr-16 flex-1 w-full text-right">
        <h1 class="header-text">Dental Student</h1>
        <h2 class="sub-text">By day</h2>
      </div>

      <div class="pt-16 pl-16 md:mt-16 text-white bg-blue-900 md:bg-transparent flex-1 w-full lighthouse-mobile">
        <h1 class="header-text glow">Web Developer</h1>
        <h2 class="sub-text">By night</h2>
      </div>
    </header>

    <div class="light-blue-bg py-24">
      <h1 class="text-center font-bold text-5xl">How Can I Help You?</h1>

      <div class="flex flex-col lg:flex-row items-center justify-around pt-24 pb-24 lg:items-stretch">
        <div class="lg:w-1/3" @click="selectCard">
          <Card
            :title="'Dental School'"
            :img-name="'undraw_medicine_b1ol'">
          </Card>
        </div>
        <div class="lg:w-1/3 pt-24 lg:pt-0" @click="selectCard">
          <Card
            :title="'Web Development'"
            :img-name="'undraw_experience_design_eq3j'">
          </Card>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-24">
      <div class="flex flex-col lg:flex-row items-center justify-around pt-24 pb-24 lg:items-stretch">
        <div class="lg:w-1/3" @click="selectCard">
          <Card
            :title="'Credit Cards'"
            :img-name="'undraw_credit_card_df1m'">
          </Card>
        </div>
        <div class="lg:w-1/3 pt-24 lg:pt-0" @click="selectCard">
          <Card
            :title="'Web Development'"
            :img-name="'undraw_investing_7u74'">
          </Card>
        </div>
      </div>
    </div>

    <div class="bg-gray-800 py-6">
      <p class="text-right pr-10 text-gray-300">&copy; 2019 Zachary Burk</p>
    </div>

    <modal name="contact-modal" height="375px">
      <ContactForm v-on:cancel="$modal.hide('contact-modal')"/>
    </modal>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'home',
  components: { Card, ContactForm },
  methods: {
    selectCard() {
      this.$modal.show('contact-modal');
    }
  }
}
</script>

<style>
  .header-text {
    @apply text-5xl font-bold italic
  }

  .sub-text {
    @apply text-2xl font-thin
  }

  .glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  }

  .lighthouse-mobile {
      background-image: url('../assets/svg/undraw_light_the_fire_gt58.svg');
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 250px;
  }

  @media (min-width: 768px) {
    .lighthouse-mobile {background: none}
    .bg-slant {
        background-image: url('../assets/svg/undraw_light_the_fire_gt58.svg'), url('../assets/svg/Path 204.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: right bottom, right;
        background-size: 250px, 55% 100%;
    }
  }

  .light-blue-bg {
    background-color: #EDF2F7;
  }
</style>
