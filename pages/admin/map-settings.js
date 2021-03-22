import React, { Component } from 'react'
import { connect } from 'unistore/react'

import Router from '../../lib/router'
import { actions } from '../../lib/store'
import { isAdmin } from '../../lib/utils/roles'
import NotLoggedIn from '../../components/NotLoggedIn'
import AdminHeader from '../../components/admin/AdminHeader'
import { LoadingState } from '../../components/common/LoadingState'
import { useForm } from 'react-hook-form'

function MapSettings (props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = props.handleSubmit

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-leaflet-source'>Leaflet Tile Source</label>
        <input type='text' name='leaflet-source' defaultValue={props.settings['leaflet-source']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='setting-webgl-source'>WebGL Tile Source</label>
        <input type='text' name='webgl-source' defaultValue={props.settings['webgl-source']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label htmlFor='setting-use-webgl'>Checking this box will enable WebGL Maps when possible: </label>
        <input type='checkbox' name='use-webgl' defaultChecked={props.settings['use-webgl']} ref={register} />
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
      tokenResetConfirmation: false,
      settings: {
        'leaflet-source': '',
        'webgl-source': '',
        'use-webgl': false
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
    try {
      data['use-webgl'] = String(data['use-webgl'])
      await this.props.updateSettings(data)
    } catch (e) {
      console.error(e)
    }
  }

  componentDidUpdate () {
    const { settings } = this.props
    if (settings && this.state.loading) {
      settings['use-webgl'] = (settings['use-webgl'] === 'true')
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
              <section>
                <h1 className='header--xlarge'>Map Settings</h1>
                <div>
                  <MapSettings handleSubmit={this.handleSubmit} settings={this.state.settings} />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(['authenticatedUser', 'settings', 'error', 'admin'], actions)(AdminSettings)
