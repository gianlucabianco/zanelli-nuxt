<template>
  <div class="z-blog-posts">
    <h2
      class="z-blog-posts__title"
      >
      Articoli
    </h2>
    <div class="z-blog-posts__main">
      <img
        class="z-blog-posts__main__img"
      />
      <h2
        class="z-blog-posts__main__title"
        >
        Titolo dell'articolo
      </h2>
      <p
        class="z-blog-posts__main__description"
      >
        Breve descrizione, non più di questi caratteri. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.z-blog-posts {
    height: 100%;

    @apply p-4;

    @screen md {

      @apply p-12;

    }

    @screen lg {

      @apply p-16;

    }

    @screen xl {

      @apply;

    }

    &__title {

      @apply mb-8 text-5xl border-b-2 border-yellow-600;

    }

    &__main {

      &__img {

        background-image: url(https://wallpaperplay.com/walls/full/9/f/c/34779.jpg);
        background-position: center;
        background-size: cover;

        height: 160px;
        width: 100%;

      }

      &__title {

        @apply my-8 text-3xl border-b-2 border-red-400;

      }

      &__description {

        @apply my-8 text-xl;

      }

    }

}

</style>
