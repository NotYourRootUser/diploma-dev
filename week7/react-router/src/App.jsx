import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import UsersProfile from './pages/UsersProfile'
import Book from './pages/Book'
import { Routes,Route } from "react-router-dom"

function App() {


  return (
    <>
      {/* <h1>React Router</h1> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/users/:id' element={<UsersProfile/>}/>
        <Route path='/book/:name' element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App
