<template>
  <div class="weather">
    <MenuButtons :links="[]" />
    <div class="weather__content">
      <SearchForm
        :placeholder="'Enter city name'"
        :tips="locations"
        @change="inputChange"
        @submit="inputSubmit"
      />

      <div v-if="location_name" class="weather__data">
        <h1 class="weather__title">{{ location_name }}</h1>
        <WeatherForecastBlock :current="current_weather" :forecast="forecast_weather" />
      </div>

      <h2 v-if="error_message" class="error">Error: {{ error_message }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LocationList, ForecastAPIResponseObject, ForecastAPIDayObject, CurrentAPIObject } from '@/types';
import MenuButtons from '@/components/MenuButtons.vue';
import SearchForm from '@/components/SearchForm.vue';
import WeatherForecastBlock from '@/components/WeatherForecastBlock.vue';
import api from '@/api';

export default defineComponent({
  name: 'WeatherView',

  components: {
    MenuButtons,
    SearchForm,
    WeatherForecastBlock
  },

  data() {
    return {
      locations: [] as LocationList,
      current_weather: {} as CurrentAPIObject,
      forecast_weather: [] as ForecastAPIDayObject[],
      location_name: '',
      error_message: ''
    }
  },

  methods: {
    async inputChange(str: string): Promise<void> {
      if (str) {
        const res: LocationList = await api.weather.autocomplete(str);
        this.locations = res;
      } else {
        this.locations = [];
      }
    },

    async inputSubmit(str: string): Promise<void> {
      const res: ForecastAPIResponseObject = await api.weather.getWeatherForecast(str);
      if (res.error) {
        this.error_message = res.error.message;
        this.location_name = '';
      } else {
        this.location_name = res.location.name;
        this.forecast_weather = res.forecast.forecastday;
        this.current_weather = res.current;
        this.error_message = '';
      }
    }
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

.weather {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    width: $screen-size-large;
    padding: 40px 10px 10px;
    flex-grow: 1;

    @media screen and (max-width: $screen-size-large) {
      width: 100%;
    }
  }

  &__title {
    margin-top: 20px;
    font-size: 30pt;
  }
}

.error {
  margin-top: 20px;
  font-size: 20pt;
}
</style>