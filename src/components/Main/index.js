import React from 'react'
import * as S from './styles'

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
        <div>
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
            <S.ContainerProject>
                <S.BoxTitleProject>
                    <S.TitleMyProjects>{titleprojetos}</S.TitleMyProjects>
                </S.BoxTitleProject>
                <S.BoxProject>
                    <S.CardProject>
                        <S.TemplateProject src={imgrecipes.url} alt=""/>
                        <h2>{titlerecipes}</h2>
                        <p>{textrecipes}</p>
                    </S.CardProject>
                    <S.CardProject>
                        <S.TemplateProject src={imgtaxis.url} alt=""/>
                        <h2>{titletaxis}</h2>
                        <p>{texttaxis}</p>
                    </S.CardProject>
                    <S.CardProject>
                        <S.TemplateProject src={imgvalorant.url} alt=""/>
                        <h2>{titlevalorant}</h2>
                        <p>{textvalorant}</p>
                    </S.CardProject>
                </S.BoxProject>
            </S.ContainerProject>
        </div>
    )
}