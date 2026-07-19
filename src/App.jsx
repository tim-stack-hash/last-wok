import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
