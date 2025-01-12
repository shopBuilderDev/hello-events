<template>
  <form
    class="w-full grid grid-cols-2 gap-x-4"
    @submit.prevent="handleSubmit"
  >
    <!-- Event Date -->
    <div class="!max-w-none !col-span-1">
      <label for="event_date" class="block text-sm font-medium text-gray-700">Event Date</label>
      <input
        id="event_date"
        type="date"
        v-model="form.event_date"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        required
        :min="minDate"
        placeholder="Date of your event"
      />
      <p class="mt-1 text-sm text-gray-500">
        Select the date of your event. Dates farther away will have a higher chance of being available.
      </p>
    </div>

    <!-- Number of Guests -->
    <div class="!max-w-none !col-span-1">
      <label for="number_of_guests" class="block text-sm font-medium text-gray-700">Estimated Number of Guests</label>
      <input
        id="number_of_guests"
        type="number"
        v-model="form.number_of_guests"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        min="1"
        max="99"
        step="1"
        required
        placeholder="Number of guests"
      />
      <p class="mt-1 text-sm text-gray-500">
        Enter the estimated number of guests for your event. Please provide a number between 1 and 99.
      </p>
    </div>

    <!-- Event Type -->
    <div class="!max-w-none !col-span-2">
      <label for="event_type" class="block text-sm font-medium text-gray-700">Type of Event</label>
      <select
        id="event_type"
        v-model="form.event_type"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
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
      <p class="mt-1 text-sm text-gray-500">
        Choose the type of event you are planning. This will help us tailor the quote to your needs.
      </p>
    </div>

    <!-- Special Requests -->
    <div class="!max-w-none !col-span-2">
      <label for="special_requests" class="block text-sm font-medium text-gray-700">Special Requests</label>
      <textarea
        id="special_requests"
        v-model="form.special_requests"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        maxlength="250"
        placeholder="Please specify any special requests or requirements for your event."
      ></textarea>
      <p class="mt-1 text-sm text-gray-500">
        Enter any special requests or requirements. Maximum 250 characters.
      </p>
    </div>

    <!-- Add-On Packages -->
    <div class="!max-w-none !col-span-2">
      <label for="add_on_packages" class="block text-sm font-medium text-gray-700">Add-On Packages</label>
      <div v-for="option in addOnPackages" :key="option.value" class="flex items-center mt-2">
        <input
          type="checkbox"
          :id="option.value"
          :value="option.value"
          v-model="form.add_on_packages"
          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label :for="option.value" class="ml-2 block text-sm text-gray-700">{{ option.label }}</label>
      </div>
      <p class="mt-1 text-sm text-gray-500">
        Select any add-on packages you are interested in for your event.
      </p>
    </div>

    <!-- Contact Information -->
    <div class="!max-w-none !col-span-1">
      <label for="contact_name" class="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        id="contact_name"
        type="text"
        v-model="form.contact_name"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Your full name"
        required
      />
      <p class="mt-1 text-sm text-gray-500">Enter your full name</p>
    </div>
    <div class="!max-w-none !col-span-1">
      <label for="contact_email" class="block text-sm font-medium text-gray-700">Contact Email</label>
      <input
        id="contact_email"
        type="email"
        v-model="form.contact_email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Your email address"
        required
      />
      <p class="mt-1 text-sm text-gray-500">
        Enter your email address for correspondence regarding your quote.
      </p>
    </div>
    <div class="!max-w-none !col-span-1">
      <label for="contact_phone" class="block text-sm font-medium text-gray-700">Contact Phone Number</label>
      <input
        id="contact_phone"
        type="tel"
        v-model="form.contact_phone"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        placeholder="Your phone number"
        required
      />
      <p class="mt-1 text-sm text-gray-500">
        Please enter your phone number where we can reach you for event details.
      </p>
    </div>

    <!-- Submit Button -->
    <div class="!max-w-none !col-span-2">
      <button
        type="submit"
        class="mt-4 bg-teal-500 text-white px-4 py-2 rounded shadow hover:bg-teal-600"
      >
        Request Quote
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        event_date: "",
        number_of_guests: "",
        event_type: "",
        special_requests: "",
        add_on_packages: [],
        contact_name: "",
        contact_email: "",
        contact_phone: "",
      },
      minDate: new Date().toISOString().split("T")[0],
      addOnPackages: [
        { value: "dinner_plates", label: "Dinner Plates" },
        { value: "utensils", label: "Utensils" },
        { value: "cups", label: "Cups" },
        { value: "napkins", label: "Napkins" },
        { value: "tablecloths", label: "Tablecloths" },
        { value: "centerpieces", label: "Centerpieces" },
      ],
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted:", this.form);
    },
  },
};
</script>