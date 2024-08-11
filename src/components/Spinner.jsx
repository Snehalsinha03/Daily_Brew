import React, { Component } from 'react'
import { hourglass } from 'ldrs'
hourglass.register()


export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="flex-center w-full">
        <l-hourglass
            size="20"
            bg-opacity="0.1"
            speed="1.75" 
            color="black" 
            ></l-hourglass>
        </div>

        
      </div>
    )
  }
}
