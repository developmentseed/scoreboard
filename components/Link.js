import Link from 'next/link'
import join from 'url-join'
import { APP_URL_PREFIX } from '../api/src/config'

export default class NewLink extends Link {
  render () {
    const { href, as } = this.props
    const newHref = join(APP_URL_PREFIX, href)
    let newAs
    if (as) {
      newAs = join(APP_URL_PREFIX, as)
    }
    return <Link {...this.props} href={newHref} as={newAs} />
  }
}
