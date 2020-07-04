<template>
  <div
    class="z-services-details"
  >
    <h3
      class="z-services-details__header"
    >
      Servizi offerti
    </h3>
    <div
      class="z-services-details__content"
    >
      <div
        v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
        :key="index"
        class="z-services-details__content__card-container"
      >
        <div
          class="z-services-details__content__card-container__overlay"
        >
          <!-- FIXME: TITLE -->
        </div>
      </div>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
>

.z-services-details {

  height: 100%;
  width: 100%;

  padding: 40px 20px;

  font-size: 22px;
  line-height: 1.8;

  @screen lg {

    display: flex;
    flex-direction: column;

    width: 75%;

    margin: auto;
    padding: 20px 0;

  }

  &__header {

    padding: 20px;
    font-size: 36px;
    font-weight: bold;
    text-decoration: underline;

    @screen sm {

      font-size: 42px;

    }

  }

  &__content {

    max-width: 100%;
    display: flex;
    flex-wrap: wrap;

    &__card-container {

      width: calc(100% - 16px);
      margin: 32px 0;

      position: relative;

      background: url('https://picsum.photos/id/1029/1200/1200') no-repeat center;
      background-size: cover;

      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }

      @screen md {

        width: calc(50% - 40px);
        margin-right: 40px;

      }

      @media (min-width: 1800px) {

        width: calc(33% - 40px);
        margin-right: 40px;

      }

      &__overlay {

        width: 100%;
        height: 100%;

        transition: 0.5s ease-in-out;

        &:hover {

          background-color: rgba(83, 92, 139, 0.6);

        }

      }

    }

  }

}

</style>
