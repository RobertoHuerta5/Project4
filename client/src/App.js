import './App.css';
import 'bootswatch/dist/lux/bootstrap.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NavBar from './components/NavBar';
import SignUpPage from './Pages/SignUpPage';
import Footer from './components/Footer';
import DashboardPage from './Pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
