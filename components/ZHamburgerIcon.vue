<template>
  <div class="z-hamburger-icon__container">
    <div 
      id="nav-icon" 
      :class="isMenuOpen ? 'open' : null" 
      @click="handleMenu"
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
export default {
  data() {
            return {
      isMenuOpen: false
    };
  },
  methods: {
            handleMenu() {

                this.isMenuOpen = ! this.isMenuOpen;

      this.$emit("toggleMenu");
            },
  }
};
</script>

<style scoped lang="scss">
/*
        TODO: refactor
        - tailwind
        - classes names
        - clean code
    */

.z-hamburger-icon__container {
  z-index: 90;
}

#nav-icon {
  width: 32px;
  height: 24px;
  position: relative;
  margin: 28px 16px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 2.4px;
  width: 100%;
  background: #d8d8de;
  border-radius: 2.4px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 12px;
}

#nav-icon span:nth-child(4) {
  top: 24px;
}

#nav-icon.open span:nth-child(1) {
  top: 12px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 12px;
  width: 0%;
  left: 50%;
}
</style>
