<template>
  <div class="z-posts">
    <div
      class="z-posts__content"
    >
      <h3
        class="z-posts__content__title"
      >
        ULTIMI ARTICOLI
      </h3>
      <div
        class="z-posts__content__posts-list"
      >
        <div
          class="z-posts__content__posts-list__card"
        >
          <!-- FIXME: v-for -->
          <img
            class="z-posts__content__posts-list__card__bg-img"
            src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1"
            alt="DESCRIPTION OF THE IMAGE"
          >
          <p
            class="FIXME:"
          >
            This is a title. It has a background / overlay
          </p>
        </div>
        <div
          class="z-posts__content__posts-list__card"
        >
          <!-- FIXME: v-for -->
          <img
            class="z-posts__content__posts-list__card__bg-img"
            src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
            alt="DESCRIPTION OF THE IMAGE"
          >
          <p
            class="FIXME:"
          >
            This is a title. It has a background / overlay
          </p>
        </div>
      </div>
      <div class="z-posts__content__cta-btn">
        Esplora tutti gli articoli
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => (
    {

    }
  ),
}
</script>

<style
  lang="scss"
  scoped
>

  .z-posts {

    background-color: red;

    width: 100%;
    height: 100%;

    padding: 40px 20px;

    font-size: 22px;
    line-height: 1.8;

    @screen lg {

      display: flex;
      width: 75%;
      margin: auto;

      padding: 20px 0;

    }

    &__content {

      &__title {

        font-size: 26px;
        padding-bottom: 16px;

      }

      &__posts-list {

        display: flex;
        background-color: yellow;

        &__card {

          width: 50%;
          height: 400px;

          &__bg-img {

            width: 100%;
            min-width: 280px;

          }

        }

      }

      &__cta-btn {

        width: 100%;

        padding: 12px 12px;

        border: 2px solid #F7D2BF;
        font-size: 18px;
        font-weight: 500;

        background-color: #D8D8DE;
        color: #372E59;

        transition: 0.5s;

        @screen lg {

          width: 260px;
          padding: 12px 28px;
          border: 2px solid black;

        }

        &:hover {

          border-color: #d8d8de;
          background-color: #F7D2BF;

        }

      }

    }

  }

</style>
