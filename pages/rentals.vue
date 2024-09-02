<template>
	<Navui />

    <div class="raleway flex flex-col lg:flex-row container mx-auto w-4/5 justify-center mt-10 gap-6">
        <div class="flex flex-col text-center p-10 border-2 rounded-lg">
            <div class="text-2xl font-bold text-gray-700">Rent up to 15 items</div>
            <div class="text-center text-6xl font-extrabold mt-4 text-teal-500">$75</div>
            <Disclaimer />
        </div>

        <div class="flex flex-col text-center p-10 border-2 rounded-lg">
            <div class="text-2xl font-bold text-gray-700">Rent up to 40 items</div>
            <div class="text-center text-6xl font-extrabold mt-4 text-teal-500">$175</div>
            <Disclaimer />
        </div>

        <div class="flex flex-col text-center p-10 border-2 rounded-lg">
            <div class="text-2xl font-bold text-gray-700">Rent up to 60 items</div>
            <div class="text-center text-6xl font-extrabold mt-4 text-teal-500">$250</div>
            <Disclaimer />
        </div>
    </div>

    <div class="container mx-auto text-center raleway">
        <h1 class="font-bold text-teal-500 mt-10 text-4xl">RENTAL ITEMS FOR YOUR EVENT.</h1>
        <h2 class="text-red-700 mt-4 text-2xl">Check back for new items</h2>
    </div>

	<div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-20 mb-10">

		
        <div v-for="item in item" class="container border-2 border-teal-700 md:border-2 rounded-lg w-10/12 justify-center md:mx-2 mt-10 md:w-80 w-full text-center md:text-left bg-gray-100">

			<div class="bg-teal-700 text-white pl-5">
				Request Item no. {{ item.Partno }}
			</div>

            <img :src="photoLink + item.Photo + ext" class="w-100 rounded-t-lg">
            <!-- <img :src="item.Photo" class="w-100"> -->

            <div class="p-5 bg-gray-100 rounded-lg">
            <h1 class="text-1xl text-teal-500">{{ item.Title }}</h1>
            <p>{{ item.Qtyavailable }} avaliable<br></p>
                <p class="text-stone-800 bolder">{{ item.Description }}</p>
                <div v-if="item.Star === true">
                    <Star />
                </div>
                <div v-else><span class="text-teal-500 font-bold text-xl">${{ usd(item.Price) }}</span></div>
                <!-- <button class="bg-teal-500 rounded-md text-white py-2 px-5 mt-5 mb-5">Coming Soon</button> -->
            </div>
		</div>
    </div>

	<Footer />
</template>

<script>
	 import items from '../assets/rentalItems.json'

	 export default {
		data() {
			return {
				item: items
			}
		},
		computed: {
            photoLink() {
                return '/rentalpix/';
            },
            ext() {
                return '.jpg'
            }
        },
		methods: {
            usd(value) {
        return (Number(value)).toFixed(2);
        }
    }
	 }

</script>

<style scoped>
	h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
    }
    p {
        font-size: .75rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    .bolder {
        font-size: .75rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
    }
	.raleway {
		font-family: 'Raleway', sans-serif;
	}
</style>