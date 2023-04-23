const getMainNavigation = (navigate) => {
  const home = {
    name: 'Home',
    id: 'home',
    onClick: () => navigate('/'),
  };
  const contactUs = {
    name: 'Contact Us',
    id: 'contact-us',
    onClick: () => navigate('/contact'),
  };

  const aboutUs = {
    name: 'About Us',
    id: 'about-us',
    onClick: () => navigate('/about'),
  };
  return [
    home,
    contactUs,
    aboutUs,
  ]
}

export default getMainNavigation;