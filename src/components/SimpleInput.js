import React, { Component } from 'react'

class SimpleInput extends Component {
  constructor() {
    super()
    this.state = {
      inputValue:''
    }
  }

  handleKeyUp(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const {inputValue} = this.state
    return (
      <div>
        <input onKeyUp={this.handleKeyUp.bind(this)} />
        <div>
          <h2>
            {inputValue}
          </h2>
        </div>
      </div>
    )
  }

}

export default SimpleInput