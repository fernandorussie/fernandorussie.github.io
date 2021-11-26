import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                footers {
                    btncontact
                    btnemail
                    btngithub
                    btnhome
                    copyright
                    logo {
                      url
                    }
                    contentcontact
                    contentemail
                    contentgithub
                  }
            }
        }

    `)

    const { contentcontact,contentemail,contentgithub,btncontact,btnemail,btngithub,btnhome,copyright,logo} = data.blogdata.footers[0]

    return (
        <S.ContainerFooter>
            <S.IntroFooter>
                <S.BoxLogo>
                    <S.Logo src={logo.url} alt="" />
                </S.BoxLogo>
                <S.NavFooter>
                    <p>{contentcontact}</p>
                    <p>{contentemail}</p>
                    <p>{contentgithub}</p>
                    <S.BtnNav>{btnhome}</S.BtnNav>
                    <S.BtnNav>{btngithub}</S.BtnNav>
                    <S.BtnNav>{btnemail}</S.BtnNav>
                    <S.BtnNav>{btncontact}</S.BtnNav>
                </S.NavFooter>
            </S.IntroFooter>
            <S.BoxCopy>
                <p>{copyright}</p>
            </S.BoxCopy>
        </S.ContainerFooter>
    )
}

