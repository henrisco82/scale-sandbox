import React from 'react'
import { ScaleAppFooter } from '@telekom/scale-components-react';

const AppFooter = () => {
  const footerNavigation = [
    {
        name: 'Contact',
        id: 'contact',
        onClick: () => console.log('Contact clicked'),
    },
    {
        name: 'Imprint',
        id: 'imprint',
        onClick: () => console.log('Imprint clicked'),
    },
    {
        name: 'Privacy',    
        id: 'privacy',
        onClick: () => console.log('Privacy clicked'),
    },
    {
        name: 'Terms of use',
        id: 'terms-of-use',
        onClick: () => console.log('Terms of use clicked'),
    },
    ];
  return (
    <ScaleAppFooter
       footerNavigation={footerNavigation}
         claimLang='en'
    ></ScaleAppFooter>
  )
}

export default AppFooter