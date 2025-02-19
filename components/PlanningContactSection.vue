<template>
  <section id="contact" class="py-16 bg-white text-teal-700">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-yellow-500">
        Get In Touch
      </h2>
      <form @submit.prevent="submitForm" class="max-w-lg mx-auto space-y-6">
        <div>
          <label for="name" class="block mb-2 font-medium">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label for="email" class="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label for="message" class="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-teal-600 font-semibold rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Replace this with your actual submission logic
      alert(`Thanks, ${this.form.name}! Your message has been sent.`)
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>