 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

 export default function App() {   const [count, setCount] = useState(0)   return (
   <>       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }
// //            


               // REACT THEORY

(1) => In React, you specify a CSS class with className.It works the
 same way as the HTML class attribute:
// eg:-
=> <img className="avatar" />


 In your CSS */
 .avatar {
  border-radius: 50%;
}  */}
// 
//(3) => Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. 

return (
  <h1>
    {user.name}
  </h1>
);

// // The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, 
// // and passes both of them down as props to each of the buttons.
  
// // Finally, change MyButton to read the props you have passed
// //  from its parent component:

// // A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display.


 function MyButton(){
   return(
     <button>I'm a button</button>
   );
 }
 export default function MyApp(){
   return(
     <div>
       <h1>Welcome to my app</h1>
       <MyButton />
     </div>
   )
 }

  const products = [
   { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
   { title: 'Apple', isFruit: true, id: 3 },

  ]/ export default function Shoppinglistitems(){   const listitems=products.map(product=>
     <li key={product.id} style={{color:product.isFruit?'magenta':'darkgreen'}}
      >
          {product.title}
     </li>
)
  return(
    <ul>{listitems}</ul>
  );

 }

 import { useState } from 'react';

export default function MyApp(){
   return(
     <div>  
       <h1>Counters that update separately</h1>
       <MyButton />       <MyButton />
     </div>
   );
 }
 function MyButton() {

   const[count,setcount]=useState(0);
  
   function Handleclick(){
     setcount(count+1);
   }
   return(
     <button onClick={Handleclick}>
       Clicked {count} Times
     </button>
   );
 }

 import { useState } from 'react';

 export default function MyApp(){
    const[count,setcount]=useState(0);
    function Handleclick(){
      setcount(count+1);
    }
    return(
         <div>
         <h1>Counters that update together</h1>
         <MyButton count={count} onclick={Handleclick} />
         <MyButton count={count} onclick={Handleclick} />
        </div>
    );
 }
 function MyButton(){
        <button onclick="onclick">Clicked {count}times</button>
 }


// import { useState } from 'react';

// export default function Myapp(){
//      const[count,setcount]=useState(0);
     
//      function Handleclick(){
//       setcount(count+1);
//      }
//      return(
//       <div>
//        <h1>Counter that updates Together</h1>
//         <Mybutton count={count} onclick={Handleclick} />
//         <Mybutton count={count} onclick={Handleclick} />
//       </div>
//     );
// }
// function Mybutton({count,onclick}){
//   return(
//       <button onClick={onclick}>clicked {count} times</button>
//   );
// }
// import { useState } from 'react';

// function Square({value,onSquareClick}){
//     return (
//     <button className="square" onClick={onSquareClick}>     
//         {value}
//     </button>
//     );
// }
// export default function Game(){
//   const[xisnext,setisnext]=useState(true);

//   const[history,sethistory]=useState(Array(9).fill(null));
  
//    const currentSquares = history[history.length - 1];
   
//    function handleplay(nextsquares){

//    }
//    return (
//     <div className="game">
//       <div className="game-board">
//         <Board xisnext={xisnext} squares={currentSquares} onplay={handleplay}/>
//       </div>
//       <div className="game-info">
//         <ol></ol>
//       </div>
//     </div>
//   );
// }
// function Board({ xIsnext, squares, onplay }){
//     // const[xisnext,setisnext]=useState(true);

//     // const[squares,setsquares]=useState(Array(9).fill(null));
    
   

     In React 18, when <StrictMode> is enabled, React intentionally renders components twice in development to help detect side effects and bugs. This only happens in development, not in production.


    
//     function handleclick(i){
//         if(squares[i]||calculatewinner(squares)){
//         return;
//         }

//         const nextsquares=squares.slice();
//         // If you mutated the squares array, implementing time travel would be very difficult.
//         // However, you used slice() to create a new copy of the squares array after every move, and treated it as immutable. This will allow you to store every past version of the squares array, and navigate between the turns that have already happened.

//         nextsquares[i]=xisnext?"X":"O";

//         // setsquares(nextsquares);
//         // setisnext(!xisnext);
//         onplay(nextsquares);

//         // console.log(nextsquares);
//         // console.log(squares);  
// This happens because React state updates are asynchronous. When you call setSquares(nextSquares), React does not immediately update squares. Instead, it schedules the update and applies it during the next render.
//So inside the same function call, squares still holds the old state.
// }
//        const winner=calculatewinner(squares);
//        let status;
//        if(winner){
//         status="Winner:"+winner;
//        }else{
//         status="Next player:" +(xisnext?'X':'O')
//        }
    
//     //  console.log(squares)
    
    
//     return(
//     <>
//        <div className="status">{status}</div>
//       <div className="board-row">
          
//           <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
//           <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
//           <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
//       </div>
//       <div className="board-row">
          
//           <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
//           <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
//           <Square  value={squares[5]} onSquareClick={() => handleclick(5)} />

//       </div>
//             <div className="board-row">
          
//           <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
//           <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
//           <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
//       </div>
//     </>
//   );
// }
// function calculatewinner(squares){
//   const lines= [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//];
//   for(let i = 0; i<lines.length; i++) {
//     const [a,b,c] = lines[i];
//     if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
//       return squares[a];
//     }

//   }
//   return null;
// }
// function GameScore(){
//     const[score,setscore]=usestate(0);
//     <div>
//         <h1>
//             Current Score:{score}
//         </h1>
//     </div>
// }