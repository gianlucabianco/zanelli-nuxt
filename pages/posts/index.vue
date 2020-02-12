<template>
  <div>
    <h1>My blog posts</h1>
    <br>
    <ul>
      <li
        v-for="post in posts"
        :key="post.attributes.title" 
        style="color: red"
      >
        <!-- {{ post }} -->
        <!-- {{ post.attributes.slug }} -->
        <nuxt-link :to="`posts/${post.attributes.slug}`">
          {{ post.attributes.title }}
        </nuxt-link>
      </li>
      <br>
    </ul>
    <nuxt-link
      to="/"
    >
      home
    </nuxt-link>
  </div>
</template>
<script>
  export default {
    async asyncData() {

      const resolve = require.context("~/content/", true, /\.md$/)

      const imports = resolve.keys().map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      });

      return {
        posts: imports
      }
    },
  }
</script>
