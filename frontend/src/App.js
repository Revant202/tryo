import './App.css';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import Header from './components/header';
import Home from './screens/HomeScreen';
import LoginForm from './screens/login/loginForm';
import RegistrationForm from './screens/register/registrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
