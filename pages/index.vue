<template>
  <div class="flex flex-col min-h-screen">
	<Navui />

 <AnnouncementBar />

  <div class="">
    <HeroSection
      :title="'Welcome to Hello Events'"
      :subtitle="'Looking for a quote? Choose to get started!'"
      :backgroundImage="'/centerpiece.jpg'"
    />
  </div>

  <div class="flex-grow flex items-center justify-center">
    <div class="">
      <SplitSection />
    </div>
  </div>

  <!-- <BigDeal /> -->
  <!-- <HeroText /> -->
  <!-- <Occasion /> -->
  <!-- <Features /> -->
  <!-- <FiveStarSection /> -->
  <!-- <ReadyForQuote /> -->
  <Footer />
</div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import EventPlanningQuoteForm from "@/components/EventPlanningQuoteForm.vue";
import EventCenterQuoteForm from "@/components/EventCenterQuoteForm.vue";

export default {
  components: {
    HeroSection,
    EventPlanningQuoteForm,
    EventCenterQuoteForm,
  },
};
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