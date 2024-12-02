import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Index.jsx";
import Login from "./Components/Login/Index.jsx"
import Register from "./Components/Register/Index.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
