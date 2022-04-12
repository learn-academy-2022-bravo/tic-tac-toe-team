import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return(
              <Square
                key={index}
                value={value}
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
