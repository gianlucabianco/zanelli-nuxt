<template>
  <div class="z-menu">
    <z-hamburger-icon
      style="position: fixed; top: 0; right: 0;"
    />
    <ul class="z-menu__content">
      <li
        v-for="(item, index) in firstLeveMenuItems"
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
      firstLeveMenuItems: [
        "COSA FACCIO",
        'COME LAVORO',
        "ANALISI TRANSAZIONALE",
        "LA PSICOTERAPIA",
        "IL MIO STUDIO"
      ],
    };
        },
};
</script>

<style lang="scss">
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
    /*
      padding: 8px 16px;
      margin: 4px 0;
      background-color: rgba(255, 231, 163,0.75);
      */

    &__item {
      font-weight: 800;

      /*
        margin: 4px 0;
        padding: 8px 16px;
        background-color: rgba(255, 231, 163,0.75);
        */
    }
  }
}
</style>
