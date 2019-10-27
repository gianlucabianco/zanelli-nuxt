<template>
  <section class="index">
    <z-hero />
    <z-who />

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
  </section>
</template>

<script>
/* FIXME: NEED THESE ?*/
import AppLogo from '~/components/AppLogo.vue'
import ZNavbar from '~/components/ZNavbar.vue'
import ZFooter from '~/components/ZFooter.vue'
import ZHero from '~/components/ZHero.vue'
import ZWho from '~/components/ZWho.vue'

export default {
  components: {
    AppLogo,
    ZNavbar,
    ZFooter,
    ZWho,
    ZHero,
  },
}
</script>

<style
  lang="scss"
  scoped
>
</style>
