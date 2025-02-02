<template>
  <section class="flex flex-col w-full h-auto gap-6 px-4 md:px-8 mb-10 mt-5">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Explore our Event Center or Planning Services</h1>
    </div>
    <div class="flex flex-col md:flex-row w-full h-[600px] gap-4 md:gap-6">
      <!-- Event Center Side -->
      <a 
        href="/event-center" 
        class="flex-1 relative group rounded-lg overflow-hidden shadow-lg0"
      >
        <img 
          src="/event-ctr-photo.jpg" 
          alt="Event Center" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center text-center">
          <h2 class="text-white text-6xl font-bold drop-shadow-xl transform transition-transform duration-300 hover:scale-105">Event Center</h2>
        </div>
      </a>
      
      <!-- Planning Services Side -->
      <a 
        href="/social" 
        class="flex-1 relative group rounded-lg overflow-hidden shadow-lg"
      >
        <img 
          src="/event-plan-photo.jpg" 
          alt="Planning Services" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center text-center">
          <h2 class="text-white text-6xl font-bold drop-shadow-xl transform transition-transform duration-300 hover:scale-105">Planning Services</h2>
        </div>
      </a>
    </div>
  </section>
</template>