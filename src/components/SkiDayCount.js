import React, { PropTypes } from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import Snowflake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const SkiDayCount = ({ total, powder, backcountry, goal }) => (
  <div className='ski-day-count'>
    <div className='total-days'>
      <span>{total}</span>
      <Calendar />
      <span> days</span>
    </div>
    <div className='powder-days'>
      <span>{powder}</span>
      <Snowflake />
      <span> days</span>
    </div>
    <div className='backcountry-days'>
      <span>{backcountry}</span>
      <Terrain />
      <span> days</span>
    </div>
    <div className=''>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
)

SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 75
}

SkiDayCount.propTypes = {
  total: PropTypes.number.isRequired,
  powder: PropTypes.number.isRequired,
  backcountry: PropTypes.number.isRequired,
  goal: PropTypes.number
}
