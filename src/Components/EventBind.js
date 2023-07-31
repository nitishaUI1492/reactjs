import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello!!!"
      }
    }

    callmethod(){
        console.log(this)
         this.setState({message:"Goodbye!!!"})
    }
  render() {
    return (
        <>
      <div>{this.state.message}</div>
      <button onClick={()=>this.callmethod()}>Click me</button>
      </>
    )
  }
}

export default EventBind