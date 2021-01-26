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

  handleChange(e) {
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

  componentDidMount() {
    this.props.formInput({
      label: this.label(),
      slug: this.slugName(),
      name: this.props.name,
      value: new Date()
    })
  }
  render() {
    const {name} = this.props
    return (
      <div>
        <label for={this.slugName()}>{name}</label>
        <input
          name={this.slugName()}
          id={this.slugName()}
          type="date"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {form: state.form}
}

export default connect(mapStateToProps, {formInput})(SimpleInput)