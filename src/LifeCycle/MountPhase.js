import React, { Component } from 'react'

export default class MountPhase extends Component {
    constructor(props){ 
      super(props) 
          console.log("Constructor Method");
    }

    static getDerivedStateFromProps(props, state) {
      console.log("Get Derived State From Props");
    }

    componentDidMount() {
      console.log("Component Did Mount");
    }

  render() {
      console.log("Render");
    return (
      <div>Hello Mount Phase</div>
    )
  }
}
