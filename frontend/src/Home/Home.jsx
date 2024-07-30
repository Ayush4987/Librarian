import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeCourses from '../components/FreeCourses'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Banner/>
        <FreeCourses/>
        <Footer/>
    </>
  )
}

export default Home