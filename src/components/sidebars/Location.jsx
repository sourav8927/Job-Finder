import React from 'react'
import InputField from '../InputField'

const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      <div>
        <label htmlFor="test1" className='sidebar-label-container'>
            <input type="radio" name='test1' id='test1' value="" onChange={handleChange}/>
            <span className='checkmark'></span>All
        </label>
        <InputField handleChange={handleChange}  value="london" title="London" name="test1"/>
        <InputField handleChange={handleChange}  value="japan" title="Japan" name="test1"/>
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test1"/>
        <InputField handleChange={handleChange} value="boston" title="Boston" name="test1"/>
      </div>
    </div>
  )
}

export default Location
