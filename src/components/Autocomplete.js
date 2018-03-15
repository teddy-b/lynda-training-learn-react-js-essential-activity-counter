import React, { Component, PropTypes } from 'react'

export class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value
  }

  set value(inputValue) {
    this.refs.inputResort.value = inputValue
  }

  render() {
    return (
      <div>
      <input type='text' list='resort' ref='inputResort' />
      <datalist id='resort'>
        {this.props.options.map((opt, i) => <option key={i}>{opt}</option>)}
      </datalist>
    </div>
    )
  }
}

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired
}
