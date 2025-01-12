<template>
  <section class="bg-gray-100 py-10 px-5">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Take a Virtual Tour</h2>
      <p class="mb-6 text-lg text-gray-700">
        Explore our event center from the comfort of your home. Check out the layout, amenities, and charm we have to offer!
      </p>
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          class="w-full h-full rounded-lg shadow-md"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Hello Events Event Center Virtual Tour"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCenterVideo",
};
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
}

.aspect-h-9 iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>