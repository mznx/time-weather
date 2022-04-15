<template>
  <nav class="menu">
    <router-link
      v-if="!links.length"
      to="/"
      class="menu__button menu__button_start_top"
    >
      Home
    </router-link>

    <router-link
      v-else
      v-for="(link, i) in links"
      :key="link"
      :to="link.link"
      :class="i % 2 === 0 ? 'menu__button_start_left' : 'menu__button_start_right'"
      class="menu__button"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LinkObject } from '@/types';

export default defineComponent({
  name: 'MenuButtons',

  props: {
    links: Array as () => LinkObject[]
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/vars.scss';

.menu {
  width: 340px;
  padding-top: 20px;

  &__button {
    width: 100%;
    padding: 10px;
    display: block;
    position: relative;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 2px solid var(--color-accent);
    border-radius: 20px;
    text-align: center;
    font-size: 16pt;
    font-weight: normal;
    text-decoration: none;
    color: var(--color-accent);
    background-color: #fff;
    transition: all 0.2s;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: var(--color-white);
      background-color: var(--color-accent);
    }

    &_start_left {
      animation: btn_start_left 0.6s ease;
    }

    &_start_right {
      animation: btn_start_right 0.6s ease;
    }

    &_start_top {
      animation: btn_start_top 0.6s ease;
    }
  }

  @media screen and (max-width: $screen-size-small) {
    width: 100%;
    padding: 20px 10px 0;
  }

  @keyframes btn_start_left {
    0% {
      left: -100vw;
    }

    100% {
      left: 0vw;
    }
  }

  @keyframes btn_start_right {
    0% {
      left: 100vw;
    }

    100% {
      left: 0vw;
    }
  }

  @keyframes btn_start_top {
    0% {
      top: -100vh;
    }

    100% {
      top: 0vh;
    }
  }
}
</style>