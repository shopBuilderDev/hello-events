<template>
	<Navui />

 <AnnouncementBar />
<CreativeSvcsHero />
  <header class="flex items-center justify-center bg-center bg-cover custom-img h-80 bg-fixed">
      <div class="title text-4xl text-white w-100 text-right pe-5 h-10">
          <h2>hello. lets start planning.</h2>
      </div>
  </header>

  

  <BigDeal />
  <HeroText />
  <Occasion />
  <Features />
  <!-- <FiveStarSection /> -->
  <ReadyForQuote />
  <Footer />

</template>

<script>
import AnnouncementBar from '~/components/AnnouncementBar.vue';





</script>

<style scoped>
    .custom-img {
        background-image: url("/corporate.png");
    }

    .custom-bg {
      background-image: url("/custombg2.png");
    }
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
    }

    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }

    h4 {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
    }

    .raleway {
      font-family: 'Raleway';
    }

    .icon-title {
      font-family: 'Raleway';
      font-weight: 600;
      font-size: 1.25rem;
      color: #0f766e;
    }
</style>