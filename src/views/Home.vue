<template>
  <div>
    <header class="flex h-screen items-center flex-col md:flex-row justify-center bg-slant w-full sun-mobile">
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
        <div class="lg:w-1/3" @click="selectCard('dental')">
          <Card
            :title="'Dental School'"
            :description="'Hoping to attend dental school? I\'d love to work with you to efficiently strengthen your application or plan your journey to dental school.'"
            :img-name="'undraw_medicine_b1ol'">
          </Card>
        </div>
        <div class="lg:w-1/3 pt-24 lg:pt-0" @click="selectCard('web')">
          <Card
            :title="'Web Development'"
            :description="'Looking to launch a new website for a startup or personal blog? Check out my portfolio and reach out to me for a quote if you\'d like to start your online presence.'"
            :img-name="'undraw_experience_design_eq3j'">
          </Card>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-24">
      <div class="flex flex-col lg:flex-row items-center justify-around pt-24 pb-24 lg:items-stretch">
        <div class="lg:w-1/3" @click="selectCard('credit')">
          <Card
            :title="'Credit Cards'"
            :description="'Maximize every dollar you spend. Credit card companies offer ludicrous bonuses to redeem for cash back or memorable travel experiences.'"
            :img-name="'undraw_credit_card_df1m'">
          </Card>
        </div>
        <div class="lg:w-1/3 pt-24 lg:pt-0" @click="selectCard('invest')">
          <Card
            :title="'Investing'"
            :description="'Learn about my investing philosophy and how I target a stable portfolio without sacrificing growth.'"
            :img-name="'undraw_investing_7u74'">
          </Card>
        </div>
      </div>
    </div>

    <div class="bg-gray-800 py-6">
      <p class="text-right pr-10 text-gray-300">&copy; 2019 Zachary Burk</p>
    </div>

    <modal name="contact-modal" height="auto" v-show="showModal">
      <ContactForm
        :type="type"
        v-on:cancel="$modal.hide('contact-modal')"/>
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
  mounted() {
    this.$modal.show('contact-modal');
  },
  data() {
    return {
      type: '',
      showModal: false
    }
  },
  methods: {
    selectCard(type) {
      this.showModal = true;
      this.type = type;
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

  .sun-mobile {
      background-image: url('../assets/svg/undraw_air_support_wy1q.svg');
      background-repeat: no-repeat;
      background-position: left 25px top 25px;
      background-size: 35%;
  }

  .lighthouse-mobile {
      background-image: url('../assets/svg/undraw_light_the_fire_gt58.svg');
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 250px;
  }

  @media (min-width: 768px) {
    .lighthouse-mobile, .sun-mobile {background: none}
    .bg-slant {
        background-image: url('../assets/svg/undraw_light_the_fire_gt58.svg'), url('../assets/svg/Path 204.svg'), url('../assets/svg/undraw_air_support_wy1q.svg');
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-position: right bottom, right, left 25px top 25px;
        background-size: 250px, 55% 100%, 35%;
    }
  }

  .light-blue-bg {
    background-color: #EDF2F7;
  }
</style>
