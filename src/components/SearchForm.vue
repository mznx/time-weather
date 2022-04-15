<template>
  <form class="search-form" @submit="enter">

    <div class="search-form__search">
      <input
        type="text"
        name="search-form"
        class="search-form__input"
        :placeholder="placeholder"
        :value="str"
        @input="input($event.target.value)"
      >
      <button class="search-form__button">Search</button>
    </div>

    <div class="search-form__help" v-if="tips.length">
      <ul class="search-form__tips">
        <li
          v-for="tip in tips.slice(0, 5)"
          :key="tip"
          class="search-form__tip"
          @click="helpChoose(tip.name)"
        >
          {{ tip.name }}
        </li>
      </ul>
    </div>

  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { LocationList } from '@/types';

export default defineComponent({
  name: 'SearchForm',

  emits: ['change', 'submit'],

  props: {
    placeholder: String,
    tips: Array as PropType<LocationList>
  },

  data() {
    return {
      str: ''
    }
  },

  methods: {
    input(str: string): void {
      this.str = str;
      this.$emit('change', this.str);
    },

    enter(event: Event): void {
      event.preventDefault();
      this.submit();
    },

    helpChoose(str: string): void {
      this.str = str;
      this.submit();
    },

    submit(): void {
      if (this.str) {
        this.$emit('submit', this.str);
        this.str = '';
        this.$emit('change', this.str);
      }
    }
  }
});
</script>

<style scoped lang="scss">
.search-form {
  position: relative;
  width: 100%;

  &__search {
    display: flex;
    flex-direction: row;
    padding: 2px;
    border-radius: 6px;
    background-color: var(--color-accent);
  }

  &__input {
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    flex-grow: 1;
    font-size: 12pt;
  }

  &__button {
    width: 100px;
    margin-left: 3px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    color: var(--color-white);
    font-size: 12pt;
    background-color: var(--color-accent);

    &:hover {
      background-color: var(--color-accent-light);
    }
  }

  &__help {
    position: absolute;
    width: 100%;
    margin-top: 10px;
    padding: 2px;
    border-radius: 6px;
    background-color: var(--color-accent);
  }

  &__tips {
    list-style-type: none;
  }

  &__tip {
    padding: 10px;
    border-bottom: 1px solid #cbcbcb;
    font-size: 14pt;
    background-color: var(--color-white);

    &:first-child {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      border-bottom: 0;
    }

    &:hover {
      cursor: pointer;
      color: var(--color-white);
      background-color: var(--color-accent);
    }
  }
}
</style>