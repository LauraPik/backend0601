import Login from "../login/Login";
import Header from "../header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../register/Register";
import Dashboard from "../dashboard/Dashboard";
import AdminPage from "../adminPage/AdminPage";
import CategoryElmUpdate from "../categoryElmUpdate/CategoryElmUpdate";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
