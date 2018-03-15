import React, { PropTypes } from 'react'
import { Autocomplete } from './Autocomplete'

const resorts = [
  'Alpine Meadows',
	'Boreal',
	'Diamond Peak',
	'Donner Ski Ranch', 
	'Heavenly', 
	'Homewood',
	'Kirkwood',
	'Mt. Rose', 
	'Northstar',
	'Squaw Valley',
	'Sugar Bowl'
]

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {
  let _resort, _date, _powder, _backcountry

  const submit = (e) => {
    e.preventDefault()

    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked
    })

    _resort.value = ''
    _date.value = ''
    _powder.checked = false
    _backcountry.checked = false
  }

  return (
    <form onSubmit={submit} className='add-day-form'>
      <div>
        <label htmlFor='resort'>Resort Name</label>
        <Autocomplete options={resorts} ref={input => _resort = input} required />
      </div>
      <div>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' defaultValue={date} ref={input => _date = input} required />
      </div>
      <div>
        <label htmlFor='poder'>Poder Day</label>
        <input id='poder' type='checkbox' defaultChecked={powder} ref={input => _powder = input} />
      </div>
      <div>
        <label htmlFor='backcountry'>Backcountry Day</label>
        <input id='backcountry' type='checkbox' defaultChecked={backcountry} ref={input => _backcountry = input} />
      </div>
      <button>Add Day</button>
    </form>
  )
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
}

AddDayForm.defaultProps = {
  resort: '',
  date: '2018-02-12',
  powder: false,
  backcountry: false
}
