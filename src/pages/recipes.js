import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { PageRecipes } from '../components/MainPages/indexrecipes'
import { Footer } from '../components/Footer'

export default function Recipes() {

  return (
    <div>
        <Helmet>
          <title>Recipes - Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <PageRecipes />
        <Footer />
    </div>
  )
}