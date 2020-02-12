<template>
  <section 
    class="container" 
    style="height: 2000px;">
    <nuxt-link to="/posts">
      <h1>
        POSTS
      </h1>

    </nuxt-link>
    <!-- <ul
      v-for="(post, index) in posts"
      :key="index"
    >
      <li>
        <nuxt-link to="`/posts/${post.slug}`">
          POSTS
        </nuxt-link>
        {{  }}
      </li>
    </ul> -->

    <!-- FIXME: FOR TEST PURPOSE -->
    <!-- <z--menu /> -->

  </section>
</template>

<script>
/* FIXME: NEED THESE ?*/
import AppLogo from '~/components/AppLogo.vue'
import ZNavbar from '~/components/ZNavbar.vue'
import ZMenu from '~/components/ZMenu.vue'
// import ZHamburgerMenu from '~/components/ZHamburgerMenu.vue'
import ZFooter from '~/components/ZFooter.vue'

export default {
  components: {
    AppLogo,
    ZNavbar,
    ZMenu,
    // ZHamburgerMenu,
    ZFooter,
  },
}
</script>

<style>

</style>
