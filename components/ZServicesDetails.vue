<template>
  <div class="z-services-details">
    <h2 class="z-services-details__title">SERVIZI OFFERTI</h2>
    <!-- TODO: / FIXME: v-for + data obj -->
    <div
      class="z-services-details__accordion-container"
    >
      <z-accordion
        v-for="(item, index) in accordion"
        :key="index"
        :title="item.title"
        :content="item.content"
        class="z-services-details__accordion-container__item"
      />
    </div>
  </div>
</template>

<script>
import ZAccordion from '~/components/ZAccordion.vue';

export default {
  components: {
    ZAccordion,
  },
  data: () => (
    {
      accordion: [
        {
          title: 'Consulenza psicologica',
          content: 'La consulenza è un tipo di intervento breve e limitato nel tempo, in cui lo scopo è aiutare la persona a definire un problema personale, rispetto al quale si sente confusa o sente di faticare a trovare soluzioni. L\'obiettivo è fornire elementi ed indicazioni utili a fare chiarezza su ciò che sta succedendo e sulle opzioni disponibili.\n\nA volte la consulenza è sufficiente per la persona, fornendo una visione più chiara e realistica di sè e del problema e permettendo di affrontarlo con successo.\n\nAltre volte è il primo step, fondamentale, per intraprendere un percorso più approfondito, come una psicoterapia.',
        },
        {
          title: 'Sostegno psicologico',
          content: 'È un tipo di intervento a cadenza bisettimanale o mensile, in cui la persona ha uno spazio per esprimersi e ricevere ascolto e accoglimento rispetto ad una problematica, ma senza che ci sia l\'obiettivo di produrre un cambiamento di sè.',
        },
        {
          title: 'Psicoterapia individuale',
          content: 'La psicoterapia è un percorso di durata indefinita, che la persona intraprende con lo scopo di attivare un cambiamento di sè.\n\nÈ tipicamente a cadenza settimanale, con incontri della durata di un\'ora.\n\nIl punto di partenza è sempre una fase di Consulenza, della durata di 3-5 sedute in cui si va a delineare il problema presente, la storia della persona e si definiscono gli obiettivi del cambiamento desiderato.\n\nQuando la persona è in un momento di crisi e difficoltà, tendenzialmente l\'obiettivo sarà quello di sentirsi meglio, andando ad eliminare il sintomo del malessere e raggiungendo uno stato di equilibrio. Il focus del lavoro sarà dunque sul problema specifico, con l\'obiettivo di produrre un cambiamento comportamentale.\n\nAltre volte non si sente di avere un problema vero e proprio, ma si sente il desiderio di conoscersi meglio, di esplorare sè stessi, di mettere ordine nella propria mente. Anche per questo è consigliato intraprendere un percorso di Psicoterapia, con lo scopo di favorire una crescita personale, che permetta alla persona di andare nella direzione dell\'autonomia (intesa come insieme di consapevolezza, sopntaneità ed intimità).\n\nSpesso, questa è anche la naturale evoluzione di una terapia che parte da un problema: a volte risolvere la difficoltà può essere sufficiente per la persona, ma spesso apre le porte al desiderio di fare un viaggio più approprofondito dentro sè stessi per ottenere qualcosa di più.\n\nCitando Beisser "Il cambiamento avviene quando una persona diventa ciò che è, non quando cerca di diventare ciò che non è".',
        },
        {
          title: 'EMDR',
          content: 'FIXME: description missing',
        },
        {
          title: 'Valutazione psicodiagnostica',
          content: 'È un percorso della durata di 3-5 incontri in cui lo scopo è una analisi approfondita della propria personalità, nei suoi aspetti cognitivi, emotivi e sociali, mettendo in risalto punti di forza e limiti.\n\nPuò essere intrapreso con diverse motivazioni:\n\n- Per conoscersi meglio\n\n- Per scopi forensi, come ad esempio valutare l\'entità di un danno psichico subito\n\nIn tutti i casi il percorso si struttura in modo simile: il primo step sono 1-2 colloqui di Consulenza, in cui si va ad esplorare la storia della persona e l\'eventuale difficoltà del presente. Seguono poi due incontri, della durata di 1-2 ore ciascuno, in cui sono somministrati i test. Infine, dopo un periodo di tempo medio-breve necessario alla siglatura, interpretazione e stesura di una relazione clinica, si ha un incontro finale di restituzione dei risultati emersi.\n\nQuesto tipo di intervento solitamente è fine a sè stesso e si conclude con la restituzione, ma talvolta può suscitare nella persona la curiosità o l\'esigenza di fare un lavoro più approfondito su di sè. Si può aprire dunque la possibilità di fare una Psicoterapia.',
        },
        {
          title: 'Valutazione DSA in età evolutiva',
          content: 'FIXME: description missing',
        },
      ],
    }
  ),
};
</script>

<style
  lang="scss"
  scoped
>
  .z-services-details {

    width: 100%;
    height: 100%;

    padding: 22px 20px;

    font-size: 22px;
    line-height: 1.8;

    @screen lg {

      width: 75%;
      margin: auto;

      padding: 22px 16px 22px 0;

    }

    @screen xl {

      padding-right: 32px;

    }

    &__title {

      width: 100%;
      padding-bottom: 16px;
      font-size: 26px;
      font-weight: 800;

      color: #372E59;
      border-bottom: 1px solid #372E59;

    }

    &__accordion-container {

      display: flex;
      flex-direction: column;

      width: 100%;

      &__item {

        /* height: 40%;
        width: 40%; */

      }

    }

  }

</style>
