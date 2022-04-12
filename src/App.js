import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      lastClick: ""
    }
  }

  // if (this.state.lastClick === "") {
  // console.log("last click is empty")
  // }

  handleGamePlay = (index) => {
   const { squares } = this.state
   squares[index] = "❌"
   this.setState({squares: squares}) 
  }
   
  //   if (this.state.lastClick === "") {
  //     const { squares } = this.state
  //   if (index === 0){
  //     squares[index] = "❌"
  //     this.setState({squares: squares})
  //   }
  //   }
  // }

//     } else if(this.state.lastClick === "X"){
// // this changes the current index to a X
//     }else {
//       // this changes the current index to a O
//     }
      
//   }

  // handleGamePlay = (index) => {
  //   const { squares } = this.state
  //   if (index === 0){
  //     squares[index] = "❌"
  //     this.setState({squares: squares})
  //   }
  //   }


  render(){
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