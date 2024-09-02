<template>
	<!-- <div class="raleway flex justify-center text-2xl mb-10 mt-10">
		Get a Quote for Your Event
	</div> -->
	<div class="">

		<div class="min-h-screen p-6 bg-gray-100 flex items-start justify-center rounded-xl">
			<div class="container max-w-screen-lg mx-auto">
				<div>
				<h2 class="font-semibold text-xl text-gray-600">Event Quote Form</h2>
				<p class="text-gray-500 mb-6">Let us quote your event, from simple to complete.</p>
				
				<form @submit.prevent="sendEmail">
				<div id="quote" class="bg-white rounded shadow-lg p-4 px-4 md:p-4 mb-6">
					<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
					
					
					<div class="lg:col-span-2">
						<div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
						<div class="md:col-span-5">
							<label for="name">First Name <span class="text-red-500 text-xl">*</span></label>
							<input v-model="formValues.name" type="text" name="name" id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required>
						</div>

						<div class="md:col-span-5">
							<label for="email">Email Address <span class="text-red-500 text-xl">*</span></label>
							<input v-model="formValues.email" type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" required>
						</div>

						<div class="md:col-span-3">
							<label for="eventType">Type of Event</label>
							<select v-model="formValues.eventType" name="eventType" id="eventType" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
								<option value="">Choose --</option>
								<option value="wedding">Wedding</option>
								<option value="bridal/baby shower">Bridal/Baby Shower</option>
								<option value="social party">Social Party (non-company related)</option>
								<option value="company event">Company (Dinner, Holiday Event, etc.)</option>
								<option value="new product launch">New Product Launch</option>
								<option value="community fundraiser">Community Fundraiser</option>
								<option value="community benefit dinner">Community Benefit Dinner</option>
								<option value="other">Other (please enter details below)</option>
							</select>
						</div>

						<div class="md:col-span-5">
							<label for="details">Details or Other Information</label>
							<textarea v-model="formValues.details" name="details" id="details" class="h-40 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""></textarea>
						</div>

						<div class="md:col-span-5">
							<label for="dateOfEvent">Date of Event</label>
							<input v-model="formValues.dateOfEvent" type="text" name="dateOfEvent" id="dateOfEvent" placeholder="General Month/Year or Specific Date" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
						</div>

						<div class="md:col-span-5">
							<label for="location">City/Town where you would like to hold this event</label>
							<input v-model="formValues.location" type="text" name="location" id="location" placeholder="Location" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
						</div>

						<div class="md:col-span-3">
							<label for="attendance">Attendance</label>
							<input v-model="formValues.attendance" type="text" name="attendance" id="attendance" placeholder="How many people" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
						</div>

						<div class="md:col-span-2">
							<label for="eventLength">Event Length</label>
							<input v-model="formValues.eventLength" type="text" name="eventLength" id="eventLength" placeholder="Specify Hours/Min" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
						</div>

						<div class="md:col-span-5">
							<label for="services">What services will you be needing from Hello Events?</label>
							<div class="">
								<div class="mb-2"><input v-model="formValues.complete" type="checkbox" id="complete" name="complete" value="Complete" true-value="Complete Services, " false-value=""> Complete (includes Day-of Coordination)</div>

								<div class="mb-2"><input v-model="formValues.cleanup" type="checkbox" id="cleanup" name="cleanup" value="Clean Up" true-value="Clean Up, " false-value=""> End of Event Clean Up</div>

								<div class="mb-2"><input v-model="formValues.venue" type="checkbox" id="venue" name="venue" value="Venue" true-value="Venue, " false-value=""> Venue</div>

								<div class="mb-2"><input v-model="formValues.catering" type="checkbox" id="catering" name="catering" value="Catering" true-value="Catering, " false-value=""> Catering</div>

								<div class="mb-2"><input v-model="formValues.entertainment" type="checkbox" id="entertainment" name="entertainment" value="Entertainment" true-value="Entertainment, " false-value=""> Entertainment</div>

								<div class="mb-2"><input v-model="formValues.photo" type="checkbox" id="photo" name="photo" value="Photo" true-value="Photography, " false-value=""> Photographer</div>

								<div class="mb-2"><input v-model="formValues.video" type="checkbox" id="video" name="video" value="Video" true-value="Video, " false-value=""> Videographer</div>

								<div class="mb-2"><input v-model="formValues.floral" type="checkbox" id="floral" name="floral" value="Floral" true-value="Floral, " false-value=""> Floral</div>

								<div class="mb-2"><input v-model="formValues.decorations" type="checkbox" id="decorations" name="decorations" value="Decorations" true-value="Decorations, " false-value=""> Decorations</div>

								<div class="mb-2"><input v-model="formValues.dayOf" type="checkbox" id="dayOf" name="dayOf" value="DayOf" true-value="Day-of Coordination, " false-value=""> Day-of Coordination</div>

								<div class="mb-2"><input v-model="formValues.socialmedia" type="checkbox" id="socialmedia" name="socialmedia" value="Social Media" true-value="Social Media Content" false-value=""> Social Media Content</div>
							</div>
						</div>
				
						<div class="md:col-span-5 text-right">
							<div class="inline-flex items-end">
							<button class="tealbg hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Submit</button>
							</div>
						</div>

						</div>
					</div>

					<div class="text-gray-600 border-2 p-2 tealbgdark">
						<p class="text-white font-bold text-lg mb-5">Here's what you've entered...</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Name</span><br> {{ formValues.name }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Email</span><br> {{ formValues.email }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Event Type</span><br> {{ formValues.eventType }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Details</span><br> {{ formValues.details }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Date of Event</span><br> {{ formValues.dateOfEvent }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Attendance</span><br> {{ formValues.attendance }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Event length</span><br> {{ formValues.eventLength }}</p>
						<p class="mb-5 text-white"><span class="font-bold text-white">Services Needed</span><br> {{ formValues.complete }} {{ formValues.cleanup }} {{ formValues.venue }} {{ formValues.catering }} {{ formValues.entertainment }} {{ formValues.photo }} {{ formValues.video }} {{ formValues.floral }} {{ formValues.decorations }} {{ formValues.dayOf }} {{ formValues.socialmedia }}</p>
					</div>
					</div>
				</div>
				</form>
				</div>

			</div>
		</div>
		
	</div>
</template>

<script>
	import emailjs from '@emailjs/browser';
	import swal from 'sweetalert';

	export default {
		data() {
			return {
				formValues: {
					name: '',
					email: '',
					phone: '',
					eventType: '',
					details: '',
					date: '',
					attendance: '',
					dateOfEvent: '',
					location: '',
					eventLength: '',
					services: '',
					complete: '',
					cleanup: '',
					venue: '',
					catering: '',
					entertainment: '',
					photo: '',
					video: '',
					floral: '',
					decorations: '',
					dayOf: '',
					socialmedia: '',
				}
			}
		},
		methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_1m4swuh', 'template_914dd7h', e.target,
        'lrdWdsY6ZtkRv1o7z', {
          name: this.name,
          email: this.email,
          eventType: this.eventType,
		  details: this.details,
		  date: this.date,
		  attendance: this.attendance,
		  location: this.location,
		  dateOfEvent: this.dateOfEvent,
		  eventLength: this.eventLength,
		  services: this.services,
		  complete: this.complete,
		  cleanup: this.cleanup,
		  venue: this.venue,
		  catering: this.catering,
		  entertainment: this.entertainment,
		  photo: this.photo,
		  video: this.video,
		  floral: this.floral,
		  decoration: this.decorations,
		  dayOf: this.dayOf,
		  socialmedia: this.socialmedia
        })
      } catch(error) {
          console.log({error})
      }

	  swal(
		"Thanks!",
		"Thanks for your Quote request. We will be contacting you soon.",
		"success"
	  )

      // Reset form field
      this.formValues.name = ''
      this.formValues.email = ''
      this.formValues.eventType = ''
	  this.formValues.details = ''
	  this.formValues.date = ''
	  this.formValues.attendance = ''
	  this.formValues.location = ''
	  this.formValues.eventLength = ''
	  this.formValues.services = ''
	  this.formValues.complete = ''
	  this.formValues.cleanup = ''
	  this.formValues.venue = ''
	  this.formValues.catering = ''
	  this.formValues.entertainment = ''
	  this.formValues.photo = ''
	  this.formValues.video = ''
	  this.formValues.floral = ''
	  this.formValues.decorations = ''
	  this.formValues.dayOf = ''
	  this.formValues.socialmedia = ''

	  setTimeout(function(){ window.location = "/"; },3000);
    },
  }
	}
</script>

<style scoped>
	.raleway {
		font-family: 'Raleway';
	}

	body {
			font-family: 'Raleway', sans-serif;
			background-color: #F1F1F1;
		}
		
	

	select {
		margin-bottom: 20px;
		background-color: white;
		border: 1px solid lightgray;
		padding: 10px;
	}
</style>