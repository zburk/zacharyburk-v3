<template>
  <div>
    <form autocomplete="off" method="POST" name="contact-form" netlify data-netlify="true" netlify-honeypot="bot-field">
      <div class="p-8">
        <h1 class="text-gray-900 font-bold text-xl mb-2">Contact</h1>
          <p v-if="type === 'dental'">
            Sorry! Information regarding applying for dental school is still a work in progress.
            If you'd like me to look over your personal for free, fill out this
            contact form and I'll email back to set up a time to look over it.
          </p>

          <p v-if="type === 'web'">
            The portfolio page is still under construction. However, check out <a href="https://www.linkedin.com/in/zburk/" target="_blank">LinkedIn</a> to see projects
            that I have worked on. If you have any questions, feel free to fill out the from below
            and I'll get in touch with you ASAP.
          </p>

          <p v-if="type === 'credit'">
            I'm still putting together information regarding credit cards, but check out this
            <a href="https://docs.google.com/document/d/1-q1zpM6Tpm2WYzss72erAGYATlHWh6SCEVErXcwYrkA/edit?usp=sharing" target="_blank">document</a>
            covering the basics of credit card bonuses! I also recommend checking out <a href="https://www.asksebby.com/" target="_blank">Ask Sebby</a> for more info.
          </p>

          <div class="form-control">
            <input
              v-model="formData.name"
              placeholder="What's your name?" />
          </div>

          <div class="form-control">
            <input
              v-model="formData.contact"
              placeholder="How should I contact you?" />
              <span class=" pl-2 text-xs text-gray-600">Enter your email, phone number, etc</span>
          </div>

          <div class="form-control">
            <textarea
              v-model="formData.message"
              placeholder="Send me some info!">
            </textarea>
          </div>

          <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
      </div>
      <div class="bg-gray-200 p-4 text-right">
        <button
          @click="$emit('cancel')"
          class="text-red-400 font-bold py-2 px-4 cursor-pointer"
          type="button">
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: ['type'],
  data() {
    return {
      formData: {
        name: '',
        contact: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
  a {
    @apply text-blue-400
  }

  .form-control {
    @apply pt-2 pr-2 pb-2
  }

  input, textarea {
    @apply border-b border-gray-400 w-full p-2
  }

  input:focus, textarea:focus {
    @apply border-b border-blue-400 outline-none
  }
</style>
