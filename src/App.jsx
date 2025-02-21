import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css';
import MainContainer from './components/MainContainer';
import Space from './Space';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello console.log "hello world"</h1>
    <MainContainer />
   <Space />
    </>
  )
}

export default App
