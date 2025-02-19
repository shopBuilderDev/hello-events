<template>
  <section id="services" class="py-16 bg-white text-teal-700">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-yellow-500">Our Services</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="bg-white shadow-md border border-gray-200 p-6 rounded-lg flex-1 min-w-[280px] max-w-sm"
          v-for="service in services"
          :key="service.id"
        >
          <h3 class="text-xl font-semibold mb-2 text-yellow-500">
            {{ service.title }}
          </h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Wedding Planning',
          description:
            'Comprehensive planning and coordination for your big day.'
        },
        {
          id: 2,
          title: 'Corporate Events',
          description:
            'Professional event management for corporate meetings and conferences.'
        },
        {
          id: 3,
          title: 'Birthday Parties',
          description: 'Creative and fun ideas to celebrate your special day.'
        }
      ]
    }
  }
}
</script>