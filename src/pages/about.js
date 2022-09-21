import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { PageAbout } from '../components/MainPages/indexabout'
import { Footer } from '../components/Footer'

export default function About() {

  return (
    <div>
        <Helmet>
          <title>Sobre - Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <PageAbout />
        <Footer />
    </div>
  )
}