import React from 'react'
import * as S from './styles'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

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

    
    const { imgabout, textabout, textcareer, titleabout, imgrecipes, imgtaxis, imgvalorant, textrecipes, texttaxis, textvalorant, titleprojetos, titlerecipes, titletaxis, titlevalorant } = data.blogdata.mains[0]
    return (
        <S.Main>
            <S.ContainerProject id="project">
                <S.BoxTitleProject>
                    <S.TitleMyProjects>{titleprojetos}</S.TitleMyProjects>
                </S.BoxTitleProject>
                <S.BoxProject>
                    <S.CardProject to="https://recipesvnw.netlify.app" target="_blank"
                    data-aos="zoom-in">
                        <S.Imagem back={imgrecipes.url}></S.Imagem>
                        <S.Discription>
                            <S.Name>{titlerecipes}</S.Name>
                            <S.Subtitle>{textrecipes}</S.Subtitle>
                        </S.Discription>
                    </S.CardProject>
                    <S.CardProject data-aos="zoom-in">
                    <S.Imagem back={imgtaxis.url}></S.Imagem>
                        <S.Discription>
                            <S.Name>{titletaxis}</S.Name>
                            <S.Subtitle>{texttaxis}</S.Subtitle>
                        </S.Discription>
                    </S.CardProject>
                    <S.CardProject to="https://valorantvnw.netlify.app" target="_blank"
                    data-aos="zoom-in">
                        <S.Imagem back={imgvalorant.url}></S.Imagem>
                        <S.Discription>
                            <S.Name>{titlevalorant}</S.Name>
                            <S.Subtitle>{textvalorant}</S.Subtitle>
                        </S.Discription>
                    </S.CardProject>
                </S.BoxProject>
            </S.ContainerProject>
            <S.ContainerAbout id="#about">
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