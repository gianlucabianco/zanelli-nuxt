<template>
  <div
    class="z-menu"
    :class="backgroundClasses"
  >
    <div
      class="z-menu__btns-wrapper"
    >
      <div
        v-if="menuLevel !== 0"
        class="z-menu__btns-wrapper__icon z-menu__btns-wrapper__icon--go-back"
        :class="menuLevel === 2 ? 'z-menu__btns-wrapper__icon--go-back--second-level' : null"
        @click="goBack"
      >
        &#60;
      </div>
      <z-hamburger-icon
        v-else
        class="z-menu__btns-wrapper__icon"
        @click.native="resetMenu"
      />
    </div>
    <ul class="z-menu__content">
      <!-- FIXME: for approachItems max-height: 400px -->
      <li
        v-for="(item, index) in currentItems"
        :key="index"
        class="z-menu__content__item"
        :class="itemClasses"
      >
        <a
          v-if="item.hasLink"
          class="z-menu__content__item__anchor"
          @click="testLog('go to link! + FIXME: resetMenu + FIXME: $store.CLOSE_MENU')"
        >
          {{ item.text }}
        </a>
        <a
          v-else
          class="z-menu__content__item__anchor"
          @click.prevent="changeMenuLayer(item.goTo, item.parentMenu)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ZHamburgerIcon from "~/components/ZHamburgerIcon.vue";

export default {
  components: {
    ZHamburgerIcon,
  },
  data() {
    return {
      currentItems: [
        {
          hasLink: true,
          text: 'CHI SONO',
        },
        {
          hasLink: false,
          text: 'SERVIZI OFFERTI',
          goTo: 'servicesItems',
        },
        {
          hasLink: false,
          text: 'COME LAVORO',
          goTo: 'approachItems',
        },
        {
          hasLink: false,
          text: 'L\'ANALISI TRANSAZIONALE',
          goTo: 'transactionalAnalysisItems',
        },
        {
          hasLink: false,
          text: 'LA PSICOTERAPIA',
          goTo: 'therapyItems',
        },
        {
          hasLink: true,
          text: 'IL MIO STUDIO',
        },
        {
          hasLink: true,
          text: 'CONTATTI',
        },
        {
          hasLink: true,
          text: 'BLOG',
        },
      ],
      defaultItems: [
        {
          hasLink: true,
          text: 'CHI SONO',
        },
        {
          hasLink: false,
          text: 'SERVIZI OFFERTI',
          goTo: 'servicesItems',
        },
        {
          hasLink: false,
          text: 'COME LAVORO',
          goTo: 'approachItems',
        },
        {
          hasLink: false,
          text: 'L\'ANALISI TRANSAZIONALE',
          goTo: 'transactionalAnalysisItems',
        },
        {
          hasLink: false,
          text: 'LA PSICOTERAPIA',
          goTo: 'therapyItems',
        },
        {
          hasLink: true,
          text: 'IL MIO STUDIO',
        },
        {
          hasLink: true,
          text: 'CONTATTI',
        },
        {
          hasLink: true,
          text: 'BLOG',
        },
      ],
      servicesItems: [
        {
          hasLink: true,
          text: 'CONSULENZA E SOSTEGNO PSICOLOGICO',
        },
        {
          hasLink: true,
          text: 'PSICOTERAPIA INDIVIDUALE',
        },
        {
          hasLink: true,
          text: 'EMDR',
        },
        {
          hasLink: true,
          text: 'VALUTAZIONE PSICODIAGNOSTICA',
        },
        {
          hasLink: true,
          text: 'VALUTAZIONE DSA IN ETA\' EVOLUTIVA',
        },
      ],
      approachItems: [
        {
          hasLink: true,
          text: 'IL MIO APPROCCIO',
        },
        {
          hasLink: true,
          text: 'I MIEI VALORI',
        },
      ],
      transactionalAnalysisItems: [
        {
          hasLink: true,
          text: 'CHE COS\'E\' L\'ANALISI TRANSAZIONALE',
        },
        {
          hasLink: true,
          text: 'IL MODELLO DEGLI STATI DELL\'IO',
        },
        {
          hasLink: true,
          text: 'LA COMUNICAZIONE IN AT',
        },
        {
          hasLink: true,
          text: 'LE CAREZZE',
        },
        {
          hasLink: true,
          text: 'LE SVALUTAZIONI',
        },
        {
          hasLink: false,
          text: 'IL COPIONE',
          goTo: 'atScriptItems',
          parentMenu: 'transactionalAnalysisItems',
        },
        {
          hasLink: true,
          text: 'EMOZIONI AUTENTICHE E PARASSITE',
        },
        {
          hasLink: true,
          text: 'I GIOCHI PSICOLOGICI',
        },
      ],
      therapyItems: [
        {
          hasLink: true,
          text: 'CHE COS\'E\' LA PSICOTERAPIA',
        },
        {
          hasLink: true,
          text: 'COME OTTENERE IL MASSIMO DALLA PSICOTERAPIA',
        },
        {
          hasLink: true,
          text: 'PERCHE\' LA PSICOTERAPIA FUNZIONA',
        },
        {
          hasLink: true,
          text: 'COME SCEGLIERE IL TERAPEUTA GIUSTO',
        },
      ],
      atScriptItems: [
        {
          hasLink: true,
          text: 'IL COPIONE IN ETA\' ADULTA',
        },
        {
          hasLink: true,
          text: 'I MESSAGGI GENITORIALI:\nLE INGIUNZIONI',
        },
        {
          hasLink: true,
          text: 'I MESSAGGI GENITORIALI:\nLE SPINTE',
        },
      ],
      menuLevel: 0,
      parentMenu: 'defaultItems',
    };
  },
  computed: {
    backgroundClasses() {

      return {
          'z-menu--bg-default': this.menuLevel === 0,
          'z-menu--bg-first': this.menuLevel === 1,
          'z-menu--bg-second': this.menuLevel === 2,
      };

    },
    itemClasses() {

      return {
          'z-menu__content__item--color-default': this.menuLevel === 0,
          'z-menu__content__item--color-first': this.menuLevel === 1,
          'z-menu__content__item--color-second': this.menuLevel === 2,
      };

    },
  },
  methods: {
    testLog(args) {
      console.log(args);
    },
    changeMenuLayer(
      subMenu,
      parentMenu = this.parentMenu
    ) {

      this.currentItems = this[`${subMenu}`];

      this.parentMenu = parentMenu;

      this.menuLevel++;

    },
    goBack() {

      this.currentItems = this[this.parentMenu];

      this.parentMenu = 'defaultItems';

      this.menuLevel--;

    },
    resetMenu() {

      this.currentItems = this.defaultItems;

      this.parentMenu = 'defaultItems';

      this.menuLevel = 0;

    },
  },
};
</script>

