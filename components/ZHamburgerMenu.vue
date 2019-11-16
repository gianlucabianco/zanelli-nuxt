<template>
  <div class="z-hamburger-menu">

    <!-- This checkbox will give us the toggle behavior, it will be hidden, but functional -->
    <input id="toggle" type="checkbox" v-model="isMenu">

    <!-- IMPORTANT: Any element that we want to modify when the checkbox state changes go here, being "sibling" of the checkbox element -->

    <!-- This label is tied to the checkbox, and it will contain the toggle "buttons" -->
    <label class="toggle-container" for="toggle">
        <!-- If menu is open, it will be the "X" icon, otherwise just a clickable area behind the hamburger menu icon -->
        <span class="button button-toggle"></span>
    </label>

    <!-- The nav menu -->
    <nav
      class="nav"
    >
        <a
        v-for="(item, index) in menuItems"
        :key="index"
        class="nav-item"
        :href="item.href"
        @click="isMenu = false"
        >
          {{ item.content }}
        </a>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenu: false,
      menuItems: [
        {
          content: 'Chi sono',
          href: 'https://increment.com/',
        },
        {
          content: 'Cosa Faccio',
          href: 'https://increment.com/',
        },
        {
          content: 'Come Lavoro',
          href: 'https://increment.com/',
        },
        {
          content: 'Analisi Transazionale',
          href: 'https://increment.com/',
        },
        {
          content: 'La Psicoterapia',
          href: 'https://increment.com/',
        },
        {
          content: 'Blog',
          href: 'https://increment.com/',
        },
        {
          content: 'Contatti',
          href: '#contact-form',
        },
      ],
    };
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
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0), inset 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }

  /* Styles for the 'open' state, if the checkbox is checked */
  #toggle:checked {
    /* Any element you need to change the style if menu is open goes here, using the sibling selector (~) as follows */

    /* Making the "X" icon using `:before` and `:after` pseudo-elements */
    /* the box shadow define the dimensions and the color of the open state menu (default, focus and hover) */
    /* (4000 px is a work around to fill the screen) */
    & ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 4000px white, inset 0 0 0 20px white;

      &:hover {
        box-shadow: 0 0 0 4000px white, inset 0 0 0 20px white, 0 0 0 8px white, inset 0 0 0 20px white;
      }

      &:before {
        transform: translateY(-50%) rotate(45deg) scale(1);
      }

      &:after {
        transform: translateY(-50%) rotate(-45deg) scale(1);
      }

    }

    /* the box shadow define the dimensions and the color of the open state menu */
    &:focus ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 4000px white, inset 0 0 0 20px white, 0 0 0 8px white, inset 0 0 0 20px white;
    }

    /* Open nav */
    & ~ .nav {
      pointer-events: auto;
      transform: translate(50px, 50px);
      margin: 0; /*INSERT MEDIAQUERIES TO MANAGE A BETTER SPACING FOR RES DIFFERENT FROM MOBILE*/

      /* Restoring nav items from "lines" in the menu icon */
      .nav-item {
        padding-bottom: 32px;
        margin-bottom: 16px;
        color: black;
        letter-spacing: 0;
        height: 40px;
        line-height: 40px;
        opacity: 1;
        transform: scaleY(1);
        transition: $transition-duration, opacity 0.1s;
        font-size: 24px;

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

        &:hover {
          background-color: rgba(128, 128, 128, 0.1);

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
    border-radius: 100%;
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
    letter-spacing: -7.5px;
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
      letter-spacing: -5.5px;
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
</style>
