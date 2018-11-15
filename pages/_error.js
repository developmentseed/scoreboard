import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <div className='About'>
        <header className='header--internal '>
          <div className='row'>
            <h1 className='header--xlarge'>Error</h1>
          </div>
        </header>
        <section className='text-body section-first--sm'>
          <div className='row'>
            {
              (this.props.statusCode && this.props.statusCode === 404)
                ? <p className='text-body--large'>The page you are looking for is not found!</p>
                : <p clasSName='text-body--large'>{`An error ${this.props.statusCode} occurred. Please contact the administrator`}</p>
            }
          </div>
        </section>
      </div>
    )
  }
}
