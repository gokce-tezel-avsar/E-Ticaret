import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageContent from '../layouts/PageContent'


function HomePage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <Header/>
      <PageContent/>
      <Footer/>
      </div>

  )
}

export default HomePage