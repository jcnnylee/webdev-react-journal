import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JournalPage from './pages/JournalPage'
import JournalDetailPage from './pages/JournalDetailPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/register" element={<RegisterPage/>} />

        <Route path="/entries" element={<JournalPage />} />
        <Route path="/entries/:id" element={<JournalDetailPage />} />
      </Routes>
    </Router>

  )
}

export default App