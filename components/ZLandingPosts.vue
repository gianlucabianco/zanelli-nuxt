<template>
  <div class="z-posts">
    <h3
      class="z-posts__header"
    >
      Articoli
    </h3>
    <div
      class="z-posts__articles"
    >
      <div
        class="z-posts__articles__main-card"
      >
        <div
          class="z-posts__articles__main-card__image"
        />
        <div
          class="z-posts__articles__main-card__content"
        >
          <h4
            class="z-posts__articles__main-card__content__title"
          >
            Hit the Emotional Gym — The Founder's Framework for Emotional Fitness Psychologist and founder Dr. Em
          </h4>
          <p
            class="z-posts__articles__main-card__content__description"
          >
            Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
          </p>
          <a
            href="#"
            class="z-posts__articles__main-card__content__cta"
          >
            Continua a leggere
          </a>
        </div>
      </div>
      <div
        class="z-posts__articles__secondary-articles"
      >
        <div
          class="z-posts__articles__secondary-articles__card"
        >
          <div
            class="z-posts__articles__secondary-articles__card__image__first"
          />
          <div
            class="z-posts__articles__secondary-articles__card__content"
          >
            <h4
              class="z-posts__articles__secondary-articles__card__content__title"
            >
              When “Grin and Bear It” Isn't the Right Answer — This Behavioral Scientist Shares What to Do Instead
            </h4>
            <p
              class="z-posts__articles__secondary-articles__card__content__description"
            >
              Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
            </p>
            <a
              href="#"
              class="z-posts__articles__secondary-articles__card__content__cta"
            >
              Continua a leggere
            </a>
          </div>
        </div>
        <div
          class="z-posts__articles__secondary-articles__card"
        >
          <div
            class="z-posts__articles__secondary-articles__card__image__second"
          />
          <div
            class="z-posts__articles__secondary-articles__card__content"
          >
            <h4
              class="z-posts__articles__secondary-articles__card__content__title"
            >
              Advice is More Important — and Overwhelming — Than Ever. Here's How Founders Can Cut Through the Noise
            </h4>
            <p
              class="z-posts__articles__secondary-articles__card__content__description"
            >
              Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
            </p>
            <a
              href="#"
              class="z-posts__articles__secondary-articles__card__content__cta"
            >
              Continua a leggere
            </a>
          </div>
        </div>
        <div
          class="z-posts__articles__secondary-articles__card"
        >
          <div
            class="z-posts__articles__secondary-articles__card__image__third"
          />
          <div
            class="z-posts__articles__secondary-articles__card__content"
          >
            <h4
              class="z-posts__articles__secondary-articles__card__content__title"
            >
              Weathering the Emotional Storms of a Crisis — A Tactical Guide for Individual Contributors and Managers
            </h4>
            <p
              class="z-posts__articles__secondary-articles__card__content__description"
            >
              Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
            </p>
            <a
              href="#"
              class="z-posts__articles__secondary-articles__card__content__cta"
            >
              Continua a leggere
            </a>
          </div>
        </div>
        <div
          class="z-posts__articles__secondary-articles__card"
        >
          <div
            class="z-posts__articles__secondary-articles__card__image__fourth"
          />
          <div
            class="z-posts__articles__secondary-articles__card__content"
          >
            <h4
              class="z-posts__articles__secondary-articles__card__content__title"
            >
              The Founder's Field Guide for Navigating This Crisis — Advice from Recession-Era Leaders, Investors and CEOs Currently at the Helm
            </h4>
            <p
              class="z-posts__articles__secondary-articles__card__content__description"
            >
              Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
            </p>
            <a
              href="#"
              class="z-posts__articles__secondary-articles__card__content__cta"
            >
              Continua a leggere
            </a>
          </div>
        </div>
        <div
          class="z-posts__articles__secondary-articles__card"
        >
          <div
            class="z-posts__articles__secondary-articles__card__image__fifth"
          />
          <div
            class="z-posts__articles__secondary-articles__card__content"
          >
            <h4
              class="z-posts__articles__secondary-articles__card__content__title"
            >
              Struggling to Thrive as a Large Team Working Remotely? This Exec Has the Field Guide You Need
            </h4>
            <p
              class="z-posts__articles__secondary-articles__card__content__description"
            >
              Psychologist and founder Dr. Emily Anhalt shares her seven traits of emotional fitness, why they're crucial for founders right now, plus concrete tactics for shaping up your emotional health.
            </p>
            <a
              href="#"
              class="z-posts__articles__secondary-articles__card__content__cta"
            >
              Continua a leggere
            </a>
          </div>
        </div>
      </div>
      <div class="z-posts__articles__more-post">
        <div class="z-posts__articles__more-post__cta">
          Leggi più articoli
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => (
    {

    }
  ),
}
</script>

