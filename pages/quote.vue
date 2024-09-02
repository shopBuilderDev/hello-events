<template>
	<Navui />
	<img src="/show-setup.png" class="md:w-full">
	<div class="container mx-auto flex justify-center">
		
		<div class="raleway w-full md:w-3/4 mb-20 -mt-80 md:-mt-[400px] lg:-mt-[500px] xl:-mt-[600px]">
			<div class="bg-teal-500 rounded-xl mr-10 ml-10 md:mr-0 md:ml-0">
				<h2 class="raleway text-center text-2xl md:text-4xl text-white drop-shadow-lg font-bold mt-40 mb-20 md:mb-20 p-2">
					LET US QUOTE YOUR EVENT
				</h2>
			</div>
			<QuoteForm />
		</div>
	</div>
	<Footer />
</template>

<script setup>

</script>

<style scoped>
	.raleway {
		font-family: 'Raleway';
	}
</style>