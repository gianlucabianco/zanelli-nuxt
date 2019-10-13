<template>
  <div
    style="background-color: gray;"
  >
    <z-navbar />

    <div
      class="content"
    >
      <!-- FIXME find a better solution for .spacer -->
      <div
        class="spacer"
        style="height: 80px;"
      />
      <nuxt/>
    </div>

    <z-contact-form />

    <z-footer />

  </div>
</template>

<script>
import ZNavbar from '~/components/ZNavbar.vue'
import ZContactForm from '~/components/ZContactForm.vue'
import ZFooter from '~/components/ZFooter.vue'
/* import AppLogo for testing purposes. Remove after complete. */
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    ZNavbar,
    ZContactForm,
    ZFooter,
    AppLogo,
  },
}
</script>

<style>

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
    box-sizing: border-box;
    margin: 0;
  }

</style>
