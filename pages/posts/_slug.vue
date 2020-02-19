<template>
  <div>
    <z-post />
    <div class="post-title">
      <br >
      <h2>Title: {{ title }}</h2>
      <h3>Date: {{ releaseDate }}</h3>
      <br >
      <h3>Tags: {{ tags }}</h3>
      <ul 
        v-for="(tag, index) in tags" 
        :key="index">
        <li>- {{ tag }}</li>
      </ul>
      <br >
      <h3>Related Posts: {{ relateds }}</h3>
      <ul 
        v-for="(related, index) in relateds" 
        :key="index">
        <li>
          Related title {{ related.title }}
          <br >
          Related slug {{ related.slug }}
          <br >
          Related tags {{ related.tags }}
          <br >
          Related thumb {{ related.thumb }}
        </li>
        <br >
      </ul>
    </div>
    <div 
      class="content" 
      v-html="post.html" />
  </div>
</template>
<script>
import ZPost from "~/components/ZPost.vue";

    export default {
  components: {
    ZPost
        },
  async asyncData({ params }) {
    try {

                const post = await import(`~/content/${params.slug}.md`);

      console.debug(post);

      return {
                    post
      };
    } catch (err) {

                console.debug( err );

      return false;
            }
        },
        computed: {
            title() {
      if (this.post) return this.post.default.attributes.title;

      return null;
    },
    releaseDate() {
      if (this.post) return this.post.default.attributes.date;

                return null;
    },
            tags() {
      if (this.post) return this.post.default.attributes.tags;

                return null;
            },
            relateds() {
      if (this.post) return this.post.default.attributes.relateds;

                return null;
    }
  }
};
</script>
