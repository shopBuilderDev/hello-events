<template>
  <section class="bg-gray-400 py-10 px-5">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
      <p class="text-lg text-gray-700 text-center mb-8">
        Take a closer look at our beautiful event space.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          v-for="(photo, index) in photos"
          :key="index"
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCenterGallery",
  data() {
    return {
      photos: [
        { src: "/eventcenter-interior1.jpg", alt: "Event Center Interior 1" },
        { src: "/eventcenter-interior2.jpg", alt: "Event Center Interior 2" },
        { src: "/eventcenter-interior3.jpg", alt: "Event Center Setup 1" },
        { src: "/eventcenter-interior4.jpg", alt: "Event Center Setup 2" },
        { src: "/images/photo5.jpg", alt: "Event Center Features 1" },
        { src: "/images/photo6.jpg", alt: "Event Center Features 2" },
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