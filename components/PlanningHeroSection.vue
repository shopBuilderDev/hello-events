<template>
  <section
    id="hero"
    class="bg-teal-600 bg-cover bg-center py-24 text-white"
    style="background-image: url('/hero-bg.jpg');"
  >
    <div class="container mx-auto text-center px-4">
      <h2 class="text-4xl font-bold mb-4 text-yellow-500">
        Your Dream Event, Our Expertise
      </h2>
      <p class="text-xl mb-6">
        We create unforgettable events tailored just for you!
      </p>
      <button
        @click="handleLearnMore"
        class="bg-yellow-500 hover:bg-yellow-600 text-teal-600 font-semibold py-2 px-4 rounded"
      >
        Learn More
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    handleLearnMore() {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>