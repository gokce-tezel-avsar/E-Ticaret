import React from 'react'
import AlternativeHeader from '../layouts/AlternativeHeader'
import Footer from '../layouts/Footer'
import AboutHero from '../components/AboutHero'
import AboutRatings from '../components/AboutRatings'
import TeamMembers from '../components/TeamMembers'
import BrandsDetails from '../layouts/BrandsDetails'
import WorkWithUs from '../components/WorkWithUs'

function AboutPage() {
  return (
    <div>
        <AlternativeHeader/>
        <AboutHero/>
        <AboutRatings/>
        <TeamMembers/>
        <BrandsDetails/>
        <WorkWithUs/>
        <Footer/>
    </div>
  )
}

export default AboutPage