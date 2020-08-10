import { isNil } from 'ramda'
import join from 'url-join'
import fetch from 'isomorphic-unfetch'
import { APP_URL_PREFIX, PORT } from '../../api/src/config'

function isServer () {
  return typeof window === 'undefined'
}

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

// export default debounce(function (method, url, data, config) {
//   return instance(Object.assign({ method, url, data }, config))
// }, 300)

export default (input, init = {}) => {
  if (typeof input === 'string') {
    input = join((isServer() ? `http://localhost:${PORT}` : APP_URL_PREFIX), input)
  }

  return fetch(input, init)
}
