import React, { Component } from 'react'
import {connect} from 'react-redux'
import { formInput } from '../../store/actions'

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
    this.props.formInput({
      label: this.label(),
      slug: this.slugName(),
      name: this.props.name,
      value: e.target.value
    })
  }

  slugName() {
    const {name} = this.props
    return name.toLowerCase().split(' ').join('-')
  }

  label() {
    let name = this.props.name.split(' ')
    name[0] = name[0].toLowerCase()
    return name.join('')
  }

  render() {
    const {name} = this.props
    return (
      <div>
        <label for={this.slugName()}>{name}</label>
        <textarea
          name={this.slugName()}
          id={this.slugName()}
          placeholder={name}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {form: state.form}
}

export default connect(mapStateToProps, {formInput})(SimpleInput)