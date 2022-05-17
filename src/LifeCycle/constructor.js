import React, { Component } from 'react'

export default class ConstructorMethod extends Component {
  constructor(props){
      super(props)
      this.state = {
          name : "Constructor Method"
      }
      console.log(this.state.name);
  }
  
  render() {
    return (
      <div>
          <p>This is a {this.state.name}</p>
      </div>
    )
  }
}
