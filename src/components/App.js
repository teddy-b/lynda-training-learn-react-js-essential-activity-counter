import React, { Component } from 'react'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
        {
          resort: 'Squaw Valley',
          date: '2018-02-13',
          powder: true,
          backcountry: true
        },
      ]
    }
    this.addDay = this.addDay.bind(this)
    this.countDays = this.countDays.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    return this.state.allSkiDays.filter(day => filter ? day[filter] : day).length
  }

  render() {
    return (
      <div className='app'>
        <Menu />
        {this.props.location.pathname === '/' ? 
          <SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} /> :
            this.props.location.pathname === '/add-day' ?
            <AddDayForm onNewDay={this.addDay} /> :
            <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
        }
      </div>
    )
  }
}
