import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'


export default function Index() {

  return (
    <div>
      <Helmet>
        <title>MyBlog</title>
        <link href="https://o.remove.bg/downloads/91a3fa05-f4d1-4b89-8e29-eb43c6277c3e/IMG_0426.jpg-removebg-preview.png" rel="icon" type="image/x-icon" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}