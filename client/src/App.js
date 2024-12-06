import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Index.jsx";
import Login from "./Components/Login/Index.jsx"
import Register from "./Components/Register/Index.jsx"
import UserDashboard from "./Pages/UserDashboard/Index.jsx"
import AdminDashboard from "./Pages/AdminDashboard/Index.jsx"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
