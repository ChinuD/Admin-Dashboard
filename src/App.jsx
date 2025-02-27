import { useState } from 'react'
import './App.css'
import Topbar from './Components/TopBar/TopBar'
import Sidebar from './Components/SideBar/Sidebar'
import Home from './pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserList from './pages/UserList/UserList'
import Chart from './Components/Chart/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/userlist' element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
