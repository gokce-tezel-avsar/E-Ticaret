import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import TeamComponent from '../components/TeamComponent'
import TeamMembers from '../components/TeamMembers'
import FreeTrial from '../components/FreeTrial'

function TeamPage() {
  return (
    <div>
        <Header/>
        <TeamComponent/>
        <TeamMembers/>
        <FreeTrial/>
        <Footer/>
    
    </div>
  )
}

export default TeamPage