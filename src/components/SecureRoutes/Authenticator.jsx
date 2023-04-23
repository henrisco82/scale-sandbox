import React from 'react'
import { useAuth } from 'react-oidc-context';
import Loader from '../Loader';

const Authenticator = () => {
    const auth = useAuth();
    switch(auth.activeNavigator){
      case 'signinSilent':
        return <Loader />;
      case 'signoutRedirect':
        return <Loader />;
      default:
        break;
    }
  
    if(auth.isLoading) {
          return <Loader />;
    }
  
    if(auth.error){
          return <div>Ooops... {auth.error.message}</div>;
    }
}

export default Authenticator