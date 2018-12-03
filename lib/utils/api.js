import axios from 'axios'
import debounce from 'debounce-promise'
import { isNil } from 'ramda'
import { API_URL_FINAL } from '../../api/src/config'

const instance = axios.create({
  baseURL: API_URL_FINAL
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
      let val = obj[k]
      if (Array.isArray(val)) {
        val = val.join(',')
      }
      return `${k}=${val}`
    })

  const queryString = fragments.join('&')
  return `${endpoint}?${queryString}`
}

export default debounce(function (method, url, data, config) {
  return instance(Object.assign({ method, url, data }, config))
}, 300)