<style lang="scss" scoped>
.z-menu {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  z-index: 80;
  transition: 0.66s ease-out;

  &--bg-default {

    background-color: #e2e8f0;

  }

  &--bg-first {

    background-color: #372E59;

  }

  &--bg-second {

    background-color: #F7D2BF;

  }

  &__btns-wrapper {

    position: fixed;
    top: 0;

    display: flex;
    justify-content: flex-end;

    width: 100%;

    @screen lg {

      @apply w-3/4 mx-auto;

    }

    &__icon {

      &--go-back {

        padding: 0 16px 8px 16px;

        font-size: 40px;
        color: #d8d8de;

        &--second-level {

          color: #261c46;

        }

      }

    }

  }

  &__content {

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    // TODO: BEM modifiers for short sub-menus
    // max-height: 800px;

    padding: 64px 16px 32px 16px;
    margin: 4px 0;

    &__item {

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 4px 0;
      padding: 8px 16px;

      font-weight: 800;

      &:first-child {

        z-index: 100;

      }

      &:last-child {

        border: none;

      }

      &__anchor {

        font-size: 20px;

        @screen lg {

          font-size: 26px;

        }

      }

      &--color-default {

        color: #372e59;
        border-bottom: 1px solid #382580;

      }

      &--color-first {

        color: #d8d8de;
        border-bottom: 1px solid #d8d8de;

      }

      &--color-second {

        color: #372e59;
        border-bottom: 1px solid #382580;

      }

    }

  }

}
</style>
