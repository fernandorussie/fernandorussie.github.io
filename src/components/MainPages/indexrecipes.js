import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export function PageRecipes() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                pageprojects {
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
                    subtitle
                    textabout
                    textabout2
                    title
                }
            }
        }
    `)

    const { 
    exemplephoto1,exemplephoto2,
    exemplephoto3,exemplephoto4,
    subtitle, textabout,textabout2,
    title } = data.blogdata.pageprojects[0]

    return (
        <S.ContainerMain>
            <S.ContainerMainSlide>
                <a href="https://recipesvnw.netlify.app" target="_blank">
                    <S.ImageMain src={exemplephoto1.url} alt="" />
                </a>
                <S.ContentCenter>
                        <S.BoxText>
                            <S.Title>{title}</S.Title>
                            <S.Paragraph>{textabout}</S.Paragraph>
                        </S.BoxText>
                        <S.BoxImage1>
                            <S.OverImage>
                                <S.ImageExemple src={exemplephoto2.url} alt="" />
                            </S.OverImage>
                        </S.BoxImage1>
                        <S.BoxImage2>
                            <S.OverImage>
                                <S.ImageExemple src={exemplephoto3.url} alt="" />
                            </S.OverImage>
                        </S.BoxImage2>
                        <S.BoxText>
                            <S.Title>{subtitle}</S.Title>
                            <S.Paragraph>{textabout2}</S.Paragraph>
                        </S.BoxText>
                        <S.BoxImage3>
                            <S.OverImage>
                                <S.ImageExemple src={exemplephoto4.url} alt="" />
                            </S.OverImage>
                        </S.BoxImage3>
                </S.ContentCenter>
            </S.ContainerMainSlide>
        </S.ContainerMain>
    )
}

