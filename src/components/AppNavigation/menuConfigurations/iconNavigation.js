const getIconNavigation = (auth, navigate) => {   
    const login = {
        name: 'Login',
        id: 'login',
        icon: 'user-file-user',
        onClick: () => auth.signinRedirect(),
    }

    const settings = {
        name: 'Settings',
        id: 'settings',
        icon: 'service-settings',
        onClick: () => navigate('/settings'),
    }

    const myAccount = {
        name: 'My Account',
        id: 'my-account',
        icon: 'user-file-user',
        onClick: () => navigate('/account'),
    }

    const logout = {
        name: 'Logout',
        id: 'logout',
        icon: 'action-logout',
        onClick: () => auth.removeUser(),
    }

    return auth.isAuthenticated ? [settings, myAccount, logout] : [login];
};

export default getIconNavigation;