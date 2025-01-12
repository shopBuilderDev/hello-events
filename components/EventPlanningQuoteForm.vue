<template>
  <form
    class="w-full grid grid-cols-2 gap-x-4"
    @submit.prevent="sendEmail"
  >
    <!-- Name -->
    <div class="!max-w-none !col-span-2">
      <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
      <input
        name="name"
        id="name"
        type="text"
        v-model="formValues.name"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter your full name"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter your name for contact purposes</p>
    </div>

    <!-- Email -->
    <div class="!max-w-none !col-span-2">
      <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
      <input
        name="email"
        id="email"
        type="email"
        v-model="formValues.email"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter your email address"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter your email so we can contact you</p>
    </div>

    <!-- Event Name -->
    <div class="!max-w-none !col-span-2">
      <label for="event_name" class="block text-sm font-medium text-gray-700">Event Name</label>
      <input
        name="event_name"
        id="event_name"
        type="text"
        v-model="formValues.event_name"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter the name of the event"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter the name of the event</p>
    </div>

    <!-- Event Date -->
    <div class="!max-w-none !col-span-1">
      <label for="dateOfEvent" class="block text-sm font-medium text-gray-700">Event Date</label>
      <input
        name="dateOfEvent"
        id="dateOfEvent"
        type="date"
        v-model="formValues.dateOfEvent"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        required
        :min="minDate"
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Select the date of the event. Please ensure the date is at least one month from today to allow for proper planning.
      </p>
    </div>

    <!-- Event Location -->
    <div class="!max-w-none !col-span-2">
      <label for="location" class="block text-sm font-medium text-gray-700">Event Location</label>
      <input
        name="location"
        id="location"
        type="text"
        v-model="formValues.location"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter the location of the event"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter the location of the event</p>
    </div>

    <!-- Number of Guests -->
    <div class="!max-w-none !col-span-1">
      <label for="attendance" class="block text-sm font-medium text-gray-700">Estimated Number of Guests</label>
      <input
        name="attendance"
        id="attendance"
        type="number"
        v-model="formValues.attendance"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        min="1"
        max="1000"
        step="1"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Enter the estimated number of guests for your event. Please provide a realistic estimate to help us plan accordingly.
      </p>
    </div>

    <!-- Event Duration -->
    <div class="!max-w-none !col-span-1">
      <label for="eventLength" class="block text-sm font-medium text-gray-700">Estimated Length of Event (Hours)</label>
      <input
        name="eventLength"
        id="eventLength"
        type="number"
        v-model="formValues.eventLength"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        min="1"
        max="24"
        step="1"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter the duration of the event in hours</p>
    </div>

    <!-- Event Details -->
    <div class="!max-w-none !col-span-2">
      <label for="details" class="block text-sm font-medium text-gray-700">Event Details</label>
      <textarea
        name="details"
        id="details"
        v-model="formValues.details"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Provide additional details about your event (optional)"
        rows="4"
      ></textarea>
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Provide any additional details about your event, such as specific requests or notes.
      </p>
    </div>

    <!-- Services Needed -->
    <div class="!max-w-none !col-span-2">
      <label for="services_needed" class="block text-sm font-medium text-gray-700">Services Needed</label>
      <div v-for="service in services" :key="service.value" class="flex items-center mt-2">
        <input
          type="checkbox"
          :name="service.value"
          :id="service.value"
          :value="service.label"
          v-model="formValues.services_needed"
          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label
          :for="service.value"
          class="ml-2 block text-sm text-gray-700"
        >
          {{ service.label }}
        </label>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="!max-w-none !col-span-2">
      <button
        type="submit"
        class="mt-4 bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600"
      >
        Get Quote
      </button>
    </div>
  </form>
</template>

<script>
  import emailjs from '@emailjs/browser';
  import swal from 'sweetalert';

  export default {
    data() {
      return {
        showModal: true,
        formValues: {
          name: '',
          email: '',
          event_name: '',
          dateOfEvent: '',
          location: '',
          attendance: '',
          eventLength: '',
          details: '',
          services_needed: [],
        },
        minDate: new Date().toISOString().split("T")[0],
        services: [
          { value: "complete", label: "Complete" },
          { value: "cleanup", label: "Clean Up" },
          { value: "venue", label: "Venue" },
          { value: "catering", label: "Catering" },
          { value: "entertainment", label: "Entertainment" },
          { value: "photo", label: "Photo" },
          { value: "video", label: "Video" },
          { value: "floral", label: "Floral" },
          { value: "decorations", label: "Decorations" },
          { value: "day_of_coordination", label: "Day-of-Coordination" },
        ],
      };
    },
    methods: {
      sendEmail(e) {
        try {
          const services = this.formValues.services_needed.join(', ');

          emailjs.sendForm(
            'service_1m4swuh',
            'template_914dd7h',
            e.target,
            'lrdWdsY6ZtkRv1o7z',
            {
              name: this.formValues.name,
              email: this.formValues.email,
              event_name: this.formValues.event_name,
              dateOfEvent: this.formValues.dateOfEvent,
              location: this.formValues.location,
              attendance: this.formValues.attendance,
              eventLength: this.formValues.eventLength,
              details: this.formValues.details,
              services_needed: services,
            }
          );

          swal('Thanks!', 'Thanks for your quote request. We will be contacting you soon.', 'success');
          this.resetForm();
          // Emit the event to notify the parent to close the modal
          this.$emit('close-modal');
        } catch (error) {
          console.error('EmailJS Error:', error);
          swal('Error', 'Something went wrong. Please try again later.', 'error');
        }
      },
      resetForm() {
        this.formValues = {
          name: '',
          email: '',
          event_name: '',
          dateOfEvent: '',
          location: '',
          attendance: '',
          eventLength: '',
          details: '',
          services_needed: [],
        };
      },
      closeModal() {
        this.showModal = false; // Update the modal visibility
      },
    },
  };
</script>