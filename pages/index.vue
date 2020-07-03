<template>
  <section
    class="z-index"
  >
    <z-hero-grid />
    <z-services-intro />
    <!-- TODO: / FIXME: place the right component -->
    <!-- <z-services-details />
    <z-services-details-test /> -->
    <z-services-details-test-second />
    <z-landing-posts />
  </section>
</template>

<script>
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZServicesIntro from '~/components/ZServicesIntro.vue';
// import ZServicesDetails from '~/components/ZServicesDetails.vue';
// import ZServicesDetailsTest from '~/components/ZServicesDetailsTest.vue';
import ZServicesDetailsTestSecond from '~/components/ZServicesDetailsTestSecond.vue';
import ZLandingPosts from '~/components/ZLandingPosts.vue';

export default {
  components: {
    ZHeroGrid,
    ZServicesIntro,
    // ZServicesDetails,
    // ZServicesDetailsTest,
    ZServicesDetailsTestSecond,
    ZLandingPosts,
  },
};
</script>

<style></style>
