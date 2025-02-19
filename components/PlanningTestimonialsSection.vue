<template>
  <section id="testimonials" class="py-16 bg-teal-100 text-teal-800">
    <div class="container mx-auto text-center px-4">
      <h2 class="text-3xl font-bold mb-8 text-yellow-500">
        What Our Clients Say
      </h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="bg-white shadow-md border border-gray-200 p-6 rounded-lg flex-1 min-w-[280px] max-w-sm"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <p class="italic mb-4">
            "{{ testimonial.message }}"
          </p>
          <h4 class="font-semibold">- {{ testimonial.name }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'Emily R.',
          message:
            'Absolutely fantastic event planning! Every detail was perfect.'
        },
        {
          id: 2,
          name: 'Mark D.',
          message:
            'Professional, creative, and reliable. Couldn’t have asked for a better service.'
        },
        {
          id: 3,
          name: 'Samantha T.',
          message:
            'They made my birthday party a day to remember. Highly recommend!'
        }
      ]
    }
  }
}
</script>