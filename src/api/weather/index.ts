import { RequestOptsObject, LocationList, CurrentAPIResponseObject, ForecastAPIResponseObject } from '@/types';
import request from './request';

export default {
  autocomplete(opts: string): Promise<LocationList> {
    const req_opts: RequestOptsObject = {
      path: '/search.json',
      params: '&q=' + opts
    };
    return request<LocationList>(req_opts);
  },

  getWeatherCurrent(opts: string): Promise<CurrentAPIResponseObject> {
    const req_opts: RequestOptsObject = {
      path: '/current.json',
      params: '&q=' + opts
    };
    return request<CurrentAPIResponseObject>(req_opts);
  },

  getWeatherForecast(opts: string): Promise<ForecastAPIResponseObject> {
    const req_opts: RequestOptsObject = {
      path: '/forecast.json',
      params: '&days=3&q=' + opts
    };
    return request<ForecastAPIResponseObject>(req_opts);
  }
};