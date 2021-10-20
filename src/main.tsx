import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './pages/App'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="test/sub">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<div>main register</div>} />
        <Route path="*" element={<div>main 404</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
