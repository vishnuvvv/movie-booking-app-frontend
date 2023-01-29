import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage.js'
import Admin from './components/Admin/Admin.js'
import Auth from './components/Auth/Auth.js'
import Movies from './components/Movies/Movies.js'


const App = () => {
  return (
    <>
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route  path='/admin' element={<Admin/>}/>
          <Route path='/auth' element={<Auth/>}/>
    
        </Routes>
      </section>
    </>
  )
}

export default App

