import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavigation from './components/AppNavigation/AppNavigation';
import AppFooter from './components/AppFooter/AppFooter';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Account from './pages/Account/Account';
import Settings from './pages/Settings/Settings';
import { useAuth } from 'react-oidc-context';
import Loader from './components/Loader';
import PrivateRoute from './components/SecureRoutes/PrivateRoute';

function App() {
  const auth = useAuth();
  switch(auth.activeNavigator){
    case 'signinSilent':

    return <div>Signing in silently...</div>;
    case 'signoutRedirect':
    return <div>Signing out...</div>;
    default:
    break;
  }

  if(auth.isLoading) {
        return <Loader />;
  }

  if(auth.error){
        return <div>Ooops... {auth.error.message}</div>;
  }
  return (
      <BrowserRouter>
        <AppNavigation>
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={
               <PrivateRoute>
                 <Account />
               </PrivateRoute>
             } />
             <Route path="/settings" element={
               <PrivateRoute>
                 <Settings />
               </PrivateRoute>
             } />
          </Routes>
        </div>
        </AppNavigation>
        <AppFooter />
      </BrowserRouter>
  );
}

export default App;
