import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
const Home = lazy(() => import('./Home'))

const App = function() {
  return <BrowserRouter basename="test/sub">
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<div>main register</div>} />
        <Route path="*" element={<div>main 404</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
}

export default App;