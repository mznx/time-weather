<template>
  <div class="weather-forecast">

    <ul class="weather-forecast__current">
      <li class="weather-forecast__value"><span>Temp:</span><span>{{ current.temp_c }} °C</span></li>
      <li class="weather-forecast__value"><span>Precip:</span><span>{{ current.precip_mm }} mm</span></li>
      <li class="weather-forecast__value"><span>Pressure:</span><span>{{ current.pressure_mb }} mb</span></li>
      <li class="weather-forecast__value"><span>Humidity:</span><span>{{ current.humidity }}%</span></li>
      <li class="weather-forecast__value"><span>Wind:</span><span>{{ current.gust_kph }} kmph</span></li>
      <li class="weather-forecast__value"><span>Cloud:</span><span>{{ current.cloud }}%</span></li>
    </ul>

    <ul class="weather-forecast__future">
      <li v-for="day in forecast.slice(1)" :key="day" class="weather-forecast__block">
        <div>{{ new Date(day.date).toLocaleString('en', {day: 'numeric', month: 'short'}) }}</div>
        <img :src="day.day.condition.icon" />
        <div>{{ day.day.avgtemp_c }} °C</div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CurrentAPIObject, ForecastAPIDayObject } from '@/types';

export default defineComponent({
  name: 'WeatherForecastBlock',

  props: {
    current: Object as PropType<CurrentAPIObject>,
    forecast: Array as PropType<ForecastAPIDayObject[]>
  }
});
</script>

<style scoped lang="scss">
.weather-forecast {
  margin-top: 20px;
  border: 2px solid var(--color-accent);
  padding: 10px 40px;
  border-radius: 6px;

  &__current {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 14pt;
  }

  &__value {
    width: 50%;
    height: 40px;
    line-height: 40px;
    min-width: 240px;
    flex-grow: 1;
    display: flex;
    justify-content: center;

    & span {
      width: 50%;
    }
  }

  &__future {
    border-top: 1px dashed var(--color-accent);
    padding-top: 20px;
    margin-top: 20px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  &__block {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>