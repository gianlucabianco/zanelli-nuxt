<template>
  <section
    class="z-index"
  >
    <!-- <nuxt-link to="/posts">
      <h1>
        POSTS
      </h1>

    </nuxt-link> -->
    <!-- <ul
      v-for="(post, index) in posts"
      :key="index"
    >
      <li>
        <nuxt-link to="`/posts/${post.slug}`">
          POSTS
        </nuxt-link>
        {{ post }}
      </li>
    </ul> -->

    <!-- FIXME: FOR TEST PURPOSE -->
    <!-- <z-menu /> -->
    <z-hero-grid />
  </section>
</template>

<script>
/* FIXME: NEED THESE ?*/
import AppLogo from '~/components/AppLogo.vue';
import ZNavbar from '~/components/ZNavbar.vue';
import ZMenu from '~/components/ZMenu.vue';
import ZHeroGrid from '~/components/ZHeroGrid.vue';
import ZFooter from '~/components/ZFooter.vue';

export default {
  components: {
    AppLogo,
    ZNavbar,
    ZMenu,
    ZHeroGrid,
    ZFooter,
  },
};
</script>

<style></style>
