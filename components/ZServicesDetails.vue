<template>
  <div class="z-services-details">
    <h2 class="z-services-details__title">SERVIZI OFFERTI</h2>
    <!-- TODO: / FIXME: v-for + data obj -->
    <z-accordion
      title="Consulenza e sostegno psicologico"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto aliquam quae quos dicta, culpa dolore provident expedita recusandae quas quibusdam adipisci repudiandae! Molestias recusandae eius itaque vitae quibusdam perspiciatis?"
    />
    <z-accordion
      title="Psicoterapia individuale"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto aliquam quae quos dicta, culpa dolore provident expedita recusandae quas quibusdam adipisci repudiandae! Molestias recusandae eius itaque vitae quibusdam perspiciatis?"
    />
    <z-accordion
      title="EMDR"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto aliquam quae quos dicta, culpa dolore provident expedita recusandae quas quibusdam adipisci repudiandae! Molestias recusandae eius itaque vitae quibusdam perspiciatis?"
    />
    <z-accordion
      title="Valutazione psicodiagnostica"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto aliquam quae quos dicta, culpa dolore provident expedita recusandae quas quibusdam adipisci repudiandae! Molestias recusandae eius itaque vitae quibusdam perspiciatis?"
    />
    <z-accordion
      title="Valutazione DSA in età evolutiva"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto aliquam quae quos dicta, culpa dolore provident expedita recusandae quas quibusdam adipisci repudiandae! Molestias recusandae eius itaque vitae quibusdam perspiciatis?"
    />
  </div>
</template>

<script>
import ZAccordion from '~/components/ZAccordion.vue';

export default {
  components: {
    ZAccordion,
  },
};
</script>

<style
  lang="scss"
  scoped
>
  .z-services-details {

    width: 100%;
    height: 100%;

    padding: 22px 20px;

    font-size: 22px;
    line-height: 1.8;

    &__title {

      font-size: 26px;
      font-weight: 800;

    }

  }

</style>
