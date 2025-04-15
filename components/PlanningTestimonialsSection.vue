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
      testimonials: [
        {
          id: 1,
          comment: "Working with Hello Events was an absolute delight. They turned our vision into reality flawlessly!",
          person: "Jessica S, Marion, OH"
        },
        {
          id: 2,
          comment: "From start to finish, the team at Hello Events exceeded our expectations. Highly recommended!",
          person: "Michael R, Wooster, OH"
        },
        {
          id: 3,
          comment: "Thanks to Hello Events, our anniversary celebration was a memorable and stress-free experience.",
          person: "Sarah K, Mount Vernon, OH"
        },
        {
          id: 4,
          comment: "The attention to detail provided by Hello Events truly made our corporate event stand out.",
          person: "Andrew H, Mansfield, OH"
        },
        {
          id: 5,
          comment: "We couldn't have asked for a better team to plan our special day. Hello Events made everything perfect!",
          person: "Emily C, Ashland, OH"
        },
        {
          id: 6,
          comment: "Hello Events went above and beyond to accommodate all of our requests. Outstanding service!",
          person: "David W, Bucyrus, OH"
        },
        {
          id: 7,
          comment: "Their professionalism and creativity made our event unforgettable. Thank you, Hello Events!",
          person: "Rachel L, Shelby, OH"
        },
        {
          id: 8,
          comment: "If you want your event to be a success, look no further than Hello Events. They are simply the best!",
          person: "Brian S, Galion, OH"
        },
        {
          id: 9,
          comment: "Hello Events made sure every aspect of our wedding was perfect. We couldn't be happier with their service.",
          person: "Lauren B, Ontario, OH"
        },
        {
          id: 10,
          comment: "Impressive attention to detail and superb organization. Hello Events knows how to make events shine!",
          person: "Thomas G, Lexington, OH"
        },
        {
          id: 11,
          comment: "Hello Events turned our dream wedding into a reality. We are forever grateful for their hard work and dedication.",
          person: "Alexandra H, Bellville, OH"
        },
        {
          id: 12,
          comment: "Professional, reliable, and creative – Hello Events surpassed all our expectations. Highly recommended!",
          person: "Daniel T, Loudonville, OH"
        },
        {
          id: 13,
          comment: "From the initial consultation to the big day, Hello Events was with us every step of the way. Thank you!",
          person: "Jennifer P, Crestline, OH"
        },
        {
          id: 14,
          comment: "Hello Events made sure everything ran smoothly, allowing us to enjoy our event to the fullest. Amazing job!",
          person: "Matthew L, Lucas, OH"
        },
        {
          id: 15,
          comment: "Their attention to detail and personalized service made our event truly special. Hello Events is top-notch!",
          person: "Stephanie M, Plymouth, OH"
        }
      ],
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
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 10000);
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