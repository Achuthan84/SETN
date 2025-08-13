import React from 'react'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Components/Signin'
import Forgetpassword from './Components/Forgetpassword'
import Resetpassword from './Components/Resetpassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgetpassword' element={<Forgetpassword />} />
        <Route path='/resetpassword' element={<Resetpassword/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App