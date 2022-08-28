import React from 'react'
import CompanyLogo from './CompanyLogo'
import Footer from './Footer'
import Middle from './Middle'
import SecondHome from './SecondHome'
import TopHomepage from './TopHomepage'

const HomePage = () => {
  return (
    <div>
        <TopHomepage/>
        <SecondHome/>
        <Middle/>
        <CompanyLogo/>
        <Footer/>
    </div>
  )
}

export default HomePage