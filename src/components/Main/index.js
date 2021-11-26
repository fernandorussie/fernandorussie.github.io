import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'nuka-carousel'
import Slider from 'react-slick'

export function Main() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                mains {
                    imgrecipes {
                      url
                    }
                    imgtaxis {
                      url
                    }
                    imgvalorant {
                      url
                    }
                    textrecipes
                    texttaxis
                    textvalorant
                    titleprojetos
                    titlerecipes
                    titletaxis
                    titlevalorant
                    imgabout {
                        url
                      }
                      textabout
                      textcareer
                      titleabout
                }
            }
        }

    `)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const { imgabout, textabout, textcareer, titleabout, imgrecipes, imgtaxis, imgvalorant, textrecipes, texttaxis, textvalorant, titleprojetos, titlerecipes, titletaxis, titlevalorant } = data.blogdata.mains[0]
    return (
        <S.Main>
            <S.ContainerProject>
                <S.BoxTitleProject>
                    <S.TitleMyProjects>{titleprojetos}</S.TitleMyProjects>
                </S.BoxTitleProject>
                <S.BoxProject>
                    <S.CardProject>
                        
                        <S.Imagem back={imgrecipes.url}></S.Imagem>
                        <S.Discription>
                            <h2>{titlerecipes}</h2>
                            <p>{textrecipes}</p>
                        </S.Discription>
                        
                    </S.CardProject>
                    <S.CardProject>
                    <S.Imagem back={imgtaxis.url}></S.Imagem>
                        <S.Discription>
                            <h2>{titletaxis}</h2>
                            <p>{texttaxis}</p>
                        </S.Discription>
                    </S.CardProject>
                    <S.CardProject>
                        <S.Imagem back={imgvalorant.url}></S.Imagem>
                        <S.Discription>
                            <h2>{titlevalorant}</h2>
                            <p>{textvalorant}</p>
                        </S.Discription>
                    </S.CardProject>
                </S.BoxProject>
            </S.ContainerProject>
            <S.ContainerAbout>
                <S.BoxTitleAbout>
                    <S.TitleAbout>{titleabout}</S.TitleAbout>
                </S.BoxTitleAbout>
                <S.BoxContentAbout>
                    <S.BoxImageAbout>
                        <S.ImageAbout src={imgabout.url} alt=""/>
                    </S.BoxImageAbout>
                    <S.IntroAbout>
                        <S.TextAbout>{textabout}</S.TextAbout>
                        <S.TextAbout>{textcareer}</S.TextAbout>
                    </S.IntroAbout>
                </S.BoxContentAbout>
            </S.ContainerAbout>
        </S.Main>
    )
}