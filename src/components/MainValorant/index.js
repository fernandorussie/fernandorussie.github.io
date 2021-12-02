import React from 'react'
import { Slide } from './slide'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export function MainValorant() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                recipes {
                    exemplephoto1 {
                      url
                    }
                    exemplephoto2 {
                      url
                    }
                    exemplephoto3 {
                      url
                    }
                    exemplephoto4 {
                      url
                    }
                  }
            }
        }
    `)

    const { exemplephoto1,exemplephoto2,exemplephoto3,exemplephoto4 } = data.blogdata.recipes[0]

    return (
        <S.ContainerMain>
            <S.ContainerMainSlide>
                <S.ImageMain src={exemplephoto1.url} alt="" />
                <S.ContentCenter>
                        <S.BoxText>
                            <S.Title>Um pouco sobre Recipes</S.Title>
                            <S.Paragraph>Este projeto é uma reprodução de um layout, 
                            aqui coloquei em pratica a utilização de Gatsby, Styled-Component, 
                            GraphQl, GraphCMS... entre outros plugin's e bibliotecas.</S.Paragraph>
                        </S.BoxText>
                        <S.BoxImage1>
                            <S.ImageExemple src={exemplephoto2.url} alt="" />
                        </S.BoxImage1>
                        <S.BoxImage2>
                            <S.ImageExemple src={exemplephoto3.url} alt="" />
                        </S.BoxImage2>
                        <S.BoxText>
                            <S.Title>Um pouco mais</S.Title>
                            <S.Paragraph>Este projeto é uma reprodução de um layout, 
                            aqui coloquei em pratica a utilização de Gatsby, Styled-Component, 
                            GraphQl, GraphCMS... entre outros plugin's e bibliotecas.</S.Paragraph>
                        </S.BoxText>
                        <S.BoxImage3>
                            <S.ImageExemple src={exemplephoto4.url} alt="" />
                        </S.BoxImage3>
                </S.ContentCenter>
            </S.ContainerMainSlide>
        </S.ContainerMain>
    )
}

