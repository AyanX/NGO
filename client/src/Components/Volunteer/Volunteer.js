import React from 'react'
import VolunteerHero  from './VolunteerIntro/VolunteerIntro'
import VolunteerOptions from './VolunteerOptions/VolunteerOptions'
import VolunteerForm from './VolunteerForm/VolunteerForm'

const Volunteer = () => {
  return (
    <div>
      <VolunteerHero/>
      <VolunteerOptions/>
      <VolunteerForm/>
    </div>
  )
}

export default Volunteer
