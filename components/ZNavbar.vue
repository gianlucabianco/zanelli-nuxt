<template>
  <div class="z-navbar">
    <div
      class="z-navbar__menu"
    >
      <a href="#">
        Menu
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

      @apply flex w-full fixed h-20 bg-red-200 z-10;

      &__menu,
      &__search {

        @apply flex self-center justify-center w-16 bg-blue-200 px-2;

      }

      &__main {

        @apply flex bg-yellow-200 w-full;

        &--logo {

          @apply hidden;

          @screen sm {

            @apply flex self-center justify-center w-20 bg-green-200;

          }

        }

        &--title {

          @apply flex self-center flex-col px-2;

          @screen sm {

            @apply px-4;

          }

          &--name {

            @apply text-xl;

          }

          &--job {

            @apply text-base;

          }

        }

      }

    }
</style>
