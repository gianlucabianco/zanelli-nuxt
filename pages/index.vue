<template>
  <section
    class="z-index"
  >
    <z-hero-grid />
    <z-services-intro />
    <z-services-details />
    <!-- TODO: posts -->
  </section>
</template>

<script>
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZServicesIntro from '~/components/ZServicesIntro.vue';
import ZServicesDetails from '~/components/ZServicesDetails.vue';

export default {
  components: {
    ZHeroGrid,
    ZServicesIntro,
    ZServicesDetails,
  },
};
</script>

<style></style>
