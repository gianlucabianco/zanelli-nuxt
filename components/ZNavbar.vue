<template>
  <div class="z-navbar">
    <div
      class="z-navbar__menu"
    >
      <a href="#">
        <svg enable-background="new 0 0 512 512" height="72px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="72px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10" x1="196" x2="316" y1="202.4" y2="202.4"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10" x1="196" x2="316" y1="256" y2="256"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10" x1="196" x2="316" y1="309.6" y2="309.6"/></g></svg>
      </a>
    </div>
    <div class="z-navbar__main">
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
          Psicologo - Psicoterapeuta
        </h1>
      </div>
    </div>
    <div
      class="z-navbar__search"
    >
      <a href="#">
        S
      </a>
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>

.z-navbar {

      border: 1px solid #F2F2F2;
      @apply flex w-full fixed h-20 bg-white z-10;

      &__menu,
      &__search {

        @apply flex self-center justify-center w-16 px-2;

      }

      &__main {

        @apply flex w-full;

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
