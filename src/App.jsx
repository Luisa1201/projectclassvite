import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUserState from './playground/HookUserState'
import HomeHooks from './playground/HomeHooks'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks />}></Route>
         <Route path='/useState' element={<HookUserState />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
