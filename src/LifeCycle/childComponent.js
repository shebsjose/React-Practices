import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          name : "Constructor Method"
        }
        console.log(this.state.name);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            name : props.nameFormParent
        }
    }
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}
