import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import PageNotFound from './pages/PageNotFound'
import Courses from './pages/Courses'
import AddCourse from './pages/AddCourse'
import Enrolled from './pages/Enrolled'
import CourseView from './pages/CourseView'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/*' element={<PageNotFound/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/addcourse' element={<AddCourse/>} />
        <Route path='/enrolled' element={<Enrolled/>} />
        <Route path='/courses/courseview' element={<CourseView/>} />
        

      </Routes>




      <Footer/>
    </>
  )
}

export default App
