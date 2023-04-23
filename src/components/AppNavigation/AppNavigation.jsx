import React, { useState, useEffect} from 'react'
import { ScaleAppShell } from '@telekom/scale-components-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

import getIconNavigation from './menuConfigurations/iconNavigation'
import getMainNavigation from './menuConfigurations/mainNavigation'

const AppNavigation = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [iconNav, setIconNav] = useState([]);
  const [mainNav, setMainNav] = useState([]);

  useEffect(() => {
        setIconNav(getIconNavigation(auth, navigate));
        setMainNav(getMainNavigation(navigate));
  }, [navigate, auth]);

  
  return (
    <ScaleAppShell
        iconNavigation={iconNav}
        mainNavigation={mainNav}
        claimLang='en'
    >
        {children}
    </ScaleAppShell>
  )
}

export default AppNavigation