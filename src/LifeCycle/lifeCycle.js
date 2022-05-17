import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props){ 
      super(props) 
          console.log("Constructor Method");
          this.state = {
            name : "Red"
          }
          console.log(this.state);
    }
    
    // static getDerivedStateFromProps(props, state) {
    //   console.log("Get Derived State From Props");
    //   return true ;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //    console.log("Get Snapshot Before Update");
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Should Component Update");
    //     return true;
    // }

    componentDidUpdate() {
        console.log("Component Did Update");
        setTimeout(()=>{
          this.setState({color : "Blue"})
          console.log(this.state.color);
        },1000)
      }

    // componentWillUnmount() {
    //   console.log("Component Will Mount"); 
    // }

  render() {
      console.log("Render");
    return (
      <div>
          <h1> Hello Life Cycle Method</h1></div>
    )
  }
}