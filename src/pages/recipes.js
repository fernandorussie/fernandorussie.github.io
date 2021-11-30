import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { MainRecipes } from '../components/MainRecipes'
import { Footer } from '../components/Footer'
export default function Index() {

  return (
    <div>
        <Helmet>
          <title>Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <div>
          Pagina em construção!
        </div>
        <Footer />
    </div>
  )
}