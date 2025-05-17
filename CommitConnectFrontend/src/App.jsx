import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './pages/Body'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Provider } from 'react-redux'
import appStore from './redux/store'
import Feed from './pages/Feed'
import Connections from './pages/Connections'
import ConnectionRequest from './pages/ConnectionRequest'

function App() {
  return (
   <div>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
       <Route path="/" element={<Feed/>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
           <Route path="/connections" element={<Connections/>}/>
           <Route path="/requests" element={<ConnectionRequest/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
   </div>
  )
}

export default App
