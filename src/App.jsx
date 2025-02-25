import { useState } from 'react'
import './App.css'
import Topbar from './Components/TopBar/TopBar'
import Sidebar from './Components/SideBar/Sidebar'
import Home from './pages/Home/Home'
import Chart from './Components/Chart/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Home/>
      </div>
    </>
  )
}

export default App
