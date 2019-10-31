<template>
  <div
    class="z-layout"
  >
    <z-undelay />

    <z-navbar />

    <div
      class="z-layout__content"
    >
      <!-- FIXME find a better solution for .spacer -->
      <div
        class="z-layout__content__spacer"
      />
      <nuxt/>
    </div>

    <z-contact-form />

    <z-footer />

  </div>
</template>

<script>
import ZNavbar from '~/components/ZNavbar.vue'
import ZMenu from '~/components/ZMenu.vue'
import ZUnderlay from '~/components/ZUnderlay.vue'
import ZContactForm from '~/components/ZContactForm.vue'
import ZFooter from '~/components/ZFooter.vue'
/* import AppLogo for testing purposes. Remove after complete. */
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    ZNavbar,
    ZMenu,
    ZUnderlay,
    ZContactForm,
    ZFooter,
    AppLogo,
  },
}
</script>
<style
  lang="scss"
>

  /* FIXME: SCOPED STYLE ?? */

  /* FIXME: move in common scss */
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .z-layout {

    background-color: #F2F2F2;

    &__content {

      min-height: 400px;

      &__spacer {

        height: 80px;

      }

    }

  }

</style>
