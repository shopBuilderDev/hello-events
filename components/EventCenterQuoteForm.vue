<template>
  <form
    class="w-full grid grid-cols-2 gap-x-4"
    @submit.prevent="sendEmail"
  >
    <!-- Name -->
    <div class="!max-w-none !col-span-1">
      <label for="contact_name" class="block text-sm font-medium text-gray-700">Your Name</label>
      <input
        id="contact_name"
        name="contact_name"
        type="text"
        v-model="form.contact_name"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter your full name"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter your name for contact purposes.</p>
    </div>
    
    <!-- Email -->
    <div class="!max-w-none !col-span-1">
      <label for="contact_email" class="block text-sm font-medium text-gray-700">Your Email</label>
      <input
        id="contact_email"
        name="contact_email"
        type="email"
        v-model="form.contact_email"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter your email address"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter your email so we can contact you.</p>
    </div>
    
    <!-- Phone Number -->
    <div class="!max-w-none !col-span-1">
      <label for="contact_phone" class="block text-sm font-medium text-gray-700">Your Phone Number</label>
      <input
        id="contact_phone"
        name="contact_phone"
        type="tel"
        v-model="form.contact_phone"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Enter your phone number"
        required
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">Enter your phone number so we can reach you.</p>
    </div>
    
    <!-- Event Date -->
    <div class="!max-w-none !col-span-1">
      <label for="event_date" class="block text-sm font-medium text-gray-700">Event Date</label>
      <input
        id="event_date"
        name="event_date"
        type="date"
        v-model="form.event_date"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        required
        :min="minDate"
        placeholder="Date of your event"
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Select the date of your event. Dates farther away will have a higher chance of being available.
      </p>
    </div>

    <!-- Time Slot & Extra Time -->
    <div class="!max-w-none !col-span-1">
      <label for="time_slot" class="block text-sm font-medium text-gray-700">Preferred Time Slot</label>
      <select
        id="time_slot"
        name="time_slot"
        v-model="form.time_slot"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        required
      >
        <option disabled value="">Select a time slot</option>
        <option value="9am-2pm">9am - 2pm</option>
        <option value="4pm-10pm">4pm - 10pm</option>
        <option value="all_day">All Day</option>
      </select>
      <div class="flex items-center mt-2">
        <input
          id="extra_time"
          name="extra_time"
          type="checkbox"
          v-model="form.extra_time"
          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label for="extra_time" class="ml-2 block text-sm font-medium text-gray-700">I will require extra time</label>
      </div>
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Choose the time slot that best fits your event schedule. If you need additional time, please check the box above.
      </p>
    </div>

    <!-- Number of Guests -->
    <div class="!max-w-none !col-span-1">
      <label for="number_of_guests" class="block text-sm font-medium text-gray-700">Estimated Number of Guests</label>
      <input
        id="number_of_guests"
        name="number_of_guests"
        type="number"
        v-model="form.number_of_guests"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        min="1"
        max="99"
        step="1"
        required
        placeholder="Number of guests"
      />
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Enter the estimated number of guests for your event. Please provide a number between 1 and 99.
      </p>
    </div>

    <!-- Event Type -->
    <div class="!max-w-none !col-span-2">
      <label for="event_type" class="block text-sm font-medium text-gray-700">Type of Event</label>
      <select
        id="event_type"
        name="event_type"
        v-model="form.event_type"
        class="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        required
      >
        <option disabled value="">Select an event type</option>
        <option value="wedding_reception">Wedding Reception</option>
        <option value="corporate_meeting">Corporate Meeting</option>
        <option value="birthday_party">Birthday Party</option>
        <option value="anniversary_celebration">Anniversary Celebration</option>
        <option value="conference">Conference</option>
        <option value="other">Other</option>
      </select>
      <p class="mt-1 mb-5 text-xs italic text-gray-500">
        Choose the type of event you are planning. This will help us tailor the request to your needs.
      </p>
    </div>
    <!-- Pricing Info -->
    <div class="!max-w-none !col-span-2 bg-teal-50 border border-teal-200 p-4 rounded-md mb-2">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Pricing</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <!-- Mon–Thu -->
          <div>
            <h4 class="font-medium">Monday – Thursday</h4>
            <ul class="list-disc list-inside">
              <li>Morning (9am–2pm): $200</li>
              <li>Evening (4pm–10pm): $200</li>
              <li>All Day: $400</li>
              <li>Extra Hour: $50/hr</li>
            </ul>
          </div>
          <!-- Fri–Sun -->
          <div>
            <h4 class="font-medium">Friday – Sunday</h4>
            <ul class="list-disc list-inside">
              <li>Morning (9am–2pm): $300</li>
              <li>Evening (4pm–10pm): $300</li>
              <li>All Day: $500</li>
              <li>Extra Hour: $75/hr</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-yellow-100 text-black border !col-span-2 border-yellow-500 p-6 rounded-lg shadow-md mt-2">
        <h3 class="text-xl font-bold mb-2">Additional Information</h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>A non-refundable deposit of half the total cost is required to book your event.</li>
          <li>The remaining balance, plus the $75 security deposit, is due one week before your event.</li>
        </ul>
      </div>

      <!-- Submit Button -->
      <div class="!max-w-none !col-span-2">
        <button
          type="submit"
          class="mt-4 bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600"
        >
          Submit Request
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
      form: {
        event_date: "",
        time_slot: "",
        extra_time: false,
        number_of_guests: "",
        event_type: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
      },
      minDate: new Date().toISOString().split("T")[0],
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          'service_1m4swuh',
          'template_v3s0sbd',
          e.target,
          'lrdWdsY6ZtkRv1o7z'
        );

        swal('Thanks!', 'Your request has been sent. We will contact you soon.', 'success');
        this.resetForm();
        // Emit the event to notify the parent to close the modal
        this.$emit('close-modal');
      } catch (error) {
        console.error('EmailJS Error:', error);
        swal('Error', 'Something went wrong. Please try again later.', 'error');
      }
    },
    resetForm() {
      this.form = {
        event_date: "",
        time_slot: "",
        extra_time: false,
        number_of_guests: "",
        event_type: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
      };
    },
    closeModal() {
        this.showModal = false; // Update the modal visibility
      },
  },
};
</script>
