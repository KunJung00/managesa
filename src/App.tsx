import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/register/register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
