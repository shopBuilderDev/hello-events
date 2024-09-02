<template>
	<Navui />
	<div>

		<section class="custom-bg bg-cover">
    <div class="container px-6 py-12 mx-auto">
        <div class="text-center">

            <h1 class="raleway mt-2 text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">Get in touch</h1>

            <p class="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-white rounded-full bg-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-2xl font-medium text-teal-700">Office</h2>
                <p class="mt-2 text-gray-500">Come say hello at our office HQ.</p>
                <p class="mt-2 font-semibold text-teal-700">40 East Main Street, Lexington, OH 44904</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-white rounded-full bg-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-2xl font-medium text-teal-700">Phone</h2>
                <p class="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
                <p class="mt-2 font-semibold text-teal-700">419-295-2298</p>
            </div>
        </div>
    </div>
</section>

		<contactform />
	</div>
	<Footer />
</template>

<script setup>

</script>

<style scoped>
	h1 {
		font-family: 'Raleway';
	}

	h2 {
		font-family: 'Raleway';
	}

	p {
		font-family: 'Raleway';
	}
	.custom-bg {
      background-image: url("/custombg2.png");
    }
</style>