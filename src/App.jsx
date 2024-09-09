
import { Suspense } from 'react'
import { Header } from './Componets/Header/Header'
import { AuthPage } from './pages/AuthPage/AuthPage'
import { HomePage } from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import TaskLid from './pages/TaskLid/TaskLid'

export const  App = () => {


  return (
    <>
      <Header/>
      <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/authpage' element={<AuthPage/>}/>
        <Route path='/tasklid' element={<TaskLid/>}/>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
