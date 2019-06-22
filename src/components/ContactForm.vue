<template>
  <div>
    <form autocomplete="off" method="POST" netlify>
      <div class="p-8">
        <h1 class="text-gray-900 font-bold text-xl mb-2">Contact</h1>
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
      </div>
      <div class="bg-gray-200 p-4 text-right">
        <a @click="$emit('cancel')" class="text-red-400 font-bold py-2 px-4 cursor-pointer">Cancel</a>
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
  data() {
    return {
      formData: {
        message: ''
      }
    }
  }
}
</script>

<style scoped>
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
