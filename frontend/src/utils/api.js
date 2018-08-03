import axios from 'axios';
var debounce = require('debounce-promise');
const {isNil} = require('ramda');

const instance = axios.create({
  baseURL: '/scoreboard'
})

/**
 * Generate querystring for API params
 * Does not support nested objects
 * 
 * @param {Object} obj 
 */
export function createApiUrl (endpoint, obj) {
  const fragments = Object.keys(obj)
  .filter(k => !isNil(obj[k])) 
  .map(k => {
    let val = obj[k];
    if (Array.isArray(val)) {
      val = val.join(',');
    }
    return `${k}=${val}`;
  });

  const queryString = fragments.join('&');
  return `${endpoint}?${queryString}`;
}

export default debounce(function (method, url, ...params) {
  return instance({
    method,
    url,
    ...params
  })
}, 300);