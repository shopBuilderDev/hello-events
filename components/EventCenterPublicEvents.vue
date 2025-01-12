<template>
  <section class="bg-white py-10 px-5">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Public Events This Month</h2>
      <p class="text-lg text-gray-700 text-center mb-8">
        Join us for these exciting events happening at the Hello Events Event Center.
      </p>
      <div class="space-y-6">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-2xl font-bold text-teal-600">{{ event.title }}</h3>
          <p class="text-sm text-gray-600 mb-2">
            {{ event.date }} | {{ event.time }}
          </p>
          <p class="text-gray-800">{{ event.description }}</p>
        </div>
      </div>
      <div v-if="!events.length" class="text-center text-gray-500 text-lg mt-6">
        No public events are scheduled for this month. Check back soon!
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCenterPublicEvents",
  data() {
    return {
      events: [
        {
          title: "Community Game Night",
          date: "January 15, 2025",
          time: "6:00 PM - 9:00 PM",
          description: "Bring your friends and family for a fun night of board games, snacks, and laughter!",
        },
        {
          title: "Local Artisan Market",
          date: "January 20, 2025",
          time: "10:00 AM - 4:00 PM",
          description: "Shop unique handmade goods from local artisans and enjoy live music.",
        },
        {
          title: "Cooking Workshop: Italian Cuisine",
          date: "January 25, 2025",
          time: "5:30 PM - 8:30 PM",
          description: "Learn to make authentic Italian dishes with Chef Mario in this interactive workshop.",
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