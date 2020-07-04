<template>
  <section
    class="z-index"
  >
    <z-hero-grid />
    <z-services-intro />
    <z-services-details-test-second />
    <z-landing-posts />
  </section>
</template>

<script>
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZServicesIntro from '~/components/ZServicesIntro.vue';
import ZServicesDetailsTestSecond from '~/components/ZServicesDetailsTestSecond.vue';
import ZLandingPosts from '~/components/ZLandingPosts.vue';

export default {
  components: {
    ZHeroGrid,
    ZServicesIntro,
    ZServicesDetailsTestSecond,
    ZLandingPosts,
  },
};
</script>

<style></style>
