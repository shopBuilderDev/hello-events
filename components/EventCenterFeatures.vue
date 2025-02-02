<template>
  <section class="bg-gray-50 py-10 px-5">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Our Features</h2>
      <p class="text-lg text-gray-700 text-center mb-8">
        Discover the amenities that make our event center perfect for your next event.
      </p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col items-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="feature.image"
            :alt="feature.name"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <p class="text-teal-600 text-lg text-center font-semibold">
            {{ feature.name }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCenterFeaturesWithImages",
  data() {
    return {
      features: [
        {
          name: "Kitchen",
          image: "/kitchen.jpg",
        },
        {
          name: "TV hookup",
          image: "/tv-hookup.jpg",
        },
        {
          name: "Tables & chairs",
          image: "/tables-chairs.jpg",
        },
        {
          name: "Three bathrooms (including a handicap bathroom)",
          image: "/bathroom.jpg",
        },
        {
          name: "Seating area",
          image: "/seating-area.jpg",
        },
        {
          name: "Artificial fireplace",
          image: "/eventcenter-fireplace.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background: #f9fafb;
}
</style>