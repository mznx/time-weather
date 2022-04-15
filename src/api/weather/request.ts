import { RequestOptsObject } from '@/types';

const base_url = 'https://api.weatherapi.com/v1';
const api_key = '70937ed67063475ea1a91504221304';

function request<T>(opts: RequestOptsObject): Promise<T> {
  const url: string = base_url + opts.path + '?key=' + api_key + opts.params;

  return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(() => null);
}

export default request;