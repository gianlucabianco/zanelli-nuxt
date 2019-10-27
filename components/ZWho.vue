<template>
  <div class="z-who">
    <div class="z-who__description">
      <div id="description" class="z-who__description__text">
        <h2
          class="z-who__description__text__title"
        >
          Chi sono
        </h2>
        <p>
          Sono la dott.ssa Francesca Zanelli, Psicologa e Psicoterapeuta ad orientamento Analitico Transazionale Integrato.
        </p>
        <p>
          Propongo interventi di sostegno psicologico e di psicoterapia individuale rivolti ad <strong>adulti</strong>.
        </p>
        <p>
          Mi occupo di <strong>problemi relazionali</strong> (familiari, sociali, di coppia), <strong>disagio emotivo</strong> (bassa autostima, rabbia, conflitti interiori), <strong>ansia</strong>, <strong>attacchi di panico</strong>, <strong>depressione</strong> e <strong>traumi</strong>.
        </p>
        <p>
          Per maggiori informazioni sui miei servizi e le mie competenze, esplora il mio sito!
        </p>
        <p>
          Potrai trovare informazioni più dettagliate sulla mia formazione, sul mio metodo e sugli obiettivi che possiamo raggiungere insieme.
        </p>
        <p>
          Sono presenti numerosi articoli con la quale potrai approfondire quello di cui hai bisogno o capire come individuare se hai dei problemi particolari sulla quale vuoi lavorare.
        </p>
        <p>
          Ricevo nel mio studio in centro a Imola, in Via Milani 24.
        </p>
        <a
          class="z-who__description__text__contact-btn"
          @click="scrollTo('contact')"
        >
          CONTATTAMI
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        scrollTo(
          destinationElement = null,
        ){

          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.getElementById(destinationElement).offsetTop - 80,
          });

        },
      },
    }
</script>

<style
  lang="scss"
  scoped
>
.z-who {
    height: 100%;

    &__description {

      @apply h-full;

        &__text {

          @apply p-4 z-20;

          &__title {

            @apply mb-8 text-5xl border-b-2 border-green-500;

          }

          &__contact-btn {

            transition: 0.5s ease-in-out;

            @apply w-full inline-block p-4 my-4 text-center border-2 border-solid border-black text-black;

            &:hover {

              transition: 0.5s ease-in-out;

              @apply bg-black text-white;

            }

          }

          p {

            @apply text-2xl leading-relaxed mb-4;

            &:last-child {

              @apply m-0;

            }

          }

          @screen sm {

            @apply p-8 text-2xl;

          }

          @screen md {

            @apply p-12 text-2xl;

          }

          @screen lg {

            @apply p-16;

          }

          @screen xl {

            @apply text-3xl;

          }

        }

    }

}

</style>
