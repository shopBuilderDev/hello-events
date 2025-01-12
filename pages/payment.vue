<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Navigation -->
    <Navui />

    <!-- Main Content -->
    <div class="flex-grow flex items-center justify-center px-4">
      <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Make a Payment</h1>
        <p class="text-gray-600 mb-6">
          Securely make a payment for your deposit or planning services with the button below.
        </p>
        <!-- Custom Payment Button -->
        <PaymentBtn />
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style>
/* No additional CSS needed; all styling is handled with Tailwind */
</style>