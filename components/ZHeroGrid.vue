<template>
  <div class="z-hero-grid">
    <div class="z-hero-grid__cta-content">
      <div class="z-hero-grid__cta-content__card">
        <p class="z-hero-grid__cta-content__card__description">
          Ogni lungo viaggio inizia con un piccolo passo.
        </p>
        <div class="z-hero-grid__cta-content__card__btn">
          Scopri come posso accompagnarti
        </div>
      </div>
    </div>
    <div class="z-hero-grid__bg">
      <div class="content" />
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .z-hero-grid {

    width: 100%;
    height: calc(100vh - 80px);
    position: relative;

    display: grid;

    grid-template-columns: [first-col] 1fr [end-col];
    grid-template-rows: [first-row] 55% [row-2] 45% [end-row];

    grid-template-areas:
      "bg"
      "cta-content";

    background-color: #372E59;
    color: #D8D8DE;

    /*@media DESKTOP */
    /*
    grid-template-columns: [first-col] 1fr [col-2] 1fr [end-col];
    grid-template-rows: [first-row] 1fr [end-row];

    grid-template-areas:
      "cta-content bg";
    */
    /* could work: */
    /* background-color: #F9D4C1; */
    /*@media DESK */
    /* TRANSPARENCY GRADIENT */
    /*
    background-image: -webkit-gradient(
      linear, left top, left bottom, from(rgba(246,204,182,1)),
      to(rgba(246,204,182,0.7))
    );
    */

    &__cta-content {

      grid-area: cta-content;
      grid-column-start: first-col;
      grid-column-end: end-col;

      grid-row-start: row-2;
      grid-row-end: end-row;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 10;

      /*@media DESKTOP*/
      /*grid-area: cta-content;
      grid-column-start: first-col;
      grid-column-end: end-col;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 10;
      */

      &__card {

        height: 200px;
        width: 100%;

        margin-bottom: 8px;

        /*@media DESK*/
        /*
        height: 300px;
        width: 460px;

        margin-bottom: 150px;
        padding: 16px;
        */

        &__description {

          line-height: 1.25;
          font-size: 28px;
          font-weight: 600;
          padding: 16px 20px;

          /*@media DESK*/
          /*
          line-height: 1.25;
          font-size: 42px;
          font-weight: 600;
          */

        }

        &__btn {

          width: 280px;
          margin: 0 20px;
          padding: 12px 12px;

          border: 2px solid #F7D2BF;
          font-size: 16px;
          font-weight: 500;

          background-color: #D8D8DE;
          color: #372E59;

          transition: 0.5s;

          /*@media DESK*/
          /*
          width: 320px;

          margin: 16px 0;
          padding: 12px 28px;
          border: 2px solid black;
          */

          /*@media DESK */
          /* &:hover {

            color: #d8d8de;
            border-color: #372e59;
            background-color: #372e59;

          } */

        }

      }

    }

    &__bg {

      grid-area: bg;

      grid-column-start: first-col;
      grid-column-end: end-col;

      grid-row-start: first-row;
      grid-row-end: row-2;

      background: url("https://ilariaurbinati.com/media/cache/33/08/330887c336a6755bc7a3eef3fb523505/urbinati-risposta-cuore-85bis.jpg") no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;

      background-size: cover;
      background-position: bottom;

      /*@media DESKTOP*/
      /*
      display: flex;
      justify-content: center;
      align-items: center;
      */

      /*@media DESK */
      /*
      background: url("https://ilariaurbinati.com/media/cache/33/08/330887c336a6755bc7a3eef3fb523505/urbinati-risposta-cuore-85bis.jpg") no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      */

    }

  }
  /* .z-hero {
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

      // FIXME: if not needed, remove.
      // fallback for old browsers
      // background: #DEF3FD;
      // Chrome 10-25, Safari 5.1-6
      // background: -webkit-linear-gradient(to bottom left, #defde0 0%, #def3fd 100%);
      // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
      // background: linear-gradient(to bottom left, #defde0 0%, #def3fd 100%);

      z-index: -2;

      &__image {
        float: right;

        width: 50%;
        height: 100%;
        background: no-repeat center url("https://ilariaurbinati.com/media/cache/33/08/330887c336a6755bc7a3eef3fb523505/urbinati-risposta-cuore-85bis.jpg");
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
        // height: 300px;
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
  } */
</style>
