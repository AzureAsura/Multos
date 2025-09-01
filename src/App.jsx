import React from 'react'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
