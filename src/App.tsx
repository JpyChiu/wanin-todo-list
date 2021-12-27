import { HashRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './app/MainLayout'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  )
}

export default App
