import React from 'react'
import { Typography } from '@mui/material'
import { ScaleDivider } from '@telekom/scale-components-react'

const Section = ({ header, divider, children}) => {
  return (
    <section>
        <Typography variant='h5' color='primary'>{header}</Typography>
        {children}
        {divider && <ScaleDivider />}
        <br />
    </section>
  )
}

export default Section