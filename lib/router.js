import Router from 'next/router'
import join from 'url-join'

import { APP_URL_PREFIX } from '../api/src/config'

function push (url, as) {
  return Router.push(join(APP_URL_PREFIX, url), as)
}

export default {
  push
}
