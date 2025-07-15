import React from 'react'

import Footer from '../layouts/Footer'
import TeamComponent from '../components/TeamComponent'
import TeamMembers from '../components/TeamMembers'
import FreeTrial from '../components/FreeTrial'
import AlternativeHeader from '../layouts/AlternativeHeader'

function TeamPage() {
  return (
    <div>
        <AlternativeHeader/>
        <TeamComponent/>
        <TeamMembers/>
        <FreeTrial/>
        <Footer/>
    
    </div>
  )
}

export default TeamPage