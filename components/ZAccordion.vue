<template>
  <div
    class="z-accordion"
    :class="classes"
  >
    <div
      class="z-accordion__header"
      @click="updateModel( ! model )"
    >
      <h3 class="z-accordion__header__title">{{ title }}</h3>
      <span
        class="z-accordion__header__icon"
      >
        {{ ! model ? '+' : '-' }}
      </span>
    </div>
    <transition
      name="fade"
    >
      <div
        v-if="model"
        class="z-accordion__content"
      >
        <!-- @slot Use this slot to place the default content -->
        <slot
          v-if="singleText"
        >
          {{ singleText }}
        </slot>

        <!-- @slot Use this slot to place the multiParagraph content -->
        <slot
          v-if="multiParagraph.length"
          name="multi-paragraph"
        >
          <p
            v-for="(paragraph, index) in multiParagraph"
            :key="`${paragraph}-${index + 1}`"
            class="z-accordion__content__paragraph"
          >
            {{ paragraph }}
          </p>
        </slot>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    singleText: {
      type: String,
      default: '',
    },
    multiParagraph: {
      type: Array,
      default: () => [],
    },
  },
  data() {

    return {

      model: this.value,

    };

  },
  computed: {
    classes() {

      return {
        'z-accordion--expanded': this.model,
      };

    },
  },
  watch: {
    value: {
      handler: 'updateModel',
    },
  },
  methods: {
    updateModel(
      forcedValue = ! this.model
    ) {

      this.model = typeof forcedValue !== 'undefined' ? forcedValue : false;

      this.$emit(
        'input',
        this.model
      );

    },
  },
}
</script>

<style
  lang="scss"
  scoped
>
  .z-accordion {

    padding: 16px 0;
    border-bottom: 1px solid #372E59;
    transition: 0.66s ease-in;
    color: #372E59;

    &__header {

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;

      height: 80px;
      line-height: 1.3;

      &__title {

        font-size: 26px;
        font-weight: 800;

      }

      &__icon {

        padding: 0 8px;
        font-size: 30px;

      }

    }

    &__content {

      padding: 8px 0 16px 0;

      &__paragraph {

        padding-bottom: 16px;

      }

    }

    .fade-enter,
    .fade-leave-to {

      opacity: 0;

    }

    .fade-enter-active {

      transition: opacity 0.66s ease-in;

    }

  }

</style>
