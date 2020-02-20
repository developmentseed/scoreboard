import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic'

const LocationInput = dynamic(() => import('../components/teams/LocationInput'), { ssr: false })

function TeamDetailsForm ({ onSubmit, details }) {
  const { register, handleSubmit, errors, control } = useForm()
  console.log(errors)

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='name'>Name *</label>
        <input type='text' name='name' defaultValue={details['name']} ref={register({ required: true })} />
        { errors['name'] && 'Name is required' }
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='hashtag'>Hashtag</label>
        <input type='text' name='hashtag' defaultValue={details['hashtag']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='description'>Description</label>
        <textarea name='description' defaultValue={details['description']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='location'>Location</label>
        <Controller as={LocationInput} control={control} name='location' defaultValue={[0, 0]} />
      </div>
      <input type='submit' className='button' value='submit' />
    </form>
  )
}

export default function CreateTeam (props) {
  return (
    <div className='admin'>
      <section>
        <div className='row widget-container'>
          <div className='widget-25'>
            <h2 className='header--large'>Create a team</h2>
          </div>
          <div className='widget-75'>
            <div>
              <h1 className='header--xlarge'>Details</h1>
            </div>
            <TeamDetailsForm details={
              {
                name: '',
                hashtag: '',
                description: '',
                location: [0, 0]
              }
            } onSubmit={(data) => { console.log(data) }} />
          </div>
        </div>
      </section>
    </div>
  )
}
