<template>
	<div class="raleway mx-auto mt-10 p-[10%] bg-teal-700">
      <div>
        <div class="md:px-20">
          <p class="raleway text-4xl font-extrabold text-white mb-5">Subscribe to our newsletter.</p>
          <p class="raleway text-gray-300 text-2xl font-bold">
          Stay ahead of the game with exclusive event planning tips, industry trends, and networking opportunities. Join our community of event enthusiasts and plan extraordinary experiences. Subscribe now!
          </p>
        </div>
        <form @submit.prevent="postToDB" class="mt-10 md:px-20">
            <div class="mb-4">
              <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
              <input v-model="userEmail" id="email" name="email" type="text" class="w-full md:w-[50%] px-3 py-2 border border-gray-300 rounded" placeholder="Enter your email address" />
             </div> 

            <!-- <div class="flex flex-col md:flex-row">
            <div class="mb-4 mr-10 w-full">
              <label for="firstname" class="block text-gray-300 text-sm font-bold mb-2">First Name</label>
              <input id="firstname" type="text" class="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your first name" />
            </div>
          <div class="mb-4 w-full">
            <label for="lastname" class="block text-gray-300 text-sm font-bold mb-2">Last Name</label>
            <input id="lastname" type="text" class="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your last name" />
          </div>
          </div> -->
          <button class="bg-teal-400 text-1xl rounded-md text-white py-2 px-5 mt-5 mb-5 hover:bg-teal-300">Sign up</button>
        </form>
      </div>

      <div class="text-gray-100">
        <pre>{{ DBResponse }}</pre>
      </div>

    </div>

   

</template>

<script setup>
    // variable to hold the response from supabase
    const DBResponse = ref([]);
    // variable to hold the provided email address
    const userEmail = ref("");
    // function to send email to our server route
    async function postToDB() {
    const result = await fetch(`/api/subscribe?email=${userEmail.value}`);
    const data = await result.json();
    DBResponse.value = data;
  }
</script>

<style>

</style>