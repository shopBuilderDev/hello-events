<template>
    <section class="relative w-full h-[400px] bg-gray-100">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 class="text-4xl sm:text-5xl text-white font-bold mb-6">
          {{ title }}
        </h1>
        <p class="text-2xl text-amber-500 mb-8">
          {{ subtitle }}
        </p>
  
        <!-- Dropdown -->
        <div class="relative w-full max-w-md">
          <select
            v-model="selectedOption"
            @change="handleDropdownChange"
            class="w-full rounded-full bg-white text-gray-700 border border-gray-300 px-4 py-4 shadow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option disabled value="">Select an Option</option>
            <option value="planning">Planning Services Quote</option>
            <option value="event-center">Event Center Date Request</option>
          </select>
        </div>
      </div>
  
      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-auto"
        >
        <div
            class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg mx-auto mt-8"
        >
            <h2 class="text-xl font-bold mb-4">
            {{ selectedOption === 'planning' ? 'Planning Services Quote' : 'Event Center Date Request' }}
            </h2>

            <!-- Dynamic Form Rendering -->
            <EventPlanningQuoteForm v-if="selectedOption === 'planning'" @close-modal="closeModal" />
            <EventCenterQuoteForm v-if="selectedOption === 'event-center'" @close-modal="closeModal" />

            <!-- Close Button -->
            <button
            @click="closeModal"
            class="mt-6 bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600"
            >
            Close
            </button>
        </div>
        </div>

    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "Welcome to Hello Events",
      },
      subtitle: {
        type: String,
        default: "Choose a service to get started!",
      },
      backgroundImage: {
        type: String,
        default: "/corporate.jpg",
      },
    },
    data() {
      return {
        selectedOption: "",
        showModal: false,
      };
    },
    computed: {
    selectedFormComponent() {
        if (this.selectedOption === "planning") {
        return "Event-Planning-Quote-Form"; // Use kebab-case
        } else if (this.selectedOption === "event-center") {
        return "Event-Center-Quote-Form"; // Use kebab-case
        }
        return null;
    },
    },
    methods: {
      handleDropdownChange() {
        if (this.selectedOption) {
          this.showModal = true;
        }
      },
      closeModal() {
        this.showModal = false;
      },
    },
  };
  </script>