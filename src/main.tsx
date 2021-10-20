import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="sub">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<div>main register</div>} />
        <Route path="*" element={<div>main 404</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
