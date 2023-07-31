import React, { Component } from 'react'

export default class GreetClass extends Component {
  render() {
    return (
      <div>GreetClass is {this.props.name} aka {this.props.othername}</div>
    )
  }
}
