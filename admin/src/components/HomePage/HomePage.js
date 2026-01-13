import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import QuickActions from './QuickActions/QuickACtions'
import { sectionHeading } from '../utils/utils'

const HomePage = () => {
  return (
    <div>
     {sectionHeading("Dashboard Overview","Manage your website settings and view statistics.")}
      <Dashboard />
      <QuickActions />
    </div>
  )
}

export default HomePage
