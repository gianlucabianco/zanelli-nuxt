<template>
  <div class="z-hamburger-menu">

    <!-- This checkbox will give us the toggle behavior, it will be hidden, but functional -->
    <input id="toggle" type="checkbox" @click="toggleUnderlay()" >
    <!-- FIXME:  -->
    <!-- <a
      v-if="underlay"
      class="z-underlay"
    /> -->

    <!-- IMPORTANT: Any element that we want to modify when the checkbox state changes go here, being "sibling" of the checkbox element -->

    <!-- This label is tied to the checkbox, and it will contain the toggle "buttons" -->
    <label class="toggle-container" for="toggle">
        <!-- If menu is open, it will be the "X" icon, otherwise just a clickable area behind the hamburger menu icon -->
        <span class="button button-toggle"></span>
    </label>

    <!-- The nav menu -->
    <nav class="nav">
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
        <a class="nav-item" href="">menu item</a>
    </nav>

    <!-- Just dummy content like in the animated gif -->
    <!-- <section class="dummy-content">
        <div class="circle"></div>
        <div class="text">
            <span></span><span></span>
        </div>
        <div class="square-top"></div>
        <div class="square-behind"></div>
    </section> -->
  </div>
</template>

<script>
export default {
  props: {
    underlay: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleUnderlay() {

      this.underlay = ! this.underlay;

    },
  },
}
</script>

<style
  lang="scss"
  scoped
>
.z-hamburger-menu {

  @apply z-30;

  $items: 4;
  $transition-duration: 0.5s;
  $transition-delay: 0.05s;

  /* Toggle functionality */

  /* To hide the checkbox */
  #toggle {
    position: absolute;
    right: -100%;
    top: -100%;
  }

  #toggle:focus {

    & ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 8px white, inset 0 0 0 20px white;
    }
  }

  /* Styles for the 'open' state, if the checkbox is checked */
  #toggle:checked {
    /* Any element you need to change the style if menu is open goes here, using the sibling selector (~) as follows */

    /* Making the "X" icon using `:before` and `:after` pseudo-elements */
    & ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 750px white, inset 0 0 0 20px white;

      &:hover {
        box-shadow: 0 0 0 750px white, inset 0 0 0 20px white, 0 0 0 8px white, inset 0 0 0 20px white;
      }

      &:before {
        transform: translateY(-50%) rotate(45deg) scale(1);
      }

      &:after {
        transform: translateY(-50%) rotate(-45deg) scale(1);
      }

      .z-underlay {

        @apply block;

      }
    }

    &:focus ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 750px white, inset 0 0 0 20px white, 0 0 0 8px white, inset 0 0 0 20px white;
    }

    /* Open nav */
    & ~ .nav {
      margin-bottom: 100px;
      pointer-events: auto;
      transform: translate(50px, 50px);

      /* Restoring nav items from "lines" in the menu icon */
      .nav-item {
        color: black;
        letter-spacing: 0;
        height: 40px;
        line-height: 40px;
        margin-top: 0;
        opacity: 1;
        transform: scaleY(1);
        transition: $transition-duration, opacity 0.1s;

        /* Setting delays for the nav items in open transition */
        @for $i from 1 through $items {
          &:nth-child(#{$i}) {
            $delay: ($items - $i) * $transition-delay;
            transition-delay: $delay;
            &:before {
              transition-delay: $delay;
            }
          }
        }

        /* Hiding the lines */
        &:before {
          opacity: 0;
        }
      }
    }

  }

  /* Toggle button */
  .button-toggle {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    /* border-radius: 100%; */
    transition: $transition-duration + 0.1;

    /* Shadow on hover */
    &:hover {
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);
    }

    /* Making the "X" icon using `:before` and `:after` pseudo-elements */
    /* Initially hidden because `scale(0)` transformation */
    /* HAMBURGER STATE: CLOSED */
    &:before, &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      /* border-radius: 5px; */
      transition: $transition-duration;


    }

    &:before {
      transform: translateY(-50%) rotate(45deg) scale(0);
    }

    &:after {
      transform: translateY(-50%) rotate(-45deg) scale(0);
    }
  }


  /* Menu */
  .nav {
    display: inline-block;
    width: 100%;
    margin: 25px 25px 20px;
    /* Don't want pointer-events as menu is closed */
    pointer-events: none;
    transition: $transition-duration;
  }

  /* Showing nav items as lines, making up the hamburger menu icon */
  .nav-item {
    position: relative;
    display: inline-block;
    float: left;
    clear: both;
    color: transparent;
    font-size: 14px;
    letter-spacing: -6.2px;
    height: 7px;
    line-height: 7px;
    text-transform: uppercase;
    white-space: nowrap;
    transform: scaleY(0.2);
    transition: $transition-duration, opacity 1s;

    /* Setting delays for the nav items in close transition */
    @for $i from 1 through $items {
      &:nth-child(#{$i}) {
        $delay: ($i - 1) * $transition-delay;
        transition-delay: $delay;
        &:before {
          transition-delay: $delay;
        }
      }
    }

    /* Adjusting width for the first line */
    &:nth-child(1) {
      letter-spacing: -6.8px;
    }

    /* Adjusting width for the second line */
    &:nth-child(2) {
      letter-spacing: -7px;
    }

    /* Adjusting from the fourth element onwards */
    &:nth-child(n + 4) {
      letter-spacing: -8px;
      margin-top: -7px;
      opacity: 0;
    }

    /* HAMBURGER STATE: OPEN */
    /* Getting the lines for the hamburger menu icon */
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      transform: translateY(-50%) scaleY(5);
      transition: $transition-duration;
    }

  }


}

.z-underlay {

  @apply w-screen h-screen bg-gray-900 opacity-75 absolute;

}
</style>
