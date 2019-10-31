<template>
  <div
    class="z-menu"
  >
    <a
      class="z-menu__button"
    >
      menu
    </a>
  </div>
</template>

<style
  lang="scss"
>
  .z-menu {

    /* FIXME: add margins to bb */
    border-bottom: 2px solid black;
    transition: 0.5s ease-in-out;

    @apply absolute right-0 flex self-center mr-6 py-1 px-3 cursor-pointer;

    &:hover {

      @apply bg-black text-white;

    }

  }
</style>
