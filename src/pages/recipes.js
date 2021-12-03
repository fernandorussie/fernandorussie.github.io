import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { HeaderSmall } from '../components/HeaderSmall'
import { PageRecipes } from '../components/MainPages/indexrecipes'
import { Footer } from '../components/Footer'


import styled from "styled-components";
const Div = styled.div` 
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #6F7FFB;
  background-color: #191919;
  font-weight: 900;
  font-size: 4vw;
  
`
const Box = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`
const Image = styled.img` 
  width: 10vw;
`
const A = styled.a` 
  color: white;

  &:hover{
    color: #6F7FFB;
  }
`
export default function Recipes() {

  return (
    <div>
        <Helmet>
          <title>Recipes - Ferlip</title>
          <link href="https://media.graphcms.com/OHC7wSqXTfyZhk1hF86r" rel="icon" type="image/x-icon" />
        </Helmet>
        <HeaderSmall />
        <PageRecipes />
        {/* <Div>
          <Box>
            <p>Pagina em construção!</p>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Underconstruction_icon_gray.svg/1219px-Underconstruction_icon_gray.svg.png" alt=""/>
          </Box>
            <p>Veja online <a href="https://recipesvnw.netlify.app" target="_blank">aqui.</a></p>
        </Div> */}
        <Footer />
    </div>
  )
}