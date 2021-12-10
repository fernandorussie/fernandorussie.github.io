import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export function PageAbout() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                pageabouts {
                    imgabout {
                      url
                    }
                    paragraph1
                    paragraph2
                    paragraph3
                    paragraph4
                    paragraph5
                    title
                }
            }
        }
    `)

    const {imgabout, paragraph1, paragraph2 ,paragraph3, paragraph4, paragraph5, title} = data.blogdata.pageabouts[0]

    return (
        <S.ContainerAbout>
            <S.BoxAbout>
                <S.BoxTitleAbout>
                    <S.TitleAbout>{title}</S.TitleAbout>
                        <S.BoxImageAbout>
                            <S.ImageAbout src={imgabout.url} alt=""/>
                        </S.BoxImageAbout>
                </S.BoxTitleAbout>
                <S.BoxContentAbout>
                    <S.BoxTextAbout>
                        <S.ParagraphAbout>{paragraph1}</S.ParagraphAbout>
                        <S.ParagraphAbout>{paragraph2}</S.ParagraphAbout>
                        <S.ParagraphAbout>{paragraph3}</S.ParagraphAbout>
                        <S.ParagraphAbout>{paragraph4}</S.ParagraphAbout>
                        <S.ParagraphAbout>{paragraph5}</S.ParagraphAbout>
                    </S.BoxTextAbout>
                </S.BoxContentAbout>
            </S.BoxAbout>
        </S.ContainerAbout>
    )
}

