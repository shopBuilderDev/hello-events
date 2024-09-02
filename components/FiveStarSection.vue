<script>
import jsonData from '../assets/testimonials.json';

export default {
  data() {
    return {
      testimonials: [],
      currentTestimonial: {}
    };
  },
  created() {
    this.testimonials = jsonData.testimonials;
    this.generateRandomTestimonial();
  },
  methods: {
    generateRandomTestimonial() {
      const randomIndex = Math.floor(Math.random() * this.testimonials.length);
      this.currentTestimonial = this.testimonials[randomIndex];
    }
  }
};
</script>

<template>
	<div>
		<section class="raleway border-t-4 border-b-4 border-teal-500">
			<div class="flex flex-col justify-center items-center mt-10 mb-10">
				<!-- <div class="md:mt-0 md:col-span-5 md:flex rounded-lg">
					<img src="/five-star-phone-sq.png" alt="five star review on phone" class="" />
				</div> -->
				
				<div class="flex flex-col items-center">
					<h2 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl text-teal-500">
                        Our Customers Love Us!
                    </h2>
					<img src="/five-gold-stars.png" width="500" />
                    <p class="text-2xl text-black max-w-[400px]">{{ currentTestimonial.comment }}</p>
                    <p class="text-lg text-teal-500">{{ currentTestimonial.person }}</p>
					<ContactBtn />  
				</div>
				
				            
			</div>
		</section>
    </div>
</template>


<style scoped>
.raleway {
	font-family: 'Raleway', sans-serif;
}
</style>
