import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/user/Register';

ReactDOM.render(
  <StrictMode>
<BrowserRouter basename='/sub/h5/'>
<Routes>
  <Route path="/" element={<div>home</div>}/>
  <Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
