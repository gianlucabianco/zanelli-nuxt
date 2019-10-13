<template>
  <div class="z-contact-form">
    <form name="modulo">
      <div class="z-form-group">
        <label for="name">
          name
        </label>
        <input
          v-model="name"
          :placeholder="name"
          type="text"
          name="name"
        >
      </div>
      <div class="z-form-group">
        <label for="email">
          email
        </label>
        <input
          v-model="email"
          :placeholder="email"
          type="text"
          name="email"
        >
      </div>
      <div class="z-form-group">
        <label for="phone">
          phone
        </label>
        <input
          v-model="phone"
          :placeholder="phone"
          type="text"
          name="phone"
        >
      </div>
      <div class="z-form-group">
        <label for="message">
          message
        </label>
        <textarea
        v-model="message"
        :placeholder="message"
        type="text"
        name="message"
        rows="10"
        cols="30"
        />
      </div>
      <br>
    </form>
    <a
      class="testBnt"
      target="_blank"
      :href="submitLink"
    >
      invia il tuo messaggio!
    </a>
    <div class="">
      {{ name }} {{ email }} {{ phone }} {{ message }} {{ submitLink }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      // submitLink: 'mailto:pi.gs.bianco@gmail.com?Subject=_' + this.name + '_' + this.email + '_' + this.phone + '&Body=' + this.message,
    };
  },
  computed: {
    submitLink() {
      return 'mailto:ciao@gianlucabianco.dev?Subject=_' + this.name + '_' + this.email + '_' + this.phone + '&Body=' + this.message;
    },
  },
  methods: {
    submit() {

    },
  },
}
</script>

<style
  lang="css"
  scoped
>
.testBnt {

  @apply .bg-red-500 .p-4 .my-4;

}
</style>
