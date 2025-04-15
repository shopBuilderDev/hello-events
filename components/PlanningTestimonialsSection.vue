<template>
  <section id="testimonials" class="py-16 bg-teal-100 text-teal-800 relative">
    <div class="container mx-auto text-center px-4">
      <h2 class="text-3xl font-bold mb-8 text-yellow-500">
        What Our Clients Say
      </h2>
      <transition :name="transitionName" mode="out-in">
        <div
          v-if="testimonials.length"
          :key="currentTestimonial.id"
          class="bg-white shadow-md border border-gray-200 p-6 rounded-lg mx-auto max-w-sm relative"
        >
          <p class="italic mb-4">
            "{{ currentTestimonial.comment }}"
          </p>
          <h4 class="font-semibold">
            - {{ currentTestimonial.person }}
          </h4>
        </div>
      </transition>
      <!-- Navigation Arrows -->
      <div class="mt-8 flex justify-center gap-4">
        <button
          @click="prevTestimonial"
          class="p-2 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          @click="nextTestimonial"
          class="p-2 border border-gray-300 rounded hover:bg-gray-200 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [],
      currentTestimonialIndex: 0,
      transitionName: 'slide-fade-next',
      intervalId: null
    };
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[this.currentTestimonialIndex];
    }
  },
  methods: {
    nextTestimonial() {
      this.transitionName = 'slide-fade-next';
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.transitionName = 'slide-fade-prev';
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    }
  },
  mounted() {
    // Fetch testimonials from external JSON file
    fetch('/assets/testimonials.json')
      .then(response => response.json())
      .then(data => {
        this.testimonials = data.testimonials;
        this.currentTestimonialIndex = 0;
        // Start auto-cycling testimonials after data is loaded
        this.intervalId = setInterval(() => {
          this.nextTestimonial();
        }, 10000);
      })
      .catch(error => {
        console.error('Error loading testimonials data:', error);
      });
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
/* Transition for moving to next testimonial */
.slide-fade-next-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
.slide-fade-next-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-next-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-next-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

/* Transition for moving to previous testimonial */
.slide-fade-prev-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-prev-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-prev-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-prev-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.slide-fade-next-enter-active,
.slide-fade-next-leave-active,
.slide-fade-prev-enter-active,
.slide-fade-prev-leave-active {
  transition: all 0.8s ease;
}
</style>