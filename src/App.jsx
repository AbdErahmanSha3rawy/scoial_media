import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './components/header/Nav'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import FeedPage from './pages/Feed page/FeedPage'
import UserProfile from './pages/userProfile/UserProfile'

function App() {
 

  return (
    <>
     <Nav/>
      <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/feedpage" element={<FeedPage/>}/>
<Route path="/userprofile" element={<UserProfile/>}/>




   </Routes>
    </>
  )
}

export default App
