import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course' element={authUser? <Courses/>: <Navigate to = "/signup"/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App