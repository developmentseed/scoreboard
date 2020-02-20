import { useForm, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic'

const LocationInput = dynamic(() => import('./LocationInput'), { ssr: false })

export default function TeamDetailsForm ({ onSubmit, details }) {
  const { register, handleSubmit, errors, control } = useForm()

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
        <label className='form__label' htmlFor='bio'>Description</label>
        <textarea name='bio' defaultValue={details['bio']} ref={register} />
      </div>
      <div className='form__input-unit'>
        <label className='form__label' htmlFor='location'>Location</label>
        <Controller as={LocationInput} control={control} name='location' defaultValue={details['location']} />
      </div>
      <input type='submit' className='button' value='submit' />
    </form>
  )
}
