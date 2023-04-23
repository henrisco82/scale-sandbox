import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavigation from './components/AppNavigation/AppNavigation';
import AppFooter from './components/AppFooter/AppFooter';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Account from './pages/Account/Account';
import Settings from './pages/Settings/Settings';
import Authenticator from './components/SecureRoutes/Authenticator';

function App() {
  <Authenticator />
  return (
      <BrowserRouter>
        <AppNavigation>
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        </AppNavigation>
        <AppFooter />
      </BrowserRouter>
  );
}

export default App;
