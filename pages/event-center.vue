<template>
  <div class="flex flex-col min-h-screen">
  <Navui />

  <div class="flex-grow">
    <EventCenterHeader />

    <EventCenterPublicEvents />
    <EventCenterVideo />
    <EventCenterGallery />
    <EventCenterFeatures />
    <EventCenterPricing />
    <RequestBooking />
  </div>

  <Footer />
  </div>
</template>