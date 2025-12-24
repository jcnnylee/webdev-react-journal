import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JournalPage from './pages/JournalPage'
import JournalDetailPage from './pages/JournalDetailPage'

import { Box, } from '@mui/material'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<JournalPage />} />
        <Route path="/entries/:id" element={<JournalDetailPage />} />
      </Routes>
    </Router>

  )
}

export default App