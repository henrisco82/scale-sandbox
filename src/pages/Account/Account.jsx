import React from 'react'
import { Container } from '@mui/material'
import Section from '../../components/Section'
import OverviewTable from '../../components/OverviewTable'
import { useAuth } from 'react-oidc-context';

const Account = () => {
  const auth = useAuth();
  const rows = [
    {title: 'First Name', value: auth.user.profile.given_name},
    {title: 'Last Name', value: auth.user.profile.family_name}, 
    {title: 'Email', value: auth.user.profile.email},
    {title: 'UUID', value: auth.user.profile.sub},
  ]
  return (
    <Container maxWidth="sm">
      <Section header='User Account'>
        <OverviewTable rows={rows} />
      </Section>
    </Container>
  )
}

export default Account