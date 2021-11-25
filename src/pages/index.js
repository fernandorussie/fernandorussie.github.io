import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Main } from '../components/Main'


export default function Index() {

  return (
    <div>
      <Helmet>
        <title>MyBlog</title>
        <link href="" rel="icon" type="image/x-icon" />
      </Helmet>
      <Header />
      <Main />
    </div>
  )
}