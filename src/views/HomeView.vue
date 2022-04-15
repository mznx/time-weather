<template>
  <div class="home">
    <h1 class="home__welcome">Welcome</h1>
    <MenuButtons :links="links" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LinkObject } from '@/types';
import MenuButtons from '@/components/MenuButtons.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuButtons
  },

  data() {
    return {
      links: [] as LinkObject[]
    }
  },

  mounted() {
    this.links = [
      { name: 'Time', link: '/time' },
      { name: 'Weather', link: '/weather' }
    ];
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/vars.scss';

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__welcome {
    font-size: 84pt;

    @media screen and (max-width: $screen-size-medium) {
      font-size: 64pt;
    }

    @media screen and (max-width: $screen-size-small) {
      font-size: 50pt;
    }
  }
}

</style>