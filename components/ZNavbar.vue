<template>
  <div class="z-navbar">
    <div class="z-navbar__main">
      <z-hamburger-menu />
      <div class="z-navbar__main--logo">
        <nuxt-link to="/">
          Logo
        </nuxt-link>
      </div>
      <div class="z-navbar__main--title">
        <h2
          class="z-navbar__main--title--name"
        >
          Dott.ssa Francesca Zanelli
        </h2>
        <h1
          class="z-navbar__main--title--job"
        >
          Psicologa - Psicoterapeuta
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import ZHamburgerMenu from '~/components/ZHamburgerMenu.vue'

  export default {
    components: {
      ZHamburgerMenu,
    },
  }
</script>

<style
  lang="scss"
  scoped
>

.z-navbar {

  @apply flex w-full fixed h-20 bg-white z-10;

  &::after {
    content:'';
    width:100%;
    position: absolute;
    left:0;
    bottom:-2px;
    height: 2px;
    background: #333;
    background: -webkit-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
    background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
    background: -ms-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
    background: -o-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,91,91,1) 0%, rgba(214,214,214,1) 100%);
  }

  &__menu,
  &__search {

    @apply flex self-center justify-center w-16 px-2;

  }

  &__main {

    @apply flex w-full relative;

    @screen lg {

      @apply w-3/4 mx-auto;

    }

    &--logo {

      @apply hidden;

      @screen sm {

        @apply flex self-center justify-center w-20;

      }

    }

    &--title {

      @apply flex self-center flex-col px-2;

      @screen sm {

        @apply px-4;

      }

      &--name {

        @media screen and (max-width: 320px) {

          font-size: 1rem;

        }

        @apply text-xl;

      }

      &--job {

        @media screen and (max-width: 320px) {

          font-size: 0.9rem;

        }

        @apply text-base;

      }

    }

  }

}
</style>
