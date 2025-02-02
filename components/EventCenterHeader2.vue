<template>
  <header class="relative bg-gray-800 text-white">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-80"
      style="background-image: url('/images/event-center-header.jpg');"
    ></div>
    <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-20 bg-gradient-to-r from-teal-900 via-teal-700 to-transparent">
      <div class="lg:w-1/2 text-center lg:text-left">
        <h1 class="text-4xl font-bold mb-4">Your Perfect Event Awaits</h1>
        <p class="text-lg text-gray-200 mb-6">
          Welcome to the Hello Events Event Center, where unforgettable memories begin.
          Host your next celebration with us at 228 N. Illinois Ave, Mansfield, OH.
        </p>
        <a
          href="tel:419-295-2298"
          class="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-400 transition-all duration-300 inline-block"
        >
          Call Us: 419-295-2298
        </a>
      </div>
      <div class="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="/eventcenter-interior1.jpg"
          alt="Event Center Interior"
          class="rounded-lg shadow-lg w-full max-w-md mx-auto lg:ml-auto"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "EventCenterHeaderAlt",
};
</script>

<style scoped>
header {
  min-height: 400px;
}
</style>