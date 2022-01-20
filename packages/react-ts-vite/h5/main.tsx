import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <StrictMode>
    {/* <BrowserRouter basename="test/sub/h5">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<div>h5 register</div>} />
        <Route path="*" element={<div>h5 404</div>} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>,
  document.getElementById('root')
)
