<template>
  <div class="z-hero">
    <div class="z-hero__overlay" />
    <div class="z-hero__description">
      <div class="z-hero__description--text" >
        <p>
          Un albero il cui tronco si può a malapena abbracciare nasce da un minuscolo germoglio.
        </p>
        <p>
          Una torre alta nove piani incomincia con un mucchietto di terra.
        </p>
        <p>
          Un viaggio di mille miglia comincia con un solo passo.
        </p>
        <p>
          <em>(Lao Tzu)</em>
        </p>
      </div>
      <img
        src=""
        alt=""
        class="z-hero__description--background"
      >
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.z-hero {

    @apply relative;

    &__overlay {

      height: 360px;
      background: linear-gradient(12deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.5326505602240896) 50%, rgba(0,0,0,0) 100%);

      @apply absolute w-full z-10;

      @screen md {

        height: 440px;

      }

      @screen lg {

        height: 520px;

      }

      @screen xl {

        height: 600px;

      }

    }

    &__description {

        &--background {
          background-image: url(http://prod-upp-image-read.ft.com/ba1d50a4-0284-11e7-aa5b-6bb07f5c8e12);
          background-size: cover;
          background-repeat: no-repeat;
          height: 360px;

          @screen md {

            height: 440px;

          }

          @screen lg {

            height: 520px;

          }

          @screen xl {

            height: 600px;

          }

        }

        &--text {

          @apply absolute bottom-0 px-4 py-4 text-white text-xl z-20;

          p {

            @apply mb-4;

            &:last-child {

              @apply m-0;

            }

          }

          @screen sm {

            @apply py-8 px-8 text-2xl;

          }

          @screen md {

            @apply py-12 px-12 text-2xl;

          }

          @screen lg {

            @apply py-16 px-16;

          }

          @screen xl {

            @apply px-24 text-3xl;

          }

        }

    }

}

</style>
