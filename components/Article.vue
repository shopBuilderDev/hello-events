<template>
    <article class="raleway pt-8 mx-auto pb-2 mb-10 md:mb-0 w-full">
      <div class="flex antialiased ml-2 flex-col md:flex-row">
        <nuxt-link :to="path" class="hover:bg-gray-100">
          <img
            :src="img"
            :alt="title"
            class="object-cover object-center shadow-md img"
          />

          <div class="relative md:px-[400px] md:-mt-[250px] md:h-[250px]">
            <div class="p-6 w-[400px] rounded-r-lg">
              <div class="flex items-baseline">
                <ul>
                  <li
                    v-for="tag in tags"
                    :key="tag"
                    class="inline-block bg-gray-200 rounded-full text-xs px-2 py-0.5 mr-2 mb-1 uppercase leading-relaxed"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
  
              <h4 class="my-2 py-0 font-semibold leading-tight text-lg">
                {{ title }}
              </h4>
              <div class="py-2 flex items-center leading-relaxed">
                <p class="px-2 text-sm">{{ convertDate(date) }} </p>
                <p class="h-1 w-1 rounded-full bg-gray-400 mx-1"></p>
                <span class="pl-2 text-sm font-semibold"> by {{ author }}</span>
              </div>

			  <div class="line-clamp-3">
				{{ preview }} 
			  </div>
        <span class="text-teal-500">read more</span>

            </div>
          </div>
        </nuxt-link>
      </div>
    </article>
  </template>
  
  <script setup>
  defineProps({
    path: String,
    img: String,
    title: String,
    tags: Object,
    date: String,
    author: String,
	preview: String
  });
  
  function convertDate(date) {
    const da = new Date(date);
    return da.toLocaleString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric" ,
    });
  }
  </script>
  <style>
  .img {
    width: 400px;
    height: 250px;
  }
  </style>