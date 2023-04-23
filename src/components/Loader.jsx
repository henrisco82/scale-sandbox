import React from 'react'
import { ScaleLoadingSpinner } from '@telekom/scale-components-react'

const Loader = () => {
  return (
    <div style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#dddddd78',
        height: '100vh',
        width: '100vw',
        zIndex: 100,
    }}>
        <ScaleLoadingSpinner
           alignment='horizontal'
            size='large'
        />
    </div>
  )
}

export default Loader