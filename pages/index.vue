<template>
  <section
    class="z-index"
  >
    <z-hero-grid />
    <z-services-intro />
    <z-services-details />
    <z-landing-posts />
  </section>
</template>

<script>
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZServicesIntro from '~/components/ZServicesIntro.vue';
import ZServicesDetails from '~/components/ZServicesDetails.vue';
import ZLandingPosts from '~/components/ZLandingPosts.vue';

export default {
  components: {
    ZHeroGrid,
    ZServicesIntro,
    ZServicesDetails,
    ZLandingPosts,
  },
};
</script>

<style></style>
