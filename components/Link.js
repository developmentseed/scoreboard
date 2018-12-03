import Link from 'next/link'
import join from 'url-join'

const prefix = process.env.APP_URL_PREFIX || ''

export default class NewLink extends Link {
  render () {
    const { href } = this.props
    const newHref = join(prefix, href)
    return <Link {...this.props} href={newHref} />
  }
}
