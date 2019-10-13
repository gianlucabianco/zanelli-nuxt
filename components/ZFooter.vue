<template>
  <div class="z-footer">
    <span class="z-footer__content">
      Copyright Dott.ssa Francesca Zanelli - Via Milani, 24 - 40026 Imola (BO) - C.F. ZNLFNC87M70C265P - P.IVA 03504591201 - Ordine degli Psicologi dell'Emilia Romagna n. 7672 - <nuxt-link to="/">Privacy Policy</nuxt-link> - Design and concept by <a href="https://gianlucabianco.dev/">gianlucabianco.dev</a>
    </span>
  </div>
</template>

<style
  lang="scss"
  scoped
>

.z-footer {

  min-height: 80px;

  @apply .flex .items-center .justify-center .w-full .flex .text-xs .bg-red-500 .py-4 .px-4;

  &__content {

    @apply .text-center .leading-loose	;

  }

}
</style>
