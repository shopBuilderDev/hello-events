<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    article: await article,
    surround: await surround,
  };
});
const [prev, next] = data.value.surround;
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: `${data.value.imgurl}`,
      property: `${data.value.imgurl}`,
    },
  ],
});
function readingTime(content) {
  let minutes = 0;
  const contentAsString = JSON.stringify(content);
  const words = contentAsString.split(" ").length;
  const wordsPerMinute = 200;
  minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
</script>
<template>
	<Navui />
  <main id="main" class="article-main border-2 border-teal-700 bg-teal-50 rounded-xl">
    <header v-if="data.article" class="article-header">
      <h1 class="heading text-center">
        {{ data.article.title }}
      </h1>
      <div class="flex flex-wrap justify-center supporting my-3 text-gray-400">
        <span>
          {{ data.article.description }}
        </span>
        <span>
          <span class="font-bold ml-4 mt-0.5"
            >{{ readingTime(data.article) }}
          </span>
          Min read
        </span>
      </div>
	  <div class="text-center"><BlogBtn /></div>
      <!-- <div class="img-cont h-[450px] my-4">
        <img
          :src="`${data.article.imgurl}`"
          :alt="data.article.title"
          class="rounded"
        />
      </div> 
      <a
        :href="`${data.article.imgurl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-sm my-2 flex justify-center"
        >{{ data.article.attribution }}</a
      >-->
	  
    </header>
    <!-- <Hr /> -->
    <section class="article-section mb-2 raleway">
      <article class="article">
        <ContentRenderer :value="data.article">
          <ContentRendererMarkdown :value="data.article" />
        </ContentRenderer>
		
		<div class="text-gray-400">
		Tags: 
		<ul class="article-tags">
			<li class="tag" v-for="(tag, i) in data.article.tags" :key="i">
			{{ tag }}
			</li>
		</ul>
		</div>
		<br>
      </article>
	  
    </section>

	<div class="text-center"><BlogBtn /></div>

    <!-- previous and Next blogs -->
    <PreviousNext :prev="prev" :next="next" />
    <!-- <Hr /> -->
  </main>
  <Footer />
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl mx-auto my-10 drop-shadow-xl;
}
.article-header {
  @apply p-4 py-6;
}
.article-header .heading {
  @apply font-extrabold text-5xl;
}
.article-header .supporting {
  @apply font-medium text-lg;
}
.article-section {
  @apply grid grid-cols-4;
}
.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
.article[data-v-2c96bb26] :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply text-base;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)) {
  @apply no-underline text-2xl;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)):hover {
  @apply underline;
}
.raleway {
  font-family: "Raleway", sans-serif;
}
</style>