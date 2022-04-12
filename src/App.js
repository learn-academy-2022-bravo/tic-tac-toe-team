import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      lastClick: [""]
    }
  }

  // handleGamePlay = (index) => {
  //  const { squares } = this.state
  //  squares[index] = "❌"
  //  this.setState({squares: squares}) 
  // }
  



  handleGamePlay = (index) => {
    const {squares, lastClick} = this.state
    while(squares[index]===""){
      if (lastClick[0] === ""){
        squares[index] = "❌"
        lastClick[0] = "❌"
        this.setState({
          squares: squares,
          lastClick : lastClick
        })
      }else if(lastClick[0] === "❌"){
        squares[index] = "⭕️"
        lastClick[0] = "⭕️"
        this.setState({
          squares: squares,
          lastClick: lastClick
        })
      }else if(lastClick[0] === "⭕️"){
        squares[index] = "❌"
        lastClick[0] = "❌"
        this.setState({
          squares: squares,
          lastClick: lastClick
        })
      } else {
        alert("Please Click a Valid Square")
      }
  }
  }


  render(){
    console.log(this.state.lastClick);
    console.log(this.state.squares);
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


// check current index value to see if its filled or empty and run conditional statement 
// check current index value if true -->
// run last click if statements 
// if false, return alert saying "click other square, square taken"





// calculate winner function 
// export function calculateWinner(squares) {
// 	const lines = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];
// 	for (let i = 0; i < lines.length; i++) {
// 		const [a, b, c] = lines[i];
// 		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// 			return squares[a];
// 		}
// 	}
// 	return null;
// }