import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Project from './Project'
// import Card from './Card'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  // const [count, setCount] = useState(0);

  // let myobj = {
  //   username: "ali",
  //   age: 21
  // };
  // let myarr = [1, 2, 3, 4];

  return (
    <>
      <div className='w-full h-full'
        style={{ backgroundColor: color }}>
      </div>
      {/* <Card chennel="syed ubaid ali" obj={myobj} arr={myarr} /> */}
      {/* <Card chennel="syed ubaid ali" arr={myobj} /> */}

    </>
  );
}

export default App
