<template>
  <div class="timer-block">{{ timer }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerBlock',

  data() {
    return {
      timer: '',
      timer_id: 0
    }
  },

  methods: {
    getCurrentTime(): void {
      const date = new Date();
      this.timer = date.toTimeString().substring(0, 8);
    }
  },

  mounted() {
    this.getCurrentTime();
    this.timer_id = setInterval(this.getCurrentTime, 1000);
  },

  unmounted() {
    clearInterval(this.timer_id);
  }
});
</script>
