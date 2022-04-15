<template>
  <div class="time">
    <MenuButtons :links="[]" />
    <TimerBlock class="time__timer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuButtons from '@/components/MenuButtons.vue';
import TimerBlock from '@/components/TimerBlock.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    MenuButtons,
    TimerBlock
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.time {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__timer {
    display: flex;
    align-items: center;
    flex-grow: 1;
    font-size: 190pt;

    @media screen and (max-width: $screen-size-large) {
      font-size: 110pt;
    }

    @media screen and (max-width: $screen-size-medium) {
      font-size: 74pt;
    }

    @media screen and (max-width: $screen-size-small) {
      font-size: 54pt;
    }
  }
}
</style>
