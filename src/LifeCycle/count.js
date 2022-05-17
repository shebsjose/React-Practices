import React, { Component } from 'react'
import Counter from './counter'

export default class Count extends Component {
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
componentDidMount() { 
    console.log("ComponentDidMount : When Component render the first time")
 }

handleClick = () => {
  this.setState({
      count : this.state.count + 1
  })
}

componentWillUnmount(){
    console.log("Component is Removed");
}

  render() {
    return (
      <div>
        <Counter number={this.state.count}/>
        <button onClick={this.handleClick}> Click Me !</button>
      </div>
    )
  }
}
