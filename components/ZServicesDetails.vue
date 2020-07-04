<template>
  <div
    class="z-services-details"
  >
    <h3
      class="z-services-details__header"
    >
      Servizi offerti
    </h3>
    <div
      class="z-services-details__content"
    >
      <div
        v-for="(item, index) in services"
        :key="index"
        class="z-services-details__content__card-container"
        :class="`z-services-details__content__card-container__${index + 1}`"
        @click="openModal( item.paragraphs)"
      >
        <div
          class="z-services-details__content__card-container__overlay"
        >
          <div
            class="z-services-details__content__card-container__overlay__cta"
          >
            SCOPRI DI PIÚ
          </div>
        </div>
        <span
          class="z-services-details__content__card-container__title"
        >
          {{ item.title }}
        </span>
      </div>
    </div>
    <div
      class="z-services-details__modal"
      v-if="isModalOpen"
    >
      <div>
        <p
          v-for="(paragraph, index) in modalContent"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
      <div
        class="z-services-details__modal__close-icon"
        @click="closeModal"
      >
        x
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => (
    {
      services: [
        {
          title: 'CONSULENZA PSICOLOGICA',
          paragraphs: [
            'La consulenza è un tipo di intervento breve e limitato nel tempo, in cui lo scopo è aiutare la persona a definire un problema personale, rispetto al quale si sente confusa o sente di faticare a trovare soluzioni. L\'obiettivo è fornire elementi ed indicazioni utili a fare chiarezza su ciò che sta succedendo e sulle opzioni disponibili.',
            'A volte la consulenza è sufficiente per la persona, fornendo una visione più chiara e realistica di sè e del problema e permettendo di affrontarlo con successo.',
            'Altre volte è il primo step, fondamentale, per intraprendere un percorso più approfondito, come una psicoterapia.'
          ],
        },
        {
          title: 'SOSTEGNO PSICOLOGICO',
          paragraphs: ['È un tipo di intervento a cadenza bisettimanale o mensile, in cui la persona ha uno spazio per esprimersi e ricevere ascolto e accoglimento rispetto ad una problematica, ma senza che ci sia l\'obiettivo di produrre un cambiamento di sè.'],
        },
        {
          title: 'PSICOTERAPIA INDIVIDUALE',
          paragraphs: [
            'La psicoterapia è un percorso di durata indefinita, che la persona intraprende con lo scopo di attivare un cambiamento di sè.',
            'È tipicamente a cadenza settimanale, con incontri della durata di un\'ora.',
            'Il punto di partenza è sempre una fase di Consulenza, della durata di 3-5 sedute in cui si va a delineare il problema presente, la storia della persona e si definiscono gli obiettivi del cambiamento desiderato.',
            'Quando la persona è in un momento di crisi e difficoltà, tendenzialmente l\'obiettivo sarà quello di sentirsi meglio, andando ad eliminare il sintomo del malessere e raggiungendo uno stato di equilibrio. Il focus del lavoro sarà dunque sul problema specifico, con l\'obiettivo di produrre un cambiamento comportamentale.',
            'Altre volte non si sente di avere un problema vero e proprio, ma si sente il desiderio di conoscersi meglio, di esplorare sè stessi, di mettere ordine nella propria mente. Anche per questo è consigliato intraprendere un percorso di Psicoterapia, con lo scopo di favorire una crescita personale, che permetta alla persona di andare nella direzione dell\'autonomia (intesa come insieme di consapevolezza, sopntaneità ed intimità).',
            'Spesso, questa è anche la naturale evoluzione di una terapia che parte da un problema: a volte risolvere la difficoltà può essere sufficiente per la persona, ma spesso apre le porte al desiderio di fare un viaggio più approprofondito dentro sè stessi per ottenere qualcosa di più.',
            'Citando Beisser "Il cambiamento avviene quando una persona diventa ciò che è, non quando cerca di diventare ciò che non è".'
          ],
        },
        {
          title: 'EMDR',
          paragraphs: [
            'L\'acronimo EMDR sta per "Desensibilizzazione e rielaborazione tramite i movimenti oculari".',
            'È una tecnica psicoterapeutica molto strutturata che facilita il trattamento di problematiche correlate allo stress traumatico, sia conseguente a veri e propri eventi traumatici, sia ad esperienze più comuni vissute come emotivamente stressanti. L\'EMDR utilizza i movimenti oculari (o altre forme di stimolazione alternata destro/sinistra) in associazione alla focalizzazione sul ricordo dell\'esperienza traumatica. La psicologa americana Francine Shapiro, inventrice del metodo, scoprì infatti che i movimenti oculari alternati riducevano l\'intensità dei pensieri negativi disturbanti.',
            'La base teorica dell\'EMDR è l\'approccio AIP (modello di elaborazione adattiva dell\'informazione), secondo cui gli eventi traumatici sono immagazzinati in memoria insieme alle emozioni, percezioni, cognizioni e sensazioni fisiche disturbanti che hanno caratterizzato quel dato momento. Tutte queste informazioni restano come “congelate” nelle reti cerebrali in modo disfunzionale: questo non ne permette l\'elaborazione e continua a provocare malessere nella persona e, in molti casi, patologie come il disturbo post-traumatico da stress. Gli avvenimenti più dolorosi lasciano infatti profonde cicatrici anche a livello cerebrale, facendo sì che molte persone continuino a soffrire di grande disagio anche dopo decenni dall\'evento scatenante. I movimenti oculari dell\'EMDR (simili a quelli del sonno REM, quindi del tutto naturali) riattivano la capacità di autoguarigione del cervello, che trova così le risorse per metabolizzare l\'evento traumatico. Dalle numerose ricerche evidence-based, che si sono servite di strumenti come la fMRI, è emerso che dopo le sedute EMDR si osserva uno spostamento significativo dell\'attività elettrica dalle aree cerebrali visive alle regioni cerebrali frontali e temporo-parietali. Dunque, l\'elaborazione del trauma si muove da aree che sono collegate ad un ricordo visivo, emotivo e intenso (associato a vissuti di paura e terrore destabilizzanti), ad aree deputate ad un ruolo cognitivo e associativo: in questo modo i ricordi legati al trauma ne sono ridimensionati, così come le emozioni negative ad esso collegate. Dopo il lavoro, le persone ricordano i fatti legati all\'evento traumatico, ma sentono maggiore distacco emotivo, sentendolo parte del passato: riescono dunque a vedere l\'evento disturbante e sé stessi da una nuova prospettiva.',
            'Attraverso un protocollo strutturato, il terapeuta guida il paziente nella descrizione dell\'evento traumatico, aiutandolo a scegliere gli elementi che ha vissuto come più disturbanti. La fase di rielaborazione successiva può essere descritta, metaforicamente, come una corsa in treno, in cui ad ogni fermata scende materiale negativo e salgono nuove associazioni positive. Dunque, i ricordi disturbanti legati al trauma hanno una desensibilizzazione, cioè perdono la loro carica emotiva negativa: i pensieri intrusivi si attutiscono o spariscono, le emozioni e le sensazioni fisiche si riducono nell\'intensità. Segue una ristrutturazione cognitiva, in cui il paziente ha l\'opportunità di cambiare prospettiva, riformulando una serie di convinzioni negative su di sé originatesi come conseguenza del trauma. Questo permette di ricalibrare l\'intensità emotiva del trauma e di adottare comportamenti più adattivi anche in futuro.',
            'Dal 2013 l\'EMDR è riconosciuto dall\'Organizzazione Mondiale della Sanità come trattamento efficace per la cura dei traumi e dei disturbi ad esso correlati. È approvato come metodo evidence-base anche dall\'American Psychological Association (2002), dall\'International Society for Stress Studies (2010) e dal nostro Ministero della Salute (2003).'
          ],
        },
        {
          title: 'VALUTAZIONE PSICO DIAGNOSTICA',
          paragraphs: [
            'È un percorso della durata di 3-5 incontri in cui lo scopo è una analisi approfondita della propria personalità, nei suoi aspetti cognitivi, emotivi e sociali, mettendo in risalto punti di forza e limiti.',
            'Può essere intrapreso con diverse motivazioni:',
            '- Per conoscersi meglio',
            '- Per scopi forensi, come ad esempio valutare l\'entità di un danno psichico subito',
            'In tutti i casi il percorso si struttura in modo simile: il primo step sono 1-2 colloqui di Consulenza, in cui si va ad esplorare la storia della persona e l\'eventuale difficoltà del presente. Seguono poi due incontri, della durata di 1-2 ore ciascuno, in cui sono somministrati i test. Infine, dopo un periodo di tempo medio-breve necessario alla siglatura, interpretazione e stesura di una relazione clinica, si ha un incontro finale di restituzione dei risultati emersi.',
            'Questo tipo di intervento solitamente è fine a sè stesso e si conclude con la restituzione, ma talvolta può suscitare nella persona la curiosità o l\'esigenza di fare un lavoro più approfondito su di sè. Si può aprire dunque la possibilità di fare una Psicoterapia.'
          ],
        },
        {
          title: 'VALUTAZIONE DSA IN ETÀ EVOLUTIVA',
           paragraphs: [
             'I Disturbi Specifici dell\'Apprendimento (DSA) sono disturbi evolutivi che emergono nel corso dell\'apprendimento scolastico. Essi riguardano l\'inadeguata acquisizione:',
             '- delle abilità di lettura, nel caso della Dislessia',
             '- delle competenze ortografiche di scrittura, nella Disortografia',
             '- delle capacità di calcolo, nella Discalculia.',
             'Per DSA si intende, dunque, l\'alterazione di una o più di queste funzioni, che risultano significativamente compromesse rispetto alla media dei coetanei.',
             'È importante sottolineare che il funzionamento intellettivo globale del bambino rimane intatto. La diagnosi di DSA è attuabile solo una volta terminato il processo di insegnamento delle abilità di lettura e scrittura (alla fine della seconda classe della scuola primaria) e di calcolo (fine della terza classe). È importante saperlo, perché un\'anticipazione eccessiva della diagnosi aumenta esponenzialmente il rischio di falsi positivi. I DSA si presentano frequentemente in associazione, come evidenziato da uno studio di Bindelli et al. (2009): il 74% dei dislessici presenta un disturbo disortografico e il 58% presenta difficoltà specifi che di calcolo.',
             'Perché una valutazione DSA?',
             'Il percorso diagnostico è il primo passo per aiutare un bambino/ragazzo che manifesta difficoltà scolastiche. Esso implica l\'utilizzo di test standardizzati, che permettono di capire il profilo di funzionamento cognitivo e di quantificare determinate capacità attese in relazione ad età e scolarità. Questo ci aiuta a comprendere l\'origine delle difficoltà, ma anhe i punti di forza. A partire da questo, può essere necessario fare altri approfondimenti specifici. È un processo che richiede molto lavoro e impegno, sia da parte degli operatori che da parte del bambino. Comprendere il quadro consente di attivare tutta una serie di misure, se necessarie, per gestire nel modo più efficace ed efficiente i problemi che possono presentarsi a scuola e/o in altri contesti. Queste misure consistono sia in strumenti compensativi, sia in interventi di potenziamento e riabilitazione. Ogni bambino è unico e speciale nelle sue caratteristiche, per cui necessita di un intervento personalizzato.',
             'Cosa propongo:',
             'Il servizio di valutazione DSA si svolge presso L\'Isolachenonc\'è, in Via dell\'Industria 52 a Castel Bolognese, in collaborazione con le Logopediste Dott.ssa Martina Casamenti e Dott.ssa Letizia Garavini. È una proposta rivolta a bambini e ragazzi dai 7 ai 15 anni. Il percorso diagnostico si articola in questo modo:',
             '1. Incontro conoscitivo con i genitori (1 ora/1 ora e mezza), in cui ci confrontiamo sul problema del figlio e raccogliamo informazioni rilevanti sulla sua storia clinica, rispondendo a dubbi eventuali.',
             '2. Due incontri di Valutazione Cognitiva con la psicologa (2 ore ciascuno): dopo un primo momento di incontro e conoscenza, si procede con l\'indagine, attraverso uno strumento strutturato, le varie aree relative al funzionamento intellettivo (attenzione, linguaggio, memoria, ragionamento…). Questo è il lavoro preliminare per indirizzare sui punti di forza e di debolezza su cui impostare i successivi approfodimenti.',
             '3. Quattro o più incontri con la logopedista (1 ora ciascuno) di approfondimento sulle specifiche difficoltà di apprendimento del bambino.',
             '4. Inontro finale di restituzione con i genitori (2 ore): si fornisce il resoconto di quanto emerso, corredato di relazione scritta e si forniscono indicazioni per un eventuale trattamento personalizzato sulle specifiche difficoltà emerse e suggerimenti su come approcciarsi con esse.',
             'Per cominciare il percorso e prendere appuntamento, contattare:',
             'Dott.ssa Martina Casamenti 328/2289852',
             'Dott.ssa Letizia Garavini 346/4243092',
           ],
        },
      ],
      isModalOpen: false,
      modalContent: [],
    }
  ),
  methods: {
    openModal(
      content
    ) {

        this.isModalOpen = true;
        this.modalContent = content;

    },
    closeModal() {

      this.isModalOpen = false;
      this.modalContent = [];

    },
  },
};
</script>