<style
  lang="scss"
  scoped
>

.z-posts {

    height: 100%;
    width: 100%;

    padding: 40px 20px;

    font-size: 22px;
    line-height: 1.8;

    /* FIXME: handle this. */
    overflow: hidden;

    @screen lg {

      display: flex;
      flex-direction: column;

      width: 75%;

      margin: auto;
      padding: 20px 0;

    }

    &__header {

      padding: 20px;
      font-size: 42px;
      font-weight: bold;
      text-decoration: underline;

    }

    &__articles {

      &__main-card {

        height: 100%;
        width: 100%;

        display: flex;

        padding: 16px;


        &__image {

          height: 400px;
          width: 400px;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background: url('https://picsum.photos/id/1004/400/400');

        }

        &__content {

          height: 100%;
          width: 50%;

          margin: auto 64px;

          &__title {

            font-size: 28px;
            line-height: 1.3;

            font-weight: bold;

          }

          &__description {

            padding: 16px 0;

            font-size: 18px;

          }

          &__cta {

            font-size: 20px;
            text-decoration: underline;
            font-weight: bold;

          }

        }

      }

      &__secondary-articles {

        height: 100%;
        width: 100%;

        display: flex;

        margin: 32px auto;

        &__card {

          height: 100%;
          width: 360px;
          /* width: 33.33%; */

          padding: 16px;

          &__image {

            &__first {

              height: 300px;
              width: 300px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background: url('https://picsum.photos/id/1000/300/300');

            }

            &__second {

              height: 300px;
              width: 300px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background: url('https://picsum.photos/id/1003/300/300');

            }

            &__third {

              height: 300px;
              width: 300px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background: url('https://picsum.photos/id/1010/300/300');

            }

            &__fourth {

              height: 300px;
              width: 300px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background: url('https://picsum.photos/id/1008/300/300');

            }

            &__fifth {

              height: 300px;
              width: 300px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              background: url('https://picsum.photos/id/1016/300/300');

            }

          }

          &__content {

            width: 300px;

            padding: 32px 0;

            &__title {

              font-size: 24px;
              line-height: 1.3;

              font-weight: bold;

            }

            &__description {

              padding: 16px 0;

              font-size: 16px;

            }

            &__cta {

              font-size: 18px;
              text-decoration: underline;
              font-weight: bold;

            }

          }

        }

      }

      &__more-post {

        display: flex;
        justify-content: center;

        height: 100%;
        width: 100%;

        margin: 32px auto;

        &__cta {

        width: 280px;
        margin: 0 20px;
        padding: 12px 12px;

        border: 2px solid #F2F2F2;
        font-size: 22px;
        font-weight: 500;

        background-color: #372E59;
        color: #F2F2F2;

        text-align: center;

        transition: 0.5s;

        @screen lg {

          width: 320px;

          margin: 16px 0;
          padding: 12px 28px;
          border: 2px solid black;

        }

        &:hover {

          color: #372E59;
          border-color: #372E59;
          background-color: #F2F2F2;

        }

      }

      }

    }


}

</style>
