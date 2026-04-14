import React, { useEffect } from 'react'
import Hero from '../Components/Contact/Hero'
import Contact from '../Components/Contact/Contact'
import Map from '../Components/Contact/Map'

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | EHM Earth Hydro Management";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <Hero/>
        <div id="form"><Contact/></div>
        <Map/>
    </div>
  )
}

export default ContactPage