<style
  scoped
  lang="scss"
>

.z-services-details {

  height: 100%;
  width: 100%;

  padding: 40px 20px;

  font-size: 22px;
  line-height: 1.8;

  @screen lg {

    display: flex;
    flex-direction: column;

    width: 75%;

    margin: auto;
    padding: 20px 0;

  }

  &__header {

    padding: 0 8px 20px 8px;
    font-size: 36px;
    font-weight: bold;
    text-decoration: underline;

    @screen sm {

      padding: 20px 0 52px 0;
      font-size: 42px;

    }

    @screen xl {

      padding-bottom: 80px;
      font-size: 56px;

    }

  }

  &__content {

    max-width: 100%;
    display: flex;
    flex-wrap: wrap;

    &__card-container {

      width: calc(100% - 16px);
      margin: 32px 0;

      position: relative;

      &__1 {

        background: url('https://picsum.photos/id/1014/1200/1200') no-repeat center;
        background-size: cover;

      }

      &__2 {

        background: url('https://picsum.photos/id/1012/1200/1200') no-repeat center;
        background-size: cover;

      }

      &__3 {

        background: url('https://picsum.photos/id/22/1200/1200') no-repeat center;
        background-size: cover;

      }

      &__4 {

        background: url('https://picsum.photos/id/133/1200/1200') no-repeat center;
        background-size: cover;

      }

      &__5 {

        background: url('https://picsum.photos/id/228/1200/1200') no-repeat center;
        background-size: cover;

      }

      &__6 {

        background: url('https://picsum.photos/id/24/1200/1200') no-repeat center;
        background-size: cover;

      }

      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }

      @screen md {

        width: calc(50% - 40px);
        margin-right: 40px;

      }

      @media (min-width: 1800px) {

        width: calc(33% - 40px);
        margin-right: 40px;

      }

      &__overlay {

        width: 100%;
        height: 100%;

        transition: 0.5s ease-in-out;

        position: relative;

        &:hover {

          background-color: rgba(83, 92, 139, 0.6);

        }

        &__cta {

          position: absolute;
          right: 24px;
          bottom: 24px;

          font-size: 22px;
          padding: 4px 20px;


          color: #dedede;
          background-color: rgba(83, 92, 139, 0.6);

          @media (min-width: 1800px) {

            font-size: 28px;
            padding: 4px 20px;

          }

        }

      }

      &__title {

        position: absolute;
        top: -20px;
        left: 16px;

        font-size: 32px;
        font-weight: 600;
        line-height: 0.96;

        color: #372E59;

        @screen md {

          font-size: 38px;

        }

        @screen xl {

          top: -32px;
          font-size: 56px;

        }

      }

    }

  }

  &__modal {

    height: 100vh;
    width: 100vw;

    padding: 60px 40px 60px 40px;

    position: fixed;
    top: 0;
    left: 0;

    font-size: 20px;

    color: black;
    background-color: #bad9c5;

    overflow-y: scroll;

    z-index: 90;

    &__close-icon {

      height: 60px;
      width: 60px;

      position: fixed;
      top: 0;
      right: 0;

      margin-right: 8px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 40px;

      color: #516959;

      z-index: 100;

    }

  }

}

</style>
