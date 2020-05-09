<template>
  <section
    class="z-index"
  >
    <z-hero-grid />
    <z-services-intro />
    <!-- TODO: services details -->
    <!-- TODO: posts -->
  </section>
</template>

<script>
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZServicesIntro from '~/components/ZServicesIntro.vue';

export default {
  components: {
    ZHeroGrid,
    ZServicesIntro,
  },
};
</script>

<style></style>
