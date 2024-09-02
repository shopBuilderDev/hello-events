<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<template>
	 <footer class="tealbg py-6">
        <div class="container mx-auto flex flex-col-reverse md:flex-row space-y-6 md:space-y-0">
            <div class="footerstyle text-white text-sm text-center md:flex md:flex-col md:justify-center">
              <p>&copy; {{ currentYear }} Hello Events, LLC.</p>
              <p class="text-xs mt-4">Site created by <br>Hello Events Creative Services</p>
            </div>

          <div class="footerstyle container mx-auto text-teal-50 flex flex-col md:flex-row justify-center md:justify-evenly p-6 md:space-x-10 xl:space-x-6">
            <div class="flex md:flex-col xl:flex-row xl:space-x-6 xl:pt-6 xl:justify-end justify-center md:text-center space-x-6 md:space-x-0 mx-auto w-full">
              <NuxtLink to="/" class="font-bold hover:text-amber-500">Home</NuxtLink>
              <NuxtLink to="/about" class="font-bold hover:text-amber-500">About</NuxtLink>
              <NuxtLink to="/quote" class="font-bold hover:text-amber-500">Quote</NuxtLink>
              <NuxtLink to="/contact" class="font-bold hover:text-amber-500">Contact</NuxtLink>
              <NuxtLink to="/blog" class="font-bold hover:text-amber-500">Blog</NuxtLink>
            </div>
            <div class="flex md:flex-col xl:flex-row xl:space-x-6 xl:pt-6 xl:justify-start justify-center md:text-center space-x-6 md:space-x-0 mx-auto w-full">
              <NuxtLink to="/social" class="font-bold hover:text-amber-500">Social</NuxtLink>
              <NuxtLink to="/corporate" class="font-bold hover:text-amber-500">Corportate</NuxtLink>
              <NuxtLink to="/charity" class="font-bold hover:text-amber-500">Charity</NuxtLink>
              <NuxtLink to="/rentals" class="font-bold hover:text-amber-500">Rentals</NuxtLink>
              <NuxtLink to="/creativeSvcs" class="font-bold hover:text-amber-500">Creative Services</NuxtLink>
            </div>
          </div>
          <!-- <div class="flex justify-center md:flex-col mr-3">
            <a target="_blank" href="https://www.theknot.com/marketplace/redirect-2076496?utm_source=vendor_website&utm_medium=banner&utm_term=541d3a79-8189-4dc3-aaef-ac41ad4d8db1&utm_campaign=vendor_badge_assets"><img alt="TheKnot.com" border="0" height="75" src="https://d13ns7kbjmbjip.cloudfront.net/For_Your_Website/TK-icon_circle_large.png" width="75"></a>
          </div> -->

          <a href="#" class="flex justify-center md:flex-col text-white">
            <span class="fb font-bold text-xl tracking-tight"><NuxtLink to="https://www.facebook.com/helloeventsohio">facebook</NuxtLink></span>
          </a>
          
        </div>
      </footer>
</template>

<style>
	.footerstyle {
			font-family: 'Raleway', sans-serif;
			font-weight: 300;
		}
</style>