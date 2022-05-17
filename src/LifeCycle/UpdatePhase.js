import React, { Component } from 'react'

export default class UpdatedPhase extends Component {
    constructor(props){ 
      super(props) 
          console.log("Constructor Method");
    }
    
    // static getDerivedStateFromProps(props, state) {
    //   console.log("Get Derived State From Props");
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Should Component Update");
    // }

    componentDidMount() {
      console.log("Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
      }

  render() {
      console.log("Render");
    return (
      <div>
          <h1> Hello Update Phase</h1></div>
    )
  }
}