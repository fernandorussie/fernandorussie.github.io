import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import AOS from 'aos'

export default function Index() {

  return (
    <div>
      <Helmet>
        <title>Ferlip</title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link href="" rel="icon" type="image/x-icon" />
        {AOS.init()}
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}