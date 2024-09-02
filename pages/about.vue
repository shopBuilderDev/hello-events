<template>
	<Navui />

    <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1">
      <div class="relative z-0">
        <div class="relative h-96">
          <img
            alt="House"
            src="/Rachel-HelloEvents_RWP_8252_pp-web.png"
            class="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100 raleway mt-10">

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            
            About Rachel Pugh, Founder of Hello Events
          </h2>

          <p class="mt-4 text-gray-600">
Welcome to Hello Events! I'm Rachel Pugh, the creative force behind this exceptional event planning business based in Lexington, Ohio. With over 20 years of experience in the industry, I have been crafting unforgettable moments and transforming visions into reality.
<br><br>
At Hello Events, we specialize in a wide array of occasions, including weddings, bridal showers, baby showers, benefits, fundraisers, and much more. With meticulous attention to detail, a keen eye for design, and an unwavering commitment to excellence, we ensure that each event is a true reflection of your unique style and personality.
<br><br>
Located on the vibrant Main Street of Lexington, our office serves as a haven of creativity and inspiration. It is here that we collaborate with our clients, turning their dreams into concrete plans, and transforming their visions into reality. We understand that every event is as unique as the individuals behind it, and we approach each project with fresh perspectives and innovative ideas.
<br><br>
In our pursuit of excellence, Hello Events takes great pride in collaborating with a network of reliable local vendors in the Lexington, Ohio area. We understand the importance of working with trusted professionals who share our commitment to delivering exceptional service. From talented florists who bring beauty to every arrangement, to skilled photographers who capture the most precious moments, we have carefully curated a team of vendors who consistently exceed expectations. With their expertise and dedication, we can confidently recommend these trusted partners, knowing that they will enhance your event with their professionalism and attention to detail. By supporting local businesses, we not only foster a sense of community but also ensure that every aspect of your event is handled with the utmost care and quality.
<br><br>
With a reputation for professionalism, integrity, and a deep commitment to customer satisfaction, Hello Events has become synonymous with unforgettable celebrations. Our past clients have praised us for our meticulous planning, seamless execution, and the magical atmosphere we create. We believe that every event should be a reflection of your dreams, and we go above and beyond to make it happen.
<br><br>
Whether you're planning an intimate gathering or a grand affair, Hello Events is here to make your vision come to life. Contact us today, and let's embark on a journey to create an extraordinary event that will be remembered for years to come.
<br><br>
<span class="text-xl font-bold tealtext">We make your day a big deal.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    
	<Footer />
</template>

<script setup>
  useHead(
    { title: 'About Us' }
  )
</script>

<style scoped>
    .custom-img {
        background-image: url("Rachel-bw2.jpg");
		height: 400px;
    }
    
    .title.h2 {
        font-family: 'raleway';
    }

    .raleway {
        font-family: 'Raleway';
    }

    /* blockquote {
         quotes: "“" "”" "‘" "’";
         font-family: 'Raleway', sans-serif;
         font-weight: 300;
    }
    blockquote::before {
        content: open-quote;
        font-weight: 700;
        font-size: 24px;
        color: #14b8a6;
    }
    blockquote::after {
        content: close-quote;
        font-weight: 700;
        font-size: 24px;
        color: #14b8a6; 
    }*/
</style>