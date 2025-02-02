<template>
  <header class="bg-teal-600 text-white py-10 px-5 text-center">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold">Welcome to the Hello Event Center</h1>
      <p class="mt-3 text-lg">
        Discover the perfect space for your next celebration, gathering, or event.
      </p>
      <div class="mt-5">
        <p class="text-xl font-semibold">Visit Us At:</p>
        <p>228 N. Illinois Ave, Mansfield, OH 44903</p>
        <p class="mt-2 text-lg font-semibold">Call Us: <a href="tel:419-295-2298" class="underline">419-295-2298</a></p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "EventCenterHeader",
};
</script>

<style scoped>
header {
  background: linear-gradient(to bottom right, #0f766e, #115e59);
}
</style>