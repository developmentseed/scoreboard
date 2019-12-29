import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import { LoadingState } from '../../components/common/LoadingState'
import useForm from 'react-hook-form'

function OSMesaSettings (props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = props.handleSubmit

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-osmesa-db'>OSMesa DB Connection String</label>
        <input type='text' name='osmesa-db' defaultValue={props.settings['osmesa-db']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-osmesa-s3-prefix'>OSMesa Tile S3 Prefix</label>
        <input type='text' name='osmesa-s3-prefix' defaultValue={props.settings['osmesa-s3-prefix']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-osmesa-api-key'>OSMesa S3 AWS API key</label>
        <input type='text' name='osmesa-api-key' defaultValue={props.settings['osmesa-api-key']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-osmesa-db'>OSMesa S3 AWS API secret</label>
        <input type='text' name='osmesa-api-secret' defaultValue={props.settings['osmesa-api-secret']} ref={register} />
      </div>

      <input type='submit' className='button' value='submit' />
    </form>
  )
}

export class AdminSettings extends Component {
  constructor () {
    super()

    this.state = {
      loading: true,
      settings: {
        'osmesa-db': '',
        'osmesa-s3-prefix': '',
        'osmesa-api-key': '',
        'osmesa-api-secret': ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    try {
      await this.props.getAuthenticatedUser()
      await this.props.getSettings()
      this.setState({ loading: false })
    } catch (err) {
      console.error(err)
      this.setState({ loading: false })
    }
  }

  async handleSubmit (data) {
    console.log(data)
    try {
      await this.props.updateSettings(data)
    } catch (e) {
      console.error(e)
    }
  }

  componentDidUpdate () {
    const { settings } = this.props
    if (settings && this.state.loading) {
      this.setState({
        loading: false,
        settings
      })
    }
  }

  render () {
    const { authenticatedUser } = this.props

    if (this.state.loading) {
      return (
        <div>
          <AdminHeader />
          <LoadingState />
        </div>
      )
    }

    if (!authenticatedUser.loggedIn) {
      return <NotLoggedIn />
    }

    if (!isAdmin(authenticatedUser.account.roles)) {
      return Router.push('/')
    }

    return (
      <div className='admin'>
        <AdminHeader />
        <section>
          <div className='row widget-container'>
            <div className='widget-25'>
              <h2 className='header--large'>Settings</h2>
            </div>
            <div className='widget-75'>
              <div className='row'>
                <h1>OSMesa Settings</h1>
              </div>
              <div className='row'>
                <OSMesaSettings handleSubmit={this.handleSubmit} settings={this.state.settings} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'settings', 'error', 'admin'], actions)(AdminSettings)
