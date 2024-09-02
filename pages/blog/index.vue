<script setup>
	const articles = await queryContent("blog").sort({ createdAt: 1 }).find();
</script>

<template>
	<Navui />
	<div>
    <div class="pt-10">
		<h1 class="raleway text-center text-slate-900 font-bold text-4xl antialiased">Check Out Our Latest Blog Posts</h1>
			<p class="raleway text-3xl text-center mb-10 tealtext mt-2 font-bold tracking-tight sm:text-4xl">
				Dream. Ignite. Celebrate.
			</p>
  </div>
    <section>
      <div class="w-4/5 lg:w-2/3 mx-auto flex flex-col-reverse flex-wrap mb-10">
        <Article
          v-for="article in articles"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
          :author="article.author"
		      :preview="article.preview"
        />
      </div>
    </section>
  </div>
	<Footer />
</template>


<style scoped>
	.raleway {
      font-family: 'Raleway';
    }
	.imgsize {
		width: 100px;
	}
</style>