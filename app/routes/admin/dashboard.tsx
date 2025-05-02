import { Header } from 'components'
import React from 'react'

const Dashboard = () => {
  const user = { name: 'Maria' };
  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'} `}
        description="aaaaaaaaaaaaaaaaaaaaaaaaaaaa"  
      />
      Dashboard
    </main>
  )
}

export default Dashboard