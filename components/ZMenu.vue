<template>
  <div class="z-menu"> <!-- FIXME: add BEM modifier to change the BG color-->
    <z-hamburger-icon
      style="position: fixed; top: 0; right: 0;"
    />
    <ul class="z-menu__content">
      <li
        v-for="(item, index) in defaultItems"
        :key="index"
        class="z-menu__content__item"
      >
        <a
          class="z-menu__content__item__anchor"
          style="color: black; font-size: 26px; z-index: 90;"
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
        'COSA FACCIO',
        'COME LAVORO',
        'ANALISI TRANSAZIONALE',
        'LA PSICOTERAPIA',
        'IL MIO STUDIO'
      ],
      defaultItems: [
        'COSA FACCIO',
        'COME LAVORO',
        'ANALISI TRANSAZIONALE',
        'LA PSICOTERAPIA',
        'IL MIO STUDIO'
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
  background-color: #e2e8f0;
  z-index: 80;
  overflow: hidden;
  text-align: center;

  &__content {

    padding: 8px 16px;
    margin: 4px 0;
    // background-color: rgba(255, 231, 163,0.75);

    &__item {

      margin: 4px 0;
      padding: 8px 16px;

      color: #372e59;
      font-weight: 800;
      border-bottom: 1px solid #372e59;
      // background-color: rgba(255, 231, 163,0.75);

    }

  }

}
</style>
