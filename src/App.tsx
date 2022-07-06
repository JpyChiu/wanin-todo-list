import { HashRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './app/MainLayout'
import Playground from './app/Playground'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/playground" element={<Playground />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </HashRouter>
  )
}

export default App
