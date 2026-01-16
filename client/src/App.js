import './App.css';
import 'bootswatch/dist/lux/bootstrap.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useState} from 'react'
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NavBar from './components/NavBar';
import SignUpPage from './Pages/SignUpPage';
import Footer from './components/Footer';
import DashboardPage from './Pages/DashboardPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
