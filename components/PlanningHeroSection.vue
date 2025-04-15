<template>
  <section
    id="hero"
    class="relative bg-teal-600 bg-cover bg-center py-24 text-white"
    style="background-image: url('/img/centerpiece.jpg');"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <div class="relative container mx-auto text-center px-4 z-10">
      <h2 class="text-5xl font-bold mb-4 text-white">
        Your Dream Event, Our Expertise
      </h2>
      <p class="text-xl mb-6">
        We create unforgettable events tailored just for you!
      </p>
      <!-- <button
        @click="handleLearnMore"
        class="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded"
      >
        Learn More
      </button> -->
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