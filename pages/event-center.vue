<template>
  <div class="flex flex-col min-h-screen">
  <Navui />
  <AnnouncementBar />

  <div class="flex-grow">
    <EventCenterHeader2 />

    <!-- <EventCenterPublicEvents /> -->
    <!-- <EventCenterVideo /> -->
    <EventCenterGallery />
    <EventCenterFeatures />
    <EventCenterPricing />
    <RequestBooking />
  </div>

  <Footer />
  </div>
</template>