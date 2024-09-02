<script>
  import items from '../assets/creativeSvcsData.json'

export default {
 data() {
   return {
     item: items
   }
 },
 computed: {
         photoLink() {
             return '/svcs/';
         },
         ext() {
             return '.jpg'
         }
     }
}
</script>

<template>
  <Navui />

  <div class="">
    <CreativeSvcsHeader />
  </div>

  <div>
    <CreativeSvcsDescription />
  </div>

  <div class="raleway flex flex-col lg:flex-row">
      <div class="w-7/8 lg:w-1/2 mx-10 my-5">
          <h2 class="text-center font-extrabold text-2xl mb-5 bg-teal-500 py-5 text-white rounded-t-xl w-full">
            For Our Clients
          </h2>
          <div v-for="item in item" class="" >
            <div v-if="item.customerType === 'client'">
              <div class="flex border-2 border-teal-500 bg-teal-50 rounded-xl p-3 mb-5">
                <div class="w-1/3 mr-5">
                  <img class="rounded-l-xl" :src="photoLink + item.image + ext" width="300" />
                </div>
                <div class="flex flex-col justify-center w-2/3">
                  <h2 class="font-bold text-xl">{{ item.title }}</h2>
                  <p class="text-slate-700">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      

      <div class="w/7/8 lg:w-1/2 mx-10 my-5">
          <h2 class="text-center font-extrabold text-2xl mb-5 bg-teal-500 py-5 text-white rounded-t-xl w-full">
            For Our Vendors
          </h2>
          <div v-for="item in item" class="" >
            <div v-if="item.customerType === 'vendor'">
              <div class="flex border-2 rounded-xl border-teal-500 bg-teal-50 p-3 mb-5">
                <div class="w-1/3 mr-5">
                  <img class="rounded-l-xl" :src="photoLink + item.image + ext" width="300" />
                </div>
                <div class="flex flex-col justify-center w-2/3">
                  <h2 class="font-bold text-xl">{{ item.title }}</h2>
                  <p class="text-slate-700">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>

  <Footer />
</template>

<style scoped>
  .raleway {
    font-family: 'Raleway', sans-serif;
  }
</style>
