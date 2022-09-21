import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { PageTaxi } from '../components/MainPages/indextaxi'
import { Footer } from '../components/Footer'

export default function Taxis() {

  return (
    <div>
        <Helmet>
          <title>Taxis - Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <PageTaxi />
        <Footer />
    </div>
  )
}