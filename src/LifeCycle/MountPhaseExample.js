import React, { Component } from 'react'

export default class MountPhaseExample extends Component {
    constructor(props){
        super(props)
        this.state ={
            color : "Red"
        }
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color : props.favColor
    //     }
    // }

    componentDidMount() {
        setTimeout(()=>{
           this.setState ({ color : "Yellow"})
        },1000)
    }
  render() {
    return (
      <div><h1>Mount Phase Color : {this.state.color}</h1></div>
    )
  }
}
