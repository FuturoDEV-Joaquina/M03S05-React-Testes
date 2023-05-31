import { useState } from "react";
import reactLogo from "./assets/react.svg";

export default function App() {
 const [count, setCount] = useState(0);

 return (
   <div className="App">
     <img src={reactLogo} className="logo react" alt="React Logo" />
     <h1>Vite + React</h1>
     <button onClick={() => setCount((count) => count + 1)}>
       Contador: {count}
     </button>
   </div>
 );
}
