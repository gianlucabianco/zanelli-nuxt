<template>
  <div
    class="z-accordion"
    :class="classes"
  >
    <div
      class="z-accordion__header"
    >
      <h3>{{ title }}</h3>
      <a
        @click.prevent="updateModel( ! model )"
        class="z-accordion__header__icon"
      >
        {{ ! model ? '+' : '-' }}
      </a>
    </div>
    <transition
      name="fade"
    >
      <div
        v-if="model"
        class="z-accordion__header__content"
      >
        {{ content }}
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
    content: {
      type: String,
      required: true,
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

    background-color: red;
    transition: 1s ease-out;

    &--expanded {
      background-color: yellow;

    }

    &__header {

      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 80px;

      &__icon {

        font-size: 30px;
        font-weight: 800;

      }

    }

    .fade-enter,
    .fade-leave-to {

      opacity: 0;
      height: 0;

    }

    .fade-enter-active {

      transition: opacity 2s ease-in;
      transition: height 1.3s ease-in;

    }

    .fade-leave-active {

      transition: opacity 0.66s ease-out;
      transition: height 1.3s ease-out;

    }

  }

</style>
