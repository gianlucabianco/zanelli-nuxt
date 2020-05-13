<template>
  <div
    id="contact-form"
    class="z-contact-form">
    <form class="z-contact-form__module">
      <div class="z-contact-form__module--description">
        <h3>
          CONTATTI
        </h3>
        <p>
          Si riceve su appuntamento in Via Milani, 24 - 40026 Imola (BO).
        </p>
        <p>
          Per richiedere informazioni è possibile chiamare il 348 729 31 58
          oppure scrivere all'indirizzo info@francescazanelli.it
        </p>
        <p>
          E' possibile inviare una mail utilizzando direttamente il seguente form.
        </p>
      </div>
      <div class="z-contact-form__module__form-group">
        <Label>Nome e cognome
          <input
            v-model="name"
            placeholder="Nome e Congome"
            type="text"
            name="name"
            class="z-contact-form__module__form-group--input"
          >
        </Label>
      </div>
      <div class="z-contact-form__module__form-group">
        <Label>Telefono
          <input
            v-model="phone"
            placeholder="Telefono"
            type="text"
            name="phone"
            class="z-contact-form__module__form-group--input"
          >
        </Label>
      </div>
      <div class="z-contact-form__module__form-group">
        <Label>Messaggio
          <textarea
            v-model="message"
            placeholder="Messaggio"
            type="text"
            name="message"
            rows="10"
            cols="30"
            class="z-contact-form__module__form-group--input"
          />
        </Label>
      </div>
      <a
        :href="submitLink"
        class="z-contact-form__module--btn"
        target="_blank"
      >
        INVIA
      </a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  },
  computed: {
    filteredName() {

                if( this.name ) return this.name.split( " " ).join( "%20" );

      return this.name;
    },
    filteredEmail() {

                if( this.email ) return this.email.split( " " ).join( "%20" );

      return this.email;
            },
    filteredPhone() {

                if( this.phone ) return this.phone.split( " " ).join( "%20" );

      return this.phone;
            },
    filteredMessage() {

                if( this.message ) return this.message.split( " " ).join( "%20" );

      return this.message;
    },
    submitLink() {
      return `mailto:ciao@gianlucabianco.dev?Subject=${this.filteredName}%20${this.filteredEmail}%20${this.filteredPhone}&Body=${this.filteredMessage}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.z-contact-form {
  color: #a8a8a8;
  background-color: #262626;

  @apply p-6 text-xl;

  &__module {
    @screen lg {
      @apply w-3/4 mx-auto;
    }

    &--description {
      h3 {
        @apply py-4 text-3xl text-white;
      }

      p {
        @apply pb-4;
      }
    }

    &__form-group {
      @apply w-full my-4;

      &--input {

        margin-top: 8px;
        line-height: 32px;
        border-bottom: 3px solid darkgrey;

        @apply w-full py-2 px-4 outline-none text-black;

        &:focus {
          box-shadow: 0 0 5px rgba(223, 247, 254, 1);
          border: 1px solid rgba(223, 247, 254, 1);
        }
      }
    }

    &--btn {
      transition: 0.5s ease-in-out;

      @apply w-full inline-block p-4 my-4 text-center border-2 border-solid border-white text-white;

      &:hover {
        transition: 0.5s ease-in-out;

        @apply bg-white text-black;
      }
    }
  }
}
</style>
