import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { PageValorant } from '../components/MainPages/indexvalorant'
import { Footer } from '../components/Footer'

export default function Valorant() {

  return (
    <div>
        <Helmet>
          <title>Valorant - Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <PageValorant />
        <Footer />
    </div>
  )
}