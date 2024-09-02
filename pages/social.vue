<template>
		<Navui />
		<header>
      <img src="/social-heading.jpg" class="w-full" alt="wedding reception group">
        <div class="title text-4xl text-teal-500 w-100 text-right pe-5 h-10">
            <h2>hello. lets start planning.</h2>
        </div>
    </header>
		<div class="container my-6 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="background-radial-gradient mb-12">
    <div class="px-6 py-6 text-center md:px-12 lg:text-left">
      <div class="container mx-auto">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="mt-0 lg:mt-0">
            <h1 class="raleway mt-2 text-3xl font-bold tracking-tight tealtext sm:text-4xl">
				Social Events<br />
            </h1>
            <h2 class="text-teal-800">
				Celebrate Life's Precious Moments with Elegance and Style
			</h2>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section>
	<div class="container mx-auto p-5 w-full">
		<p>At Hello Events, we understand that social events are more than just gatherings—they are moments of joy, love, and cherished memories. Whether you're planning an enchanting wedding, a milestone birthday bash, or a heartwarming family reunion, we are here to transform your vision into an extraordinary reality.
<br><br>
With our expert event planners and a passion for creating magical experiences, we craft social events that leave a lasting impression. From the grandest gestures to the smallest details, we infuse your celebration with elegance, warmth, and personalized touches that reflect your unique style and story.
<br><br>
Our team takes the time to listen, understand your desires, and bring your dreams to life. We believe that every social event should be a reflection of your personality, values, and the love you share. By carefully curating each element, from exquisite decor to delectable cuisine and unforgettable entertainment, we create an ambiance that captivates your guests and creates an atmosphere of joy and celebration.
<br><br>
Whether you envision a romantic garden wedding, a glamorous cocktail soirée, or a whimsical themed party, our dedicated planners are here to guide you every step of the way. We handle the intricate planning, seamless execution, and thoughtful coordination, so you can relax and savor every moment of your special day.
		</p>
	</div>
  </section>
  <!-- Section: Design Block -->
</div>

	<div class="container mx-auto flex flex-col align-top align-center justify-center mt-10">
		<div class="flex flex-col align-center justify-center w-full">
			<h2 class="mb-5 text-center">Want a go at planning your own wedding?</h2>
			<p class="text-center">
				<span class="font-bold tealtext">Introducing "From YES to I DO", the Ultimate Wedding Planning Guide.</span><br>
				<br>
			</p>
		</div>
		<div class="container flex flex-col px-20 md:flex-row mx-auto align-center justify-center">
			<img src="/UltimateGuideCovers.jpg" class="w-80 h-80 mr-20 rounded-lg" alt="Wedding Planning Guide">
			<div>
				<div class="text-2xl font-bold text-gray-500">$24.99</div>
				<button color="teal-lighten-2" class="tealbg hover:bg-teal-700 rounded-md text-white py-2 px-5 mt-5 mb-5"><NuxtLink to="https://www.etsy.com/listing/1488025115/from-yes-to-i-do-the-ultimate-wedding?click_key=3eef4dbe81ba8d3914a163b1ace3b05e4264dccd%3A1488025115&click_sum=6c75247a&ref=shop_home_active_1&pro=1" target="_blank">Buy from ETSY</NuxtLink></button>
				<p>Offers the convenience of digital forms that can be easily filled out and utilized in your wedding planning process. These forms, including the Wedding Budget Worksheet, Guest List, Vendor Contact Sheet, Wedding Day Checklist, Venue Comparison Chart, Seating Plan and Chart, Wedding Photo Shot List, and Vendor Payment Tracker, are designed to be user-friendly and flexible.</p>
			</div>
		</div>
	</div>
	<ReadyForQuote />
	<Footer />
</template>

<script setup>
	useHead(
		{ title: 'Social Events' }
	)
</script>

<style scoped>
/* h1 {
	font-family: 'Raleway', sans-serif;
	font-size: 3rem;
    font-weight: 600;
} */

h2 {
	font-family: 'Raleway', sans-serif;
	font-size: 1.75rem;
    font-weight: 400;
}

p {
	font-family: 'Raleway', sans-serif;
	/* max-width: 800px; */
}

/* img {
	height: 400px;
	width: 400px;
	margin-right: 40px;
	border-radius: 20px;
} */


</style>