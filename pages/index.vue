<template>
  <section
    class="z-index"
  >
    <z-hero-grid
      @scroll-to-services="scrollToServices"
    />
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
  methods: {
    scrollToServices() {

      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );

      window.scrollTo(
        {
          top: vh - 80,
          left: 100,
          behavior: 'smooth',
        }
      );

    },
  }
};
</script>
