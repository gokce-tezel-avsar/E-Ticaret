import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ContactComponent from '../components/ContactComponent'

function ContactPage() {
  return (
    <div>
        <Header/>
        <ContactComponent/>
        <Footer/>
    </div>
  )
}

export default ContactPage