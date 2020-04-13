import { useForm, Controller } from 'react-hook-form'
import { isNil } from 'ramda'
import dynamic from 'next/dynamic'

const LocationInput = dynamic(() => import('./LocationInput'), { ssr: false })

/**
 * In the TeamDetailsForm, if there is an onChange event instead of an
 * onSubmit event, then we are handling the data externally and call
 * onChange when inputs change. Otherwise, we send all the data
 * with onSubmit
 */
export default function TeamDetailsForm ({ onSubmit, onChange, details }) {
  details['locationExistsWatch'] = !isNil(details['location'])
  const { register, handleSubmit, errors, control, watch, getValues } = useForm({ defaultValues: details })
  const locationExistsWatch = watch('locationExistsWatch')

  function reshapeData (callback) {
    return (data, e) => {
      console.log(data)
      if (!data.location) data['location'] = null // set location to null explicitly
      delete data['locationExistsWatch'] // We don't want the checkbox value to be sent to the API
      callback(data, e)
    }
  }

  function getValuesOnChange () {
    if (!onChange) return null
    let formData = getValues()
    return reshapeData(onChange)(formData)
  }

  return (
    <form className='form' onSubmit={handleSubmit(reshapeData(onSubmit))}>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='name'>Name *</label>
        <input type='text' name='name' ref={register({ required: true })} onChange={getValuesOnChange} />
        { errors['name'] && 'Name is required' }
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='hashtag'>Hashtag</label>
        <input type='text' name='hashtag' ref={register} onChange={getValuesOnChange} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='bio'>Description</label>
        <textarea name='bio' ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='locationExists'>Does this team have a location?</label>
        <input ref={register} type='checkbox' name='locationExistsWatch' onChange={getValuesOnChange} />
        { locationExistsWatch &&
        <>
          <label className='form__label' htmlFor='location'>Location</label>
          <Controller as={LocationInput} control={control} name='location' onChange={getValuesOnChange} />
        </>
        }
      </div>
      {
        onSubmit
          ? <input type='submit' className='button' value='submit' />
          : <div />
      }
    </form>
  )
}
