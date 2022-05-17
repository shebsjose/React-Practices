import React, { Component } from 'react'

export default class UpdatingPhaseExample extends Component {
  constructor(props){
    super(props)
     this.state ={
       color : "Red"
     }
  }
   
  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     color : props.favColor
  //   }
  // }

  componentDidMount() { 
    setTimeout(()=>{
      this.setState ({ color : "Yellow"})
   },1000)
   };

   componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "Call After updated the DOM. " + this.state.color;
  }


  // handleClick = () =>{
  //   this.setState({color : "Blue"})
  // }

  render() {
    return (
      <div>
        <h1>Update Phase Color : {this.state.color}</h1><br/>
        {/* <button onClick={this.handleClick}>Change Color</button> */}
        <div id="mydiv"></div>
      </div>
    )
  }
}
