<template>
  <div class="z-menu"> <!-- FIXME: add BEM modifier to change the BG color-->
    <div
      class="z-menu__btns-wrapper"
    >
      <!-- FIXME: BL for back btn -->
      <div
        class="z-menu__go-back"
      >
        &#60;
      </div>
      <z-hamburger-icon />
    </div>
    <ul class="z-menu__content">
      <li
        v-for="(item, index) in defaultItems"
        :key="index"
        class="z-menu__content__item"
      >
        <a
          class="z-menu__content__item__anchor"
        >
          {{ item }}
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
        'CHI SONO',
        'SERVIZI OFFERTI',
        'COME LAVORO',
        'L\'ANALISI TRANSAZIONALE',
        'LA PSICOTERAPIA',
        'IL MIO STUDIO',
        'CONTATTI',
        'BLOG'
      ],
      defaultItems: [
        'CHI SONO',
        'SERVIZI OFFERTI',
        'COME LAVORO',
        'L\'ANALISI TRANSAZIONALE',
        'LA PSICOTERAPIA',
        'IL MIO STUDIO',
        'CONTATTI',
        'BLOG'
      ],
      servicesItems: [
        'CONSULENZA PSICOLOGICA',
        'SOSTEGNO PSICOLOGICO',
        'PSICOTERAPIA',
        'VALUTAZIONE PSICODIAGNOSTICA',
        'TEST PSICOLOGICI',
        'EMDR',
        'VALUTAZIONE DSA IN ETA\' EVOLUTIVA',
      ],
    };
  },
  methods: {
    testLog(args) {
      console.log({args});
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
  background-color: #e2e8f0;
  overflow: hidden;
  z-index: 80;

  &__btns-wrapper {

    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;

    width: 100%;

    @screen lg {

      @apply w-3/4 mx-auto;

    }

  }

  &__go-back {

    padding: 8px 16px;

    font-size: 40px;
    color: #d8d8de;

  }

  &__content {

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    max-height: 650px;

    padding: 8px 16px;
    margin: 4px 0;

    &__item {

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 4px 0;
      padding: 8px 16px;

      color: #372e59;
      font-weight: 800;
      border-bottom: 1px solid #382580;

      &:last-child {

        border: none;

      }

      &__anchor {

        font-size: 26px;

      }

    }

  }

}
</style>
