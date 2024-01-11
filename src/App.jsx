
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'

function App() {

  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
