import React from 'react'
import { Slide } from './slide'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

export function MainRecipes() {

    /*const data = useStaticQuery(graphql`
        query {
            blogdata {
                
            }
        }

    `)

    const { } = data.blogdata.recipes[0]*/

    return (
        <S.ContainerMainSlide>
            <Slide />
        </S.ContainerMainSlide>
    )
}

