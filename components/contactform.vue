<template>
    <div class="mb-28">
        <h1>Contact Us</h1>
		
	<form @submit.prevent="sendEmail">
		<!-- <div>
			<pre>
				{{ JSON.stringify(formValues, null, 2) }}
			</pre>
		</div> -->
		<label for="name">Name</label>
		<input type="text" id="name" name="name" placeholder="Your name.." v-model="formValues.name" required>
		<label for="email">Email</label>
		<input type="text" id="email" name="email" placeholder="Your email.." v-model="formValues.email" required>
		
		<label for="message">Message</label>
		<textarea id="message" name="message" placeholder="Your message.." v-model="formValues.message" required></textarea>
		<button class="tealbg hover:bg-teal-700 rounded-md text-white py-2 px-5 mt-5 mb-5">Submit</button>
	</form>
    </div>
</template>


<script>
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'

export default {
  data() {
    return {
		formValues: {
			name: '',
			email: '',
			message: ''
		}
  	}
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_1m4swuh', 'template_v3s0sbd', e.target,
        'lrdWdsY6ZtkRv1o7z', {
          name: this.name,
          email: this.email,
          message: this.message
        })
      } catch(error) {
          console.log({error})
      }

	  swal(
		"Thanks!",
		"Your email was sent. We will be contacting you soon.",
		"success"
	  )

      // Reset form field
      this.formValues.name = ''
      this.formValues.email = ''
      this.formValues.message = ''
    },
  }
}

</script>

<style scoped>
		body {
			font-family: 'Raleway', sans-serif;
			background-color: #F1F1F1;
		}
		
		h1 {
			color: #3F3F3F;
			margin-top: 30px;
            font-family: 'Raleway', sans-serif;
            font-size: 2rem;
            font-weight: 400;
			text-align: center;
			margin: 30px 0;
		}
		
		form {
			background-color: #FFFFFF;
			padding: 20px;
			border-radius: 5px;
			margin: 0 auto;
			max-width: 600px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		}
		
		input[type=text], textarea {
			padding: 10px;
			width: 100%;
			border: 1px solid #ccc;
			border-radius: 4px;
			resize: vertical;
			margin-bottom: 20px;
		}
		
		label {
			color: #3F3F3F;
			display: block;
			margin-bottom: 10px;
		}
		
		input[type=submit] {
			background-color: #008CBA;
			color: #FFFFFF;
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			float: right;
		}
		
		input[type=submit]:hover {
			background-color: #006F8A;
		}

		@media screen and (min-width: 500px) {
			form {
				margin-left: 20px;
				margin-right: 20px;
			}
		}

		@media screen and (min-width: 600px) {
			form {
				margin-left: auto;
				margin-right: auto;
			}
		}
		
</style>