
import { Suspense } from 'react'
import { Header } from './Componets/Header/Header'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { HomePage } from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

export const  App = () => {


  return (
    <>
      <Header/>
      <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/authpage' element={<AuthPage/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
