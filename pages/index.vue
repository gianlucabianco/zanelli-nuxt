<template>
  <section class="container">
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
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

h1 {

  @apply .text-6xl .text-red-700 .bg-green-600;

}
/*
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
*/
</style>
