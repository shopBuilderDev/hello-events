<template>
  <section class="bg-gray-50 py-10 px-5">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">Pricing</h2>
      <p class="text-lg text-gray-700 text-center mb-8">
        Flexible and affordable pricing for your events. See the details below.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div
          v-for="(day, index) in pricing"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 class="text-2xl font-bold text-teal-600 mb-4">{{ day.name }}</h3>
          <p class="text-gray-800 mb-2">{{ day.title }}</p>
          <ul class="text-gray-700 mb-4">
            <li>9am - 2pm: <span class="font-semibold">{{ day.morning }}</span></li>
            <li>4pm - {{ day.eveningEnd }}: <span class="font-semibold">{{ day.evening }}</span></li>
          </ul>
          <p class="text-gray-800 mb-2">All Day: <span class="font-semibold">{{ day.allDay }}</span></p>
          <p class="text-gray-800">Extra Hours: <span class="font-semibold">{{ day.extraHour }}</span> per hour</p>
        </div>
      </div>
      <div class="bg-yellow-100 text-black border border-yellow-500 p-6 rounded-lg shadow-md mt-8">
        <h3 class="text-xl font-bold mb-2">Additional Information</h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>A non-refundable deposit of half the total cost is required to book your event.</li>
          <li>The remaining balance, plus the $75 security deposit, is due one week before your event.</li>
        </ul>
        <div class="">
          <PaymentBtn />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventCenterPricing",
  data() {
    return {
      pricing: [
        {
          title: "Available times:",
          name: "Monday - Thursday",
          morning: "$200",
          evening: "$200",
          eveningEnd: "10pm",
          allDay: "$400 all day",
          extraHour: "$50/hr extra",
        },
        {
          title: "Available times:",
          name: "Friday, Saturday, Sunday",
          morning: "$300",
          evening: "$300",
          eveningEnd: "10pm",
          allDay: "$500 all day",
          extraHour: "$75/hr extra",
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