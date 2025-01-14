import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>

      </Routes>




      <Footer/>
    </>
  )
}

export default App
