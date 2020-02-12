<template>
  <div class="z-post">
    <div class="z-post__main">
      <img
        class="z-post__main__image"
        src="https://increment.com/art/10/test-in-prod/cover-1000-91e1ac82.jpeg"
      >
      <div
        class="z-post__main__divider"
      >
        <div class="z-post__main__divider__border" />
      </div>

      <div class="z-post__main__title">
        <div
          class="z-post__main__title__header"
        >
          <h1>
            How to build a startup engineering team in five simple steps
          </h1>
          <div
            class="z-post__main__title__header__dummy-content"
          />
        </div>
        <p
          class="z-post__main__title__description"
        >
          Testing in production is a superpower. It’s our inability to acknowledge it that’s the trouble.
        </p>
      </div>

      <div class="z-post__main__details">
        <div class="z-post__main__details__date">
          08/08/2020
        </div>
        <div class="z-post__main__details__tags">
          <div class="z-post__main__details__tags__tag">
            depressione
          </div>
          <div class="z-post__main__details__tags__tag">
            ansia
          </div>

          <!-- <div class="z-post__main__details__tags__tag">
            ansia
          </div><div class="z-post__main__details__tags__tag">
            depressione
          </div>
          <div class="z-post__main__details__tags__tag">
            depressione
          </div>
          <div class="z-post__main__details__tags__tag">
            ansia
          </div> -->

        </div>
      </div>

      <div
        class="z-post__main__divider"
      >
        <div class="z-post__main__divider__border" />
      </div>

      <div 
        class="" 
        style="background-color: lightcoral;">
        content
      </div>

      <div 
        class="" 
        style="background-color: cyan;">
        related-posts
      </div>

    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style
  lang="scss"
  scoped
>
  .z-post {

    @apply flex w-full z-10;

    &__main {

      @apply flex flex-col h-full;

      @screen lg {

        @apply w-3/4 mx-auto;

      }

      &__divider {

        &__border {

          @apply mx-4;

          border-bottom: 5px solid gold;

          /* mediaqueries here */

        }

      }

      &__title {

        @apply p-4;

        &__header {

          @apply flex font-bold text-4xl;

          h1 {

            border-bottom: 2px solid black;

          }

        }

        &__description {

          @apply mt-4 text-gray-700 text-xl leading-relaxed;

        }

      }

      &__details {

        @apply text-xl px-4 mb-2 text-gray-800;

        &__date {

          border-bottom: 2px solid lightgray;
          @apply inline-block mb-2 text-lg;

        }

        &__tags {

          @apply my-1;

          &__tag {

            border: 1.5px solid gold;
            transition: 0.33s ease-out;

            @apply inline-block mr-2 mb-2 py-1 px-3;

            &:hover,
            :focus {

              border: 1.5px solid transparent;
              transition: 0.33s ease-in;

              @apply bg-yellow-400;

            }

          }

        }

      }

    }

  }
</style>
