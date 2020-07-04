<template>
  <div class="z-hero-grid">
    <div class="z-hero-grid__cta-content">
      <div class="z-hero-grid__cta-content__card">
        <p class="z-hero-grid__cta-content__card__description">
          Ogni lungo viaggio inizia con un piccolo passo.
        </p>
        <div
          class="z-hero-grid__cta-content__card__btn"
          @click="$emit(
            'scroll-to-services'
          )"
        >
          Scopri come posso accompagnarti
        </div>
      </div>
    </div>
    <div class="z-hero-grid__bg">
      copyright - ilaria urbinati
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

    @screen lg {

      display: grid;
      grid-template-columns: [first-col] 1fr [col-2] 1fr [end-col];
      grid-template-rows: [first-row] 1fr [end-row];

      gap: 0 0;
      grid-template-areas:
        "bg"
        "cta-content";

      max-height: 840px;

      @screen xl {

        max-height: calc(100vh - 187px);

      }

      @media (min-width: 1440px) {

        max-height: none;

      }

    }

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

      @screen lg {

        grid-area: cta-content;
        grid-column-start: first-col;
        grid-column-end: col-2;

        grid-row-start: first-row;
        grid-row-end: end-row;

        display: flex;
        justify-content: center;
        align-items: flex-end;

        z-index: 10;

      }

      &__card {

        height: 200px;
        width: 100%;

        margin-bottom: 8px;

        @screen lg {

          height: 300px;
          width: 460px;

          margin: 10% auto;

        }

        &__description {

          line-height: 1.25;
          font-size: 28px;
          font-weight: 600;
          padding: 16px 20px;

          @screen lg {

            padding: 16px 0;
            line-height: 1.25;
            font-size: 42px;
            font-weight: 600;

          }

        }

        &__btn {

          width: 280px;
          margin: 0 20px;
          padding: 12px 12px;

          border: 2px solid #F7D2BF;
          font-size: 15px;
          font-weight: 500;

          background-color: #D8D8DE;
          color: #372E59;

          transition: 0.5s;

          @screen lg {

            width: 320px;

            margin: 16px 0;
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

    &__bg {

      grid-area: bg;

      grid-column-start: first-col;
      grid-column-end: end-col;

      grid-row-start: first-row;
      grid-row-end: row-2;

      background: url("/hero.jpg") no-repeat center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;

      background-size: cover;
      background-position: bottom;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 12px;
      padding: 4px 8px;

      @screen lg {

        grid-column-start: col-2;
        grid-column-end: end-col;

        grid-row-start: first-row;
        grid-row-end: row-3;

        max-width: 512px;

      }

    }

  }

</style>
