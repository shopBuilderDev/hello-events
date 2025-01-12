<template>
  <section class="bg-teal-600 py-10 px-5 text-white text-center">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">
        Ready to book your event? Let’s make it unforgettable!
      </h2>
      <p class="text-lg mb-6">
        Give us a call today to reserve your date. We’re here to help make your event perfect!
      </p>
      <a
        href="tel:419-295-2298"
        class="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 inline-block"
      >
        Call Us: 419-295-2298
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "RequestBookingCall",
};
</script>

<style scoped>
section {
  background: linear-gradient(to bottom right, #0f766e, #115e59);
}
a:hover {
  transform: scale(1.05);
}
</style>