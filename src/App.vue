<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';

#app {
  width: 100%;
  height: 100%;
}
</style>
