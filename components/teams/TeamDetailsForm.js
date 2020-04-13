import { useForm, Controller } from 'react-hook-form'
import { isNil } from 'ramda'
import dynamic from 'next/dynamic'

const LocationInput = dynamic(() => import('./LocationInput'), { ssr: false })

export default function TeamDetailsForm ({ onSubmit, details }) {
  details['locationExistsWatch'] = !isNil(details['location'])
  const { register, handleSubmit, errors, control, watch } = useForm({ defaultValues: details })
  const locationExistsWatch = watch('locationExistsWatch')

  return (
    <form className='form' onSubmit={handleSubmit((data, e) => {
      if (!data.location) data['location'] = null // set location to null explicitly
      delete data['locationExistsWatch'] // We don't want the checkbox value to be sent to the API
      onSubmit(data, e)
    })}>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='name'>Name *</label>
        <input type='text' name='name' ref={register({ required: true })} />
        { errors['name'] && 'Name is required' }
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='hashtag'>Hashtag</label>
        <input type='text' name='hashtag' ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='bio'>Description</label>
        <textarea name='bio' ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='locationExists'>Does this team have a location?</label>
        <input ref={register} type='checkbox' name='locationExistsWatch' />
        { locationExistsWatch &&
        <>
          <label className='form__label' htmlFor='location'>Location</label>
          <Controller as={LocationInput} control={control} name='location' />
        </>
        }
      </div>
      <input type='submit' className='button' value='Save Details' />
    </form>
  )
}
