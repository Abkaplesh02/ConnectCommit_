import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './pages/Body'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
   <div>

    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
        <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
