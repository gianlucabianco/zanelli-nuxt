<template>
  <div class="z-hero">
    <div class="z-hero__background">
      <div class="z-hero__background__image" />
    </div>

    <div class="z-hero__overlay" />

    <div class="z-hero__cta__container-wrapper">
      <div class="z-hero__cta__container">
        <div class="z-hero__cta__card">
          <p class="z-hero__cta__card__description">
            Ogni lungo viaggio inizia con un piccolo passo.
          </p>
          <div class="z-hero__cta__card__btn">
            Scopri come posso accompagnarti
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.z-hero {
  width: 100vw;
  height: calc(100vh - 80px);

  position: relative;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(8px);

    width: 100%;
    height: 100%;

    background: lightgray;
    opacity: 0.1;
    z-index: -1;
  }

  &__background {
    width: 100%;
    height: 100%;

    background: #f6cfba;

    /* FIXME: if not needed, remove. */
    /* fallback for old browsers */
    /* background: #DEF3FD; */
    /* Chrome 10-25, Safari 5.1-6 */
    /* background: -webkit-linear-gradient(to bottom left, #defde0 0%, #def3fd 100%);  */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background: linear-gradient(to bottom left, #defde0 0%, #def3fd 100%); */

    z-index: -2;

    &__image {
      float: right;

      width: 50%;
      height: 100%;
      background: no-repeat center
        url("https://ilariaurbinati.com/media/cache/33/08/330887c336a6755bc7a3eef3fb523505/urbinati-risposta-cuore-85bis.jpg");
    }
  }

  &__cta {
    &__container-wrapper {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }

    &__container {
      height: 100%;
      width: 75%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      margin: 0 auto;
    }

    &__card {
      /* height: 300px; */
      width: 460px;

      margin-bottom: 150px;
      padding: 16px;

      &__description {
        line-height: 1.25;
        font-size: 42px;
        font-weight: 600;
      }

      &__btn {
        width: 320px;

        margin: 16px 0;
        padding: 12px 28px;
        border: 2px solid black;

        transition: 0.5s;

        &:hover {
          color: #d8d8de;
          border-color: #372e59;
          background-color: #372e59;
        }
      }
    }
  }
}
</style>
