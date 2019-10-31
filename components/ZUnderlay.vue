<template>
  <div
    class="z-underlay"
  >
    this is a test
  </div>
</template>

<style
  lang="scss"
>
  .z-underlay {

    position: fixed;
    top: 60px;
    left: 50%;
    /* top: 50%;
    left: 50%; */

    /* transform: translate(-100%, -100%); */

    height: 50px;
    width: 50px;

    border-radius: 100%;

    @apply bg-black z-30;

  }

</style>
