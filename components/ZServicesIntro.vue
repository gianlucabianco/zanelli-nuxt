<template>
  <div class="z-hero-services">
    <div class="z-hero-services__content">
      <div class="z-hero-services__content__description">
        <p class="z-hero-services__content__description__item">
          Sono Francesca Zanelli, psicologa e psicoterapeuta ad orientamento analitico transazionale integrato.
        </p>
        <p class="z-hero-services__content__description__item--center">
          Mi occupo di adulti che stanno attraversando momenti di difficoltà personale e relazionale, tali da comportare sofferenza e di coloro che hanno l'interesse a conoscersi meglio per intraprendere un precorso di consapevolezza e cambiamento.
        </p>
      </div>
      <div class="z-hero-services__content__img-or-quote">
        "Quote or image here"
      </div>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .z-hero-services {

    width: 100%;
    height: 100%;

    background-color: #D8D8DE;
    font-size: 22px;
    line-height: 1.8;

    &__content {

      display: flex;

      width: 100%;
      height: 100%;

      padding: 0 20px;

      @screen lg {

        @apply p-0 w-3/4 mx-auto;

      }

      &__img-or-quote {

        display: none;

        @screen xl {

          display: flex;
          justify-content: center;
          align-items: center;

          width: 512px;
          margin-right: -37px;

          background-color: lightcoral;

        }

      }

      &__description  {

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        width: 100%;
        height: 100%;

        padding: 44px 0;

        @screen xl {

          padding-right: 32px;
          max-width: 50%;

        }

        &__item {

          &--center {

            max-width: 880px;
            padding-top: 32px;

          }

        }

      }

    }

  }

</style>
